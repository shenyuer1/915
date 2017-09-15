/*
* @Author: Administrator
* @Date:   2017-09-15 09:59:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 16:53:23
*/
//查看window的一些属性，window.可省略；因为window是顶层
// console.log(window.innerHeight);
// console.log(window.screenLeft);
// console.log(window.outerWidth);
// console.log(document.documentElement.clientWidth);//获取浏览器的宽高（文档对象元素的客户端的宽高）
// console.log(document.documentElement.clientHeight);
// console.log(window.frames);//查看一些子窗口（帧窗口）
// console.log(window.top);//查看当前窗口的顶层窗口
// console.log(window.parent)//查看当前窗口的父级窗口
// console.log(window.self)//查看当前窗口
// console.log(window==self)


// moveTo(100,100);//浏览器
// moveBy(100, 100);
// resizeTo(100, 100);


//可用来模拟动画
//开启时间函数
// window.setInterval(function(){
// 	alert('shenyuer');
// },1000);//按照某一个指定的周期不停地执行某个函数(1000ms=1s),最小周期4ms
// function fn(){
// 	alert('wo');
// }
// window.setInterval(fn,100000);
// window.setInterval(()=>alert('yuyu'),100);
//清掉时间函数
// let t = window.setInterval(()=>alert('yuyu'),100);
// window.clearInterval(t);

//弹出一次
// setTimeout(fn,1000);
//清除时间函数
// let  s = setTimeout(fn,1000);
// clearTimeout(s);
// function fn(){
// 	alert('不要睡觉！！！');
// 	window.setTimeout(fn,5000);
// }
// fn();
// confirm('确定退出吗');//有返回值
// console.log(confirm('你好吗？'));
// open('chuangkou.html','chuangkouName','','');//打开新的窗口； 窗口地址，窗口名字，修饰，布尔值
// close();//关闭


//history的属性方法：
//length;
//forword();   back();  go();
// console.log(window.history.length);
// history.back();
// history.forward();


//location的属性
// location.href='www.baidu.com';
//location href  location.protocol  location.host   location.hostname 
//location.port  location.pathname /s   location.search ?name=zhangsan&age=18
//location.hash   
//location.assign(); //有历史记录
//location.reload(); //重新加载 可以传值（true(重新加载)、false(利用本地缓存)）
//location.replace();//替换  不会留下历史记录
// alert(location.href);//有返回值













































