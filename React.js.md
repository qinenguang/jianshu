### 一、课程导学

熟悉javascript语法以及es6，对于webpack和npm不做要求。

学习内容如下

<img src="D:\react\1.png" style="zoom: 25%;" />

### 二、React初探

#### 2.1 React简介

2013年Facebook退出

官网 https://reactjs.org/

React Fiber

#### 2.2 React开发环境准备

通过脚手架工具来编写React代码

脚手架工具：

(1)CRUNT

(2)GULP

(3)webpack

官方工具：Create-react-app

项目安装过程（预先安装好npm、node.js)

```react
npm install -g create-react-app
cd Desktop
create-react-app todolist

cd todolist
npm start
//出现local:http://localhost:3000/
```

#### 2.3 工程目录文件简介

初始文件目录

<img src="D:\react\2.png" style="zoom: 67%;" />

##### node_modules

* 里面存放的是我们所建项目放所依赖的第三方的包

##### public

* favicon.ico
  图标文件，网页标题左上角的小图标

* index.html
  项目首页的HTML模板
*  manifest.json
  manifest.json 是配合PWA 使用的文件

##### src  

* index.js（all in js）
  整个程序的入口文件，也就是整个项目从index.js 里面开始逐行执行
* ServiceWorker
  为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
* App.test.js
  自动化的测试文件

简化后的主要文件夹

<img src="D:\react\3.png" style="zoom: 67%;" />

#### 2.4 react中的组件

App.js文件中的导入相关问题

```javascript
import React, {Component}from "react";

import {Component}from "react";      //引用react组件作为基类
//等价于
import React from "react";
const Component = React.Component

//ES6类方式 组件
class App extends react.Component{               
  render(){
    return (
      <div>
        hello,xixue
      </div>
    );
  }
}

//以下代码也能实现上述功能
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        hello xixue
      </header>
    </div>
  );
}

export default App;  //公共部分
```

代码实现的重要步骤

```javascript
import App from './App'; //自动补全js后缀
ReactDOM.render(<App />document.getElementById('root'));

//render功能把App组件挂载到id为root的dom节点下
```

JSX语法的重要性

```javascript
//import React from 'react';    //不引用react 会导致后续的JSX语法文件无法识别，进而报错
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />                    //含有JSX语法
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### 2.5 react中最基本的JSX语法

React 使用 JSX 来替代常规的 JavaScript。

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

我们不需要一定使用 JSX，但它有以下优点：

* JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。

- 它是类型安全的，在编译过程中就能发现错误。

- 使用 JSX 编写模板更加简单快速。

原来我们在html中写标签，但是在React中，我们直接将标签写在了.js文件中，在js文件中编写的HTML标签、自定义标签均为JSX语法内容。 JSX语法中，如果要使用自己创建的组件App,以大写字母开头为特征。若标签以小写字母为开头一般表示H5中的标签。

### 三、React基础精讲

#### 3.1 使用React编写TodoList功能

在src文件的index.js中引入Todolist.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
ReactDOM.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
  document.getElementById('root')
);
```

在src文件下创建Todolist.js文件，编写以下代码

```javascript
import React, {Component,Fragment} from "react";
//JSX语法中render的返回值外层需要一个标签将内容包含主，引用Fragment部分
//否则外层将会在控制台元素上显示一个空标签
class Todolist extends Component{
    render(){
        return(
            <Fragment>
            <div><input /><button>提交</button></div>
            <ul>
                <li>学英语</li>
                <li>学习react</li>
            </ul>
            </Fragment>
        )
    }
}
export default Todolist;    //确保Todolist文件顺利输出
```

预期效果图

<img src="D:\react\4.png" style="zoom: 67%;" />

#### 3.2 React中的响应式设计思想和事件绑定

React是一种响应式的框架，不操作DOM只需要操作数据即可

```javascript
import React, {Component,Fragment} from "react";

class Todolist extends Component{
//Todolist为组件(类)，其中必然有constructor构造函数，先于其他函数执行
//super表示调用父类Component中的props功能
//接收参数，调用功能
    constructor(props){
        super(props)
        //把数据定义到组件的状态里
        this.state = {
            inputValue:'',
            list:[]
        }
    }
//input中的内容存储在inputValue中
//JSX语法
//事件绑定onChange表示监听Input框的改变，执行方法
    render(){
        return(
            <Fragment>
            <div>
                <input value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                />
                <button>提交</button>
            </div>
            <ul>
                <li>学英语</li>
                <li>学习react</li>
            </ul>
            </Fragment>
        )
    }
    
    //编写handleInputChange方法，接收event对象
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
        //console.log(this)   this指向问题
        //this.state.inputValue = e.target.value
        //console.log(e.target.value);
    }
}
export default Todolist;
```

执行流程：

​        constructor函数定义了inputValue的值，执行render函数时，执行了初始值，当你在input框输入内容时，onChange方法调用，通过handleInputChange利用setState获取e.target.value的值，再赋值给inputValue，最后通过render函数对应的input值发生了改变，页面也就随之改变。

注意事项

1.在React中，编写在元素间的变量要使用{}。（JSX语法）

2.各个元素的状态，我们可以通过继承父类的方法props，然后使用this.state获取元素中的内容。

3.在使用对应的事件，进行一个事件绑定在调用函数的时候，我们要注意的是this的指向，因此我们通过ECMS6的bind方法，预先改变该处理函数的一个this指向。

如上述代码中的：handleInputChange(this),我们需要的是组件的this, 来获得其中的值，并修改。

4.我们不能通过this.state.inputValue来直接更改值，在React中给我们提供了方法：setState 如下：

```javascript
this.setState({
      inputValue: e.target.value   //inputValue中的值和e.target.value中的值相等
  })
```

#### 3.3 实现TodoList新增删除功能

##### 实现预定功能的Todolist.js代码

```javascript
import React, {Component,Fragment} from "react";

class Todolist extends Component{

    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:[]
        }
    }
    render(){
        return(
            <Fragment>
            <div>
                <input value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
            </div>
            <ul>
                {
                    this.state.list.map((item, index) =>{
                        return <li 
                        key={index} 
                        onClick={this.handleItemDetele.bind(this,index)}>{item}
                        </li>                        
                    })
                }
            </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleBtnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDetele(index){
        const list = [...this.state.list];
        list.splice(index,1)
        
        this.setState({
            list: list
        })
    }
}
export default Todolist;
```

##### 新增li标签

```javascript
//render函数内代码
<button onClick={this.handleBtnClick.bind(this)}>提交</button>
//ul中代码
           <ul>
                {this.state.list.map((item, index) =>{
                        return <li>{item}</li>                        
                    })
                }
            </ul>

handleBtnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            //把原来数组的内容展开，再增加新的值
            inputValue: ''
            //清空输入框的值
        })
    }
```

​       我们使用数组的map方法来返回需要显示的内容。需要注意的是，每个li必须含有一个关键字 key 并且必须是不同的，在这里我们使用了index，但是在React中，并不推荐使用Index,如果不使用的话，页面控制台就会发出一个警告。

##### 删除li标签

```javascript
//ul中代码
           <ul>
                {this.state.list.map((item, index) =>{
                        return <li 
                        key={index} 
                        onClick={this.handleItemDetele.bind(this,index)}>{item}
                        </li>                        
                    })
                }
            </ul>


handleItemDetele(index){
  // immutable
  // state 不允许我们做任何改变
  //this.state.list.splice(index, 1);  --> 不能这样写
        const list = [...this.state.list];
        list.splice(index,1)
        
        this.setState({
            list: list
        })
    }
```

实现的功能：单击相应的内容，相应的内容就会删除。

1.我们获取对应的下标，通过bind方法来进行传参

2.我们创建一个新的list 拷贝  const list = [...this.state.list];  拷贝一份

3.通过数组的方法splice进行一个对应下标的删除操作

4.使用setState的方法来进行一个重新的赋值

【注】再次强调：state 不允许我们做任何改变，每次更改，必须使用setState方法

​			因此我们不能这样写  this.state.list.splice(index, 1)

​			在React中，我们将其称之为immutable规则。

#### 3.4 JSX语法细节补充

注释语法

```javascript
{/*下面是一个input框*/}     //多行注释
{
//下面是一个input框         
}                         //单行注释
```

引用css样式

我们在给input框增加一个样式

注意引用的时候：为了防止class当成类，在JSX中，class的属性，使用 className

如下className='input'

```javascript
//style.css
.input {
    border: 1px solid blue;
}

//Todolist.js
import './style.css'
render() {
        return (
            <Fragment>
                <div>
                	<input className='input'>
				</div>
			<Fragment>
		)
```

将input中输出的样式不进行转义

当我们想要设置显示为样式的时候，我们要在li标签中增加一条属性

dangerouslySetInnerHTML = {{__html: item}}

这样就不会进行转义了

```javascript
				 <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li
                                key={index}
                                onClick={this.handleItemDetele.bind(this, index)}
                                dangerouslySetInnerHTML={{__html: item}}
                                >
                            </li>
                        })
                    }
                </ul>
```

label标签

在lable标签中，使用for进行一个扩大选择范围。

在React中，为了防止与for循环的关键字 for重合，使用  htmlFor="insertArea"

```javascript
<label htmlFor="insertArea">输入内容：</label>
<input
    id="insertArea"
    className='input'   //使用class
    value={this.state.inputValue}
    onChange={this.handleInputChange.bind(this)}  //在这里加this
/> 
```

#### 3.5 拆分组件与组件之间的传值

拆分组件

自上而下，有父类组件向子类组件进行延伸

<img src="D:\react\5.png" style="zoom:50%;" />

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

Todolist.js

```javascript
import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./Todoitem";

class Todolist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inserArea">输入内容</label>
                    <input
                        id="inserArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                <TodoItem content={item} index={index}
                                deteleitem = {this.handleItemDetele.bind(this)}
                                />

                            </div>
                            )
                        })    
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDetele(index) {
        const list = [...this.state.list];
        list.splice(index, 1)

        this.setState({
            list: list
        })
    }
}
export default Todolist;
```

Todoitem.js

```javascript
import react from "react";

class TodoItem extends react.Component{
    constructor(props){
        super(props)
        this.handleclick = this.handleclick.bind(this)
    }

    render(){
        return <div onClick={this.handleclick}>{this.props.content}</div>
    }
    handleclick(){
        this.props.deteleitem(this.props.index)
        alert(this.props.index)
    }
}
export default TodoItem;
```

##### 父组件拆分为子组件并使用

```javascript
				<ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                <TodoItem content={item} index={index}
                                deteleitem = {this.handleItemDetele.bind(this)}
                                />

                            </div>
                            )
                        })    
                    }
                </ul>
                //替换为如下代码，通过将以上代码拆分成一个组件

                //父类中
				<ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                <TodoItem content={item} index={index}
                                deteleitem = {this.handleItemDetele.bind(this)}
                                />

                            </div>
                            )
                        })    
                    }
                </ul>
                
                //子类中
                class TodoItem extends react.Component{

                    constructor(props){
                        super(props)
                        this.handleclick = this.handleclick.bind(this)
                    }

                    render(){
                        return <div onClick={this.handleclick}>{this.props.content}</div>
                    }
                    //子组件调用父组件的方法来修改内容
                    handleclick(){
                        this.props.deteleitem(this.props.index)
                        alert(this.props.index)
                    }
                }
```

在父节点中我们通过 <TodoItem />来调用子组件

我们父节点传值，类似属性的方式  变量名 = {传值} 来给子组件传值，然后子组件就可以进行调用了

##### 子类调用父类的方法

父组件传给子组件的方法类似于传值，但是在这里我们需要的是，这个方法的this必须指向的是父组件。

因为父组件可以条用该方法，而子组件中没有该函数。

如果没有强制改变this的指向

那么在网页上报错，没有发现该函数，即无法调用

```
deleteItem = {this.hanleItemDelete.bind(this)} //传递方法
```

子组件调用父组件的方法

子组件在进行事件的时候，也要改变this的指向，我们通过如下的方法，使this指向TodoItem，否则指向undefined，并且比直接使用bind的方法更节约性能。

```javascript
constructor(props) {
  super (props);
  //使用这种写法，节约性能
  this.handleClick = this.handleClick.bind(this);
}
```

在调用父组件的方法的时候，我们同样通过，this.props.方法进行调用

```javascript
handleclick(){
        this.props.deteleitem(this.props.index)
    }

//在父组件文件中需要绑定好父组件方法的this指向
deteleitem = {this.handleItemDetele.bind(this)}
```

#### 3.6 TodoList代码优化

优化主要使用了一些ECM6的语法：

1.大括号解构

 const {content} = this.props;

2.箭头函数

3.将强制改变this指向的，写到最前面constructor中，提升效率，之后使用也方便

如： this.handleInputChange = this.handleInputChange.bind(this);

4.将setState中返回函数，而不是对象，异步操作，提升效率

5.使用prevState来表示之前的变量

6.如果在标签中，使用的代码过多，使用函数进行封装。

7.ul标签中的循环，要增加key值，要增加在最外层的元素上，不推荐使用index。

Todoitem.js的优化

```javascript
	render(){
        return <div onClick={this.handleclick}>{this.props.content}</div>
    }
    handleclick(){
        this.props.deteleitem(this.props.index)
    }
    
//优化后
	render() {
        const {content} = this.props;
        return (<div onClick={this.handleclick}>
            {content}
        </div>)
    }
    handleclick() {
        const {deteleitem, index} = this.props
        deteleitem(index)
    }

//在函数中提前定义好常量，然后在函数内部直接调用，更加规范
```

Todolist.js的优化

```javascript
//将后续的方法中的this绑定放在constructor函数内完成
constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDetele = this.handleItemDetele.bind(this)
    }

//更改ul标签，封装成函数
				<ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                <TodoItem content={item} index={index}
                                deteleitem = {this.handleItemDetele.bind(this)}
                                />

                            </div>
                            )
                        })    
                    }
                </ul>
//优化后
<ul> {  this.gettodoitem() } </ul>

gettodoitem(){
        return this.state.list.map((item, index) => {
            return (
                <TodoItem key={index} content={item} index={index}
                deteleitem = {this.handleItemDetele}
                />
            
            )
        })    
    }
    
//改写setState，提前定义常量，采用ES6里的箭头函数
     handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDetele(index) {
        const list = [...this.state.list];
        list.splice(index, 1)

        this.setState({
            list: list
        })
    }
//优化后  通过传递prevState参数表示之前的变量，替代了this.state
	handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({ 
            inputValue: value
        }))
    }
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '' 
        }))
    }
    handleItemDetele(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}     //等效于list：list
        })
        
    }
}
```

