---
title: kafka
icon: kafka
time: 2022-02-23
category: mq
---

::: tip 第一步：获取 KAFKA
[下载](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.1.0/kafka_2.13-3.1.0.tgz) 最新的 Kafka 版本并解压：
```shell
$ tar -xzf kafka_2.13-3.1.0.tgz
$ cd kafka_2.13-3.1.0
```
:::

::: tip 第二步：启动KAFKA环境

*注意：您的本地环境必须安装 Java 8+。*

运行以下命令以按正确顺序启动所有服务：

```shell
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```

打开另一个终端会话并运行：

```shell
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
成功启动所有服务后，您将拥有一个基本的 Kafka 环境运行并可以使用。
```
:::

::: tip 第 3 步：创建一个主题来存储您的事件

Kafka 是一个分布式事件流平台，可让您跨多台机器 读取、写入、存储和处理 事件（在文档中也称为记录或消息）。

示例事件包括支付交易、手机的地理位置更新、运输订单、物联网设备或医疗设备的传感器测量等等。这些事件被组织并存储在 主题中。非常简化，主题类似于文件系统中的文件夹，事件是该文件夹中的文件。

因此，在您编写第一个事件之前，您必须创建一个主题。打开另一个终端会话并运行：

```shell
$ bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092
```

Kafka 的所有命令行工具都有其他选项：运行 `kafka-topics.sh` 不带任何参数的命令以显示使用信息。例如，它还可以显示新主题的 [分区数等详细信息](https://kafka.apache.org/documentation/#intro_concepts_and_terms)：

```shell
$ bin/kafka-topics.sh --describe --topic quickstart-events --bootstrap-server localhost:9092
Topic:quickstart-events  PartitionCount:1    ReplicationFactor:1 Configs:
 Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0
```
:::

::: tip 第 4 步：将一些事件写入主题
Kafka 客户端通过网络与 Kafka 代理通信以写入（或读取）事件。一旦收到，代理将以持久和容错的方式存储事件，只要您需要 - 甚至永远。

运行控制台生产者客户端将一些事件写入您的主题。默认情况下，您输入的每一行都会导致将一个单独的事件写入主题。

```shell
$ bin/kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092
This is my first event
This is my second event
```
您可以随时停止生产者客户端 `Ctrl-C` 。
:::

::: tip 第 5 步：阅读事件
打开另一个终端会话并运行控制台使用者客户端以读取您刚刚创建的事件：

```shell
$ bin/kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092
This is my first event
This is my second event
```

您可以随时停止消费者客户端 `Ctrl-C` 。

随意尝试：例如，切换回您的生产者终端（上一步）以编写其他事件，并查看这些事件如何立即显示在您的消费者终端中。

因为事件被持久地存储在 Kafka 中，所以它们可以被尽可能多的消费者多次读取。您可以通过打开另一个终端会话并再次重新运行上一个命令来轻松验证这一点。

:::

::: tip 第 6 步：使用 KAFKA CONNECT 将数据作为事件流导入/导出
您可能在现有系统（如关系数据库或传统消息传递系统）中拥有大量数据，以及许多已经使用这些系统的应用程序。 [Kafka Connect](https://kafka.apache.org/documentation/#connect) 允许您不断地将来自外部系统的数据摄取到 Kafka 中，反之亦然。因此很容易将现有系统与 Kafka 集成。为了使这个过程更容易，有数百个这样的连接器随时可用。

查看 [Kafka Connect](https://kafka.apache.org/documentation/#connect) 部分 ，了解有关如何将数据持续导入和导出 Kafka 的更多信息。
:::

::: tip 第 7 步：使用 KAFKA STREAMS 处理您的事件
一旦您的数据作为事件存储在 Kafka 中，您就可以使用 Java/Scala 的 [Kafka Streams](https://kafka.apache.org/documentation/streams) 客户端库处理数据。它允许您实现关键任务的实时应用程序和微服务，其中输入和/或输出数据存储在 Kafka 主题中。Kafka Streams 将在客户端编写和部署标准 Java 和 Scala 应用程序的简单性与 Kafka 的服务器端集群技术的优势相结合，使这些应用程序具有高度可扩展性、弹性、容错性和分布式性。该库支持一次性处理、有状态操作和聚合、窗口化、连接、基于事件时间的处理等等。

为了让您初步了解，以下是实现流行 `WordCount` 算法的方法：

```java
KStream<String, String> textLines = builder.stream("quickstart-events");

KTable<String, Long> wordCounts = textLines
            .flatMapValues(line -> Arrays.asList(line.toLowerCase().split(" ")))
            .groupBy((keyIgnored, word) -> word)
            .count();

wordCounts.toStream().to("output-topic", Produced.with(Serdes.String(), Serdes.Long()));
```

Kafka Streams 演示 和应用程序开发教程 演示了如何从头到尾编写和运行这样的流应用程序 。

:::

::: tip 第 8 步：终止 KAFKA 环境
现在您已经完成了快速入门，请随意拆除 Kafka 环境，或者继续玩。

1. 使用 `Ctrl-C` 停止生产者和消费者客户端。
2. 使用 `Ctrl-C` 停止 Kafka 代理。
3. 最后，使用 `Ctrl-C` 停止 ZooKeeper 服务器。
如果您还想删除本地 Kafka 环境的任何数据，包括您在此过程中创建的任何事件，请运行以下命令：

```shell
$ rm -rf /tmp/kafka-logs /tmp/zookeeper
```

:::

::: tip 恭喜！
您已成功完成 Apache Kafka 快速入门。

要了解更多信息，我们建议执行以下后续步骤：

通读 [简介](https://kafka.apache.org/intro) ，了解 Kafka 在高层次上的工作原理、主要概念以及与其他技术的比较。要更详细地了解 Kafka，请参阅 [官网文档](https://kafka.apache.org/documentation/)。
浏览 [用例](https://kafka.apache.org/powered-by) ，了解我们全球社区中的其他用户如何从 Kafka 中获得价值。
加入 [当地的 Kafka 聚会小组](https://kafka.apache.org/events) ， 观看 [Kafka 峰会](https://kafka-summit.org/past-events/) （Kafka 社区的主要会议）的演讲。
:::