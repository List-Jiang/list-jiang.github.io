---
title: CompletableFuture
icon: java
star: true
sticky: 20
author: List Jiang
breadcrumb: false
tags:
  - java
  - note
---

## 介绍
jdk 1.8 新增的用于处理并发任务的一个工具类，jdk9 做了增强。
他实现 CompletionStage 接口定义的所有动作 api ，使得我们可以直接通过这些 api 对任意动作根据实际场景进行组合。
他实现 Future 接口的相关 api ，使得我们可以直接通过这些 api 后去异步任务的结果。

**经典下单场景**
- 库存减
- 订单增
```java
    // 案例代码
    @GlobalTransactional
    public void purchase(String userId, String commodityCode, int orderCount) {
        // 采用并行方式触发任务
        CompletableFuture<Boolean> exceptionally = CompletableFuture.supplyAsync(() -> {
                    // 库存减
                    stockFeignClient.deduct(commodityCode, orderCount);
                    return true;
                }).thenCombine(CompletableFuture.supplyAsync(() -> {
                    // 订单增
                    orderFeignClient.create(userId, commodityCode, orderCount);
                    return true;
                }), (state1, state2) -> state1 && state2 && validData())
                .exceptionally(throwable -> false);

        if (!exceptionally.join()) {
            throw new RuntimeException("账户或库存不足,执行回滚");
        }
    }
```

## 常用 API
### 准备运行一个异步任务

| api | 功能 | 详情 |
| --- | --- | --- |
| `runAsync(Runnable)` | 塞入一个没有返回值的异步任务 |  |
| `runAsync(Runnable,Executor)` | 指定线程池塞入一个没有返回值的异步任务 |  |
| `supplyAsync(Supplier<U>)` | 塞入一个有返回值的异步任务 |  |
| `supplyAsync(Supplier<U>,Executor)` | 指定线程池塞入一个有返回值的异步任务 |  |

### 构建任务链

| api | 功能 | 详情 |
| --- | --- | --- |
| `thenAcceptBoth(CompletionStage<U> c, BiConsumer<T, U>)` | 将上一个任务与入参任务 c 并行处理，得到两个结果进行消费 | 用于组合两个并行任务，无返回值 |
| `thenCombine(CompletionStage<U> c, BiFunction<T, U, R> b)` | 将上一个任务与入参任务 c 并行处理，得到两个的结果后执行 b 函数并返回一个值 | 用于组合两个并行任务，有返回值 |
| `runAfterBoth(CompletionStage<?> other,Runnable action)` | 将上一个任务与入参任务 other 并行处理，两个执行完后执行 action | 不管上两个的结果，无返回值 |
| `thenCompose(Function<T, CompletionStage<U>>)` | 基于上个任务的结果进行下一个任务 | 用户组合两个具有先后顺序的串行任务 |
| `thenAccept(Consumer<T>)` | 消费上一个任务的结果 | 中间消费 |
| `thenRun(Runnable action)` | 上个任务执行，执行下个任务 | 连续任务处理，都没有返回值 |
| `thenApply(Function<T, U>)` | 基于上一个任务的结果进行处理再返回 | 也可以返回一个 CompletableFuture 那么效果和 thenCompose 一样 |
| `applyToEither(CompletionStage<T>, Function<T, U>)` | 两个任务并行执行，先得到的结果进行转换 | 等公交，谁先到做谁的公交回家 |
| `acceptEither(CompletionStage<T>, Consumer<T>)` | 两个任务并行执行，先得到的结果进行消费 | 卖包子，猪肉白菜陷的与猪肉胡萝卜馅的，哪个先熟吃哪个 |
| `allOf(CompletableFuture<?>... cfs)` | 当所有给定的 CompletableFuture 完成时，返回一个新的 CompletableFuture。 | 所有的都完成结束，不返回值 |
| `anyOf(CompletableFuture<?>... cfs)` | 当任意一个给定的 CompletableFuture 完成时，返回一个新的 CompletableFuture。 | 任意一个完成时结束，返回这个完成的返回的值 |

### 获取结果
| api | 功能 | 详情 |
| --- | --- | --- |
| `join()` | 获得最终结果 | 不抛出异常 |
| `get() throws InterruptedException, ExecutionException` | 获得最终结果 | 可能抛出 取消异常、执行异常或者中断异常 |
| `get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException` | 获得最终结果 | 除了上面的三个异常还有可能抛出超时异常 |
| `getNow(T valueIfAbsent)` | 该方法不阻塞，如果任务尚未完成，则返回默认值。 |  |
### 设定默认值、默认抛出异常
| api | 功能 | 详情 |
| --- | --- | --- |
| `complete(T valueIfAbsent)` | 如果此时任务没执行完成就设置一个默认值 | 如果调用该方法时，任务已经执行完成，返回 false。未执行完成则返回 true，并将其状态设置为完成状态 |
| `completeExceptionally(Throwable)` | 如果此时任务没执行完成就定义一个抛出异常 | 如果调用该方法时，任务已经执行完成，返回 false。未执行完成则返回 true，并将其状态设置为完成状态，获取结果时会抛出该设置的异常 |
| `obtrudeValue(T value)` | 强行设置返回值 | 不管任务此时是否完成都设置一个返回值 |
| `obtrudeException(Throwable ex)` | 强行设置抛出异常 | 不管任务此时是否完成都定义一个抛出异常 |
| `CompletableFuture<T> exceptionally(Function<Throwable, ? extends T> )` | 设置任务出异常后应该返回什么 | 当前面的任务出了异常时，就会返回T值；否则还是返回原先前面任务应该返回的值。 |
| `handle(BiFunction<T, Throwable, U>)` | 类似于 thenApply 和 exceptionally 的结合 | 任务成功则 T 为正常值， Throwable 为 null 。任务失败则 T 为 null ， Throwable 为抛出的异常 |
| `whenComplete(BiConsumer<T, Throwable>)` | 执行过程中获取结果与异常 | 任务成功则 T 为正常值， Throwable 为 null 。任务失败则 T 为 null ， Throwable 为抛出的异常 |

### 总结
基本能够覆盖生活中的所有并行、串行处理流程组合。
所有的 API 都是围绕着 Future 之间的运行关系(先后、并行)，然后针对每个 Future 执行可能得到的结果或者抛出的异常提供相应情景下的 API。
使用的话，我们可以直接构思一个操作就是一个 CompletableFuture 实例，而我们的所有业务的操作流程就是一个个 CompletableFuture 组合而成的，至于之间的关系是 并行 还是 串行，每个任务执行的结果，异常处理。我们都可以通过提供的 api 进行自由的组合设置。有个前提就是使用这个，必须先真正理解 jdk 的函数式接口抽象。需要有面向过程 **`动作/过程`** 的思维。

CompletableFuture 大致 API 笼统含义

- `then` 围绕 Future 关系组合
- `handle` 中间处理流程，类似于 stream 的 map API
- `Either` 围绕谁先到谁说了算
- `complete` 与任务完成状态相关。要么中途临时插手完成任务，要么设置任务完成时需要进行的操作
- `exceptionally**` 围绕异常相关处理
- `get` 与 `join` 都是获取结果， get 多几个异常，并且可以设置等待时间
- `run` 不接收上次的运行结果，直接往下继续
- `failed` 异常失败情景处理