#### 3.7 围绕React衍生出的思考

##### 1.声明式开发

命令式编程（先做什么，再做什么） -> DOM操作（Jquery, 原生JS）

声明式开发（react自动根据数据构造页面DOM，这个数据可以理解为图纸。） -> React(节约DOM操作代码)

##### 2.以与其他代码共存

  react面向数据编程，只负责id=root的操作和渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div><span>abc</span></div>
  </body>
</html>
```

React只对  <div id="root"></div>生效（因为这里react是挂载在root上的。对于下面的<div><span>abc</span><div>可以用其他框架，比如jQuery，前提是不能影响它之外的框架。）其它操作依然可以生效。

##### 3.组件化开发

首字母大写是组件（首字母小写是标签元素。）

父组件 ->  传值给  子组件

子组件  -> 传值给  父组件  调用父组件的方法（子组件使用父组件传给的方法来修改父组件传的值（不能直接使用未传的方法来修改父组件传的值））

##### 4.单向数据流

父组件可以向子组件传递内容，但是子组件只可以使用，但不可以改变（否则会报错，只读不可更改）

为了让开发方便，因为如果多个组件都可以对其进行修改，那么不知道是那个发生改变。

如果要改->通过子组件调用父组件的方法

##### 5.视图层框架

如果是紫色的传值，会很麻烦

因此在开发项目，不仅仅用到React，传值交给其它组件完成，React负责数据和页面渲染

因此，使用flask，Redux来辅助开发（数据层框架负责传值）

<img src="D:\react\6.png" style="zoom:50%;" />

##### 6.函数式编程

维护方便 （给需要测试函数一个参数，通过函数输出来判断函数是否运行正确。）

面向测试的开发流程->前端自动化测试->提高便捷性

### 四、React高级

#### 4.1 安装React开发调试工具

在谷歌浏览器的扩展程序搜索react，下载react developer tools

<img src="D:\react\7.png" style="zoom: 25%;" />

在本地react项目的网站上扩展程序图标显示为红色，没有利用react开发的上线网站为灰色，利用react开发的上线网站为黑色

![](D:\react\8.png)

![](D:\react\9.png)

![](D:\react\10.png)

通过F12打开控制台，可以得到组建的状态，调试方便，进行任何调试时，该部分都有相应的变化。

<img src="D:\react\11.png" style="zoom: 25%;" />

#### 4.2 PropTypes与DefaultProps的应用

PropTypes属性

当我们从父组件向子组件进行传值的时候，如果要求传递的是字符串，但是我们传过去函数，也不会报错。

但是，事实上呢，我们的代码本身就出现了问题。

因此，当我们接受到父组件传递的值的时候，有必要进行一个校验

```react
import react from "react";
import PropTypes from "prop-types"
class TodoItem extends react.Component {

    constructor(props) {
        super(props)
        this.handleclick = this.handleclick.bind(this)
    }

    render() {
        const {content, test} = this.props;
        return (<div onClick={this.handleclick}>
            {test}-{content}
        </div>)
    }
    handleclick() {
        const {deteleitem, index} = this.props
        deteleitem(index)
    }
    
}
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.arrayOf(PropTypes.number,PropTypes.string),     //允许数字和字符串两种类型
    deleteitem:PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello,world'
}
export default TodoItem;
```

我们传递过来的值与函数方法有：content、deleItem、index等

注意写该方法的时候，要注意大小写

然后我们规定：content必须是字符串（数组里面的都是字符串）

​						   deleteItem 是一个函数

​							index是一个数字

如果我们将index的类型改为 string，浏览器就会警告。

is required鉴定是否存在

```javascript
test:PropTypes.string.isRequired,
```

父组件没有给我们传递test，但是我们使用了test，而且在propTypes里面我们声明了类型。并且isRequired表示必须传值，然后当我们使用test，就会报警告，如果不使用isRequired，父组件未传值将不会报错。

DefaultProps属性

当父组件没有传值，我们还想使用的时候，我们可以设置DefaultProps，提供一个默认值。

```javascript
TodoItem.defaultProps = {
    test: 'hello,world'
}
```

关于PropTypes与DefaultProps的官方文档：https://reactjs.org/docs/typechecking-with-proptypes.html

#### 4.3 props，state与render函数的关系

当组件的state或者props发生改变的时候，render函数就会执行

注：当父组件的render函数被运行，子组件的render会被执行

我们进行测试：

我们创建一个子组件

test.js

并在父组件调用

```javascript
//子组件Test.js
import React,{Component} from "react";
 class Test extends Component {
    //当父组件的render函数被运行时，子组件的render也会被重新运行一次 
     render()
    { 
        console.log("Test")
        return <div>{this.props.content}</div>}
 }

 export default Test
     
//父组件
				<ul>
                    {  this.gettodoitem() }
                </ul>
                <Test content={this.state.inputValue} />
```

#### 4.4 虚拟DOM

##### 1.实现方式的改变

(1)实现方式一

1.数据

2.JSX模板

3.数据 + 模板 => 真实DOM  来显示

4.state 发生改变

5.数据 + 模板 => 生成真实DOM，替换原始DOM

缺陷：

第一次生成了一个完整的DOM片段

第二次生成了一个完整的DOM片段

第二次的DOM替换了第一次的DOM，非常耗性能

(2)进阶

1.数据

2.JSX模板

3.数据 + 模板 => 真实DOM  来显示

4.state 发生改变

5.数据 + 模板 => 生成真实DOM，并不直接替换原始DOM

6.新的DOM（DocumentFragemnt）和原始DOM作对比，找差异（耗费性能）

7.找出input框发生改变

8.只用新的DOM中的input元素，替换掉老的DOM中的input元素（节约性能）

缺陷：

性能的提示并不明显

(3)React虚拟DOM方案

1.数据

2.JSX模板

3.数据 + 模板 => 虚拟实DOM （虚拟DOM就是一个JS对象，用它来藐视真实的DOM）->耗损性能

```
['div',  {id: 'abc'},  ['span',  {},  'hello world']]
```

（生成虚拟DOM实际上是生成JS对象，生成JS对象和生成DOM本身来说，前者较后者节约性能。因为生成DOM会调用Web Application级别的API）

4.用虚拟的DOM生成真实的DOM，来显示

5.state 发生变化

6.数据+模板 => 生成新的虚拟DOM  (极大的提升了性能)

```
['div',  {id: 'abc'},  ['span',  {},  'bye bye']]
```

7.比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span内容（极大的提升性能）

8.直接操作DOM，改变span中的内容

##### 2.深入了解虚拟DOM

JSX -> JS对象 -> 真实的DOM

JSX ->createElement -> 虚拟DOM  (JS对象) ->真实的DOM

Vue 中也是使用虚拟DOM

```javascript
return	<div>item<div>
//其实在执行以下代码，更接近底层
return React.createElement('div', {}, item)  //{}中存放属性
```

虚拟DOM的优点：

1.性能提升

2.它使得跨端应用得以实现。React Native， 虚拟DOM - 原生应用组件

（DOM只是WEB端的概念，其他的比如安卓等没有DOM概念，而是将虚拟DOM转换为对应的组件再进行渲染）

##### 3.虚拟DOM中的Diff算法简介

上面第7步：两个虚拟DOM比对 -> Diff算法

Diff -> difference

state的改变 调用setState方法(异步操作)  提高性能

三次 setState操作 -> React只做一次虚拟DOM比对

![img](https://cdn.nlark.com/yuque/0/2020/png/1572386/1597484054202-ba684877-f988-467f-8bff-db3a429dc062.png)

Diff算法：同层比对 -> 比对算法简单 -> 比对速度很快

若第一层有差异：生成新的虚拟DOM替换原来的虚拟DOM（从该层往下的都替换掉，下面不用再进行对比，重新生成虚拟DOM）

<img src="https://cdn.nlark.com/yuque/0/2020/png/1572386/1597484179055-5b437de7-c6b7-47e6-a921-f7544dbf1dc0.png" alt="img" style="zoom:50%;" /><img src="https://cdn.nlark.com/yuque/0/2020/png/1572386/1597484322908-cbccebc4-abdb-4323-80bd-35596905e874.png" alt="img" style="zoom: 80%;" />

key不能是index

原来->a :0  b:1 c:2 （分别输入a，b，c添加到列表）

新的->b:0  c:1 （删掉a）

将使用值来做key值,用稳定的key值。

原来->a :a  b:b c:c （分别输入a，b，c添加到列表）

新的->b:b  c:c （删掉a）

#### 4.5 React中ref的使用

ref直接获取dom时使用的值

```javascript
				<div>
                    <label htmlFor="inserArea">输入内容</label>
                    <input
                        id="inserArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input=input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {  this.gettodoitem() }
                </ul>
```

ref= {(input) => {this.input = input}}

作用：传入input节点， 将this.input 指向当前的input节点

   因此我们就可以通过  const {value} = this.input; 来获取里面的值

不推荐使用ref直接操作DOM

建议使用数据驱动的方式

我们通过 console.log(this.ul.querySelectorAll('div').length);来获取当前ul下的li节点数

我们发现，打印的总是比输出的少1个

因为setState是一个异步函数，不会立即执行。

```javascript
handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '' 
        }),() => {
            console.log(this.ul.querySelectorAll("div").length)
        })
        //console.log(this.ul.querySelectorAll("div").length)
    }
```

其实setState的第二个参数，是一个回调函数，在执行完第一步的内容，就会执行第二步。

也就是说，要在页面更新完，获取内容，就要将其放到setState的第二个参数，也就是回调函数。

React的ref有3种用法：

字符串(已废弃)

回调函数

React.createRef() （React16.3提供）

参考文档https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#callback-refs 中文

​			   https://www.cnblogs.com/mengff/p/9554779.html

新版本 this.myRef = React.createRef()

#### 4.6 React的生命周期函数

<img src="D:\react\12.png" style="zoom: 33%;" />

生命周期函数是指：在某一个时刻组件会自动调用执行的函数

使用之前的：

UNSAFE_componentWillMount、

UNSAFE_componentWillReceiveProps 

static getDerivedStateFromProps()

与 componentDidUpdate 一起，

这个新的生命周期涵盖过时的 componentWillReceiveProps  的所有用例。

和 UNSAFE_componentWillUpdate

getSnapshotBeforeUpdate与 

componentDidUpdate 一起，

这个新的生命周期涵盖过时的 componentWillUpdate 的所有用例。

使用的话会发出一系列警告

https://react.docschina.org/blog/2018/03/27/update-on-async-rendering.html

<img src="D:\react\13.png" style="zoom:50%;" />

不常用的

<img src="D:\react\14.png" style="zoom: 50%;" />

##### 1.挂载：（当组件创建的时候，自动调用执行constructor函数）

<img src="D:\react\15.png" style="zoom:50%;" />

(1)static getDerivedStateFromProps()

当组件即将被挂载到页面的时刻执行

在最新版本使用的是   

与 componentDidUpdate 一起，这个新的生命周期涵盖过时的 componentWillUpdate 的所有用例

它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

```javascript
static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps");
    return null;
}
```

(2)componentDidMount

执行：加载完成之后

```javascript
componentWillMount(){
    console.log('componentWillMount')
}

componentDidMount(){
    console.log('componentDidMount')
}


//input 中的内容存储在 inputValue中
//JSX语法
    render() {
        console.log('render')
    }
```

加载的周期

![](D:\react\16.png)

##### 2.组件更新

<img src="D:\react\17.png" style="zoom: 67%;" />

(1)shoudComponentUpdate() 

组件更新之前：会自动执行

返回值：要求返回一个bool值

返回false：不需要更新

返回true：  需要更新 

```javascript
shouldComponentUpdate() {
  	console.log("shouldComponentUpdate");
}
```

(2)getSnapshotBeforeUpdate

更新前获取

在最近一次渲染输出（提交到 DOM 节点）之前调用

它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）

此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。

与 componentDidUpdate 一起，这个新的生命周期涵盖过时的 componentWillUpdate 的所有用例。

```javascript
getSnapshotBeforeUpdate(){
  	console.log("getSnapshotBeforeUpdate");
  	return null;
}
```

(3)componentDidUpdate()

会在更新后会被立即调用。首次渲染不会执行此方法。

1.当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，

也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。

2.可以在 componentDidUpdate() 中直接调用 setState()，**它必须被包裹在一个条件语句里**，否则会导致死循环，

它还会导致额外的重新渲染，虽然不可见，但会影响组件性能。

<img src="D:\react\18.png" style="zoom: 80%;" />

<img src="D:\react\19.png" style="zoom:80%;" />

##### 3.卸载

<img src="D:\react\20.png" style="zoom:67%;" />

componentWillUnmount() 会在组件卸载及销毁之前直接调用。

在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。

componentWillUnmount() 中不应调用 setState()，

因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。

我们移除li

<img src="D:\react\21.png" style="zoom:80%;" />

##### 4.Render渲染两次的原因

最近的react版本,dev模式下render使用的是strict mode,strict mode的通过两次调用constructor和render函数来更好的检测不符合预期的副作用。

下列函数会执行两次

- 类组件的constructor,render和shouldComponentUpdate方法
- 类组建的静态方法getDerivedStateFromProps

- 函数组件方法体
- 状态更新函数(setState的第一个参数)

- 传入useState,useMemo或useReducer的函数

这仅适用于开发模式。在生产模式下，不会重复调用生命周期。

https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects

#### 4.7 React生命周期函数的使用场景

##### 1.父组件更新

当我们在input框中输入参数的时候，

我们的子组件也会更新使用render函数

但是，父组件的输入框和子组件的列表没有任何关系

这样就会造成性能的损耗

<img src="D:\react\22.png" style="zoom: 67%;" />

##### 2.使用shouldComponentUpdate()

我们在子组件增加该方法

```javascript
import React,{Component}from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super (props);
        //使用这种写法，节约性能
        this.handleClick = this.handleClick.bind(this);
        
    }

    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        }
        else {
            return false;
        }
    }
    
    render() {
        const {content} = this.props;
        //相当于 const content = this.props.conetent;
        return (
            <li  onClick={this.handleClick}>
                {content}
            </li>
        )
    }
    //子组件调用父组件的方法来修改内容
    handleClick(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

//属性校验  注意大小写
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}


