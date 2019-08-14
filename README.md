Node+Express搭建个人博客（纯后端）

项目的目录结构如下：

tlexpress-blog
│  CHANGELOG.md
│  package.json
│  README.md
│  server.js 
│      
├─app
│  ├─apidoc
│  │          
│  ├─controllers
│  │      
│  ├─middlewares
│  │      
│  ├─models
│  │      
│  ├─myutil
│  │
│  ├─public
│  │          
│  ├─routes
│  │      
│  └─services
│          
├─build
│                  
├─config
│      
├─logs
│                    
├─resource
│
└─test

目录结构说明
目录结构说明如下：

CHANGELOG.md项目更新日志的记录文件。
server.js程序的初始化和启动文件。
app/apidoc/**用于编写接口文档说明，然后使用apidoc生成接口文档。
app/controller/**用于接收和处理用户输入的参数，然后将处理结果返回。
aoo/middleware/**用于编写中间件函数。
app/model/**用于编写定义数据库相关的文件。
app/myutil/**用于存放编写的工具函数。
app/public/**用于存放项目的静态资源。
app/routes/routes.js用于添加和配置路由规则。
app/service/**用于编写业务逻辑代码，可供controller层调用。
build/**用于项目初次部署时初始化基础数据，比如初始化管理员。
config/**用于项目的相关配置文件，比如数据库配置
logs/**用于存放程序的请求日志、错误日志等日志文件。
resource/**用于存放文档资料。
test/**用于单元测试。
