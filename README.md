# ihope
世界上最简单的 JavaScript 测试库。

ihope 由丐帮开发并维护。

## 用法
### Node 环境：
安装：
```bash
npm install ihope
```
使用：
```js
var I = require('ihope');

I.do('My First Test', function(I){
  // 测试代码：
  var text = 'hello' + ' ' + 'world';

  // 测试断言：
  I.hope(text).is.string;
  I.hope(text).is.equal('hello world');
  
  // 测试统计：
  I.sum();
});
```
终端输出：  
![default](https://user-images.githubusercontent.com/760498/30022768-5e8eae7c-919f-11e7-95a3-7c068bda6458.png)

### 浏览器环境
用法：
```html
<html>
  <head>
    <meta charset="utf-8">
    <title>ihope in browser</title>
    <script src="ihope.js"></srcipt>
  </head>
  <body>
    <script>
      I.do('My First Test', function(I){
        // 测试代码：
        var text = 'hello' + ' ' + 'world';

        // 测试断言：
        I.hope(text).is.string;
        I.hope(text).is.equal('hello world');
        
        // 测试统计：
        I.sum();
      });
    </script>
  </body>
</html>
```
控制台输出：  
![default](https://user-images.githubusercontent.com/760498/30022768-5e8eae7c-919f-11e7-95a3-7c068bda6458.png)
## 特点
### 测试框架与断言库一体化
之前的大多数测试需要一个测试框架库和一个断言库，例如。而 ihope 将测试框架和断言库集成为一个整体，因此只要引入 ihope 就够了。
### 断言自描述
ihope 的断言用法本身（例如，`I.hope(text).is.string;` ）已经足够描述测试断言的本意，根本无须额外的断言描述信息，这可极大方便了测试用例的编写。
### 支持同步和异步测试用例的书写
若测试用例的执行函数是 `function (I){ ... }` 这种普通函数写法，则是编写同步测试用例；若测试用例的执行函数是 `function* (I){ ... }` 这种 GeneratorFunction 或 `async function (I){ ... }` 这种 AsyncFunction 写法，则可在其中编写异步测试用例。
