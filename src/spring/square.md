---
title: Spring Cloud Square
icon: calculate
author: List Jiang
category: Spring
tags:
  - RPC
  - 微服务通信
copyrightText: 本教程采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh">知识共享 署名-相同方式共享 3.0协议</a>
---

# spring-cloud-square-retrofit 定义
微服务远程调用框架，用于弥补 OpenFeign 对于响应式调用的缺失
# 场景
响应式微服务之间的调用，例如基于 Spring WebFlux 提供的 http 接口服务。尽管可以通过 WebClient 手动配置 ReactorLoadBalancerExchangeFilterFunction 实例来实现负载。如下案例，但无法像 OpenFeign 那样通过调用方法的方式调用远程服务，而且无法兼容非响应式的 http 接口服务。
```java
    private final WebClient.Builder loadBalancedWebClientBuilder;

    public DemoConsumerController(WebClient.Builder loadBalancedWebClientBuilder) {
        this.loadBalancedWebClientBuilder = loadBalancedWebClientBuilder;
    }

    @LoadBalanced
    @Bean
    WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }

    // http://服务名
    private final String SERVICE = "http://silky-demo-webflux";
    @RequestMapping("/mono")
    public Mono<String> mono(@RequestParam(value = "name", defaultValue = "Mary") String name) {
        return loadBalancedWebClientBuilder.build().get().uri(SERVICE + "/producer/mono")
                .retrieve().bodyToMono(String.class)
                .map(greeting -> String.format("%s, %s!", greeting, name));
    }
```
# 使用案例
## web 案例
```java
/**
 * 启动类声明开启 EnableRetrofitClients
 */
@SpringBootApplication
@EnableEurekaClient
@EnableRetrofitClients
public class SquareWebServer {
    public static void main(String[] args) {
        SpringApplication.run(SquareWebServer.class, args);
    }
}
```
```java
// OkHttpConfig.java
@Configuration
public class OkHttpConfig {

    @Bean
    @LoadBalanced
    public OkHttpClient.Builder builder() {
        return new OkHttpClient.Builder();
    }

}
// SilkyWebClient.java
@RetrofitClient("silky-demo-web")
public interface SilkyWebClient {
    @GET("/producer/sleep/{seconds}")
    Call<String> sleep(@Path("seconds") int seconds);
}
```
```groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.cloud:spring-cloud-starter-bootstrap'
    implementation 'org.springframework.cloud:spring-cloud-starter-config'
    implementation 'org.springframework.cloud:spring-cloud-starter-loadbalancer'
    implementation 'org.springframework.cloud:spring-cloud-starter-netflix-eureka-client'
    // 添加 spring-cloud-square 依赖
    implementation 'org.springframework.cloud:spring-cloud-square-okhttp:0.4.0'
    implementation 'org.springframework.cloud:spring-cloud-square-retrofit:0.4.0'
    implementation 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```
## web flux 案例
```java
/**
 * 启动类声明开启 EnableRetrofitClients
 */
@SpringBootApplication
@EnableEurekaClient
@EnableRetrofitClients
public class SquareWebServer {
    public static void main(String[] args) {
        SpringApplication.run(SquareWebServer.class, args);
    }
}
```
```java
// WebClientConfig.java
@Configuration
public class WebClientConfig {

    @Bean
    @LoadBalanced
    public WebClient.Builder builder() {
        return new WebClientConfig().builder();
    }

}
// SilkyWebFluxClient.java
@RetrofitClient("silky-demo-webflux")
public interface SilkyWebFluxClient {
    @GET("/port/{name}")
    Mono<String> port(@Path("name") int name);
}
```
```groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.cloud:spring-cloud-starter-bootstrap'
    implementation 'org.springframework.cloud:spring-cloud-starter-config'
    implementation 'org.springframework.cloud:spring-cloud-starter-loadbalancer'
    implementation 'org.springframework.cloud:spring-cloud-starter-netflix-eureka-client'
    // 添加 spring-cloud-square-retrofit-webclient 依赖
    implementation 'org.springframework.cloud:spring-cloud-square-retrofit-webclient:0.4.0'
    implementation 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```
## 完整项目源码地址
gitee: [](https://gitee.com/jdw-silky/silky-parent.git)
### 基础启动说明
1. 以 native 环境启动 silky-eureka-server
2. 以 native 环境启动 silky-config
3. 以 native 环境启动两个 silky-demo-web ，由于配置文件端口写的 0，所以无需专门配置端口
4. 以 native 环境启动两个 silky-demo-webflux ，由于配置文件端口写的 0，所以无需专门配置端口
### 测试
在 silky-demo-square-web 与 silky-demo-square-webflux 都写了响应的单元测试，可直接验证