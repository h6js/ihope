# ihope
__世界上最简单的 JavaScript 测试库。__

https://github.com/gobum/ihope

不到 1100 行源码，丑化后 11kb，拉链后 5kb，零依赖，太小，太简单，慎用！

ihope 由丐帮（gobum.org）开发并维护。莫读源码，太烂 ...

## 用法
### Node 环境：
安装：
```bash
npm install ihope
```
使用：
```js
require('ihope');

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
若测试用例的执行函数是 `function (I){ ... }` 这种普通函数写法，则是编写同步测试用例；若测试用例的执行函数是 `function* (I){ ... }` 这种 GeneratorFunction 或 `async function (I){ ... }` 这种 AsyncFunction 写法，则可在其中编写异步测试用例。


## 主要功能
### 一般测试用例写法：
```js
I.do('Test Hello World', function (I) {
  I.do('Test Hello', function (I) {
    var hello = 'hello';
    I.hope(hello).equal('hello');
  });
  I.do('Test World', function (I) {
    var world = 'world';
    I.hope(world).is.string;
  });
  I.sum();
});
```
输出：
![image](https://user-images.githubusercontent.com/760498/30582477-66b793bc-9d56-11e7-962b-21f9579f1c2e.png)

用 I.do() 开始一个测试用例，给用例指定一个描述，并给出一个测试函数。其中，测试函数的参数是下一层的 I 对象，可使用其方法进行各种断言测试，或开始一个子测试用例。

一般，在测试用例函数的末尾，可以调用 I.sum() 对测试点进行汇总报告。

那些 `I.hope(hello).equal('hello');` 等测试点本身是自描述的，测试成功或失败都会以这段代码作为测试点的描述信息。

### 也可用文字描述测试点
ihope 建议尽量使用自描述的测试断言，但你一定要用文字描述也是可以的：
```js
describe('My Test', function(I){
  var args = {0:'a', 1:'b', 2: 'c', length: 3};
  I.say('args is an array like object').as(args).has.property('length');
  I.say('args is not empty').if(args.length>0);
  I.say('Every element in args is ok').on(function(){
    for(var i=0; i<args.length; i++) {
	  I.assert(args[i]);
	}
  });
});
```
其中:

`I.say('my description').as(value)...` 后面与 `I.hope(value)...` 的后半部分写法完全一样，只是测试点的描述会输出 `my description` 而不再是代码自身。

`I.say('my description').if(assert)` 后面的 `assert` 是一个断言条件，根据 `assert` 的真假，输出成功或失败的 `my description`。

`I.say('my description').on(func)` 也类似，只要执行函数 func 不抛出异常就成功，否则输出失败的 `my description`.

### 测试回调函数的写法
例如：
```js
I.do('Asynchronous read file', function (I) {
  I.do('It works?', function $(done) {
    fs.readFile('hello.txt', 'utf8', done);
  });
});
```
输出：
![image](https://user-images.githubusercontent.com/760498/30583288-376b9b0a-9d59-11e7-8b3f-72e11a1ee799.png)

若测试函数名为 `$` 则测试用例转换为回调测试，测试函数将必须制定一个参数 `done`，其也是一个回调函数。在你的回调代码中，必须再调用 `done()` 或 `done(err)` 来完成回调测试点的流程。

ihope 支持在回调成功后，继续对回调结果进行测试。例如：
```js
I.do('Asynchronous read file', function (I) {
  I.do('It works!', function $(done) {
    fs.readFile('hello.txt', 'utf8', function (err, text) {
      if (err) {
        done(err);
      }
      else {
        I.do('read:', function (I) {
          I.hope(text).equal('hello');
        });
      }
    });
  });
});
```
输出：
![image](https://user-images.githubusercontent.com/760498/30583600-17473c5c-9d5a-11e7-9e3d-4cc5d4e8aba1.png)

虽然，你可以在回调成功后，继续任意的测试或子测试，但直接用后面的 Generator 或 async 测试函数来进行异步测试将会更好。

### Promise 测试
测试 Promise 本质与回调函数相同，例如：
```js
I.do('Promise test', function (I) {
  I.do('promise:', function $(done) {
    Promise.resolve()
      .then(function () {
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });
});
```
就不再多说。

### Generator 测试函数
异步测试用例可以用 Generator 函数来表达。例如：
```js
I.do('This is generator function test case:', function* (I) {
  var zero = Date.now();
  var delta = Date.now() - zero;
  I.hope(delta).is.equal(0);
  yield I.delay(1000);
  delta = Date.now() - zero;
  I.hope(delta > 1000).is.ok;
});
```
输出：
![image](https://user-images.githubusercontent.com/760498/30583951-ec41e4e8-9d5a-11e7-8d54-8adf2f278dd9.png)

`function* (I) {...}` 启动异步测试，其中可以自然地配合 `yield` 关键字处理任何异步等待操作。ihope 内置对 Generator 代码的运行调度机制，您可以在其中嵌套任何同步或异步的子测试，这些测试都会依据层次逻辑依次运行。

### async 测试函数
上面的用例简单改为 `async function(I){...}` 并配合 `await` 关键字，就是 async 的测试代码：
```js
I.do('This is async function test case:', async function (I) {
  var zero = Date.now();
  var delta = Date.now() - zero;
  I.hope(delta).is.equal(0);
  await I.delay(1000);
  delta = Date.now() - zero;
  I.hope(delta > 1000).is.ok;
});
```
输出：
![image](https://user-images.githubusercontent.com/760498/30584278-d5d84994-9d5b-11e7-9a8f-0de1eec1b40c.png)

## 文档

没时间写 ...




 -- 李战(leadzen) 2017.09.19 杭州
