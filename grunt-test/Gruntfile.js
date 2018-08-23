module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      //在Gruntfile.js中获取package.json中的内容
      pkg: grunt.file.readJSON('package.json'),
      //合并文件
      concat: {
        options: { //可选项配置
          separator: ';'   //使用;连接合并
        },
        build: { //此名称任意
          src:  ["src/js/*.js"],  //合并哪些js文件
          dest: "build/js/build.js" //输出的js文件
        }
      },
      //压缩js文件
      uglify: {
        options: {  //不是必须的
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
          },
          build: {
            files: {
            //   'build/js/built-<%=pkg.name%>-<%=pkg.version%>.min.js': ['src/test1.js']
              'build/js/built-<%=pkg.name%>-<%=pkg.version%>.min.js': ['build/js/built.js']
            }
          } 
      },
      //js语法检查： 使用jshint插件
      jshint : {
        options: {
          jshintrc : '.jshintrc' //指定配置文件
        },
        // build : ['Gruntfile.js', 'src/js/*.js'] //指定检查的文件
        test1:['Gruntfile.js'],
        test2:['src/*.js']  
      },
      //压缩css文件
      cssmin:{
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        build: {
          files: {//在build/css/下生成output.min.css
              'build/css/output.min.css': ['src/css/*.css']
          }
        }
      },
      //檢查css語法錯誤
      csslint:{
        options: {
            jshintrc : '.csslintrc' //指定配置文件
          },
          build : ['Gruntfile.js', 'src/css/*.css'] //指定检查的文件
      },
      //TODO:自动监听好像没用
      watch : {
        scripts : {
          files : ['src/js/*.js', 'src/css/*.css'],
          tasks : ['jshint','concat',  'uglify', 'cssmin'],
          options : {spawn : false}  
        }
      }
    });
  
     // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'watch']);
    
  
};