# 开发者文档

# 1  数据库设计

## 1.1 数据库关系总体设计图

![](/md/db.jpg)

图1.1 数据库设计图

  

## 1.2 数据库表

### 1.2.1 用户表

```sql
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `pwd` varchar(64) NOT NULL,
  `real_name` varchar(16) NOT NULL,
  `role_id` int(11) NOT NULL COMMENT '0超级管理员 1管理员 2教师 3学生',
  `last_login_time` datetime DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) USING HASH,
  UNIQUE KEY `real_name` (`real_name`)
)
```

| 含义         | 字段名称        | 数据类型 | 长度 | 外键    | 备注                           |
| ------------ | --------------- | -------- | ---- | ------- | ------------------------------ |
| 用户ID       | id              | int      |      |         | 主键, 自动增长              |
| 用户登陆名   | name            | nvarchar | 16   |         | 学号或教职工号 |
| 登陆密码     | pwd             | nvarchar | 32   |         |                                |
| 真实姓名     | real_name       | nvarchar | 4    |         |                                |
| 角色ID       | role_id         | int      |      | role.id |                                |
| 最后登陆时间 | last_login_time | datetime |      |         |                                |
| 添加时间     | create_time     | datetime |      |         |                                |
| 手机号       | phone           | nvarchar | 16   |         |                                |
| Email地址    | email           | nvarchar | 64   |         |                                |
| 状态         | status          | int      |      |         | 0待审核, 1审核通过    |

用户表的name属性为用户的登陆名, 在本系统中, 如果是教师用户此字段为教师的教职工号。如果是学生用户, 此字段则为学生的学号。



# 2. 接口设计

## 2.1 登陆接口

请求:

```json
{"username":"xxx", password:"***"}
```

返回:

```json
{"success":true, "mess":""}
```

