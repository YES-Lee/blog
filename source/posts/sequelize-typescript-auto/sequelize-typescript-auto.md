---
title: sequelize-typescript-auto
categories:
  - 技术
tags:
  - javascript
  - typescript
  - orm
  - nodejs
  - sequelize
thumbnail: ./cover.jpg
color: '#111'
toc: true
date: 2020-02-15 22:06:10
keywords:
  - sequelise-typescript-auto
  - sequelize自动生成models
  - 从数据库自动生成models
---

从`mysql`数据库自动生成`sequelize-typescript`风格的`models`，最初用于`nestjs`项目，同时也适用与其它使用`sequelize-typescript`的项目。

<!-- more -->

> 项目地址：https://github.com/YES-Lee/sequelize-typescript-auto

## 使用

```bash
// 安装
npm install -g sequelize-typescript-auto
// 使用
sequelize-typescript-auto -H localhost -d test -u root -x 123456 -p 3306 -f test_ -o ./_models
```

## 选项

```bash
使用: sequelize-typescript-auto [选项]

选项:
  -V, --version              版本
  -H, --host <host>          数据库地址
  -d, --database <database>  数据库名称
  -u, --username <username>  用户名
  -x, --password <password>  密码
  -p, --port <port>          数据库端口，默认为3306
  -o, --output <dir>         model输出文件夹
  -f, --prefix <prefix>      在文件名和model类名中过滤数据库前缀
  -h, --help                 显示帮助信息
```

## Features

- [x] 支持 mysql
- [x] 命令行使用
- [ ] 编程方式使用
- [ ] 生成外间约束关系
- [ ] 检查文件哈希值
- [ ] 生成计数器
- [ ] 支持 SQL Server
- [ ] 支持 PostgreSQL
