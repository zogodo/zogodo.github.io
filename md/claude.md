# Windows 安装 Claude Code

## 安装

Win + R 打开 CMD

```sh
npm config set registry http://mirrors.cloud.tencent.com/npm/
npm config get registry
npm install -g @anthropic-ai/claude-code

claude
```

## 配置

修改 `C:\用户\<用户名>\.claude.json` 添加:

```json
  "hasCompletedOnboarding": true,
```

## 阿里云百炼 API_KEY

生成阿里云百炼 API_KEY <https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key>

模型列表及用量: <https://bailian.console.aliyun.com/cn-beijing?tab=model#/model-usage>

## 设置环境变量

```sh
setx ANTHROPIC_API_KEY "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
setx ANTHROPIC_BASE_URL "https://dashscope.aliyuncs.com/apps/anthropic"
setx ANTHROPIC_MODEL "glm-5"  #选你要的模型
```

关闭 CMD 重新打开, 执行看环境变量是否设置成功


```sh
echo %ANTHROPIC_API_KEY%
echo %ANTHROPIC_BASE_URL%
echo %ANTHROPIC_MODEL%
```

## 开始使用

```sh
cd D:\path\to\project\
claude
```

