---
title: Resilience4j
icon: calculate
author: List Jiang
category: Resilience4j
next: true
tags:
  - 经典框架
  - 熔断框架
copyrightText: 本教程采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh">知识共享 署名-相同方式共享 3.0协议</a>
---

> 以下内容，大部分为机翻 + 人工校正。如有错误，还望指正，谢谢！
## 介绍
`Resilience4j` 是一款轻量级，易于使用的容错库，其灵感来自于 `Netflix Hystrix` ，但是专为 `Java 8` 和函数式编程而设计。轻量级，因为库只使用了 [Vavr](https://www.vavr.io/) ，它没有任何其他外部依赖下。相比之下， Netflix Hystrix  对 Archaius 具有编译依赖性， `Archaius` 具有更多的外部库依赖性，例如 Guava 和 Apache Commons Configuration 。<br>
`Resilience4j` 提供了高阶函数（装饰器）、lambda 表达式或方法引用来增强一下功能接口：断路器、隔离、限流、重试、限时和缓。您可以在任何功能接口、lambda 表达式或方法引用上堆叠多个装饰器。优点是你可以选择你需要的装饰器。

### CircuitBreaker

[断路器，可看这篇](../cloud/circuit-breaker.md)

### Bulkhead
#### **介绍**
Resilience4j 提供了两种可用于限制并发执行数量的隔板模式实现：

- `SemaphoreBulkhead` 通过信号量实现
- `FixedThreadPoolBulkhead` 通过有界队列和固定线程池实现。 

使用信号量的 `SemaphoreBulkhead` 应该可以在各种线程和 I/O 模型中很好地工作。它基于信号量，与 Hystrix 不同，它不提供 “影子” 线程池选项。 由客户端确保正确的线程池大小与隔离配置一致。

#### **创建一个 BulkheadRegistry**
和 CircuitBreaker 模块一样，该模块提供了一个基于内存的 BulkheadRegistry 和一个 ThreadPoolBulkheadRegistry，可用于管理（创建和检索）Bulkhead 实例。

```java
BulkheadRegistry bulkheadRegistry = BulkheadRegistry.ofDefaults();

ThreadPoolBulkheadRegistry threadPoolBulkheadRegistry = ThreadPoolBulkheadRegistry.ofDefaults();
```

#### **创建并配置 Bulkhead**
您可以提供自定义全局 BulkheadConfig 。为了创建自定义全局 BulkheadConfig ，您可以使用 BulkheadConfig 构建器。您可以使用构建器来配置以下属性。

|配置属性|默认值|描述|
|---|---|---|
|maxConcurrentCalls|25|隔板允许的最大并行执行量|
|maxWaitDuration|0|尝试进入饱和隔板时线程应被阻止的最长时间|

```java
// Create a custom configuration for a Bulkhead
BulkheadConfig config = BulkheadConfig.custom()
    .maxConcurrentCalls(150)
    .maxWaitDuration(Duration.ofMillis(500))
    .build();

// Create a BulkheadRegistry with a custom global configuration
BulkheadRegistry registry = BulkheadRegistry.of(config);

// Get or create a Bulkhead from the registry - 
// bulkhead will be backed by the default config
Bulkhead bulkheadWithDefaultConfig = registry.bulkhead("name1");

// Get or create a Bulkhead from the registry, 
// use a custom configuration when creating the bulkhead
Bulkhead bulkheadWithCustomConfig = registry.bulkhead("name2", custom);
```

#### **创建并配置 ThreadPoolBulkhead**
您可以提供自定义全局 ThreadPoolBulkheadConfig 。为了创建自定义全局 ThreadPoolBulkheadConfig ，您可以使用 ThreadPoolBulkheadConfig 构建器。您可以使用构建器来配置以下属性。

|配置属性|默认值|描述|
|---|---|---|
|maxThreadPoolSize|`Runtime.getRuntime().availableProcessors()`|配置最大线程池大小。|
|coreThreadPoolSize|`Runtime.getRuntime().availableProcessors() - 1`|配置核心线程池大小|
|queueCapacity|100|配置队列的容量。|
|keepAliveDuration|20 \[ms]|当线程数大于核心时，这是多余的空闲线程在终止前等待新任务的最长时间。|

```java

ThreadPoolBulkheadConfig config = ThreadPoolBulkheadConfig.custom()
  .maxThreadPoolSize(10)
  .coreThreadPoolSize(2)
  .queueCapacity(20)
  .build();
        
// Create a BulkheadRegistry with a custom global configuration
ThreadPoolBulkheadRegistry registry = ThreadPoolBulkheadRegistry.of(config);

// Get or create a ThreadPoolBulkhead from the registry - 
// bulkhead will be backed by the default config
ThreadPoolBulkhead bulkheadWithDefaultConfig = registry.bulkhead("name1");

// Get or create a Bulkhead from the registry, 
// use a custom configuration when creating the bulkhead
ThreadPoolBulkheadConfig custom = BulkheadConfig.custom()
  .maxThreadPoolSize(5)
  .build();

ThreadPoolBulkhead bulkheadWithCustomConfig = registry.bulkhead("name2", custom);
```

#### **装饰和执行函数接口**
你可以猜到 Bulkhead 有各种高阶装饰器功能，就像 CircuitBreaker。你可以用一个 Buikhead 来装饰任意一个 `Callable` , `Supplier` , `Runnable` , `Consumer` , `CheckedRunnable` , `CheckedSupplier` , `CheckedConsumer` 或 `CompletionStage`

```java
// Given
Bulkhead bulkhead = Bulkhead.of("name", config);

// When I decorate my function
CheckedFunction0<String> decoratedSupplier = Bulkhead
  .decorateCheckedSupplier(bulkhead, () -> "This can be any method which returns: 'Hello");

// and chain an other function with map
Try<String> result = Try.of(decoratedSupplier)
  .map(value -> value + " world'");

// Then the Try Monad returns a Success<String>, if all functions ran successfully.
assertThat(result.isSuccess()).isTrue();
assertThat(result.get()).isEqualTo("This can be any method which returns: 'Hello world'");
assertThat(bulkhead.getMetrics().getAvailableConcurrentCalls()).isEqualTo(1);
```

```java
ThreadPoolBulkheadConfig config = ThreadPoolBulkheadConfig.custom()
    .maxThreadPoolSize(10)
    .coreThreadPoolSize(2)
    .queueCapacity(20)
    .build();

ThreadPoolBulkhead bulkhead = ThreadPoolBulkhead.of("name", config);

CompletionStage<String> supplier = ThreadPoolBulkhead
    .executeSupplier(bulkhead, backendService::doSomething);
```

#### **消费 RegistryEvents**
您可以在 BulkheadRegistry 上注册事件消费者，并在创建、替换或删除 Bulkhead 时自动发送消息，事件消费者执行操作。

```java
BulkheadRegistry registry = BulkheadRegistry.ofDefaults();
registry.getEventPublisher()
  .onEntryAdded(entryAddedEvent -> {
    Bulkhead addedBulkhead = entryAddedEvent.getAddedEntry();
    LOG.info("Bulkhead {} added", addedBulkhead.getName());
  })
  .onEntryRemoved(entryRemovedEvent -> {
    Bulkhead removedBulkhead = entryRemovedEvent.getRemovedEntry();
    LOG.info("Bulkhead {} removed", removedBulkhead.getName());
  });
```

#### **消费 BulkheadEvents**
BulkHead 发出 BulkHeadEvents 流。发出三种类型的事件：允许执行、拒绝执行和完成执行。如果你想消费这些事件，你必须注册一个事件消费者。

```java
bulkhead.getEventPublisher()
    .onCallPermitted(event -> logger.info(...))
    .onCallRejected(event -> logger.info(...))
    .onCallFinished(event -> logger.info(...));
```

### RateLimiter

#### 介绍
限流对于保证服务的 规模化、高可用、高可靠是一种必要的技术。<br>
Resilience4j 提供了一个 RateLimiter，它将从 epoch 开始的所有纳秒分成周期。每个周期都有一个由 RateLimiterConfig.limitRefreshPeriod 配置的持续时间。在每个周期开始时，RateLimiter 将活动权限的数量设置为 RateLimiterConfig.limitForPeriod 。对于 RateLimiter 调用者，它看起来确实像这样，但是对于 AtomicRateLimiter 实现有一些底层优化，如果 RateLimiter 没有被主动使用，则将跳过此刷新。见下图

![](img/resilience4j-rate_limiter.png)

RateLimiter 的默认实现是 `AtomicRateLimiter` ,通过 AtomicReference 管理其状态。AtomicRateLimiter.State 是完全不可变的，并具有以下字段：

- `activeCycle` - 上次调用使用的周期数
- `activePermissions` - 最后一次通话后可用权限的计数。如果保留了某些权限，则可能为负数
- `nanosToWait` - 等待最后一次通话许可的纳秒计数

还有一个 `SemaphoreBasedRateLimiter` 使用 Semaphore 和一个调度程序，它将在每个 `RateLimiterConfig#limitRefreshPeriod` 之后刷新权限

#### 创建一个 RateLimiterRegistry
和 CircuitBreaker 模块一样，该模块提供了一个基于内存的 RateLimiterRegistry，可用于管理（创建和检索）RateLimiter 实例。

```java
RateLimiterRegistry rateLimiterRegistry = RateLimiterRegistry.ofDefaults();
```

