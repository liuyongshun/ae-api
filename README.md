### 开发环境启动

```
$ npm i
$ npm run dev
```
### 生产部署

```
bash
$ npm start
$ npm stop
```

### egg

**Egg 继承于 Koa 在它的模型基础上，进一步对它进行了一些增强**

**Koa 和 Express区别**

Middleware

- Koa 的中间件和 Express 不同，Koa 选择了洋葱圈模型, 所有的请求经过一个中间件的时候都会执行两次(基于async await)，可以非常方便的实现后置处理逻辑

Node.js 8 正式进入 LTS(Long Term Support) 后，async function 可以在 Node.js 中使用并且没有任何性能

- 基于小版本号升级来说，LTS和Maintenanece版本没有激进的新特性更新，更加适应于生产环境，升级小版本号的回归工作量和风险性会小很多。

- 基于主版本号升级来说，LTS和Maintenanece版本维护的生命周期长，不需要经常升级主版本号，而奇数版本则不然，通常半年多就得升级一次主版本号。

Context

- Koa 增加了一个 Context 的对象，作为这次请求的上下文对象,可以将一次请求相关的上下文都挂载到这个对象上。同时 Context 上也挂载了 Request 和 Response 两个对象

### 目录设计结构

```
egg-project
├── package.json
├── app.js (可选)
├── app
|   ├── router.js              // 路由设计,描述请求 URL 和具体承担执行动作的 Controller 的对应关系
│   ├── controller             // 解析用户的输入，处理后返回相应的结果, 处理过程复杂放入到service
│   |   └── home.js
│   ├── service (可选)         // 业务逻辑处理
│   |   └── user.js
│   ├── middleware (可选)      // 统一错误处理
│   |   └── error_handler.js
│   ├── public (可选)          // 当使用ejs或其他模版开发页面时,各类公告资源css, js, 等静态资源放入到这里
│   |   └── reset.css
│   ├── view (可选)            // 模版渲染
│   └── home.tpl
├── model (可选)               // 设计数据库的表结构
│   └── user.js
└── config  // 配置文件,可以通过环境变量指定config文件读取,所有环境都会加载这个配置文件，一般也会作为开发环境的默认配置文件。
    ├── plugin.js
    ├── config.default.js
    ├── config.prod.js
    ├── config.test.js (可选)
    ├── config.local.js (可选)
    └── config.unittest.js (可选)

```

### 插件配置

例mongod

- 安装egg-mongoose

- 在config/plugin.js 内配置

```
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
```

- 在config.default.js链接mongod

```
config.mongoose = {
    url: 'mongodb://localhost:27017/ae_platform',
    server: {
      poolSize: 40,
    },
  };
```
