# 使用gprof排查C++Server性能问题

## 测试C++Server程序代码

```cpp
#include <stdio.h>
#include <dlfcn.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>

void SignalHandler(int sig)
{
    printf("SIGSEGVaaaa\n");
    void (*_mcleanup)(void);
    _mcleanup = (void (*)(void))dlsym(RTLD_DEFAULT, "_mcleanup");
    if (_mcleanup == NULL)
             printf("SIGSEGVzzzz\n");
    else _mcleanup();
    _exit(0);
}

void fun1()
{
    int a = 0;
    while(1)
    {
        a++;
    }
}

int main()
{
    signal(SIGSEGV, SignalHandler);

    printf("start\n");
    fun1();
    printf("end\n");
}

```

## 一键脚本

```shell
g++ -Wl,--no-as-needed -ldl -pg main.cpp
./a.out &
sleep 4
kill -SIGSEGV `ps -ef | grep a.out | awk '{print $2}'`
gprof -b a.out gmon.out > report.txt
```

## 结果

report.txt

```sh
Flat profile:

Each sample counts as 0.01 seconds.
  %   cumulative   self              self     total
 time   seconds   seconds    calls   s/call   s/call  name
101.12      4.16     4.16        1     4.16     4.16  fun1()
^L
                        Call graph


granularity: each sample hit covers 2 byte(s) for 0.24% of 4.16 seconds

index % time    self  children    called     name
                                                 <spontaneous>
[1]    100.0    0.00    4.16                 main [1]
                4.16    0.00       1/1           fun1() [2]
-----------------------------------------------
                4.16    0.00       1/1           main [1]
[2]    100.0    4.16    0.00       1         fun1() [2]
-----------------------------------------------
^L
Index by function name

   [2] fun1()

```



参考: https://blog.csdn.net/stanjiang2010/article/details/5655143