---
title: Resilience4j
icon: small-Resilience4j
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

### RateLimiter 限流器

#### **介绍**
限流对于保证服务的 规模化、高可用、高可靠是一种必要的技术。<br>
Resilience4j 提供了一个 RateLimiter，它将从 epoch 开始的所有纳秒分成周期。每个周期都有一个由 RateLimiterConfig.limitRefreshPeriod 配置的持续时间。在每个周期开始时，RateLimiter 将活动权限的数量设置为 RateLimiterConfig.limitForPeriod 。对于 RateLimiter 调用者，它看起来确实像这样，但是对于 AtomicRateLimiter 实现有一些底层优化，如果 RateLimiter 没有被主动使用，则将跳过此刷新。见下图

![](img/resilience4j-rate_limiter.png)

RateLimiter 的默认实现是 `AtomicRateLimiter` ,通过 AtomicReference 管理其状态。AtomicRateLimiter.State 是完全不可变的，并具有以下字段：

- `activeCycle` - 上次调用使用的周期数
- `activePermissions` - 最后一次通话后可用权限的计数。如果保留了某些权限，则可能为负数
- `nanosToWait` - 等待最后一次通话许可的纳秒计数

还有一个 `SemaphoreBasedRateLimiter` 使用 Semaphore 和一个调度程序，它将在每个 `RateLimiterConfig#limitRefreshPeriod` 之后刷新权限

#### **创建一个 RateLimiterRegistry**
和 CircuitBreaker 模块一样，该模块提供了一个基于内存的 RateLimiterRegistry，可用于管理（创建和检索）RateLimiter 实例。

```java
RateLimiterRegistry rateLimiterRegistry = RateLimiterRegistry.ofDefaults();
```

#### **创建和配置 RateLimiter**

|配置属性|默认值|描述|
|---|---|---|
|timeoutDuration|`5 [s]`|线程等待权限的默认等待时间|
|limitRefreshPeriod|`500 [ns]`|限制刷新的周期。 在每个周期之后，速率限制器将其权限计数设置回 limitForPeriod 值|
|limitForPeriod|50|一个限制刷新周期内可用的权限数|

```java
// 限制某些方法的调用速率不高于 10 req/ms。
RateLimiterConfig config = RateLimiterConfig.custom()
  .limitRefreshPeriod(Duration.ofMillis(1))
  .limitForPeriod(10)
  .timeoutDuration(Duration.ofMillis(25))
  .build();

// Create registry
RateLimiterRegistry rateLimiterRegistry = RateLimiterRegistry.of(config);

// Use registry
RateLimiter rateLimiterWithDefaultConfig = rateLimiterRegistry
  .rateLimiter("name1");

RateLimiter rateLimiterWithCustomConfig = rateLimiterRegistry
  .rateLimiter("name2", config);
```

#### **装饰和执行函数接口**

```java
CheckedRunnable restrictedCall = RateLimiter
    .decorateCheckedRunnable(rateLimiter, backendService::doSomething);

Try.run(restrictedCall)
    .andThenTry(restrictedCall)
    .onFailure((RequestNotPermitted throwable) -> LOG.info("Wait before call it again :)"));
```

可以使用 changeTimeoutDuration 和 changeLimitForPeriod 在运行时更改速率限制器参数。
新的超时持续时间不会影响当前正在等待许可的线程。
新限制不会影响当前期间的权限，只会从下一个期间开始应用。

```java
// Decorate your call to BackendService.doSomething()
CheckedRunnable restrictedCall = RateLimiter
    .decorateCheckedRunnable(rateLimiter, backendService::doSomething);

// during second refresh cycle limiter will get 100 permissions
rateLimiter.changeLimitForPeriod(100);
```

### Retry 重试
大致配置流程都是一样的

|配置属性|默认值|描述|
|---|---|---|
|maxAttempts|2|最大尝试次数（包括作为第一次尝试的初始调用）|
|waitDuration|`500 [ms]`|重试尝试之间的固定等待时间|
|intervalFunction|numOfAttempts -> waitDuration|修改失败后等待间隔的函数。默认情况下，等待时间保持不变。|
|intervalBiFunction|`(numOfAttempts, Either<throwable, result>) -> waitDuration`|根据尝试次数和结果或异常修改失败后等待间隔的函数。与 intervalFunction 一起使用时会抛出 IllegalStateException。|
|retryOnResultPredicate|result -> false|配置一个判断结果是否应该重试的断言。如果结果应该重试，Predicate 必须返回 true，否则它必须返回 false。|
|retryExceptionPredicate|throwable -> true|配置一个断言来评估是否应该重试异常。如果应该重试异常，Predicate 必须返回 true，否则它必须返回 false。|
|retryExceptions|empty|配置记录为失败并因此重试的 Throwable 类的列表。此参数支持子类型。注意：如果您使用 Checked Exceptions，则必须使用 CheckedSupplier|
|ignoreExceptions|empty|配置被忽略并因此不会重试的 Throwable 类的列表。此参数支持子类型。|
|failAfterMaxAttempts|false|当重试达到配置的 maxAttempts 并且结果仍未通过 retryOnResultPredicate 时启用或禁用抛出 MaxRetriesExceededException 的布尔值|


### TimeLimiter 限时器
|配置属性|默认值|描述|
|---|---|---|
|timeoutDuration|`1 [s]`|线程执行超时时间|
|cancelRunningFuture|true|是否应该在运行的未来调用取消|


### cache 缓存

#### 创建和配置缓存

下面的示例展示了如何使用 Cache 抽象来装饰 lambda 表达式。缓存抽象将 lambda 表达式的结果放在缓存实例 ( JCache ) 中，并尝试在调用 lambda 表达式之前从缓存中检索先前缓存的结果。如果从分布式缓存中检索缓存失败，则会处理异常并调用 lambda 表达式。

```java
// Create a CacheContext by wrapping a JCache instance.
javax.cache.Cache<String, String> cacheInstance = Caching
  .getCache("cacheName", String.class, String.class);
Cache<String, String> cacheContext = Cache.of(cacheInstance);

// Decorate your call to BackendService.doSomething()
CheckedFunction1<String, String> cachedFunction = Decorators
    .ofCheckedSupplier(() -> backendService.doSomething())
    .withCache(cacheContext)
    .decorate();
String value = Try.of(() -> cachedFunction.apply("cacheKey")).get();
```

#### **使用发出的 CacheEvents**

Cache 发出一个 CacheEvents 流。事件可以是缓存命中、缓存未命中或错误。

```java
cacheContext.getEventPublisher()
    .onCacheHit(event -> logger.info(...))
    .onCacheMiss(event -> logger.info(...))
    .onError(event -> logger.info(...));
```

#### **Ehcache 示例**

```gradle
compile 'org.ehcache:ehcache:3.7.1'
```

```java
// Configure a cache (once)
this.cacheManager = Caching.getCachingProvider().getCacheManager();
this.cache = Cache.of(cacheManager
    .createCache("booksCache", new MutableConfiguration<>()));

// Get books using a cache
List<Book> books = Cache.decorateSupplier(cache, library::getBooks)
    .apply(BOOKS_CACHE_KEY);
```

::: danger 使用警告
不建议在生产中使用 JCache参考实现，因为它会导致一些并发问题。使用 Ehcache、Caffeine、Redisson、Hazelcast、Ignite 或其他 JCache 实现。
:::