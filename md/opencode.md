# Windows 安装 OpenCode

## 安装 node 和 python

node 下载: <https://nodejs.org/zh-cn/download>

python 下载: <https://www.python.org/downloads/>

## 获取阿里云百炼 API_KEY

生成阿里云百炼 API_KEY: <https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key>

模型列表及用量: <https://bailian.console.aliyun.com/cn-beijing?tab=model#/model-usage>

## 安装 OpenCode

### 安装桌面版

Windows (x64): <https://opencode.ai/zh/download>

安装好后打开 OpenCode 桌面版

任选一个 Alibaba 的模型并输入自己的 API_KEY

![](md/opencode.jpg)

### 安装CMD版

```sh
npm config set registry http://mirrors.cloud.tencent.com/npm/
npm config get registry
npm i -g opencode-ai
```

启动

```sh
opencode
```

启动后输入 `/connect` 然后选择 `Alibaba (China)` 然后输入自己的 API_KEY

然后选择模型



## VsCode 插件

先安装完 CMD 版然后直接插件商店搜索安装 opencode
