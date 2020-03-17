# 使用 strace 排查程序崩溃退出原因

程序退出如果没有coredump, 我们可以利用strace来排查其退出原因

strace可以跟踪程序的系统调用, 例如:

```sh
strace -f cat /dev/null
```

监控后台进程退出原因

```sh
#strace.sh

if [ $# != 1 ]; then
    echo "$# USAGE: $0 pid"
    echo "like:  $0 1234"
    exit 1
fi

while [ true ]; do

    ps -p $1
    if [ $? != 0 ]; then
        exit 0
    fi

    min=$((`date +%M`/10))
    strace -o output.log.$min -f -F -tt -T -e trace=all -p $1 &
    /bin/sleep 600
    kill -9 `ps -ef |grep 'strace -o output.log' |grep -v 'grep' |awk '{print $2}'`

done
```

