# build-tools
* grunt-test
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
  |- css-------------css源码文件夹
  |- src------------js源码文件夹   
      |- test1.js---------------test1.js源文件夹,测试js文件
      |- test2.js---------------test2.js源文件夹,测试js文件
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

