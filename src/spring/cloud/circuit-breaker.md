---
title: Spring Cloud Circuit Breaker
icon: calculate
author: List Jiang
category: Spring
next: true
tags:
  - 微服务通信
  - 断路器
copyrightText: 本教程采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh">知识共享 署名-相同方式共享 3.0协议</a>
---
# Spring Cloud Circuit Breaker
- 官网地址：[https://spring.io/projects/spring-cloud-circuitbreake](https://spring.io/projects/spring-cloud-circuitbreake)
- 官方案例地址：[https://github.com/spring-cloud-samples/spring-cloud-circuitbreaker-demo](https://github.com/spring-cloud-samples/spring-cloud-circuitbreaker-demo)
- **核心思想还得看这个：**[https://resilience4j.readme.io/docs/circuitbreaker](https://resilience4j.readme.io/docs/circuitbreaker)
### 介绍
Spring Cloud 断路器提供了跨不同断路器实现的抽象。它提供了在您的应用程序中使用的一致 API，让您开发人员可以选择最适合您的应用程序需求的断路器实现。
### 支持的实现
- [Netfix Hystrix](https://github.com/Netflix/Hystrix)

- [Resilience4J](https://github.com/resilience4j/resilience4j)

- [Sentinel](https://github.com/alibaba/Sentinel)

- [Spring Retry](https://github.com/spring-projects/spring-retry)
#### 相应的引用配置
- Hystrix - `org.springframework.cloud:spring-cloud-starter-netflix-hystrix`

- Resilience4J - `org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j`

- Reactive Resilience4J - `org.springframework.cloud:spring-cloud-starter-circuitbreaker-reactor-resilience4j`

- Spring Retry - `org.springframework.cloud:spring-cloud-starter-circuitbreaker-spring-retry`

- Sentinal - `org.springframework.cloud:spring-cloud-starter-circuitbreaker-sentinal`
## 极简使用 Web
```java
@Service
public static class DemoControllerService {
	private RestTemplate rest;
	private CircuitBreakerFactory cbFactory;

	public DemoControllerService(RestTemplate rest, CircuitBreakerFactory cbFactory) {
		this.rest = rest;
		this.cbFactory = cbFactory;
	}
    // 断路器工厂创建一个 slow 实例，调度一个 rest 操作，如果断路抛出异常则执行 fallback 处理操作，需要我们注册一个 path 为 "/fallback" 的 Requestmapping 实例
	public String slow() {
		return cbFactory.create("slow").run(() -> rest.getForObject("/slow", String.class), throwable -> "fallback");
	}

}
```
## 极简使用 Reactive Web
```java
@Service
public static class DemoControllerService {
	private ReactiveCircuitBreakerFactory cbFactory;
	private WebClient webClient;


	public DemoControllerService(WebClient webClient, ReactiveCircuitBreakerFactory cbFactory) {
		this.webClient = webClient;
		this.cbFactory = cbFactory;
	}

	public Mono<String> slow() {
        // webClient 创建一个响应式请求动作，这个动作交由断路器工厂创建一个 slow 实例来触发，有问题断路抛出异常则执行 fallback 处理操作，需要我们注册一个 path 为 "/fallback" 的 Requestmapping 实例
		return webClient.get().uri("/slow").retrieve().bodyToMono(String.class).transform(
		it -> cbFactory.create("slow").run(it, throwable -> return Mono.just("fallback")));
	}
}
```
> Spring 团队为了推行 resilience4j 也是强， Spring Cloud Circuit Breaker的真正[思想](https://resilience4j.readme.io/docs/circuitbreaker)要看 resilience4j 的文档，我都不知道怎么点进去的，有毒。
# resilience4j
resilience4j 文档：[https://resilience4j.readme.io/](https://resilience4j.readme.io/)
## Circuit Breaker 设计思想
CircuitBreaker 是通过三个典型状态：CLOSED、OPEN 和 HALF_OPEN 以及两个特殊状态 DISABLED 和 FORCED_OPEN 实现的。
![state_machine](img/state_machine.jpg)
CircuitBreaker 使用滑动窗口来存储和汇总调用结果，计算故障率进行阈值判定。可以在基于计数的滑动窗口和基于时间的滑动窗口之间进行选择。
- 基于计数的滑动窗口聚合最后 N 次调用的结果。
- 基于时间的滑动窗口聚合了最后 N 秒的调用结果。

### 状态切换
当故障率等于或大于可配置阈值时，CircuitBreaker 的状态从 CLOSED 变为 OPEN。例如，当超过 50% 的调用失败时，此时不会再蠢蠢的接着发送请求，直接走异常处理逻辑。
过了指定的等待时间后

默认的情况下，所有的异常都算做失败，计算故障率。但是也支持自定义配置，可配置异常类型断言，判断异常类型。或者有两个异常数组，直接配置这两个数组：
recordExceptions：抛出这个数组里面的异常的就计为失败处理
ignoreExceptions：抛出这个数组里面的异常也算作成功处理
如果异常都不在这两个里面，那么既不算做成功，也不算做失败。这里需要注意的是，故障率计算必须有一个成型的滑动窗口才会计算。例如，计数模式的滑动窗口，如果计数数为 8 ，那么即使失败了 7 次，也不会触发断路器阈值判定。

```java
    @Bean
    public Customizer<Resilience4JCircuitBreakerFactory> slowCustomizer() {
        return factory -> factory.configure(builder -> builder.circuitBreakerConfig(CircuitBreakerConfig.ofDefaults())
                        .timeLimiterConfig(TimeLimiterConfig.custom().timeoutDuration(Duration.ofSeconds(4)).build()) // 超过4秒没有响应就认为请求失败
                        .circuitBreakerConfig(CircuitBreakerConfig.custom()
                                .minimumNumberOfCalls(100) // 最小失败率计算呼叫次数，只有呼叫次数大于这个值才会计算失败率
                                .failureRateThreshold(30f) // 失败率阈值设置，如果大于 30% 的失败了，就启动断路器
                                .waitDurationInOpenState(Duration.ofSeconds(30)) // 断路器打开后保持 30 秒后切换为半开状态，又可以有限的发送请求
                                .permittedNumberOfCallsInHalfOpenState(20) // 在半开状态允许调用，调用 20 次后重新计算阈值，判断断路器打不打开
                                .recordExceptions(Exception.class) // 设定计算失败数的异常，默认统计所有的异常
                                .ignoreExceptions(IllegalArgumentException.class) // 设定不计算失败数的异常，即不再 record 里面的也不在 ignore 里面的就不纳入故障率统计
                                .build())
                , "slow");
    }
```

> 断路器支持另外两种特殊状态，DISABLED（始终允许访问）和 FORCED_OPEN（始终拒绝访问）。在这两种状态下，不会生成断路器事件（除了状态转换），也不会记录任何指标。退出这些状态的唯一方法是触发状态转换或重置断路器。

::: danger
断路器是线程安全的，如下所示：
- 断路器的状态存储在 AtomicReference 中
- CircuitBreaker 使用原子操作来更新具有无副作用函数的状态。
- 滑动窗口内状态的更新与读取是同步的
:::