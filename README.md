# exp8-static

校园活动管理系统 — 纯静态演示版

基于原 Spring Boot + Thymeleaf 项目改造，去除所有后端依赖，使用纯 HTML/CSS/JS 实现，数据通过 `localStorage` 模拟持久化，可直接部署至 GitHub Pages。

## 功能特性

- **活动管理**：活动列表展示、搜索过滤、排序（默认/最新/最早/可报名）
- **活动详情**：双栏布局，侧边栏显示报名信息，面包屑导航
- **在线报名**：用户可报名/取消活动，进度条实时显示
- **活动发布**：管理员可创建、编辑、删除活动，支持批量移除已报名成员
- **用户系统**：登录、注册、个人中心（报名记录、资料编辑、头像更换）
- **开发文档**：时间线式开发日志 + 技术文档（侧边导航）

## 技术栈

- HTML5 + CSS3 + JavaScript（ES6+）
- Bootstrap 5.3 + Bootstrap Icons
- Google Fonts (Inter)
- localStorage 模拟后端数据

## 设计风格

- Glassmorphism（毛玻璃）卡片与导航栏
- Indigo 主色调（#6366f1）
- Hero Banner 大图横幅
- 响应式布局，适配移动端

## 项目结构

```
exp8-static/
├── index.html            # 活动列表页
├── login.html            # 登录页
├── register.html         # 注册页
├── activity-detail.html  # 活动详情页
├── activity-form.html    # 活动发布/编辑页（管理员）
├── profile.html          # 个人中心
├── doc-devlog.html       # 开发日志
├── doc-tech.html         # 技术文档
├── css/
│   └── style.css         # 全局样式
└── js/
    ├── mock-data.js      # 模拟数据与 CRUD 函数
    └── app.js            # 公共逻辑（导航、页脚、权限、提示）
```

## 快速开始

1. 克隆仓库
2. 用浏览器直接打开 `index.html`，或部署至任意静态托管服务

## 测试账号

| 角色     | 用户名   | 密码     |
| -------- | -------- | -------- |
| 管理员   | admin    | admin123 |
| 普通用户 | zhangsan | 123456   |

## 说明

本仓库为原 Spring Boot 课程实验项目的纯静态化改造版本，保留全部前端交互逻辑，无需任何后端服务即可运行。所有数据均为模拟数据，不存在真实个人信息。
