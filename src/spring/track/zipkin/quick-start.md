---
title: Zipkin 快速入门
icon: zipkin
star: true
sticky: 20
author: List Jiang
breadcrumb: false
---

## 启动方式

::: info Docker
```shell

docker run -d -p 9411:9411 openzipkin/zipkin

```
:::

::: info Java8+
```shell
curl -sSL https://zipkin.io/quickstart.sh | bash -s
java -jar zipkin.jar
```
:::

::: info 源码编译运行
```shell
# git 拉取代码
git clone https://github.com/openzipkin/zipkin
cd zipkin
# maven编译，此处需要 docker 、 nodeJs 环境，或者 [跳过测试](https://www.cnblogs.com/jiangdewen/p/15928589.html)
./mvnw -DskipTests --also-make -pl zipkin-server clean install
# 运行服务
java -jar ./zipkin-server/target/zipkin-server-*exec.jar
```

:::

**源码编译补充**

如果我们使用 Intellij IDEA 打开源码的话， maven 打包需要配置跳过测试。以父模块全项目打包，需要确保 nodeJs 环境。

![](../img/zipkin-idea-package.jpg)

