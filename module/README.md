
# Node Moules

 - [ Node.js高级编程：用Javascript构建可伸缩应用（3）2.2 核心API基础-加载模块][1]

## Load modules

 - require

```js
var someModule = require('moduleName');
```
 
### 核心模块
 - 被编译到二进制文件里的模块
 - 不能通过路径来引用，只能用模块名
 - 最高的加载优先级
 - [Node API][2]
```js
// Load core module http
var http = require('http');
```
  
### 文件模块
 - 绝对路径／相对路径
 - 扩展名（.js/.node/.coffee）

```js
//绝对路径
var fileModule = require('/path/to/myModules/fileModule');
//相对路径
// Load file module from path
var fileModule = require('./myModules/fileModule');
```
###目录模块

 - package.json --> main
 - 如果没有package.json，查找index.js/node...
 - 从node_modules目录加载


### 缓存模块
 - 模块在第一次成功加载后会被缓存起来


## Export Modules

### module.exports

```js
var funA = function () {
  console.log(' function A');
}
module.exports.funA = funA;
```
### exports && module.exports
*In particular module.exports is the same as the exports object.* :(
 [Node.js Module – exports vs module.exports][3]
 [module.exports 还是 exports][4]
 - exports是module.exports的一个辅助工具
 - 如果不给 exports 本身赋值的话就用 `exports.sth = sobj`，如果要赋值的话则这样写：

    `exports = module.exports = someObject;`
    `exports.sth = sobj; // 如果还需要加入其他属性则这样写`

  [1]: http://yaohuiji.com/2013/01/11/loading-modules/
  [2]: http://nodejs.org/api/
  [3]: http://www.hacksparrow.com/node-js-exports-vs-module-exports.html
  [4]: http://zihua.li/2012/03/use-module-exports-or-exports-in-node/
