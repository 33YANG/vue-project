# vue-project

> 使用 **VUE2.0** 框架，**ElementUI** 自主搭建的一个后台管理系统部分页面

### 技术栈

- Vue项目 使用 **vue-cli3** 快速构建 使用 **vue-router** **vuex** **vue-loader** 开发
- **ElementUI** 按需引用UI组件
- 代码检查与格式化工具 **Eslint** + **Prettier**，自动查错+修复格式
- css预编译语言 **Less**
- 两个预制的不同 **主题切换**，加单独的完整颜色定制（**css变量var**）
- **Vue-i18n** 实现中文 + English
- **自适应**：手机、平板、PC不同分辨率
- 项目 **组件化** **模块化** 明确 
- **Yarn** 包管理，**Git** 工程代码管理
---

### 主要功能

- 数据显示主页
- 左侧菜单、顶部菜单
- 右侧设置 drawer
- 登录与注册页面
- 异常 404、500页面
- Modal 页面


![Preview_1](https://ftp.bmp.ovh/imgs/2021/03/c45fc73b17133db9.png)
![Preview_2](https://ftp.bmp.ovh/imgs/2021/03/a40a02623e4acc8c.png)
![Preview_3](https://ftp.bmp.ovh/imgs/2021/03/8957b97ce063bc04.png)
![Preview_4](https://ftp.bmp.ovh/imgs/2021/03/b6fd4813808875ae.png)
![Preview_5](https://ftp.bmp.ovh/imgs/2021/03/576ee7e0152e8b09.png)

## 开发

`yarn` 安装依赖
```
yarn install
```

#### Start for development 
编译代码并带有热重载的功能的开发环境
```
yarn serve
```

#### Build for production
为生产环境构建版本
```
yarn build
```