export default TodoItem;
```

当内容更改的时候，返回true进行渲染。

当内容没有更改，返回false不进行渲染。

这样，只会在需要改变的时候，才会进行渲染

##### 3.componentDidMount()的使用

ajax不能放在render里面，否则会一直循环。

componentDidMount() 只会被挂载之后进行一次，因此存放ajax请求的数据

不能写在componentWillmount 会和其它的技术产生冲突

因此ajax请求就放在componentDidMount()中，永远不会发生问题。

此外也可以放在constructor中。但是建议放在componentDidMount()中。

```javascript
componentDidMount() {
    axios.get('/api/todolist')
    .then(() => {alert ('succ')})
    .catch(() => {alert('error')})
}
```

#### 4.8 使用Charles实现本地数据mock

react中安装AJAX

安装yarn模块  npm install -g yarn  

在项目的文件夹执行：yarn add axios

安装完成之后：

导入模块

import axios from 'axios';

charles安装使用  https://www.cnblogs.com/hancel/p/11245286.html

配置charles

选择tools中的Map Local

<img src="D:\react\23.png" style="zoom: 33%;" />

选择add

<img src="D:\react\24.png" style="zoom:50%;" />

3.修改访问域名

http://localhost.charlesproxy.com:3000/

遇到问题的解决办法  https://blog.csdn.net/weixin_43553694/article/details/96963459



我们将数据加载到list中，显示到页面

todolist.json代码

```json
["Dell", "Lee", "IMOOC"]
```

```javascript
//Todolist.js中代码
componentDidMount() {
        axios.get('/api/todolist.json')
        .then((res) => {
            //console.log(res.data)
            this.setState(() => ({
                list:[...res.data]
            }))
        })
        .catch(() => {alert('error')})
    }
```

<img src="D:\react\25.png" style="zoom:50%;" />

#### 4.9 React中实现CSS动画

CSS3语法    https://www.runoob.com/css3/css3-animations.html 

App.js

```javascript
import React,{Component , Fragment} from "react";
import "./style.css";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:true
        }
        this.handToggole=this.handToggole.bind(this)
    }

    render(){
        return (
        <Fragment>
        <div className={this.state.show ? "show": "hide"}>hello</div>
        <button onClick={this.handToggole}>toggole</button>
        </Fragment>
        )
    }
    handToggole(){
        this.setState({
            show: this.state.show ? false:true
        })
    }
}
export default App
```

在App.js中，创建了App组件，使用Fragment让return可以返回两个标签，通过handToggole方法对于constructor的state里的show值做改变

style.css

```css
.show {
    opacity: 1;
    transition: all 1s ease-in;
}

.hide {
    opacity: 0;
    transition: all 1s ease-in;
}
```

transition是一个过渡动画  用1s完成该动作  all是所有属性。

这也也可以改为 opacity



新增动画效果

```css
.show {
    animation: show-item 3s ease-in forwards;
}

.hide {
    animation: hide-item 3s ease-in forwards;
}
/* forwords 保存最后一帧的效果 */

@keyframes show-item {
    0% {
        opacity: 0;
        color: red;
    }
    50% {
        opacity: 0.5;
        color:green;
    }
    100% {
        opacity: 1;
        color: blue;
    }
}
@keyframes hide-item {
    0% {
        opacity: 1;
        color: red;
    }
    50% {
        opacity: 0.5;
        color:green;
    }
    100% {
        opacity: 0;
        color: blue;
    }
}
```

#### 4.10 使用react-transition-group

##### 1.模块的安装

源代码： https://github.com/reactjs/react-transition-group

安装命令：yarn add react-transition-group

官方文档：http://reactcommunity.org/react-transition-group/

##### 2.CSStransition的使用

App.js

```javascript
import React, { Component,Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css';

class APP extends Component {

    constructor(props) {
        super (props);
        this.state = {
            show: true
        }
        this.handleToogle = this.handleToogle.bind(this);
    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}  //动画的入场
                    timeout={1000}        //动画的时间 active的时间
                    classNames='fade'   //关系到css文件内容的前缀
                    unmountOnExit     //出现或者消失时，完成按钮的移动
                    onEntered={(el) => {el.style.color="blue"}}
                    appear={true}
                >
                    <div>Hello world</div>
                </CSSTransition>
                <button onClick={this.handleToogle}>toogle</button>
            </Fragment>
        )
    }

    handleToogle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

export default APP;
```

style.css

```css
/*进入入场动画的瞬间*/
.fade-enter, .fade-appear{
    opacity: 0;
}
/*进入入场动画*/
.fade-enter-active, .fade-appear-active{
    opacity: 1;
    transition: opacity 1s ease-in;
}
/*执行完成*/
.fade-enter-done, .fade-appear-done{
    opacity: 1;
}

.fade-exit {
    opacity: 1;
}

.fade-exit-active {
    opacity: 0;
    transition: opacity 1s ease-in;
}

.fade-exit-done {
    opacity: 0;
}   

```

CSSTransition的部分

```javascript
<CSSTransition
    in={this.state.show}  //动画的入场
    timeout={1000}        //动画的时间 active的时间
    classNames='fade'
    unmountOnExit
    onEntered={(el) => {el.style.color="blue"}}
    appear={true}
>
		<div>Hello world</div>
</CSSTransition>
```

主要看这一段代码：

1.`in={this.state.show}` 主要是告知什么时候进行哪种动画，传入的参数是bool值

2.`timeout={1000}`  动画的总运行时间

3.`classNames='fade'` 动画的class名字的前缀，在styles.css中，有以下的几种，其中fade是用到的前缀。

这几个也对应不同时刻的动画。

- fade-appear, fade-appear-active, fade-appear-done    动画第一次载入的 前中后
- fade-enter, fade-enter-active, fade-enter-done        动画进入的 前中后

- fade-exit, fade-exit-active, fade-exit-done            动画退出的 前中后

如果我们将其命名为mycss，那么css中应该这样定义

- mycss-appear, mycss-appear-active, mycss-appear-done 

4.`unmountOnExit`指的是在动画退出之后该标签会消失。再点击又会出现。这是我们普通方法比较难做到的。

5.onEnter、onEntered、onEntering 

  onExit、 onExited、 onExiting

  这几个都是钩子函数（生命周期函数），在进行这些动作的时候会触发相应的代码。

  如上述，我们让div内人颜色变为蓝色。  el是当前标签

6.`appear={true}` 是否设置appear动画，appear动画是值，我们刚进入的页面的时候就会进行的动作。

##### 3.TransitionGroup

实现群体动画

App.js

```javascript
import React, { Component,Fragment } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './styles.css';

class APP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.handleAddTtem = this.handleAddTtem.bind(this);
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>               
                    {
                        this.state.list.map((item, index) =>{
                            return(
                                <CSSTransition
                                    ref={this.ref}
                                    timeout={1000}        //动画的时间 active的时间
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => {el.style.color="blue"}}
                                    appear={true}
                                    key={index}
                                >
                                <div >{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>          
                <button onClick={this.handleAddTtem}>toogle</button>
            </Fragment>
        )
    }

    handleAddTtem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']  //注意这里是prevState.list
            }
        })
    }
}

export default APP;
```

核心部分

```javascript
<TransitionGroup>               
{
    this.state.list.map((item, index) =>{
      return(
      <CSSTransition
      ref={this.ref}
      timeout={1000}        //动画的时间 active的时间
      classNames='fade'
      unmountOnExit
      onEntered={(el) => {el.style.color="blue"}}
      appear={true}
      key={index}
      >
      	<div >{item}</div>
      </CSSTransition>
    )
  })
}
</TransitionGroup>          
```

首先导入import { CSSTransition,TransitionGroup } from 'react-transition-group';

然后在需要群体动画的面包<TransitionGroup>  </TransitionGroup>   

然后在要实现的动画添加单独的 <CSSTransition>  </CSSTransition>

将in属性去掉，即可实现动画。

### 五、Redux入门

#### 5.1 Redux概念简述以及工作流程

<img src="D:\react\26.png" style="zoom:50%;" />

**Redux = Reducer + Flux**

**工作流程**

<img src="D:\react\27.png" style="zoom:50%;" />

安装命令

当前目录下：`yarn add redux`

#### 5.2 使用Antd实现TodoList页面布局

安装Antd命令

当前目录下：`yarn add antd`

重新编写的Todolist.js页面布局代码

```javascript
import React, { Component } from "react"; 
import "antd/dist/antd.css"    //引入antd部分
import { Input, Button,List } from 'antd';    //调用antd的Input, Button,List组件

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class Todolist extends Component {
    render() {
        return (<div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <div><Input placeholder="todo info" style={{ width: "300px", marginRight: "10px" }} />
                <Button type="primary">提交</Button>
            </div>
            <List
                style = {{marginTop:"10px", width:"350px"}}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </div>
        )
    }
}
export default Todolist;
```

antd官网：https://ant.design/index-cn

组件部分：https://ant.design/components/overview-cn/

预览效果

<img src="D:\react\28.png" style="zoom:50%;" />

#### 5.3 创建redux中的store

首先在当前目录下执行：`yarn add redux`

在src文件夹下创建store文件夹

分别创建index.js和reducer.js

index.js

```javascript
import { createStore } from 'redux';         //导入Redux模块
import reducer from'./reducer'               //导入reducer

const store = createStore(reducer);           //创建store，并获取reducer中的值

export default store;                           //导出store
```

reducer.js

```javascript
const deafultState = {				//创建一个存放数据的量
    inputValue: '112',
    list: [111]
}

//记录本
//state为图书馆书籍的信息 -> 存储的数据   
//导出数据 接受两个参数 state和action， state指向要导出的数据
export default (state = deafultState, action) => {
    return state;
}
```

要想在组件中使用store的数据，需要在组件中引用store，即引入上面store文件夹下的index.js文件

todolist.js

```javascript
import React, { Component } from "react";
import "antd/dist/antd.css"
import { Input, Button,List } from 'antd';
import store from "./store/index"   //导入store里的index

class Todolist extends Component {

constructor(props){
    super(props)
    this.state = store.getState()
    //console.log(store.getState())
}

    render() {
        return (<div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <div><Input value={this.state.inputValue} placeholder="todo info" style={{ width: "300px", marginRight: "10px" }} />
                <Button type="primary">提交</Button>
            </div>
            <List
                style = {{marginTop:"10px", width:"350px"}}
                bordered
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </div>
        )
    }
}
export default Todolist;
```

关键代码

```javascript
 constructor(props) {
   super (props);        
   this.state = store.getState();  //将store中的值通过方法，getState赋值给state
   console.log(this.state);					//打印下state的信息
 }
 
 
 <Input 
value={this.state.inputValue} //获取从store传输过来的state中inputValue值
placeholder="todo info" 
style={{ width: "300px", marginRight: "10px" }} 
/>
 dataSource={this.state.list}
```

<img src="D:\react\29.png" style="zoom: 67%;" />

#### 5.4 Action和Reducer的编写

安装Google的扩展程序redux devtools

根据以下网址的提示，为方便redux的调试在store文件下的index.js文件中添加内容

https://github.com/zalmoxisus/redux-devtools-extension#usage

```javascript
import { createStore  } from "redux";
import reducer from "./reducer";
const store = createStore(
    reducer,
    //以下一行是新添加的
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
```

<img src="D:\react\27.png" style="zoom: 50%;" />

**输入框字符输入功能的实现**

首先在Todolist的input框添加事件

```javascript
			<Input value={this.state.inputValue} 
            placeholder="todo info" 
            style={{ width: "300px", marginRight: "10px" }}
            onChange={this.handleInputChange}
            />
```

编写事件的函数内容，并在constructor函数中完成this的绑定

函数中编写action方法

```javascript
	handleInputChange(e){
        const action = {
            type:"change_input_value",      //默认type属性必须要有
            value:e.target.value            //获取要改变的value值
        }
        store.dispatch(action)              //通过disptch方法输送给store
    }
```

store默认不处理，将previousState，action输送给reducers

reducer.js

```javascript
const deafaultState = {
    inputValue:"123",
    list:[111]
}

// renducer 可以接收state 但绝不能修改state
//eslint-disable-next-line
export default (state = deafaultState, action) => {  
    if (action.type === "change_input_value") {
        const newState = JSON.parse(JSON.stringify(state));   //深拷贝一份初始数据命名为newState
        newState.inputValue = action.value   //修改newState的参数值
        return newState
    }
    //console.log(state, action)
    return state
}
```

type类型符合就会执行if语句，返回newState给store

Todolist中

```javascript
constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
}

handleStoreChange(){
    this.setState(store.getState()) // store.getState表示从store中重新取数据，然后使用setState替换当前组件中的数据
    }
```

在constructor中使用store.subscribe()函数，这是store的另一个方法。  这个函数是指，当store中数据发生变化的时候，就会执行该函数中括号中的内容。

**输入框中的值提交显示功能**

Todolist.js中提交按钮绑定事件

```javascript
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>

                handleBtnClick(){
                        const action = {
                            type:"add_todo_item"
                        }
                        store.dispatch(action)      //通过disptch方法输送给store
                    }
```

store默认不处理，将previousState，action输送给reducers

reducer.js

```javascript
	if (action.type === "add_todo_item"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        //console.log(newState)
        return newState
    }
```

返回newState传输给Todolist

再执行如下方法

```
constructor(props){
    super(props)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
}

handleStoreChange(){
    this.setState(store.getState()) // store.getState表示从store中重新取数据，然后使用setState替换当前组件中的数据
    }
