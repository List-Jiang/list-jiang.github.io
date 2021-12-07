### 查看容器当前日志
```sh
## 查看容器 gitlab 自 2021-12-06 后的当前最新50条日志
 docker logs -f -t --since="2021-12-06" --tail=50 gitlab
```