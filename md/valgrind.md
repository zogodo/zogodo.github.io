# 使用Valgrind排查C++Server内存泄漏

## 测试C++Server程序代码

```cpp
#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>

class ClassA {
    int a;
    float b;
    char c;
};

int main()
{
    printf("Hello world! C++\n");

    int* p1 = (int*)malloc(sizeof(int)*100);
    int* p2 = new int[200];
    ClassA* p3 = new ClassA();

    if (p1 && p2 && p3) {
        printf("malloc OK\n");
    } else {
        printf("malloc NO\n");
    }

    int i = 0;
    while (1) {
        printf("I'm here [%d]\n", i++);
        sleep(5);
    }

    printf("return!\n");

    return 0;
}

```

## 编译

```shell
g++ valgrind.cpp
```

## 用Valgrind运行

```shell
valgrind ./a.out #如果有参数,直接加在后面
```

## 查找进程id

```shell
ps -ef | grep valgrind
41331    32694  1480  5 11:27 pts/58   00:00:00 valgrind ./a.out
```

## 杀死进程

打开另一个终端

```shell
kill -TERM 32694  #或者 kill -SIGBUS 32694
```

在原来启动程序的终端会看到:

```shell
==32694== 
==32694== HEAP SUMMARY:
==32694==     in use at exit: 1,212 bytes in 3 blocks
==32694==   total heap usage: 3 allocs, 0 frees, 1,212 bytes allocated
==32694== 
==32694== LEAK SUMMARY:
==32694==    definitely lost: 0 bytes in 0 blocks
==32694==    indirectly lost: 0 bytes in 0 blocks
==32694==      possibly lost: 0 bytes in 0 blocks
==32694==    still reachable: 1,212 bytes in 3 blocks
==32694==         suppressed: 0 bytes in 0 blocks
==32694== Rerun with --leak-check=full to see details of leaked memory
==32694== 
==32694== For counts of detected and suppressed errors, rerun with: -v
==32694== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 4 from 4)
Terminated
```

可以看到, 还有1212 字节在3个块中没有被释放.

