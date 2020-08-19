let fullStyle = [
  `
/* Inspired by http://strml.net/*/

/* 过渡效果 */
* {
transition: all .3s;
}
html {
color: #DEDEDE; background: #1e1e3f;
}
.styleEditor {
padding: .5em;
border: 1px solid;
margin: .5em;
overflow: auto;
width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: #ff9d00; }
.token.property{ color:  #ff628c; }
.token.punctuation{ color: yellow; }
.token.function{ color: #2AA198; }

html{
perspective: 1000px;
}
.styleEditor {

background: #2a2139;
position: fixed; left: 0; top: 0;
-webkit-transition: none;
transition: none;
-webkit-transform: rotateY(10deg) translateZ(-100px) ;
        transform: rotateY(10deg) translateZ(-100px) ;
}

/* 编辑器 */
.resumeEditor{
position: fixed; right: 0; top: 0;
padding: .5em;  margin: .5em;
width: 48vw; height: 90vh;
border: 1px solid #fff;
background: #34294f; color: #feee7d;
overflow: auto;
}
/* 简历 */
`,
  `
/* markdown翻译成 HTML*/
`,
  `
.resumeEditor a {
color: #fe5f55;
}
.resumeEditor{
padding: 2em;
}
.resumeEditor h2{
display: inline-block;
border-bottom: 1px solid;
margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
list-style: none;
}
.resumeEditor ul> li::before{
content: '•';
margin-right: .5em;
}
.resumeEditor ol {
counter-reset: section;
}
.resumeEditor ol li::before {
counter-increment: section;
content: counters(section, ".") " ";
margin-right: .5em;
}
.resumeEditor blockquote {
margin: 1em;
padding: .5em;
background: #ddd;
}
`
]
let fullMarkdown = `feedoom
----

* 本科学历
* 2020年毕业生
* 期待岗位：前端开发
* 邮箱：qqdz3750@outlook.com

技能
----

*	熟悉 html、css、JavaScript 等技术，并使用div + css 进行布局
*	熟悉html5 + css3，可以利用 css3 的过渡实现网页的动态效果，并利用本地离线存储（localstorage）长期存储数据。
*	熟悉掌握原生 JavaScript 的 DOM、BOM、以及其继承、原型链、闭包等特性，掌握 es6 新语法
*	熟悉 jQuery，能够使用jQuery 以及其插件完成轮播图、瀑布流等小功能
*	熟悉Ajax 技术与后台进行数据的交互，实现异步通信以及页面的部分渲染，理解JSONP的原理，以及使用JSONP和CORS实现跨域问题
*	熟悉vue框架和element-ui组件，理解组件和模块化开发，利用vuejs 进行项目开发
*	熟悉 nodejs ，并进行web服务器开发
*	掌握小程序，并能开发出简单的小应用
*	掌握Linux基本命令


项目经验
----

1. [vue 简历](https://gitee.com/feedoom/vue_resume)
实时渲染炫酷的简历
2. [仿bilibili微信小程序](https://gitee.com/feedoom/vue_resume)
简单的模仿bilibili小程序首页，视频详情页，推荐列表等页面
3. [电商后台管理系统](https://github.com/feedoom/vue_shop)
利用 vue 框架、element-ui组件开发后台管理系统，实现用户权限的管理和商品的分类等操作


链接
----

* [GitHub](https://github.com/feedoom)
* [我的文章](https://www.yuque.com/feedoom/hikyu5)

`
export { fullStyle, fullMarkdown }