```

实现功能

**TodoList标签item的删除功能**

Todolist中关键代码

```javascript
			<List
                style = {{marginTop:"10px", width:"350px"}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (           //传输item和index
                    <List.Item onClick={this.handleItemDetele.bind(this,index)}>
                        {item}
                    </List.Item>
                )}
            />

            handleItemDetele(index){
                    const action ={
                        type :"delete_todo_item",
                        index
                    }
                    store.dispatch(action)
                }
```

通过disptch方法输送给store，store默认不处理，将previousState，action输送给reducers

reducer.js

```javascript
	if(action.type === 'delete_todo_item'){
        const  newState = JSON.parse(JSON.stringify(state));  //深拷贝一份初始数据为newState
        newState.list.splice(action.index, 1);           //从action中的index下标开始删除一项
        return newState                   // return出来的数据newState返回给了store中
    }
```

store会默认用newState替换掉之前的state，因为之前我们实现第一个功能时已经使用store.subscribe()进行数据监听，并更改数据重新渲染组件，不需要再重复操作了。

#### 5.5 ActionTypes的拆分

为了使actiontype的内容出错更易找到

在store文件下创建actionTypes.js文件

```javascript
export const CHANGE_INPUT_VALUE = "change_input_value"
export const ADD_TODO_ITEM = "add_todo_item"
export const DETELE_TODO_ITEM = "delete_todo_item"
```

在todolist.js中导入，替换type

```react
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DETELE_TODO_ITEM} from "./store/actionTypes"

handleInputChange(e){
        const action = {
            type:CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        store.dispatch(action)
        
    }
    handleBtnClick(){
        const action = {
            type:ADD_TODO_ITEM
        }
        store.dispatch(action)
    }
    handleItemDetele(index){
        const action ={
            type :DETELE_TODO_ITEM,
            index
        }
        store.dispatch(action)
    }
```

在reducer.js中同样导入，替换

```react
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DETELE_TODO_ITEM} from "./actionTypes"

	if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        //console.log(newState)
        return newState
    }
    if(action.type === DETELE_TODO_ITEM){
        const  newState = JSON.parse(JSON.stringify(state));  //深拷贝一份初始数据为newState
        newState.list.splice(action.index, 1);           //从action中的index下标开始删除一项
        return newState                   // return出来的数据newState返回给了store中
    }
```

#### 5.6 使用actionCreator统一创建action

之前我们是在组件中（todolist.js中创建action的），我们的action应该通过ActionCreators来管理和创建所有action

在store文件下创建actionCreator.js文件

```react
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DETELE_TODO_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type:ADD_TODO_ITEM,
    
});

export const getDeteleItemAction = (index) => ({
    type:DETELE_TODO_ITEM,
    index
    
});
```

todolist中

```react
import { getInputChangeAction ,getAddItemAction, getDeteleItemAction} from "./store/actionCreator"

	handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)    
    }
    handleBtnClick(){
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDetele(index){
        const action = getDeteleItemAction(index)
        store.dispatch(action)
    }
```

#### 5.7 Redux知识点复习补充

**Redux的三个基本原则：**

1.store必须唯一（在store文件夹下的index.js中创建）

2.只有store只能改变自己的内容

不是Reducer进行更新的

是store拿到reducer的newState数据，然后自己进行更新

3.Reducer必须是纯函数

纯函数指的是：给固定的输入，就一定会有固定的输出，而且不会有任何副作用。

理解：当state固定 + action固定  => 返回值固定      如设定了时间new Date() ，并返回，就不是纯函数，不能是异步操作ajax

副作用：对接受的参数进行了修改

如下面就不是纯函数

```javascript
export default (state = deafultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
      const  newState = JSON.parse(JSON.stringify(state));  //深拷贝
      newState.inputValue = action.value;
      newState.inputValue = new Date();   				// 不固定
      state.inputValue = action.value;            //副作用
      return newState
 		}
```

**Redux中的核心API**

createStore  => 创建store

store.dispatch  => 发送action到store

store.getState => 获取store中的所有数据内容

store.subscribe() => 监听如果store改变则执行里面的函数

### 六、Redux进阶

#### 6.1 UI组件和容器组件

UI组件叫做傻瓜组件  （负责页面的渲染）（特殊情况也可以做一些简单的逻辑）

容器组件叫做聪明组件   （负责页面逻辑处理）

之前我们把渲染（render）和逻辑都在一个组件（todolist）里写着

**现在我们首先在src下创建一个TodoListUI.js，并创建TodoListUI组件和导出**

将原Todolist.js渲染的部分（render）部分剪切出来到TodoListUI.js中

在TodoList.js组件中导入TodoListUI组件，在其render函数中返回该UI组件

在TodoListUI.js中

1.将todolist中的UI组件拷贝过来

2.然后将其它的‘antd’组件引入 

3.父组件传值给子组件

例如：在render里面组件上传值`<TodoListUI inputValue={this.state.inputValue}/>`

然后TodoListUI.js组件就可以接收使用了，写成this.props.inputValue即可

4.父组件传函数方法给子组件和传值一样

例如：在render里面组件上传值`<TodoListUI inputValue={this.state.inputValue} handleInputChange={this.handleInputChange}/>`

然后TodoListUI.js组件就可以接收使用了，写成this.props.handleInputChange即可

5.需要注意的是函数中有传值的问题

必须用箭头函数进行传值

`onClick={(index) => {this.props.handleItemDelete(index)}}`

如果写成如下：

`onClick={this.props.handleItemDelete(index)}`

就会发生错误，因为传值有要求，必须是纯函数

TodolistUI.js

```react
import React, {Component} from "react";
import { Input, Button,List } from 'antd';

class TodolistUI extends Component {
    render(){
        return (<div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
        <Input 
        value={this.props.inputValue}          // 修改的地方，接收使用父组件传的值
        placeholder="todo info" 
        style={{ width: "300px", marginRight: "10px" }}
        onChange={this.props.handleInputChange}  // 修改的地方，接收使用父组件传的方法
        />
            <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>       
            // 修改的地方，接收使用父组件传的方法
        </div>
        <List
            style = {{marginTop:"10px", width:"350px"}}
            bordered
            dataSource={this.props.list}
            renderItem={(item,index) => (
                        // 下面是修改的地方，接收使用父组件传的方法（并解决函数传值问题）
                <List.Item onClick={() =>this.props.handleItemDetele(index)}>
                           //上面这里前面已经传index值了，所以箭头函数前面不需要再传。
                    {item}
                </List.Item>
            )}
        />
    </div>)
    }
}
export default TodolistUI
```

Todolist.js

```react
import React, { Component } from "react";
import "antd/dist/antd.css"

import store from "./store/index"
import { getInputChangeAction ,getAddItemAction, getDeteleItemAction} from "./store/actionCreator"
import TodolistUI from "./TodolistUI"
class Todolist extends Component {

constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDetele = this.handleItemDetele.bind(this)
    store.subscribe(this.handleStoreChange)
}
    render() {
        return (
            <TodoListUI                                      // 这里都是修改的地方
            inputValue={this.state.inputValue}           // 传值给子组件TodoListUI
            list={this.state.list}                       // 传值给子组件TodoListUI
            handleInputChange={this.handleInputChange}   // 传方法给子组件TodoListUI
            handleBtnClick={this.handleBtnClick}         // 传方法给子组件TodoListUI
            handleItemDelete={this.handleItemDelete}     // 传方法给子组件TodoListUI
         />  

    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)    
    }
    handleStoreChange(){
        this.setState(
            store.getState()   
        )
    }
    handleBtnClick(){
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDetele(index){
        const action = getDeteleItemAction(index)
        store.dispatch(action)
    }
}
export default Todolist;
```

#### 6.2 无状态组件

无状态组件就类似于一个函数

什么情况下使用无状态组件呢？

当一个普通的组件只有render函数的时候，我们可以通过无状态组件，替换普通组件

无状态组件的优势是什么？

之前普通组件是执行一个class类的组件，也会执行生命周期函数。现在改成函数，就只是执行了一个函数。

所以无状态组件性能明显比较高

所以如果我们将刚刚的UI组件改为无状态组件，就需要首先定义一个函数，函数接收props参数（父组件参数）返回之前render中渲染返回的内容（所以函数里也就可以直接使用props参数，不需要写成this.props啦）。

我们将原来的UI组件TodoListUI.js改为无状态组件

```react
//当一个普通的组件只有render函数的时候
//我们可以通过无状态组件，替换普通组件
//无状态组件性能比较高
const TodolistUI = (props) => {
    return (
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
        <Input 
        value={props.inputValue} 
        placeholder="todo info" 
        style={{ width: "300px", marginRight: "10px" }}
        onChange={props.handleInputChange}
        />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        </div>
        <List
            style = {{marginTop:"10px", width:"350px"}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (
                <List.Item onClick={(index) =>props.handleItemDetele(index)}>
                    {item}
                </List.Item>
            )}
        />
    </div>
    )
}
```



#### 6.3 Redux 中发送异步请求获取数据

在public文件夹里的api文件夹下创建list.json

```json
["USST","机械","213"]
```

在Todolist.js中重要代码

```react
import axios from "axios";      //导入axios模块


componentDidMount(){
        axios.get('/api/list.json').then ((res) => {        //从/api/list.json获取数据，成功后执行then方法
            const data = res.data                     //json数据转化
            const action = initListAction(data)       //创建action 传输定义的data
            store.dispatch(action）            //将要修改的数据发送给store，进而交给reducer处理
        })
    }
```

src/store/文件下actionTypes.js重要代码

```react
export const INIT_LIST = "init_list"
```

src/store/文件下actionCreateor.js重要代码

```react
import {INIT_LIST} from "./actionTypes";
export const initListAction = (data) => ({         //传入data数据，导出type和data
    type:INIT_LIST,
    data    
});
```

src/store/文件下reducer.js重要代码

```react
import {INIT_LIST} from "./actionTypes"

export default (state = deafaultState, action) => { 
    if (action.type === INIT_LIST){
            const newState = JSON.parse(JSON.stringify(state));     //深拷贝state数据
            newState.list = action.data                        //修改newState的list
            newState.inputValue = ""
            return newState                                   //返回newState给store
        }
    }
```

返回src文件夹下Todolist.js

```react
constructor(props){
    super(props)
    this.state = store.getState()          //将store中的初始值通过方法，getState赋值给state
    store.subscribe(this.handleStoreChange)     //当store中数据发生变化的时候，就会执行该函数中括号中的内容。
    
handleStoreChange(){
        this.setState(
            store.getState()   //store.getState表示从store中重新取数据，然后使用setState替换当前组件中的数据
        )
    }
```

#### 6.4 使用Redux-thunk中间件实现ajax数据请求

redux-thunk中间件安装命令 `yarn add redux-thunk`

官网文档：https://github.com/reduxjs/redux-thunk

**thunk作用**

**可以将异步请求或者复杂的逻辑放到actionCreators中的action里面去处理和管理**

redux-thunk中间件首先需要在store文件夹下的index.js进行配置

为了保证和redux-devtools的配置不发生冲突

参考文档：https://github.com/zalmoxisus/redux-devtools-extension

index.js代码如下

```react
import {createStore,applyMiddleware,compose} from "redux"  //apply和compose是新增内容
import thunk from 'redux-thunk'        //导入模块
import reducer from "./reducer"

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
      );
const store = createStore(reducer,enhancer)
export default store
```

Todolist.js改写

```react
import {getTodoList} from "./store/actionCreator"

componentDidMount(){
	const action = getTodoList()
    //当把action发送给store，store发现这是函数，就会自动执行
	store.dispatch(action)
}
```

在actionCreators.js中，如果不使用thunk中间件的话，我们就不能return一个函数(只能return对象，例如：type对象)给action，就会报错。现在我们可以返回一个函数，所以就可以将Ajax请求数据封装在actionCreatoes.js中，然后在组件（TodoList.js）componentDidMount中创建action时调用所封装的函数。因为需要使用axios，所以把组件中axios的导入剪切到actionCreators.js中。

在actionCreator.js中编写getTodoList函数

```react
import axios from "axios";

export const initListAction = (data) => ({
    type:INIT_LIST,
    data
    
});

//函数方法可以接收到dispatch方法
//可以使用dispatch给store发送action
export action = getTodolist(){
	return (dispatch) => {
		axios.get('/api/list.json').then ((res) => {
         	const data = res.data
            const action = initListAction(data)
            dispatch(action)
        })
	}
}
```

后续调用initListAction，store数据更新就会执行handleStoreChange函数，进而将store的state更新到组件中，完成渲染

#### 6.5 Redux的中间件

<img src="D:\react\30.png" style="zoom: 33%;" />

中间：指的是Action和Store之间

中间件都是对store的Dispatch方法的升级，使其具有其他能力

比如：thunk中间件使Dispatch可以派发action定义的函数（之前只能是对象），又比如logger中间件使Dispatch在派发action时打印日志。

这里thunk中间件的使用，使得Dispatch派发action时，如果传递过来的是对象，直接传递给store；如果传递过来的是函数，不会直接传递给store(先调用函数)；让函数先执行，需要调用store才调用store

#### 6.6 Redux-saga中间件使用入门

参考文档：https://github.com/redux-saga/redux-saga

https://redux-saga-in-chinese.js.org/docs/basics/index.html

安装命令

`npm install redux-saga --save`   or `yarn add redux-saga`

首先在store文件夹下创建sagas.js文件。然后修改store中的代码（**index.js**）

```react
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from'./reducer';
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(TodoSagas);
export default store;
```

这里首先导入  Redux的模块：import { createStore,applyMiddleware,compose } from 'redux';

然后导入saga模块：import createSagaMiddleware from 'redux-saga'

之后导入我们自己创建的模块：import TodoSagas from './sagas'

为了使得Redux tool 和 saga都能使用，因此使用了类似redux-thunk里面的方法

最后：sagaMiddleware.run(TodoSagas);

**src/store/sagas.js**

```react
function* mySaga() {

}

export default mySaga;
```

先默认saga.js内容写成上面这样，防止报错。

配置sagas后，dispatch派发的action不止store（默认给reducer）能接收到action，sagas.js也就能接收到dispatch派发的action了。

**Todolist代码修改（使用Redux-saga完成功能**

修改如下的代码

**src/TodoList.js**

```react
import { getInitList } from './actionCreators';  // 增加getInitList引入

componentDidMount() {
  const action = getInitList();
  store.dispatch(action);  
}
```

**src/store/actionCreators.js**

```react
import { GET_INIT_LIST } from './actionType';  // 增加这个action的type常量的导入

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({    // 创建这个action
    type: GET_INIT_LISTr
})
```

**src/store/actionTypes.js**

```react
export const GET_INIT_LIST = 'get_init_list'; // 增加这个type常量的定义
```

**使用Redux-saga完成功能**

可以参考官方文档：https://github.com/redux-saga/redux-saga

首先需要在saga.js中导入takeEvery,put方法：import { takeEvery,put } from 'redux-saga/effects';

其中takeEvery意思是捕捉每一个类型

**src/store/sagas.js**

```react
import { takeEvery,put } from 'redux-saga/effects';   // 导入takeEvery,put方法
import { GET_INIT_LIST } from './actionType';
import axios from 'axios';
import { initListAction } from './actionCreators';

function* mySaga() {
  //当捕捉到type为GET_INIT_LIST的action，就会执行后面的getInitList方法。以前是在reducer中判断type来执行方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
  //ajax 获取失败
  try {
    const res = yield axios.get('/todolist.json'); // yield指等后面执行完成之后再往下进行
    const action = initListAction(res.data);
    yield put(action);    // 之前我们使用store.dispatch(action)来派发，不过这里没有store这个仓库，不过saga中间件新增了put方法。
  }catch(e){
    console.log('list.json 网络请求失败');
  }          
}

export default mySaga;
```

这里saga.js接收到store.js派发的action后，来判断action的type类型，从而执行对应的函数方法。

按generator函数规则来写，并把store.dispatch换成put方法。

**注：saga与thunk的区别**

thunk只是拓展了action的功能，使得action能够返回一个函数，同时也是和action混合在一起使用的。

而saga则将这些异步请求的代码，单独放到了一个文件中进行处理，防止对action污染。

此外saga还拓展了许多API，可以实现不同的功能。可以参考如下的文档。

https://redux-saga-in-chinese.js.org/docs/basics/index.html

#### 6.7 使用React-redux

之前文件全部清除，只留下一个src/index.js文件，重新来。

创建Todolist组件并引入到index.js中。

新建store文件夹内容(store/index.js，store/reducer.js)

##### **1.React-Redux的安装**

yarn add react-redux

npm install --save react-redux

##### 2.使用React-Redux

它可以让我们更方便的在React 中使用Redux

**(1)创建Provider(react-redux的第一个核心API)**

**src/index.js**

```react
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist';
import { Provider } from 'react-redux';    //导入Provider
import store from './store';

const App = (
  //提供器连接了store,那么Provider里面的所有组件，都有能力获得store中的内容
  <Provider store={store}>
      <TodoList />
  </Provider>
);

ReactDOM.render(
    App,
  document.getElementById('root')
);
```

我们创建了一个App

里面有一个Provider 提供器，然后里面是我们的组件TodoList

只要写在Provider 中的组件，都有能力获取store中的内容。

**(2)TodoList（使用Provider后store数据的获取）**

**src/TodoList.js（connect为react-redux的第二个核心API）**

```react
import React,{ Component }from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input 
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>hello</li>
                </ul>
            </div>
        )
    }
}

