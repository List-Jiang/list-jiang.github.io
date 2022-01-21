---
title: TCP/IP
icon: OS
time: 2022-01-21
category: 网络
  - TCP
  - IP
---

## HTTP 协议
### HTTP/1 1999年
每次请求， 基于 `TCP` 协议 client 端重新与 server 端建立一条双向连接，客户端发送完数据，服务端全部接收，并返回响应数据，一次请求正常完成。

### HTTP/2 2005年5月 `RFC 7540` 
在 HTTP/1 的基础上优化
- 多路复用
在 HTTP/1 的基础上优化，合并多个 TCP 连接为一个，多个请求复用一个 TCP 连接
- 服务器推送 [Server Push](https://www.cnblogs.com/fengxuehuanlin/p/5347347.html)
server 端不再死死的等待 client 的请求，可以主动向 client 端发送数据
- 头部压缩
HTTP标头字段被压缩成一系列包含头块碎片帧

### HTTP/3 2017年
#### HTTP/2 进化空间
- HTTP/2 的数据传输是有序的，即发送一串数据，必定是按照顺序来的，如果中间存在丢失，后面的不会发送，会等中间的发送成功了再继续发送。
- HTTP/2 TCP与TLS叠加了握手时延，建链时长还有1倍的下降空间
- 基于TCP四元组确定一个连接，这种诞生于有线网络的设计，并不适合移动状态下的无线网络，这意味着IP地址的频繁变动会导致TCP连接、TLS会话反复握手，成本高昂。
#### 解决方案
- HTTP/3 基于UDP协议重新定义了连接，在 QUIC(quick udp internet connection) 层实现了无序、并发字节流的传输，解决了队头阻塞问题（包括基于 QPACK 解决了动态表的队头阻塞）；
- HTTP/3 重新定义了`TLS`协议加密`QUIC`头部的方式，既提高了网络攻击成本，又降低了建立连接的速度（仅需1个`RTT`就可以同时完成建链与密钥协商）；
- HTTP/3 将`Packet`、`QUIC Frame`、`HTTP3 Frame`分离，实现了连接迁移功能，降低了5G环境下高速移动设备的连接维护成本。