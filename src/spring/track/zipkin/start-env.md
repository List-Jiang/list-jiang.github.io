---
title: Zipkin
icon: zipkin
star: true
sticky: 20
author: List Jiang
breadcrumb: false
---

# zipkin-server
Zipkin Server 是一个 Java 1.8+ 服务，打包为一个可执行的 jar。 跨度存储和收集器是可配置的。默认情况下，存储在内存中，启用 HTTP 收集器（POST /api/v2/spans 端点），服务器侦听端口 9411。 Zipkin Server 使用 [Armeria](https://github.com/line/armeria) 实现。 虽然它在内部使用 Spring Boot  （打开新窗口）
，不应将 Zipkin Server 视为普通的 [Spring Boot](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/) 应用程序。

## 不支持自定义服务器

不支持通过类似于 spring boot 应用程序添加 `zipkin-server` 引用这种方式来构建服务。

## 快速启动

最快的上手方式是通过 [最新 jar 发布服务器](https://search.maven.org/remote_content?g=io.zipkin&a=zipkin-server&v=LATEST&c=exec) 获取一个独立的可执行jar。请注意，Zipkin 服务器需要最低 JRE 8。

```bash
$ curl -sSL https://zipkin.io/quickstart.sh | bash -s
$ java -jar zipkin.jar
```
启动后，浏览 http://your_host:9411 验证

## 端点

以下端点在服务基础url http://your_host:9411 下定义
* / - [UI](../zipkin-ui)
* /config.json - UI 配置
* /api/v2 - [API](https://zipkin.io/zipkin-api/#/)
* /health - 如果正常则返回 200
* /info - 提供正在运行的实例的版本
* /metrics - 包括按传输类型细分的收集器指标
* /prometheus - Prometheus 抓取端点

 [旧版 /api/v1 API](https://zipkin.io/zipkin-api/#/) 仍然支持。后端通过数据转换与 HTTP API 分离。这意味着您仍然可以在新后端接受旧数据，反之亦然。进入 `https://zipkin.io/zipkin-api/zipkin-api.yaml` Swagger UI 的探索框查看旧定义

### CORS（跨域资源共享）

默认情况下，所有端点 `/api/v2` 都配置为允许跨域请求。 

这可以通过修改 `zipkin.query.allowed-origins` 属性来改变。

例如，要允许来自 `http://foo.bar.com` 域名下的 CORS 请求：

```
ZIPKIN_QUERY_ALLOWED_ORIGINS=http://foo.bar.com
```

更多的相关配置请看 [这里](#配置) 。

### 服务和跨度名称查询

Zipkin [API](https://zipkin.io/zipkin-api/#/default/get_services) 不包括返回多远查找服务或跨度名称的参数。为了防止负载过大，服务和跨度名称查询通过配置
 `QUERY_LOOKBACK` 限制，默认为24小时（每天两个桶：今天一个，昨天一个）

## 日志

默认情况下， zipkin 以 INFO 或更高级别将日志写入控制台。所以可以通过配置  `logging.level.XXX` 属性调整日志级别

例如，如果您想为所有 zipkin 类别启用调试日志记录，您可以像这样启动服务器：

```bash
$ java -jar zipkin.jar --logging.level.zipkin2=DEBUG
```

更多的相关配置请看 [这里](#配置) 。

### 高级日志配置

实际上，服务器使用 [Spring Boot - Logback集成](http://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html#howto-configure-logback-for-logging) 处理日志，所以可以通过配置 `--logging.exception-conversion-word=%wEx{full}` 转储完整堆栈跟踪而不是截断的跟踪。

## Metrics

收集器指标被导出到路径 `/metrics` 。这些和其他指标被导出到路径 `/prometheus` 。



### 示例 Prometheus 配置
Here's an example `/prometheus` configuration, using the Prometheus
exposition [text format version 0.0.4]

这是一个示例 `/prometheus` 配置，使用 Prometheus exposition[文本格式版本 0.0.4](https://prometheus.io/docs/instrumenting/exposition_formats/)

```yaml
  - job_name: 'zipkin'
    scrape_interval: 5s
    metrics_path: '/prometheus'
    static_configs:
      - targets: ['localhost:9411']
    metric_relabel_configs:
      # Response code count
      - source_labels: [__name__]
        regex: '^status_(\d+)_(.*)$'
        replacement: '${1}'
        target_label: status
      - source_labels: [__name__]
        regex: '^status_(\d+)_(.*)$'
        replacement: '${2}'
        target_label: path
      - source_labels: [__name__]
        regex: '^status_(\d+)_(.*)$'
        replacement: 'http_requests_total'
        target_label: __name__
```

### 收集器

Metric 收集器按传输细分。以下内容被导出到 `/metrics` 端点：

Metric | 说明
--- | ---
counter.zipkin_collector.messages.$transport | 收到的累积消息；应该与检测应用程序报告的消息相关
counter.zipkin_collector.messages_dropped.$transport | 累积消息丢弃；原因包括客户端断开连接或格式错误的内容
counter.zipkin_collector.bytes.$transport | 累积消息字节
counter.zipkin_collector.spans.$transport | 累积跨度读取；应该与检测应用程序报告的消息相关
counter.zipkin_collector.spans_dropped.$transport | 累积跨度下降；原因包括采样或存储故障
gauge.zipkin_collector.message_spans.$transport | 消息中的最后一个跨度计数
gauge.zipkin_collector.message_bytes.$transport | 消息中的最后一个字节数

## 配置

我们支持 ENV 变量配置，例如 `STORAGE_TYPE=cassandra3` ，因为它们为管理员所熟悉，并且易于在 Docker 等运行时环境中使用

以下是 Zipkin 的顶层配置：
* `QUERY_PORT`: HTTP API 和 Web UI 的监听端口；默认为 `9411`
* `QUERY_ENABLED`: 配置 `false` 禁用 '/api/v2' 端点。这也会导致 UI 不可用，因为 UI 依赖于 API。 如果您的唯一目标是限制搜索, 请配置 `SEARCH_ENABLED` 为 `false`
* `SEARCH_ENABLED`: `false` 禁用查询 API 中的搜索以及收集器中的任何索引或后处理以支持搜索。这不会禁用整个 UI ，因为按 ID 和依赖项查询的跟踪仍在运行。当您使用其他服务（例如日志）来查找跟踪 ID 时禁用此功能。默认为 true
* `QUERY_TIMEOUT`: 设置查询请求的硬超时。接受任何持续时间字符串（例如， `100ms` ）。值 `0` 将完全禁用超时。默认为 `11s` 。
* `QUERY_LOG_LEVEL`: 写入控制台的日志级别；默认为 `INFO`
* `QUERY_NAMES_MAX_AGE`: 控制 zipkin-server 对 UI 请求的最大响应时间。默认为 300 秒。
* `QUERY_LOOKBACK`: 从 endTs 可以回溯多少毫秒查询；默认为 24​​ 小时（每天两个时段：今天一个，昨天一个）
* `STORAGE_TYPE`: SpanStore 实现: `mem`, `mysql`, `cassandra3`, `elasticsearch` 中取一个
* `COLLECTOR_SAMPLE_RATE`: 保留的记录道百分比，默认为“始终采样”（1.0）。
* `AUTOCOMPLETE_KEYS`: 会通过 `/api/v2/autocompleteTags` 端点返回的跨度标签键列表；标签键应以逗号分隔，例如 "instance_id,user_id,env"
* `AUTOCOMPLETE_TTL`: 以毫秒为单位抑制调用写入相同的自动完成键/值对的时间。默认 3600000（1 小时）

### 配置文件覆盖
在场景下，所有配置都由 Spring Boot 管理。这意味着属性也可能被系统属性或 [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html) 支持的任何其他替代方案覆盖

我们使用 yaml 配置将更短或更惯用的 ENV 变量绑定到最终使用的 Spring 属性。虽然大多数用户应该只使用环境变量，但有些用户可能希望使用属性文件方法来覆盖设置。例如，知道我们设置 `spring.config.name=zipkin-server` 了 ，Spring Boot 会自动在当前目录中查找一个名为的文件 `zipkin-server.properties` ，并且可以通过这种方式覆盖我们在 yaml 中设置的相同属性。

如果您选择使用基于属性的配置而不是 ENV 变量，那么您就是在自定义配置。这意味着您将使用 [Spring Boot 文档](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html) 或 [堆栈溢出](https://stackoverflow.com/questions/tagged/spring-boot) 解决参数配置问题，而不是提出问题或使用我们的聊天支持。我们必须提到这一点，因为 Spring 的配置通常消耗资源很大，我们必须为 Zipkin 相关任务尽可能节省资源。


## UI
Zipkin 有一个 Web UI，自动包含在 exec jar 中，默认托管在端口 9411 上。

当 UI 加载时，它会从 `/config.json` 端点读取默认配置。



属性 | 值 | 描述
--- | --- | ---
environment | zipkin.ui.environment | 这里的值变成右上角的标签。非必填
defaultLookback | zipkin.ui.default-lookback | 查找跟踪时回溯的默认持续时间（以毫秒为单位）。影响 UI 中的“开始时间”元素。默认为 900000（以毫秒为单位的 15 分钟）
searchEnabled | zipkin.ui.search-enabled | 如果启用了 Discover 屏幕。默认为真
queryLimit | zipkin.ui.query-limit | 查找 track 的默认限制。默认为 10
instrumented | zipkin.ui.instrumented | 此 Zipkin UI 涵盖哪些站点,正则表达式语法案例 `http:\/\/example.com\/.*` ，默认 (`.*`) 包含所有站点
logsUrl | zipkin.ui.logs-url | 记录查询服务 url 模式。如果指定，将在跟踪页面上显示一个按钮，并将 URL 中的 {traceId} 替换为 traceId。非必填
supportUrl | zipkin.ui.support-url | 用户可以请求支持的 URL。如果指定，将在侧面菜单中放置指向此 URL 的链接，例如用于提交支持票的页面。非必填
archivePostUrl | zipkin.ui.archive-post-url | 以 Zipkin v2 json 格式发布当前跟踪的 URL。例如 `https://longterm/api/v2/spans` 。如果指定，一个按钮将相应地出现在跟踪页面上。非必填
archiveUrl | zipkin.ui.archive-url | 提供归档跟踪的 Web 应用程序的 URL，以“{traceId}”为模板。例如 `https://longterm/zipkin/trace/{traceId}` 。跟踪成功发布到“archivePostUrl”后，确认消息中会显示此信息.非必填
dependency.enabled | zipkin.ui.dependency.enabled | UI 依赖项展示是否启用. 默认为 true
dependency.lowErrorRate | zipkin.ui.dependency.low-error-rate | 依赖项链接变黄的错误率阈值。默认值为 0.5 (50%) 设置为 >1 以禁用
dependency.highErrorRate | zipkin.ui.dependency.high-error-rate | 依赖项链接变红的错误率阈值。默认值为 0.75 (75%) 设置为 >1 以禁用
basePath | zipkin.ui.basepath | 放置在 UI HTML 标签中的路径前缀；在反向代理后面运行时很有用。默认 `/zipkin`

要将属性映射到环境变量，请将它们更改为大写下划线格式。例如，如果使用 docker，您可以设置 ZIPKIN_UI_QUERY_LIMIT=100 相当于 `$.queryLimit` 在 `/config.json`

### 跟踪存档
大多数生产 Zipkin 集群使用有限的 TTL 存储跟踪。这使得共享跟踪有点不方便，因为它的链接将在几天后过期。

 "跟踪归档" 功能对此有所帮助。启动第二个 zipkin 服务器，指向一个比常规的 TTL 更长的存储，并设置 archivePostUrl 和 archiveUrl UI 配置指向这第二个服务器。设置 archivePostUrl 后，跟踪视图页面上将出现一个新的 "Archive Trace" 按钮。

## 存储

### 基于内存存储
Zipkin 的 [内存存储](../zipkin/src/main/java/zipkin2/storage/InMemoryStorage.java) 将所有数据保存在内存中，根据跨度限制清除旧数据。它适用于 `STORAGE_TYPE` 未设置或设置为 mem

> * `MEM_MAX_SPANS`: 超过此限制时，将首先清除最旧的记录道（及其跨度）。默认为 500000

示例用法：

```bash
$ java -jar zipkin.jar
```
::: danger 警告
注意：这个存储组件主要是为测试而开发的，也是一种在没有外部依赖的情况下快速启动和运行 Zipkin 服务器的方法。它对于高工作量是不可行的。也就是说，如果您遇到内存不足错误，请尝试减少 MEM_MAX_SPANS 或增加堆大小 (-Xmx)。 将内存中保存的跨度数量加倍的示例：

将内存中保存的跨度数量加倍的示例：

```shell
$ MEM_MAX_SPANS=1000000 java -Xmx1G -jar zipkin.jar
```
:::


### Cassandra 存储
Zipkin 的 Elasticsearch 存储组件支持 3.11.3+ 版本

::: tip Cassandra 相关配置

**当 `STORAGE_TYPE` 设置为 `elasticsearch` 时，以下配置生效：**

`CASSANDRA_KEYSPACE`: 要使用的键空间，默认为： "zipkin2"
`CASSANDRA_CONTACT_POINTS`: 以逗号分隔的主机地址列表配置 Cassandra 集群。还可以使用 `host:port` 指定自定义端口。默认为本地主机上的 9042 端口。
`CASSANDRA_LOCAL_DC`: 将被视为负载平衡的 local 数据中心的名称。默认为 datacenter1
`CASSANDRA_ENSURE_SCHEMA`: 确保 cassandra 使用最新模式。如果启用则尝试执行以 `cassandra-schema-cql3` 的前缀的脚本. 默认为 true
`CASSANDRA_USERNAME`：Cassandra 认证账号
`CASSANDRA_PASSWORD`: Cassandra 认证密码，如果认真失败会抛出错误，未设置默认值。
`CASSANDRA_USE_SSL`: 需要 `javax.net.ssl.trustStore` 和 `javax.net.ssl.trustStorePassword`, 默认为 false.

**以下是可能不涉及所有用户的调整参数：**

* `CASSANDRA_MAX_CONNECTIONS`: 每个数据中心本地主机的最大池连接数。默认为8
* `CASSANDRA_INDEX_CACHE_MAX`: 要缓存的最大跟踪索引元数据项。零禁用缓存。默认值为100000。
* `CASSANDRA_INDEX_CACHE_TTL`: 缓存跟踪的索引元数据需要多少秒。默认值为60。
* `CASSANDRA_INDEX_FETCH_MULTIPLIER`: 要获取的索引行比用户提供的查询限制多多少。默认为3。
:::

使用 Cassandra 和请求日志记录的示例用法（TRACE 显示查询值）：

```bash
$ STORAGE_TYPE=cassandra3 java -jar zipkin.jar \
--logging.level.com.datastax.oss.driver.internal.core.tracker.RequestLogger=DEBUG
```

### Elasticsearch 存储
Zipkin 的 Elasticsearch 存储组件支持 5-7.x 版本

::: tip Elasticsearch 相关配置
**当 `STORAGE_TYPE` 设置为 `elasticsearch` 时，以下配置生效：**
-
- `ES_HOSTS`: 以逗号分隔的 elasticsearch 连接 url 列表，默认值为： "http://localhost:9200"
- `ES_PIPELINE`: 指示为跨距编制索引之前使用的摄取管道，无默认值
- `ES_TIMEOUT`: 配置 Elasticsearch API 的连接、读写超时时间，默认值为 10000 (10秒)
- `ES_INDEX`: 生成每日索引名称时要使用的索引前缀，默认值为： zipkin.
- `ES_DATE_SEPARATOR`: 生成每日索引名称时要使用的日期分隔符，默认值为： '-' .
- `ES_INDEX_SHARDS`: 索引分片数。每个碎片及其副本分配给群集中的一台机器。增加碎片的数量集群中的机器将提高读写性能。无法更改现有索引的碎片数量，但可以更改新的每日索引。默认为 5
- `ES_INDEX_REPLICAS`: 索引碎片副本数。相对条件下数值越大读性能越好，写性能越差。默认值为 1 。设置为 0 意味着机器故障很大可能会导致数据丢失。
- `ES_ENSURE_TEMPLATES`: 缺失时安装Zipkin索引模板。将此设置为 false ，当索引模板与预期不匹配时，会导致数据损坏。如果如果将其设置为 true ，则会自动处理数据故障或迁移问题，而不是依靠人工手动来解决。默认为true
- `ES_USERNAME` and `ES_PASSWORD`: Elasticsearch基本身份验证，默认为空字符串。当X-Pack安全（以前称为Shield）就位时使用。
- `ES_CREDENTIALS_FILE`: ES 认证凭据文件位置, 包含以下属性，该文件优先级大于 ES_USERNAME 与 ES_PASSWORD 配置
  - `zipkin.storage.elasticsearch.username`：用户名
  - `zipkin.storage.elasticsearch.password`：密码
- `ES_CREDENTIALS_REFRESH_INTERVAL`: 定期刷新 `ES_CREDENTIALS_FILE` 文件周期（单位：秒），默认值为：1
- `ES_HTTP_LOGGING`: 设置后，配置 Elasticsearch API 的 HTTP 日志记录，包含：Options are BASIC, HEADERS, BODY
- `ES_SSL_NO_VERIFY`: 如果为true，则禁用服务器密钥证书链的验证。这不适合生产。默认为false。
- `ES_TEMPLATE_PRIORITY`: 可组合索引模板的优先级值。这仅适用于ES 7.8或更高版本。必须设置为0才能使用可组合模板

:::

使用示例：

简单连接 ES :
```bash
$ STORAGE_TYPE=elasticsearch ES_HOSTS=http://myhost:9200 java -jar zipkin.jar
```

记录 ES http 请求日志:
```bash
$ STORAGE_TYPE=elasticsearch ES_HTTP_LOGGING=BASIC java -jar zipkin.jar
```

#### 使用自定义密钥库或信任库 (SSL)
如果您的 Elasticsearch 端点自定义 SSL 配置（例如自签名）证书，您可以使用以下任何 [JSSE 属性子集](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html#T6) 连接。

 * javax.net.ssl.keyStore
 * javax.net.ssl.keyStorePassword
 * javax.net.ssl.keyStoreType
 * javax.net.ssl.trustStore
 * javax.net.ssl.trustStorePassword
 * javax.net.ssl.trustStoreType

使用示例：
```bash
$ JAVA_OPTS='-Djavax.net.ssl.keyStore=keystore.p12 -Djavax.net.ssl.keyStorePassword=keypassword -Djavax.net.ssl.keyStoreType=PKCS12 -Djavax.net.ssl.trustStore=truststore.p12 -Djavax.net.ssl.trustStorePassword=trustpassword -Djavax.net.ssl.trustStoreType=PKCS12'
$ STORAGE_TYPE=elasticsearch java $JAVA_OPTS -jar zipkin.jar
```
在该场景下，这些映射到属性 `prefixed zipkin.storage.elasticsearch.ssl.`，这会影响用于连接到 Elasticsearch 的 Armeria 客户端。

上述属性允许最常见的 SSL 开箱即用的设置。如果您需要更多定制，请提交 [issue](https://github.com/openzipkin/zipkin/issues/2774) 

#### 自动创建索引
当需要的时候 Zipkin 自动创建 ES 索引。 Elasticsearch 默认 [允许](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html#index-creation) 自动创建索引, 你可以在集群中验证这个设置: `action.auto_create_index: false`.


#### MySQL 存储
Zipkin 的 MySQL 存储组件支持 5.7 版本
当 `STORAGE_TYPE` 设置为 `mysql` 时，以下属性生效：

* `MYSQL_DB`: MySQL 使用数据库，默认为 "zipkin".
* `MYSQL_USER` and `MYSQL_PASS`: MySQL 认证信息, 默认值为空.
* `MYSQL_HOST`: 默认值为 localhost
* `MYSQL_TCP_PORT`: 默认值为 3306
* `MYSQL_MAX_CONNECTIONS`:  MySQL 最大连接数, defaults to 10
* `MYSQL_USE_SSL`: 需要 `javax.net.ssl.trustStore` and `javax.net.ssl.trustStorePassword`, 默认为 false.

注意：不建议将此模块用于生产用途。使用前，需要进行以下环境配置：

```bash
# Barracuda supports compression (In AWS RDS, this must be assigned in a parameter group)
$ mysql -uroot -e "SET GLOBAL innodb_file_format=Barracuda"
# This command should work even in RDS, and return "Barracuda"
$ mysql -uroot -e "show global variables like 'innodb_file_format'"

# install the schema and indexes
# sql 文件获取：https://github.com/openzipkin/zipkin/blob/master/zipkin-storage/mysql-v1/src/main/resources/mysql.sql
$ mysql -uroot -e "create database if not exists zipkin"
$ mysql -uroot -Dzipkin < zipkin-storage/mysql-v1/src/main/resources/mysql.sql
```

或者，您可以 `MYSQL_JDBC_URL` 自己使用并指定完整的 JDBC url。请注意，使用上述单独设置构建的 URL 还将包含以下参数： `?autoReconnect=true&useSSL=false&useUnicode=yes&characterEncoding=UTF-8 `。

示例用法：

```bash
$ STORAGE_TYPE=mysql MYSQL_USER=root java -jar zipkin.jar
```

### Throttled 存储 (实验性)
这些设置可用于帮助调整 Zipkin 将数据刷新到另一个底层 `StorageComponent` （例如 Elasticsearch）的速率：
* `STORAGE_THROTTLE_ENABLED`: Enables throttling
* `STORAGE_THROTTLE_MIN_CONCURRENCY`: Minimum number of Threads to use for writing to storage.
* `STORAGE_THROTTLE_MAX_CONCURRENCY`: Maximum number of Threads to use for writing to storage.
* `STORAGE_THROTTLE_MAX_QUEUE_SIZE`: How many messages to buffer while all Threads are writing data before abandoning a message (0 = no buffering).

由于此功能是实验性的，因此不建议在生产环境中运行此功能。

## 收集器

### HTTP 收集器
HTTP 收集器默认启用。 他支持 `POST /api/v1/spans` and `POST /api/v2/spans`.
HTTP 收集器默支持以下配置:

环境变量 | 	属性 | 描述
--- | --- | ---
`COLLECTOR_HTTP_ENABLED` | `zipkin.collector.http.enabled` | `false` 禁用 HTTP 收集器。默认为 `true`

### Scribe (Legacy) Collector

支持 Scribe 的收集器在 `COLLECTOR_SCRIBE_ENABLED=true` 时启用. 不鼓励新站点使用此收集器，因为 Scribe 是一种存档技术。

环境变量 | 	属性 | 描述
--- | --- | ---
`COLLECTOR_PORT` | `zipkin.collector.scribe.port` | 监听 thrift RPC scribe 请求的端口。默认为 9410
`SCRIBE_CATEGORY` | `zipkin.collector.scribe.category` | 类别 zipkin 将从中消耗。默认为 `zipkin`


### ActiveMQ 收集器
Zipkin 的 ActiveMQ 收集器组件支持 v5.x 版本，当配置 `ACTIVEMQ_URL` 值时启用，支持以下属性配置

环境变量 | 	属性 | 描述
--- | --- | ---
`COLLECTOR_ACTIVEMQ_ENABLED` | `zipkin.collector.activemq.enabled` | `false` 禁用 ActiveMQ 收集器。默认为 `true`.
`ACTIVEMQ_URL` | `zipkin.collector.activemq.url` | [Connection URL](https://activemq.apache.org/uri-protocols) 连接设置, 例如 `tcp://localhost:61616` 或 `failover:(tcp://localhost:61616,tcp://remotehost:61616)`
`ACTIVEMQ_QUEUE` | `zipkin.collector.activemq.queue` | 从中收集消息的队列名称。 默认为 `zipkin`
`ACTIVEMQ_CLIENT_ID_PREFIX` | `zipkin.collector.activemq.client-id-prefix` | 队列使用者的客户端ID前缀。默认为 `zipkin`
`ACTIVEMQ_CONCURRENCY` | `zipkin.collector.activemq.concurrency` | 并发消费数量。 默认为 `1`
`ACTIVEMQ_USERNAME` | `zipkin.collector.activemq.username` | ActiveMQ 连接用户名
`ACTIVEMQ_PASSWORD`| `zipkin.collector.activemq.password` | ActiveMQ 连接密码

示例用法：

```bash
$ ACTIVEMQ_URL=tcp://localhost:61616 java -jar zipkin.jar
```

### Kafka 收集器
Zipkin 的 Kafka 收集器组件支持 v0.10+ 版本，当配置 `KAFKA_BOOTSTRAP_SERVERS` 值时启用，支持以下属性配置

关于 kafka 的新消费者配置请看 [这里](https://kafka.apache.org/documentation/#newconsumerconfigs).

变量 | New Consumer Config | 描述
--- | --- | ---
`COLLECTOR_KAFKA_ENABLED` | N/A | `false` 禁用 Kafka 收集器。默认为 `true`.
`KAFKA_BOOTSTRAP_SERVERS` | bootstrap.servers | 以逗号分隔的连接配置列表, 例如： 127.0.0.1:9092。无默认值
`KAFKA_GROUP_ID` | group.id | 此进程所代表的消费组。默认为 `zipkin`
`KAFKA_TOPIC` | N/A | kafka 消费者 topic 配置。默认为 `zipkin`
`KAFKA_STREAMS` | N/A | topic 消费线程数。默认为  `1`

示例用法：

```bash
$ KAFKA_BOOTSTRAP_SERVERS=127.0.0.1:9092 java -jar zipkin.jar
```

#### 其他的 kafka 消费者属性配置
您可能需要设置其他 [Kafka 消费者属性](https://kafka.apache.org/documentation/#newconsumerconfigs)，除了由收集器定义的具有显式属性的那些。在这种情况下，您需要在该属性名称前面加上前缀 `zipkin.collector.kafka.overrides` 并将其作为系统属性参数传递。
例如，要覆盖 `auto.offset.reset` 属性, 你需要设置一个名为 `zipkin.collector.kafka.overrides.auto.offset.reset` 的属性:

```bash
$ KAFKA_BOOTSTRAP_SERVERS=127.0.0.1:9092 \
    java -Dzipkin.collector.kafka.overrides.auto.offset.reset=latest -jar zipkin.jar
```

#### 详细示例

针对在 Docker 中运行的 Kafka 的示例：

```bash
$ export KAFKA_BOOTSTRAP_SERVERS=$(docker-machine ip `docker-machine active`)
# 后台运行 kafka
$ docker run -d -p 9092:9092 \
    --env ADVERTISED_HOST=$KAFKA_BOOTSTRAP_SERVERS \
    --env AUTO_CREATE_TOPICS=true \
    spotify/kafka
# 通过 $KAFKA_BOOTSTRAP_SERVERS 环境变脸启动 zipkin 服务
$ java -jar zipkin.jar
```

多个 bootstrap servers 配置:

```bash
$ KAFKA_BOOTSTRAP_SERVERS=broker1.local:9092,broker2.local:9092 \
    java -jar zipkin.jar
```

备用 topic 名称配置:

```bash
$ KAFKA_BOOTSTRAP_SERVERS=127.0.0.1:9092 \
    java -Dzipkin.collector.kafka.topic=zapkin,zipken -jar zipkin.jar
```

将 bootstrap servers 指定为系统属性，而不是环境变量:

```bash
$ java -Dzipkin.collector.kafka.bootstrap-servers=127.0.0.1:9092 \
    -jar zipkin.jar
```

### RabbitMQ 收集器
当设置 `addresses` 或 `uri` 的时候， [RabbitMQ 收集器](../zipkin-collector/rabbitmq) 会启动

示例用法：

```bash
$ RABBIT_ADDRESSES=localhost java -jar zipkin.jar
```

### gRPC 收集器 (实验性)
您可以通过设置 `COLLECTOR_GRPC_ENABLED=true` 启用 gRPC 收集器端点。 `zipkin.proto3.SpanService/Report` 端点会和普通 http 服务一样运行。

示例用法：

```bash
$ COLLECTOR_GRPC_ENABLED=true java -jar zipkin.jar
```

由于此服务是实验性的，因此不建议在生产环境中运行此服务。

## 自我追踪
存在自我跟踪以帮助解决 zipkin 服务器的性能问题。在生产部署应该将自我跟踪的应将采样率从 1.0 (100%) 降低到更小的速率，例如 0.001（0.1% 或千分之一）。

当配置 `zipkin.self-tracing.enabled=true`, Zipkin 将自动启动对服务 "zipkin-server" 的 API 的调用进行自我追踪

变量 | 属性 | 描述
--- | --- | ---
SELF_TRACING_ENABLED | zipkin.self-tracing.enabled | 设置为 true 以启用自我跟踪。默认为 false
SELF_TRACING_SAMPLE_RATE | zipkin.self-tracing.sample-rate | 要保留的自我跟踪的百分比，默认为始终采样 (1.0)。
SELF_TRACING_FLUSH_INTERVAL | zipkin.self-tracing.flush-interval | 将自跟踪数据刷新到存储的时间间隔（以秒为单位）。默认为 1

### 128 位跟踪 ID

Zipkin 支持 64 位和 128 位跟踪标识符，通常序列化为 16 或 32 个字符的十六进制字符串。默认情况下，向 zipkin 报告的具有相同跟踪 ID 的跨度将被考虑在同一跟踪中。

例如， `463ac35c9f6413ad48485a3953bb6124` 是 128 位的跟踪 ID，而 `48485a3953bb6124` 是 64 位的。

注意：跟踪中的跨度（或父）ID 是 64 位的，无论其跟踪 ID 的长度或值如何

#### 从 64 位迁移到 128 位跟踪 ID

除非您在所有应用程序都支持时仅发出 128 位跟踪，否则将应用程序从 64 位跟踪 ID 更新到 128 位跟踪 ID 的过程会导致混合状态。这种混合状态通过设置 `STRICT_TRACE_ID=false` 来缓解。如下所述，迁移完成后，删除 `STRICT_TRACE_ID=false` 设置，或者将其设置为 true

以下是一些跟踪ID，它们可以帮助您了解此设置过程中发生的情况。

* Trace ID A: 463ac35c9f6413ad48485a3953bb6124
* Trace ID B: 48485a3953bb6124
* Trace ID C: 463ac35c9f6413adf1a48a8cff464e0e
* Trace ID D: 463ac35c9f6413ad

在 64 位环境中，跟踪 ID 看起来像上面的 B 或 D。当应用程序升级到 128 位检测并决定创建 128 位跟踪时，其跟踪 ID 将类似于上面的 A 或 C。

尚不支持 128 位的应用程序通常只保留跟踪 ID 最右边的 16 个字符。发生这种情况时，同一跟踪可能会报告为跟踪 ID A 或跟踪 ID B。

默认情况下，Zipkin 会认为这些是不同的跟踪 ID，因为它们是不同的字符串。在从 64 位到 128 位跟踪 ID 的转换过程中，跨度将出现在两个 ID 之间。例如，它可能以跟踪 ID A 开始，但下一跃点可能会将其截断为跟踪 ID B。这会使系统无法用于执行升级的应用程序。

解决此问题的一种方法是在所有应用程序都支持之前不使用 128 位跟踪 ID。这以协调为代价防止了混合情况。另一种方法是设置 `STRICT_TRACE_ID=false`

当设置 `STRICT_TRACE_ID=false` ，在对跟踪进行分组或检索时，只考虑 32 个字符的跟踪 ID 中最右边的 16 个。此设置应仅在从 64 位跟踪 ID 转换到 128 位跟踪 ID 时应用，并在转换完成后删除。

请查看 [https://github.com/openzipkin/b3-propagation/issues/6](https://github.com/openzipkin/b3-propagation/issues/6) 了解 128 位跟踪标识符上已知开源库的状态。

查看源码 `zipkin2.storage.StorageComponent.Builder` 了解更多信息

## TLS/SSL
如果需要，可以使 Zipkin-server 与 TLS 一起运行：

```bash
# assuming you generate the key like this
keytool -genkeypair -alias mysite -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore zipkin.p12 -validity 3650

java -jar zipkin.jar --armeria.ssl.key-store=zipkin.p12 --armeria.ssl.key-store-type=PKCS12 --armeria.ssl.key-store-password=123123 --armeria.ssl.key-alias=mysite  --armeria.ssl.enabled=true --armeria.ports[0].port=9411 --armeria.ports[0].protocols[0]=https
```

## 运行在 Docker 中
zipkin-server 的发布版本以 `openzipkin/zipkin` 发布在 [Docker Hub](https://hub.docker.com/) 。点击 [docker-zipkin](https://github.com/openzipkin/docker-zipkin) 查看详情

## 本地构建

要从源码构建和运行服务器，请输入以下内容
```bash
# Build the server and also make its dependencies
$ ./mvnw -T1C -q --batch-mode -DskipTests --also-make -pl zipkin-server clean package
# Run the server
$ java -jar ./zipkin-server/target/zipkin-server-*exec.jar
# or Run the slim server
$ java -jar ./zipkin-server/target/zipkin-server-*slim.jar
```
