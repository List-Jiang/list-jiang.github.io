# 斐波那契数列解法
```java
    // 迭代
    static int test1(int n) {
        return n >> 1 <= 0 ? Math.max(n, 0) : test1(n - 1) + test1(n - 2);
    }
    // 递归
    static int test2(int n) {
        if (n==0)
            return 0;
        int a = 0;
        int b = 1;
        while (--n>0){
            b = b + a;
            a = b - a;
        }
        return b;
    }
```