//把Store中的内容映射到props中，这里state就是指store里面的数据，props指公共组件的里面的数据（reducer.js）
const mapStateToProps = (state) => {
    return {
      	// 这里inputValue实际上在props中
        inputValue: state.inputValue   // 使得store里面的inputValue映射到props里面的inputValue
    }
}

//把store的dispatch方法映射到props中
const mapDispatchToProps = (dispatch) => {
    return {
      	// 这里changeInputValue实际上在props中，所以可以直接使用store的dispatch方法
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        }
    }
}


//connect将TodoList这个UI组件和mapStateToProps，mapDispatchToProps连接形成容器组件。
// 所以实际上返回的是连接后的容器组件。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

connect这个API使得这个组件和store做连接（这个组件在Provider里面）

mapStateToProps, mapDispatchToProps是衍生出的连接方式

之后changeInputValue发送action到reducer中进行一个处理：

**src/store/reducer.js**

```react
const defaultState = {
    inputValue: 'Hello world',
    list: []
}
export default(state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}
```

##### 3.代码补全及其优化

connect连接了数据，页面跟着数据改变。所以也不需要我们像以前那样还需要用store的subscribe方法来监测数据的改变，从而进一步重新渲染页面。 

以下代码：

Todolist是一个UI组件，connect 将UI组件和逻辑相结合，只负责渲染，组件里只有一个render方法中，所以我们可以将其写成一个无状态组件。

**src/TodoList.js**

```react
import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
    const { inputValue,
        changeInputValue,
        handleClick,
        list,
        handleDelete } = props;

    return (
        <div>
            <div>
                <input 
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index)=>{
                        return (
                            <li onClick={() => handleDelete(index)} key={index}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

//把Store中的内容映射到props中，这里state就是指store里面的数据，props指公共组件的里面的数据（reducer.js）
const mapStateToProps = (state) => {
    return {
      	// 这里inputValue实际上在props中
        inputValue: state.inputValue,  // 使得store里面的inputValue映射到props里面的inputValue
        list: state.list
    }
}

//把store的dispatch方法映射到props中
const mapDispatchToProps = (dispatch) => {
    return {
        // 这里changeInputValue实际上在props中，所以可以直接使用store的dispatch方法
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },

        handleClick() {
            const action = {
                type: 'add_item'
            };
            dispatch(action);
        },

        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action);
        }
    }
}

//connect将TodoList这个无状态组件（UI组件改的）组件和mapStateToProps，mapDispatchToProps连接形成容器组件。
// 所以实际上返回的是连接后的容器组件。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

容器组件：包含组件渲染和业务逻辑。

UI组件：只有渲染，没有逻辑。

无状态组件：是一个函数，UI组件只有render函数时，可改为无状态组件。

**src/store/index.js**

```react
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
```

**src/store/reducer.js**

```react
const defaultState = {
    inputValue: '',
    list: []
}

export default(state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === 'add_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState
    }

    if(action.type === 'delete_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState
    }
    return state;
}
```

其实，上述代码还没有完全的精简

还需将代码中的方法  actionCreators 还有actionType 将代码进行一个分离。



### 七、项目实战 Header组件开发

#### 7.1 项目目录搭建 Styled-Components与Reset.css的结合使用

安装脚手架工具：`npm install -g create-react-app`
进入桌面 `cd Desktop`
创建项目 `create-react-app jianshu`

删掉src目录下文件，只留下index.js(入口文件)， index.css, App.js文件

**当你在一个js文件中引入css文件时，css不仅在该js文件中有效，在该js所包含的组件.js中也有效。这也就会导致，如果引入css文件的js文件中包含多个组件，所有组件的css样式都会写在这个css文件中，那么这个css文件代码就会很多，并且容易冲突。（我们是希望写css样式时，每个样式是独立的）**

所以可以采用styled-components来避免以上问题

安装命令 ：`yarn add styled-components`

参考文档：https://github.com/hengg/styled-components-docs-zh/blob/master/Basics.md

安装后之后就可以吧css文件改成js文件格式（把css样式放入js文件中），即改为style.js文件，在其他js文件引入css样式也自然成了引入放css的那个js文件（这里是style.js）。

再去改style.js文件中的内容

为了让默认样式在所有浏览器上做到统一，我们需要使用一个reset.css的文件，也就是将reset.css文件中的代码复制到src下的style.js中

参考文档：https://meyerweb.com/eric/tools/css/reset/

重置浏览器标签的样式表,因为浏览器的品种很多，每个浏览器的默认样式也是不同的，比如button标签，

在IE浏览器、Firefox浏览器以及Safari浏览器中的样式都是不同的，所以，通过重置button标签的CSS属性，

然后再将它统一定义，就可以产生相同的显示效果

**src/style.js**

```react
import { createGlobalStyle } from 'styled-components'

createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
```

**src/index.js**

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';


ReactDOM.render(<App />,document.getElementById('root'));
```

#### 7.2 完成Header组件布局

由于Header组件在每个页面都会出现在网页的顶部，所以在src目录下创建common/header文件夹，在底层目录创建index.js

**src/common/header/index.js**

```react
import React, {Component} from "react";
import {
    HeadWrapper, Logo, Nav, NavItem,Navsearch,Addition,
    Button
} from './style'
//从同目录下导入style.js 作为各个标签的装饰
class Header extends Component{
    render(){
        return (
            <HeadWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <Navsearch></Navsearch>
                </Nav>
                <Addition>
                    <Button className= 'write'>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeadWrapper>
        )
    }
}

export default Header
```

**src/common/header/style.js**

```react
import styled from "styled-components";
//导入src/statics/logo.png 作为简书的logo
import logoPic from '../../statics/logo.png'

export const HeadWrapper =styled.div`
    position: relative;
    height: 56px;
    border-bottom : 1px solid #f0f0f0;
`;


//  a标签有href属性
//  href:'/'表示点击该Logo后重回首页
export const Logo = styled.a.attrs({
    href:'/'
})`
    position: absolute;
    top:0;
    left:0;
    display: block;
    width:100px;
    height: 56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing: border-box;
    margin : 0 auto;
      
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size:17px;
    color: #333;
    &.left{
        float:left;
    } 
    &.right{
        float:right;
        color:#969696;
    } 
    &.active{
        color:#ea6f5
    }
`;

// input有placeholder属性
export const Navsearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding : 0 40px 0 20px;
    margin-top: 9px;
    margin-left；20px;
    box-sizing: border-box;
    border:none;
    outline；none;
    border-radius: 19px;
    background:#eee;
    font-size:14px; 
    &::placeholder{
        color:#999
    } 
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top:0;
    height: 56px;      
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right:20px;
    padding:0 15px;
    line-height:38px;
    font-size:14px;
    border-radius:19px;
    border: 1px solid #ec6149;
    &.reg{
        color:#ec6149;
    }
    &.write{
        color:#fff;
        background:#ec6149;
    }
`
```

将 box-sizing 设置为 "border-box"，可以让浏览器呈现出带有指定宽度和高度的框，并把边框border和内边距padding放入框中。

CSS盒子模型：https://www.runoob.com/css/css-boxmodel.html

**src/index.js**

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
// 将App组件的渲染 挂载到id=root下

ReactDOM.render(<App />,document.getElementById('root'));
```

**src/App.js**

```react
import React, { Component } from 'react';
import Header from './common/header/index';

// 导入index.js的Header组件 在该App下渲染

class App extends Component {
  render(){
    return (
      <Header />
    );
  }
}

export default App;
```

预览效果

<img src="D:\react\31.png" style="zoom: 33%;" />

#### 7.3 使用iconfont嵌入头部图标

使用阿里云的iconfont图标库：https://www.iconfont.cn/

登陆注册后，创建项目仓库，找到需要的图标下载

对应的图标文件放在jianshu\src\statics\iconfont文件夹下

将下载好的iconfont.css更名为iconfont.js

**src/statics/iconfont/iconfont.js**

```react
import { createGlobalStyle } from 'styled-components'

const GlobalStyleTwo = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1614397935460'); /* IE9 */
  src: url('./iconfont.eot?t=1614397935460#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./iconfont.woff2?t=1639026303565') format('woff2'),
  url('./iconfont.woff?t=1639026303565') format('woff'),
  url('./iconfont.ttf?t=1639026303565') format('truetype');
}
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
export {GlobalStyleTwo};
```

上述文件的主要代码由下载后demo_index.html文件的使用说明获得

创建span标签，使用图标

**src/index.js部分代码**

```react
					<NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <Navsearch></Navsearch>
                        <span className="iconfont">&#xe614;</span>     //对应的图标样式
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className= 'write'>
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
```

**src/common/header/style.js**关于搜索图标的样式

```react
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .iconfont {
        position : absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height:30px;
        border-radius: 15px;
        text-align:center;
    }
`;
```

#### 7.4 搜索框动画效果实现

完成搜索框的动画 首先绑定好输入框聚焦和返回的事件 再完成动画效果

通过对输入框focuse属性的有无来绑定样式

**src/common/header/index.js**

```react
	constructor(props){
        super(props);
        // 定义focused参数
        this.state = {
            focused:true
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    
  					<SearchWrapper>
                        <CSSTransition 
                            in={this.state.focused}
                            timeout={200}
                            className="slide"
                        >
                            <Navsearch
                                className = {this.state.focused ? 'focused' : ''}
                                // 判断focused值来确定className值，并分别给予不同className不同的style样式
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            >
                            </Navsearch>
                        </CSSTransition>
    					// 判断focused值来确定className值，并分别给予不同className不同的style样式
						// 并设置style背景值改变其显示背景色
                        <span 
                        className = {this.state.focused ? 'focused iconfont' : 'iconfont'}
                        >&#xe614;</span>
                    </SearchWrapper>
                    
  	handleInputFocus() {
        this.setState(()=>({
            focused: true  // 调用函数handleInputFocus时，改变focused参数
        }))
    }

    handleInputBlur() {
        this.setState(()=>({
            focused: false  // 调用函数handleInputBlur时，改变focused参数
        }))
    }
  
```

需要注意的是CSSTransition只能包含一个子组件！

用导入的CSSTransition包括住实现动画的组件，并传给其timeout（时长 毫秒）in （控制入场动画的）classNames（让它等于对象或字符串）参数

所以它是在SearchWrapper下的，所以在SearchWrapper下使用.slide等来定义其动画

我们需要知道的是，在styled-components中

子组件（父子关系）是使用  .className

本组件（同级关系）使用的是 &.className

**src/common/header/style.js**

```react
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .slide-enter{
        transition: all .2s ease-out;
    }
    .slide-enter-active{
        width: 240px;
    }
    .slide-exit{
        transition: all .2s ease-out;
    }
    .slide-exit-active{
        width: 160px;
    }
    .iconfont {
        position : absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height:30px;
        border-radius: 15px;
        text-align:center;
        &.focused {
            backgrund:#777;
            color:white;     //改变图标样式
        }
    }
`;

export const Navsearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding : 0 30px 0 20px;
    margin-top: 9px;
    margin-left；20px;
    box-sizing: border-box;
    border:none;
    outline；none;
    border-radius: 19px;
    background:#eee;
    font-size:14px; 
    color: #666;
    &::placeholder{
        color:#999
    } 
    &.focused {
        width:240px;         //长度从160变成240
    }
`;
```

#### 7.5 使用React-Redux进行应用数据的管理

安装redux以及react-redux中间件

`yarn add redux   `

`yarn add react-redux`

将this.state里的focused的数值打包进入store，实现对数据的管理

**src/index.js**

```react
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from './store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>        //提供器连接了store 那么Provider里面的所有组件 都有能力获得store中的内容
        <Header />
      </Provider>
    );
  }
}

