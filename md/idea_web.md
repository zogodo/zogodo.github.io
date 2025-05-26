# 用 idea 新建一个简单 web 项目

# 1. 版本说明

我用的是 IntelliJ IDEA Ultimate [Version 2016.2.5](https://www.jetbrains.com/idea/download/other.html)

下载地址: [https://download.jetbrains.com/idea/ideaIU-2016.2.5.exe](https://download.jetbrains.com/idea/ideaIU-2016.2.5.exe)

# 2. 开始

## 2.1 新建项目

![idea_web-1](md/idea_web/idea_web-1.png)

![idea_web-1](md/idea_web/idea_web-2.png)

![idea_web-1](md/idea_web/idea_web-3.png)

## 2.2 配置 Tomcat

![idea_web-1](md/idea_web/idea_web-4.png)

### 2.2.1 全局 Tomcat

![idea_web-1](md/idea_web/idea_web-5.png)

### 2.2.2 当前项目 Tomcat

![idea_web-1](md/idea_web/idea_web-6.png)

![idea_web-1](md/idea_web/idea_web-7.png)

## 2.3 新建 Servlet

![idea_web-1](md/idea_web/idea_web-8.png)

![idea_web-1](md/idea_web/idea_web-9.png)

## 2.4 修改 index.jsp 和 ServletGit.java

### 2.4.1 index.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Hello world!</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>

```

### 2.4.2 ServletGit.java

```java
package com.zogodo.tc1git;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

@WebServlet("/git")
public class ServletGit extends javax.servlet.http.HttpServlet
{
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    	throws Exception
    {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        String text = request.getParameter("text");

        PrintWriter out = response.getWriter();
        out.println(text);
    }
}

```

# 3. 启动

![idea_web-1](md/idea_web/idea_web-10.png)

![idea_web-1](md/idea_web/idea_web-11.png)

![idea_web-1](md/idea_web/idea_web-12.png)




