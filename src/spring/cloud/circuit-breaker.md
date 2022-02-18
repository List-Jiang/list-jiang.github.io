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
官网地址：[https://spring.io/projects/spring-cloud-circuitbreake](https://spring.io/projects/spring-cloud-circuitbreake)
### 介绍
Spring Cloud 断路器提供了跨不同断路器实现的抽象。它提供了在您的应用程序中使用的一致 API，让您开发人员可以选择最适合您的应用程序需求的断路器实现。
### 支持的实现
- [Netfix Hystrix](https://github.com/Netflix/Hystrix)

- [Resilience4J](https://github.com/resilience4j/resilience4j)

- [Sentinel](https://github.com/alibaba/Sentinel)

- [Spring Retry](https://github.com/spring-projects/spring-retry)
#### 相应的引用配置
- Hystrix - org.springframework.cloud:spring-cloud-starter-netflix-hystrix

- Resilience4J - org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j

- Reactive Resilience4J - org.springframework.cloud:spring-cloud-starter-circuitbreaker-reactor-resilience4j

- Spring Retry - org.springframework.cloud:spring-cloud-starter-circuitbreaker-spring-retry

- Sentinal - org.springframework.cloud:spring-cloud-starter-circuitbreaker-sentinal
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