export default App;
```

首先在src目录下创建store文件夹，在store目录下创建index.js和reducer.js

**src/store/index.js**

```react
import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(reducer);     //获取reducer的默认数据
export default store            // 导出store
```

初步代码**src/store/reducer.js**

```react
const defaultState = {
	focused: false                //设置默认值
}

export default (state=defaultSate, action) => {
	return state                      //将默认状态导出
}
```

主要代码**src/common/header/index.js**

```react
//删除constructor函数，以及对于this.state的设置，交给reducer来完成
import {connect} from "react-redux"  //导入connect

						<Navsearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </Navsearch>
                                
//把Store中的内容映射到props中，这里state就是指store里面的数据，props指公共组件的里面的数据（reducer.js）
const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

// 把disptch方法映射给props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: "focus"
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: "blur"
            }
            dispatch(action)
        }
    }
}
//connect将Header组件和mapStateToProps，mapDispatchToProps连接形成容器组件。
// 所以实际上返回的是连接后的容器组件。
export default connect(mapStateToProps, mapDispatchToProps)(Header);
```

最终代码**src/common/header/index.js**

```react
import React from "react";
import { connect } from "react-redux"
import { CSSTransition } from 'react-transition-group';
import {
    HeadWrapper, Logo, Nav, NavItem, Navsearch, Addition,
    Button, SearchWrapper
} from './style'

// 改写为无状态组件
const Header = (props) => {
    return (
        <HeadWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <Navsearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </Navsearch>
                    </CSSTransition>
                    <span
                        className={props.focused ? 'focused iconfont' : 'iconfont'}
                    >&#xe614;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='write'>
                    <span className="iconfont">&#xe615;</span>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeadWrapper>
    )

}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: "focus"
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: "blur"
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
```

**src/store/reducer.js**

```react
const defaultState = {
    focused: false
};
// eslint-disable-next-line
export default (state = defaultState, action) => {
    if (action.type === "focus") {
        return {
            focused:true
        }
    }
    if (action.type === "blur") {
        return {
            focused:false
        }
    }
    return state;
}
```

#### 7.6 使用combineReducers完成对数据的拆分管理

配置redux-devtools 可以通过谷歌浏览器的插件查看数据的状态信息

参考5.4章节

**src/store/index.js的配置代码**

```react
import { createStore, compose } from "redux";
import reducer from "./reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers() );

export default store;

```

将公共部分的header组件数据放在src/store中管理，随着后续数据的增多，reducer.js文件会越来越庞大

为解决此问题，特意在src/common/header/store下创建reducer.js，实现对src/store/reducer.js代码的继承，完成对数据的处理

**src/common/header/store/reducer.js**

```react
const defaultState = {
    focused: false
};
// eslint-disable-next-line
export default (state = defaultState, action) => {
    if (action.type === "focus") {
        return {
            focused:true
        }
    }
    if (action.type === "blur") {
        return {
            focused:false
        }
    }
    return state;
}
```

此时需要重写**src/store/reducer.js** 建立起两个reducer的连接

```react
import { combineReducers } from "redux"       //从redux导入reducer结合的函数
//import headerReducer from "../common/header/store/reducer"
import {reducer as headerReducer} from "../common/header/store"       //从该目录下的index.js导入reducuer 重命名

const reducer = combineReducers({
    header: headerReducer
})
// 将headerRdeucer传递给header 使得header成为state的一个属性
export default reducer
```

**src/common/header/store/index.js**

```react
import reducer from "./reducer";
//同文件下导入reducer 然后导出  简易了src/store/reducer.js导入header组件reducer的路径
export {reducer}
```

此时**src/common/header/index.js**也需要修改

```react
// header变成state下的一个属性，也是state和数值间新建连接的结果
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
```

#### 7.7 actionCreator与actionTypes的拆分

优化步骤

##### 1.store下创建两个文件

actionCreators：用来存放action

actionTypes：用来放常量

index：用来放导入的模块

##### 2.代码书写

**src/common/header/store/index.js**

```react
import reducer from "./reducer";
import * as actionCreator from './actionCreator'
import * as actionTypes from "./actionTypes"
export { reducer, actionCreator, actionTypes}
```

**src/common/header/store/actionTypes.js**

```react
export const FOCUS = "header/FOCUS";
export const BLUR = "header/BLUR";
```

**src/common/header/store/actionCreators.js**

```react
import * as actionTypes from "./actionTypes"

export const Focus = () => ({
    type:actionTypes.FOCUS
})

export const Blur = () => ({
    type:actionTypes.BLUR
})
```

**src/common/header/store/reducer.js**

```react
import * as actionTypes from "./actionTypes"
const defaultState = {
    focused: false
};
// eslint-disable-next-line
export default (state = defaultState, action) => {
    if (action.type === actionTypes.FOCUS) {
        return {
            focused:true
        }
    }
    if (action.type === actionTypes.BLUR) {
        return {
            focused:false
        }
    }
    return state;
}
```

**src/common/header/index.js**主要代码

```react
import * as actionCreator  from "./store/actionCreator"

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.Focus())
        },
        //我们这里不创建action，直接写在括号里即可。使得代码更简洁
        handleInputBlur() {
            dispatch(actionCreator.Blur())
        }
    }
}
```

#### 7.8 使用Immutable.js来管理store中的数据

在reducer中，我们是不可以对state中的代码进行修改的，我们是通过拷贝一份数据然后进行返回，

但是有的时候不小心就会修改到state中的值，又很难发现其中的问题。

immutable的意思是：不可改变的

因此就需要Immutable.js来进行数据的管理。这是一个第三方的库，需要进行安装

参考文档：https://github.com/immutable-js/immutable-js

安装命令 ：`yarn add immutable`

**src/common/header/store/reducer.js**

```react
import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";    //导入模块

//使用fromJS将其变为immutable数据
const defaultState = fromJS({
    focused: false
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    if (action.type === actionTypes.FOCUS) {
        // immutable对象的set方法会结合之前的数据返回新数据
        return state.set('focused', true)
        
    }
    if (action.type === actionTypes.BLUR) {
        return state.set('focused', false)
    }
    return state;
}
```

在header/index.js中需要使用immutable中的get方法才能来获取immutable对象的值。

**src/common/header/index.js**

```react
const mapStateToProps = (state) => {
    return {
        //focused: state.header.focused
        focused: state.header.get('focused')
    }
}
```

在header/store/reducer.js中使用immutable中的set方法修改immutable对象的值。

当然这个方法并不会直接修改我们state中的数据，这个方法的实质是：我们使用这个方法，会结合之前的immutable对象，和我们设置的值，来返回一个全新的值

**src/common/header/store/reducer.js**

```javascript
import { constants } from './';
import { fromJS } from 'immutable';

//将其变为immutable对象
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS){
        return state.set('focused', true);
        //immutable对象的set方法，会结合之前immutable对象
        //和设置的值，会返回一个全新的对象
        // {
        //     focused: true
        // }
    }
    
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused', false);
    }
    return state;
}
```

#### 7.9 使用redux-immutable统一数据格式

##### 1.为什么使用redux-immutable

在如下代码中src/common/header/index.js中mapStateToProps里面的 focused: state.header.get('focused')这行代码，

其中states 是一个js对象，而state.header是一个immutable对象，所以调用focused属性的时候，得先调用state的‘.’，再去调用header的‘.get’方法。所以说数据获取不统一，前面是按照js对象来获取，后面又是按照immutable对象来获取的，这样不太靠谱。我们希望统一一下，因此我们希望state也是一个immutable对象。

**src/common/header/index.js**

```javascript
const mapStateToProps = (state) => {
    return {
        //focused: state.header.focused
        focused: state.header.get('focused')
    }
}
```

思路：找到以上代码state所指位置，并将其改为immutable对象。

##### 2.redux-immutable的安装

https://www.npmjs.com/package/redux-immutable

yarn add immutable

##### 3.使用

**第一步**：在 安装好之后，我们改变combineReducers的导入模块，之前是从redux模块导入combineReducers，现在让它从redux-immutable模块中导入

**src/store/reducer**

```javascript
import { reducer as headerReducer } from '../common/header/store';
//我们从redux-immutable导入原来的combineReducers,这个combineReducers里面的数据内容就是immutable的数据内容。
import { combineReducers } from 'redux-immutable';

//这是我们之前combineReducers的导入方式，这个combineReducers不能是里面数据变为immutable数据内容。
//import { combineReducers } from 'redux';

const reducer =  combineReducers({
    header: headerReducer
}); 

export default reducer;
```

**第二步**：修改src/common/header/index.js中mapStateToProps里面数据获取方法。

```javascript
const mapStateToProps = (state) => {
    return {
        //focused: state.header.focused
        focused: state.getIn(['header', 'focused'])
        //state.get('header').get('focused')
    }
}

immutable对象提供了两种方法：
1.state.get('header').get('focused')  通过两次get方法
2.state.getIn(['header', 'focused']) 通过getIn方法 获取 header 中的 focused
```

使用完毕！

##### 4.了解其他immutable中除fromJS，get，getIn等以外的内容，去官网看

官网：https://immutable-js.github.io/immutable-js/

#### 7.10 热门搜索样式布局

创建搜索框聚焦后的热门搜索样式

在`<SearchWrapper>`下创建如下样式**src/common/header/index.js**

```react
import {SearchWrapper, SearchInfo, SearchInfoTitle,SearchInfoSwitch, SearchInfoItem, SearchInfoList,
} from './style';			
			<SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
```

绑定样式**src/common/header/style.js**

```react
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top:56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);    
 `;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px; 
    line-height: 20px;
    font-size: 14px;
    color: #969696;    
 `;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;    
`;

export const SearchInfoList = styled.div`
    overflow:hiddden;   
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding:0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px; 
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;

```

为了使得热门搜索的样式在聚焦时出现，点击外部时消失，在index.js下创建函数包裹`<SearchInfo>`标签

```react
const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null;
    }
}
				
				// 使用方法，用props.focused的true或者flase来作为show的传导 与搜索框的动画相对应
				<SearchWrapper>
					{getListArea(props.focused)}
                </SearchWrapper>
```

#### 7.11 Ajax获取推荐数据

##### 1.安装对应的插件

(1)安装中间件 `yarn add redux-thunk`，并配置thunk使用

(2)安装ajax数据 请求插件`yarn add axios`

##### 2.使用ajax获取数据

**(1)从哪里获取数据**

React框架寻找的特性：

1.工程目录下看对应的路由

2.找不到，会到public目录下的api/headerList.json寻找 然后就会发送出来，因此我们就可以使用假数据

因此，我们在public目录下创建对应的文件

我们使用统一的数据格式：

**public/api/headerList.json**

```javascript
{
    "success":true,
    "data":["高考", "考研", "上海理工","react", "Django","Python", "前端","大数据", "数据分析"]
}
```

**(2)使用数据**

建立起与actionCreator（action创建的连接）

**src/commom/header/index.js**

```react
import * as actionCreator from "./store/actionCreator"

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.getList())
            dispatch(actionCreator.Focus())
        },
        handleInputBlur() {
            dispatch(actionCreator.Blur())
        }
    }
}
```

进入**src/commom/header/store/actionCreate.js**中

```react
import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";
import axios from "axios";

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    //data:data
    //将要传过去的data变为immutable对象
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            // changeList(data.data)实际上就是action
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error');
        })
    }
}
```

**actionTypes.CHANGE_LIST**来自**src/commom/header/store/actionTypes.js**

```react
export const CHANGE_LIST = "HEADER/CHANGE_LIST"
```

首先，我们新创建了一个变量list。要注意的是：list中数组的类型也是immutable；因此，我们在更新数据的时候也要使得获取的数据是immutable类型的，因此我们最好在获取数据的时候将要传过去的data变为immutable对象（在actionCreators.js中）

**src/common/header/store/reducer.js**

```javascript
import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";
const defaultState = fromJS({
    focused: false,
    list: []
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    if (action.type === actionTypes.FOCUS) {
        // immutable对象的set方法会结合之前的数据返回新数据
        return state.set('focused', true)   
    }
    if (action.type === actionTypes.BLUR) {
        return state.set('focused', false)
    }
    if (action.type === actionTypes.CHANGE_LIST) {
        return state.set('list', action.data)
    }
    return state;
}
```

**3.数据传递成功后需要在热门搜索样式中显示，使list运用map方法**

**src/commom/header/index.js**

```react
class Header extends Component {
    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        //循环遍历list 在SearchInfoItem中体现
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render()
```

**4.结果**

<img src="D:\react\32.png" style="zoom:50%;" />

#### 7.12 代码优化微调

**1.变量在前 导出在后**

**src/commom/header/store/actionCreate.js**

```react
import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";
import axios from "axios";

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    //data:data
    data: fromJS(data)
})

export const Focus = () => ({
    type:actionTypes.FOCUS
})

export const Blur = () => ({
    type:actionTypes.BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error');
        })
    }
}
```

**2.解构赋值**

**src/commom/header/index.js**

```react
const { focused, list, handleInputFocus, handleInputBlur} =this.props;

