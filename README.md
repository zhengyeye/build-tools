# build-tools
* grunt-test
    * 下载运行：需要 npm i 安装依赖包
    * 实践中使用grunt demo
    * 中文主页 : http://www.gruntjs.net/
    * 是一套前端**自动化构建**工具，一个基于nodeJs的命令行工具
    * 它是一个**任务运行器**, 配合其丰富强大的**插件**
    * 常用功能:
    * **合并文件**(js/css)
    * **压缩文件**(js/css)
    * **语法检查**(js/css)
    * **less/sass预编译处理** 
* 基于nodejs，因此需要安装nodejs
```
node -v       //查看版本号
```
* 目录结构
  ```
  |- build----------构建生成的文件所在的文件夹
      |-css---------压缩后的css文件夹
      |-js----------压缩后的js文件夹
  |- src------------源码文件夹   
      |- js---------------js源文件夹
      |- css--------------css源文件夹
  |- .csslintrc-----检查css语法错误
  |- .jshintrc-----检查javascript语法错误
  |- index.html-----页面文件
  |- Gruntfile.js---grunt配置文件(注意首字母大写)
  |- package.json---项目包配置文件
      {
        "name": "grunt-test",
        "version": "1.0.0"   
      }
  ``` 
* Grunt插件介绍
  * grunt官网的插件列表页面 http://www.gruntjs.net/plugins 
  * 插件分类:
    * grunt团队贡献的插件 : 插件名大都以contrib-开头
    * 第三方提供的插件 : 大都不以contrib-开头
  * 常用的插件:
    * grunt-contrib-clean——清除文件(打包处理生成的)
    * grunt-contrib-concat——合并多个文件的代码到一个文件中
    * grunt-contrib-uglify——压缩js文件
    * grunt-contrib-jshint——javascript语法错误检查；
    * grunt-contrib-cssmin——压缩/合并css文件
    * grunt-contrib-htmlmin——压缩html文件
    * grunt-contrib-imagemin——压缩图片文件(无损)
    * grunt-contrib-copy——复制文件、文件夹
    * **grunt-contrib-requirejs**——合并压缩requirejs管理的所有js模块文件
    * grunt-contrib-watch——实时监控文件变化、调用相应的任务重新执行
    ***
* gulp-test
  * 下载运行：需要 npm i 安装依赖包
  * 实践中使用gulp demo
  * 中文主页: http://www.gulpjs.com.cn/
  * gulp是与grunt功能类似的**前端项目构建**工具, 也是基于Nodejs的自动**任务运行器**
  * 能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的
    合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务
  * gulp更高效(异步多任务), 更易于使用, 插件高质量
* 基于nodejs，因此需要安装nodejs
```
node -v       //查看版本号
```
* 目录结构
   ```
  |- dist
  |- src
    |- js
    |- css
    |- less
  |- index.html
  |- gulpfile.js-----gulp配置文件
  |- package.json
    {
      "name": "gulp-test",
      "version": "1.0.0"
    } 
  ```
* 使用gulp插件
  * 相关插件:
    * gulp-concat : 合并文件(js/css)
    * gulp-uglify : 压缩js文件
    * gulp-rename : 文件重命名
    * gulp-less : 编译less
    * gulp-clean-css : 压缩css
    * gulp-livereload : 实时自动编译刷新
  * 重要API
    * gulp.src(filePath/pathArr) : 
      * 指向指定路径的所有文件, 返回文件流对象
      * 用于读取文件
    * gulp.dest(dirPath/pathArr)
      * 指向指定的所有文件夹
      * 用于向文件夹中输出文件
    * gulp.task(name, [deps], fn) 
      * 定义一个任务
    * gulp.watch() 
      * 监视文件的变化
      ***

