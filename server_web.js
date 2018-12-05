// npm install npm -g
// cnpm install webpack@3.0.0 -g   查看插件版本列表：npm view webpack versions 已安装插件版本： npm ls webpack
// webpack runoob.js bundle.js
// npm install css-loader style-loader -g
/*
# 安装
npm install webpack-dev-server@2.11.3 -g
 
# 运行
webpack-dev-server --progress --colors
*/
// $ npm install cnpm -g
var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // 响应文件内容
         response.write(data.toString());        
      }
      //  发送响应数据
      response.end();
   });   
}).listen(8888);
 
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8888/');