// this.props.focused就可以简写为focused
```

**3.switch替换多if**

**src/common/header/store/reducer.js**

```react
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.FOCUS:
            return state.set('focused', true);
        case actionTypes.BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
    // if (action.type === actionTypes.FOCUS) {
    //     return state.set('focused', true)  
    // }
    // if (action.type === actionTypes.BLUR) {
    //     return state.set('focused', false)
    // }
    // if (action.type === actionTypes.CHANGE_LIST) {
    //     return state.set('list', action.data)
    // }
    // return state;
}
```

#### 7.13 热门搜索换页功能实现

首先为了实现换页功能，需要在header组件的的state设置好以下参数

**src/common/header/store/reducer.js**中

```react
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalpage: 1,
});
```

**src/common/header/index.js**中绑定好映射关系

```react
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalpage: state.getIn(['header', 'totalpage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}
```

首先在第一次聚焦搜索框，发送ajax请求同时，算出总共json数据的组数（10个一组）

```react
// index.js中
const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalpage:Math.ceil(data.length / 10)
})

//进入reducer后  第一次得到json后，将所得data和totalpage替换到list和totalpage的默认值
export default (state = defaultState, action) => {
    switch(action.type) {
    	case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalpage: action.totalpage
            })
		default:
            return state;
    }
}        
```

为了使得热门搜索样式不随着focused=true时变化，则需重新给搜索样式添加方法

```react
// index.js中
if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                </SearchInfo>                
                
const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter () {
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave () {
            dispatch(actionCreator.mouseLeave())
        }
    }
}

// actionCreator中
export const mouseEnter = () => ({
    type:actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
}) 

// actionTypes中
export const MOUSE_ENTER = "HEADER/MOUSE_ENTER";
export const MOUSE_LEAVE = "HEADER/MOUSE_LEAVE";
    
// reducers中
export default (state = defaultState, action) => {
    switch(action.type) {
    	case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
		default:
            return state;
    }
}        
```

换页功能的实现，以及数据的呈现

**注意**：我们获取的list中的数据是immutable类型，是无法通过list[i]方式显示。我们使用方法toJS将其转为JS类型，并且赋值给jsList

```react
// index.js中
const { focused, list, page, mouseIn,
             handleMouseEnter, handleMouseLeave, totalpage, handleChangePage} =this.props;
        const jsList = list.toJS()
        const pageList = []
        // if判断是为了避免组件刚加载时渲染会自动自行，此时list为空，key的赋值无效
        if (jsList.length) {
            // 循环是为了呈现当前page页码的数据
            for (let i = (page*10); i < (page + 1)*10; i++) {
            //通过push存储到该数组 我们通过变量{pageList} 在页面显示
            pageList.push(
                // 随着循环依次出现
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>    
            )
        }
        }
 		
		// 创造click事件，并传递page和totalpage,方便对其进行操作
	if (focused || mouseIn) {
            return (
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalpage)}>换一批									</SearchInfoSwitch>
                    </SearchInfoTitle>
                	<SearchInfoList>
                        { pageList }
                    </SearchInfoList>
           	 )
     } else {
           return null;
        }
    }                
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage (page,totalpage) {
            // 页数未超过最大页数 page+1 否则重新为0
            if (page < totalpage-1) {
                dispatch(actionCreator.changePage(page + 1))
            }else{
                dispatch(actionCreator.changePage(0))
            }
        }
    }
}

// actionCreator中
export const changePage = (page) => ({
    type:actionTypes.CHANGE_PAGE,
    page
    // page表示page:page
})

// actionTypes中
export const CHANGE_PAGE = "HEADER/CHANGE_PAGE"
    
// reducers中
export default (state = defaultState, action) => {
    switch(action.type) {
            // 更改page值
    	case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
		default:
            return state;
    }
}   
```

#### 7.14 换页旋转动画效果的实现

**1. 去使用对应的icon**

<img src="D:\react\33.png" style="zoom: 80%;" />

我们将其放在换一批的前面

```javascript
   				<SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                        onClick={() => handleChangePage(page, totalpage, this.spinIcon)}>
                        <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;								</span>
                        换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
```

**2.设置样式**

(1)调整该icon到合适的位置

(2)设置动画（这里我们不使用CSStransition）

设置过渡效果

**transition: all .2s ease-in;**

**transform-origin: center center;**以图标中心旋转

```javascript
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        position: relative;
        top:5px;
        float: left;
        width: 12px;
        height: 12px;
        color: red;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
```

(3)设置逻辑

```javascript
						<SearchInfoSwitch 
                        onClick={() => handleChangePage(page, totalpage, this.spinIcon)}>
                        <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;								</span>
                        换一批
                        </SearchInfoSwitch>
```

我们通过ref来获取此标签当前的真实节点。然后传值给handleChangePage

```javascript
handleChangePage(page, totalPages, spin) {
  let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');    // 用来取字符串中的值，非数字就用''代替
  // 第一次拿到的originAngle为空
  if(originAngle) {
    originAngle = parseInt(originAngle, 10);    //十进制整数化
  }else{
    originAngle = 0;
  }
  spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
  
  if( page < totalPages){
    dispatch(actionCreators.ChangePage(page+1));
  }else{
    dispatch(actionCreators.ChangePage(1));
  }
}
```

获得该节点之后：我们需要获取spin.style.transform的值，但是我们不设置的时候，其为空

我们通过正则表达式将  "rotate(360deg)"中的数字提取，`spin.style.transform.replace(/[^0-9]/ig, '');`

然后我们判断是否存在值：

若存在 则 获取里面的数值然后  +  360

不存在 则 使其等于0  然后+360

这样我们就实现了图标的旋转

#### 7.15 避免无意义的请求发送，提升组件性能

每次点击搜索框时都需要发送ajax请求，避免无意义的性能消耗

```react
render() {
        const { focused, handleInputFocus, handleInputBlur, list} = this.props
        					
        					// handleInputFocus传递list参数
        					<Navsearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                            </Navsearch>
                            
        //  list.size = 0 时才发送请求            
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreator.getList())
            }
            dispatch(actionCreator.Focus())
        }
```

更改换一换鼠标点击样式

```react
// style.js

//cursor: pointer; 换成手的形状
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        fontsize:12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;  
    }    
`;
```

### 八、项目实战 首页开发

#### 8.1 在React中使用路由功能

 **1.安装** 

`yarn add react-router-dom`

`import { BrowserHistory, Route} from 'react-router-dom';`

 **2.路由设置和使用** 

打开我们的APP.js

如下是设置的代码

代码解释：

import { BrowserRouter, Route} from 'react-router-dom'; 导入模块

外面加一层div 是有要去的 render只包含一个child

添加路由：

```react
	<BrowserRouter>
       <Route path='/' exact render= {() => <div>home</div>}></Route>
      	<Route path='/detail' exact render= {() => <div>detail</div>}></Route>
    </BrowserRouter>
```

path： 路径

其中exact表示只有路径完全匹配才能访问（如果不设置的话，/detail的路径两个都可以访问到）

 **src/App.js** 

```react
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
              <div>
                <Route path="/" exact render={() => <div>home</div>}></Route>
                <Route path="/detail" exact render={() => <div>detail</div>}></Route>
              </div>
          </BrowserRouter>
        </div>

      </Provider>
    );
  }
}

export default App;
```

在特定路由显示内容

<img src="D:\react\34.png" style="zoom:50%;" />

#### 8.2 首页组件的拆分

在src目录下创建pages文件夹 在该文件夹创建home和detail文件夹，在这两个文件夹下创建index.js

**src/pages/detail/index.js   而home/index.js与其类似**   

```react
import React, {Component} from "react";

class Detail extends Component {
    render() {
        return (
            <div>detail</div>
        )
    }
}

export default Detail
```

在**src/App.js**使用组件

```react
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './common/header';
import Home from './pages/home';       // 导入组件
import Detail from './pages/detail';   // 导入组件
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
              <div>
                <Route path="/" exact component={Home}></Route>               {/* 路由连接组件的样式 */}
                <Route path="/detail" exact component={Detail}></Route>
              </div>
          </BrowserRouter>
        </div>

      </Provider>
    );
  }
}

export default App;
```

首页拆分组件

home文件夹下创建**components**文件夹 内含有**Topic.js List.js Recommend.js Writer.js**   内容大致相同

src/pages/home/commponents/Topic.js

```react
import React, {Component} from "react";

class Topic extends Component {
    render() {
        return (
            <div>Topic</div>
        )
    }
}

export default Topic
```

在home下的index.js下引用上述组件

```react
import React, {Component} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeWrapper, HomeLeft, HomeRight} from "./style"

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List /> 
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;
```

home文件夹下的style.js编写样式布局

```react
import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;        
    width: 625px;
    float:left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 240px;
    float:right;
`;
```

效果图

<img src="D:\react\35.png" style="zoom:50%;" />

#### 8.3 首页专题区域布局及reducer的设计

首先在专题区域即Topic.js的TopciWrapper下编写多个TopicItem设置好TopicWrapper以及TopicItem之间的上下左右间距

```react
// Topic.js
import { TopicWrapper, TopicItem } from "../style";	

						<TopicItem >
                            <img
                                className="topic-pic"
                                src="url" />
                            社会热点
                        </TopicItem>
                        <TopicItem >
                            <img
                                className="topic-pic"
                                src="url" />
                            社会热点
                        </TopicItem>
                        <TopicItem >
                            <img
                                className="topic-pic"
                                src="url" />
                            社会热点
                        </TopicItem>

//home下的style.js
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    font-size: 14px;
    background:#f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        width:32px;
        height:32px;
        dispaly: block;
        float:left;
        margin-right: 10px;     
    }
`;
```

设置好样式后，将数据放置在home下的store中

在home文件夹下创建reducer.js和index.js文件 将home下的reducer与总文件夹src下的reducer相连接

**src/store/reducer.js**

```react
import { combineReducers } from "redux-immutable"
import {reducer as headerReducer} from "../common/header/store"
import  {reducer as homeReducer} from "../pages/home/store"


const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})

export default reducer
```

homeReducer的导入 需要先进入**src/pages/home/store/index.js**

```react
import reducer from "./reducer";   //从该文件目录下的reducer下导入

export { reducer };
```

**src/pages/home/store/reducer.js**

```react
import { fromJS } from "immutable";
const defaultState = fromJS({
    topicList: [{
        id:1,
        title:"社会热点",
        imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
    },{
        id:2,
        title:"手绘",
        imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg" 
    }
    ]    
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
```

创建好默认状态数值后，在Topic.js中map遍历数据

**src/pages/home/components/Topic.js**

```react
import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
    render() {
        const {list} = this.props
        // map 函数传递item数值 key选用id
        // immutable对象只能调用get方法
        return (
            <TopicWrapper>
                {list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img
                                className="topic-pic"
                                src={item.get('imgUrl')} />
                            {item.get('title')}
                        </TopicItem>
                    )
                })
                }
                <div>更多热门专题</div>
            </TopicWrapper>
        )
    }
}

//把Store中的内容映射到props中，这里state就是指store里面的数据，props指公共组件的里面的数据（reducer.js）
const mapState = (state) => ({
    list: state.get('home').get('topicList')
})

//connect将Topic这个组件和mapState、null连接形成容器组件 
export default connect(mapState, null)(Topic)
```

#### 8.4 首页文章列表制作

编写文章列表部分的代码与Topic.js的内容基本相似

**src/pages/home/components/List.js**

```react
import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
    render() {
        const {list} = this.props
        return (
            <TopicWrapper>
                {list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img
                                className="topic-pic"
                                src={item.get('imgUrl')} 
                                alt="" />
                            {item.get('title')}
                        </TopicItem>
                    )
                })
                }
                <div>更多热门专题</div>
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','topicList'])
    // getIn方法获取immutable的数据
})

export default connect(mapState, null)(Topic)
```

**src/pages/home/style.js**

```react
import styled from "styled-components";

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;    
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width:125px;
        height:100px;
        float: right;
        border-raduis: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color:#999;
    }
`;
```

**src/pages/home/store/reducer.js**

```react
import { fromJS } from "immutable";
const defaultState = fromJS({
    topicList: [{}],
    articleList: [{
        id:1,
        title:"《白鹿原》：一本有点颜色的书？",
        desc:"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
        imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
    },{
        id:2,
        title:"《白鹿原》：一本有点颜色的书？",
        desc:"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
        imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
    },{
        id:3,
        title:"《白鹿原》：一本有点颜色的书？",
        desc:"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
        imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
    }]    
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
```

`<img className="topic-pic" src={item.get('imgUrl')} alt="" />`     img要求其必须有alt属性 否则会出现警告

目前代码的预览效果图

<img src="D:\react\36.jpg" style="zoom: 25%;" />

#### 8.5 首页推荐部分代码编写

完成对于推荐部分以及作者部分的编写 与Topic.js、List.js相似

```react
// Recommend.js
import React, {Component} from "react";
import {connect} from "react-redux";
import {RecommendWrapper, RecommendItem} from "../style"
class Recommend extends Component {
    
    render() {
        const {list} = this.props
        return (
            <RecommendWrapper>
                {
                    list.map((item) =>{
                        return  <RecommendItem imgUrl={item.get('imgurl')} key={item.get('id')}></RecommendItem>
                
                    })
                }
               </RecommendWrapper>
        )
    }
}
const mapState = (state) => ({
    list:state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend)

// Writer.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { WriterHeader, WriterSwitch, WriterItem, WriterInfo, WriterName, WriterDesc, WriterFocus, AllWriter } from "../style";
class Writer extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                <WriterHeader>推荐作者
                    <WriterSwitch>换一批</WriterSwitch>
                </WriterHeader>
                {
                    list.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <img className="head" src={item.get("imgUrl")}
                                    alt="" />
                                <WriterInfo>
                                    <WriterName>{item.get('name')}</WriterName>
                                    <WriterDesc>{item.get('desc')}</WriterDesc>
                                    <WriterFocus>+关注</WriterFocus>
                                </WriterInfo>
                            </WriterItem>
                            
                    )
                })}        
                    <AllWriter>查看全部</AllWriter>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)
```

style.js样式部分

```react
import styled from "styled-components";
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    height:50px;
    width: 280px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`;

export const WriterWrapper = styled.div`
    width: 280px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;

`;

export const WriterHeader = styled.div`
    font-size: 14px;
    color: #969696;
    margin-bottom: 18px;    
`;

export const WriterSwitch = styled.div`
    float: right;
    font-size: 14px;
    color: #969696;
`;

export const WriterItem = styled.div`
    width: 285px;
    overflow: hidden;
    .head {
        width: 50px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 50%;
        float: left;
    }    
`;

export const WriterInfo = styled.div`
    overflow: hidden;
    width: 230px;
    margin-top: 4px;
    margin-left: 60px;
    margin-bottom: 20px;    
`;

export const WriterName = styled.div`
    font-size: 14px;
    color: #333;    
`;

export const WriterDesc = styled.div`
    margin-top: 8px;
    font-size: 12px;
    color: #969696;    
`;

export const WriterFocus = styled.div`
    float: right;
    margin-right: 10px;
    font-size: 13px;
    color: #42c02e;    
`;

export const AllWriter = styled.div`
    position: absolute;
    width: 258px;
    padding: 7px 7px 7px 12px;
    left: 0;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;    
`;
```

reducer.js部分

```react
import { fromJS } from "immutable";
const defaultState = fromJS({
	recommendList:[{
        id:1,
        			imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
    },{
        id:2,
        imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
    }]    
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
```

#### 8.6 首页异步数据获取

为了数据不存放在reducer.js中，而是从ajax数据获取

首先在public的api目录下创建**home.json**文件

```json
{
    "success":true,
    "data":{
        "topicList": [{
            "id":1,
            "title":"社会热点",
            "imgUrl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
        },{
            "id":2,
            "title":"手绘",
            "imgUrl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg" 
        }],
        "articleList": [{
            "id":1,
            "title":"《白鹿原》：一本有点颜色的书？",
            "desc":"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
            "imgurl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
        },{
            "id":2,
            "title":"《白鹿原》：一本有点颜色的书？",
            "desc":"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
            "imgurl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
        },{
            "id":3,
            "title":"《白鹿原》：一本有点颜色的书？",
            "desc":"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
            "imgurl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
        }],
        "recommendList":[{
            "id":1,
            "imgurl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
        },{
            "id":2,
            "imgurl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
        }],
        "writerList":[{
            "id":1,
            "imgUrl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg",
            "desc":"写了151.5k字 · 13k喜欢",
            "name":"🐖"
        },{
            "id":2,
            "imgUrl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg",
            "desc":"写了17.7k字 · 22k喜欢",
            "name":"兰"
        },{
            "id":3,
            "imgUrl":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg",
            "desc":"写了200.3k字 · 777k喜欢" ,
            "name":"梅"
        }]
    }
}
```

在home下的**index.js**文件下获取数据，运用生命周期函数，以及connect方法 发送action

```react
import React, {Component} from "react";
import {connect} from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeWrapper, HomeLeft, HomeRight} from "./style"
import axios from "axios";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List /> 
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res) =>{
            const result = res.data.data;
            const action = {
                type:"change_home_data",
                topicList:result.topicList,
                articleList:result.articleList,
                recommendList:result.recommendList,
                writerList: result.writerList
            }
            // 渲染时调用方法 传递action
            this.props.changeHomeData(action)
            //console.log(result)
        })
    }
}
const mapDispatch =(dispatch) => ({
    changeHomeData(action){
        // 发送
        dispatch(action);
}
})

// 容器连接
export default connect(null, mapDispatch) (Home);
```

**home/store/reducer.js**

```react
import { fromJS } from "immutable";
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList:[],
    writerList:[]
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        case "change_home_data":
            // merge方法
            return state.merge({
                topicList: fromJS(action.topicList),
                recommendList: fromJS(action.recommendList),
                articleList: fromJS(action.articleList)
            })
            // immutable类型和jsx语法类型不相符 所以使用fromJS
            //state.set('topicList', fromJS(action.topicList)).set
            //console.log(action)

        default:
            return state;
    }
}
```

#### 8.7 异步操作代码拆分优化

需要对派发的action结构进行拆分，home下的index.js不适合编写过多的action内容，所以需要改写

```react
import React, {Component} from "react";
import {connect} from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeWrapper, HomeLeft, HomeRight} from "./style"
import {actionCreator} from "./store"

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List /> 
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
        
    }
}
const mapDispatch =(dispatch) => ({
    changeHomeData(){
        const action = actionCreator.getHomeInfo();
        dispatch (action)
}})

export default connect(null, mapDispatch)(Home)
```

`actionCreator.getHomeInfo()`表示进入actionCreator的getHomeInfo方法

**home/store/index.js**

```react
import reducer from "./reducer";
import * as actionCreator from "./actionCreator";
export { reducer, actionCreator };
```

**home/store/actionCreator.js**

```react
import axios from "axios";
import * as actionTypes from "./actionTypes"
const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            //const action = changeHomeData(result)
            dispatch(changeHomeData(result))
        })
    }
}

```

`import * as actionTypes from "./actionTypes"`表示进入actionTypes中

**home/store/actionTypes.js**

```react
export const CHANGE_HOME_DATA = "HOME/CHANGE_HOME_DATA";
```

最后改写reducer中switch方法 的actionTypes

**home/store/reducer.js**

```react
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList:[],
    writerList:[]
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                recommendList: fromJS(action.recommendList),
                articleList: fromJS(action.articleList)
            })
            //state.set('topicList', fromJS(action.topicList)).set
            //console.log(action)

        default:
            return state;
    }
}
```

#### 8.8 实现加载更多功能

实现文章列表下的更多文章功能

首先在public/api下创建homeList.json

```react
{
    "success": true,    
    "data": [ {
            "id": 4,
            "title": "《白鹿原》：一本有点颜色的书？",
            "desc": "初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",
            "imgurl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
        },{
            "id": 5,
            "title": "《白鹿原》：一本有点颜色的书？",
            "desc": "初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",
            "imgurl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
        },{
            "id": 6,
            "title": "《白鹿原》：一本有点颜色的书？",
            "desc": "初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",
            "imgurl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
        }
    ]
}
```

**List.js**

```react
import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style"
import { connect } from "react-redux";
import {actionCreator} from "../store"

class List extends Component {
    render() { 
        // page 同props进行解构赋值
        // 更改key值 改为index(不提倡)
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <img className="pic" src={item.get('imgurl')} alt="" />
                                <ListInfo>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                // 点击时调用getMoreList方法 传递page参数
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', "articleList"]),
    page: state.getIn(['home', "articlePage"])
})

// 新建映射
const mapDispatch= (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreator.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List)
```

**store/actionCreator.js**

```react
import axios from "axios";
import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        })
    }
};

const addHomeList = (list, nextPage) => ({
    type: actionTypes.ADD_LIST,
    list: fromJS(list),
    nextPage
})

// 使得page在每次点击时加1，并发送给reducer
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1))
        })
    }
}
```

**store/actionTypes.js**

```react
export const CHANGE_HOME_DATA = "HOME/CHANGE_HOME_DATA";
export const ADD_LIST = "HOME/ADD_LIST";
```

**store/reducer.js**

```react
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                recommendList: fromJS(action.recommendList),
                articleList: fromJS(action.articleList),
                writerList: fromJS(action.writerList)
            })
        // concat在列表后增添数据
        case actionTypes.ADD_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
        default:
            return state;
    }
}
```

#### 8.9 返回顶部功能实现

返回顶部功能组件内容较少，适合放在home下的index.js下编写

让document.documentElement.scrollTop在大于150时 按钮出现，否则消失，添加onclick时件

**index.js**

```react
import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight } from "./style"
import { actionCreator } from "./store";
import { BackTop } from "./style"

class Home extends Component {
	
    // 回到顶部的点击事件
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

            </HomeWrapper>
        )
    }
    // 刚渲染时 bindEvents-->changeScrollTopShow-->actionCreator.toggleTopShow
    componentDidMount() {
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    
}

// 调用reducer的初始值
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 150) {
            dispatch(actionCreator.toggleTopShow(true))
        }else{
            dispatch(actionCreator.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)
```

**style.js**

```react
import styled from "styled-components";
export const BackTop = styled.div`
    position: fixed;
    right:100px;
    bottom:100px;
    width: 60px;
    height:60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`
```

**store/actionCreator.js**

```react
import axios from "axios";
import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";

export const toggleTopShow = (show) => ({
    type:actionTypes.TOGGLE_SCROLL,
    show
})
```

**store/actionTypes.js**

```react
export const TOGGLE_SCROLL = "HOME/TOGGLE_SCROLL";
```

**store/reducer.js**

```react
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});

// 打包action的数据修改
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList),
        writerList: fromJS(action.writerList)
    })
}

// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case actionTypes.ADD_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
            // 根据判断的true or false 来给定showScroll的值
        case actionTypes.TOGGLE_SCROLL:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
}
```

#### 8.10 首页性能优化及路由跳转

原代码中通过connect连接形成容器组件，意味着只有store里的数据发生变化，各个组件将会被重新渲染，导致性能不高

调用`import React, { PureComponent } from "react";`意味会在该组件内默认执行shouldComponentUpdate函数

建议PureComponent和immutable对象一起使用，否则容易出现问题。

为了实现页面跳转 如果使用a标签 则点击文章详情列表就会重新加载一下html 消耗性能

```react
<a key={index} href='./detail'>
	<ListItem> </ListItem>
 </a>
```

运用react-router-dom的Link组件

List.js的文章跳转，可使用Link

```react
import {Link} from "react-router-dom";

<Link key={index} to='./detail'>
	<ListItem> </ListItem>
<Link>
```

同时jianshu项目首页有logo点击的跳转功能

在style.js中将a标签修改为div标签

在header下的index.js中 用Link将Logo标签包围

```react
import {Link} from "react-router-dom";
				<Link to="/">
                    <Logo />
                </Link>
```

react-router-dom版本6.0之后  **App.js**如下代码不会报与5.2.0版本一样的错误(此错误提示不能将Link放在router外)

```react
	return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/detail" exact element={<Detail/>}></Route>
              </Routes>
          </BrowserRouter>
          </div>
      </Provider>
    );
```

### 九、项目实战 详情页面和登录功能开发

#### 9.1 详情页面布局

完成详情页的布局

**pages/detail/index.js**

```react
import React, {Component} from "react";
import {DetailWrapper, Header, Content} from "./style";

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>衡水中学</Header>
                <Content>
                    <img alt="" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg" />
                    <p><b>清华</b></p>
                    <p>清华</p>
                    <p>清华</p>
                    <p>清华</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail
```

**pages/detail/style.js**

```react
import styled from "styled-components";

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;
`;

export const Header = styled.div`
    margin: 50px 0 20px 0;
    font-size: 34px;
    line-height: 44px;
    color: #333;
    font-weight: bold;
`;

export const Content = styled.div`
    color: #2f2f2f;
    img{
        width: 100%;
    }
    p{
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
    }
    b{
        font-weight: bold;
    }
`;
```

预览效果图

<img src="D:/react/37.jpg" style="zoom: 33%;" />

#### 9.2 redux管理详情页面数据

通过detail下store来管理详情页面的数据 在store下创建index.js  reducer.js  actionCreator.js 以及actionTypes.js

**detail/store/index.js**

```react
import reducer from "./reducer";
import * as actionCreator from "./actionCreator";
export { reducer, actionCreator };
```

**detail/store/reducer.js**

```react
import { fromJS } from "immutable";
//import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    title: "衡水中学",
    content:'<img alt="" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg" /><p><b>清华</b></p><p>清华</p><p>清华</p><p>清华</p>'
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
```

为了将该页面的reducer同总store下的总reducer建立起联系

在**src/store/reducer.js**添加代码

```react
import { combineReducers } from "redux-immutable"
import {reducer as headerReducer} from "../common/header/store"
import  {reducer as homeReducer} from "../pages/home/store"
import  {reducer as detailReducer} from "../pages/detail/store"

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer
```

**detail/index.js**

```react
import React, {Component} from "react";
import {DetailWrapper, Header, Content} from "./style";
import {connect} from "react-redux";

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        )
    }
}
const mapState = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
})
export default connect(mapState,null)(Detail)
```

通过dangerouslySetInnerHTML方法的转义使得content中的内容实现html语法

#### 9.3 异步获取数据

**public/api/detail.json**

```json
{
    "success":true,
    "data":{
        "title": "衡水中学",
        "content":"<img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg' /><p><b>清华</b></p><p>清华</p><p>清华</p><p>清华</p>"   
    }
}
```

**detail/index.js**派发action

```react
import React, {Component} from "react";
import {DetailWrapper, Header, Content} from "./style";
import {connect} from "react-redux";
import { actionCreator} from "./store"

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail()
    }
}
const mapState = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
})

const mapDispatch = (dispatch) => ({
    getDetail () {
        dispatch(actionCreator.getDetail())
    }
})
export default connect(mapState,mapDispatch)(Detail)
```

**detail/store/actionCreator.js**

```react
import axios from "axios"
import * as actionTypes from "./actionTypes"

const changeDetail = (content, title) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
})
export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data
            dispatch(changeDetail(result.content, result.title))
        })
    }
}
```

**detail/store/actionTypes.js**

```react
export const CHANGE_DETAIL = "DETAIL/CHANGE_DETAIL";
```

**detail/store/reducer.js**

```react
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    title: "",
    content:""
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}
```

#### 9.4 页面路由参数的传递

动态路由获取

#### 9.5 登陆页面布局



#### 9.6 登陆功能实现



#### 9.7 登陆鉴权及代码优化



#### 9.8 异步组件及withRouter路由方法的使用



### 十、课程总结

#### 10.1 项目上线流程



#### 10.2 React 版本升级说明



#### 10.3 课程总结



### 其他

npm i react-transition-group --save

npm i react-router-dom@5.2.0 --save



CSS语法

盒子模型

<img src="D:\react\fujia1.jpg" style="zoom:50%;" />

display:block  总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示

position:fixed 元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动

position:relative 相对定位会按照元素的原始位置对该元素进行移动

position:absolute 绝对定位的元素的位置相对于最近的已定位父元素，无父元素就相当于html

overflow: hidden 溢出内容会被修剪，并且其余内容是不可见的。

overflow:auto 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容

float:left 会尽量向左移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止 
