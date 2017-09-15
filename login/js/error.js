/*
* @Author: Administrator
* @Date:   2017-09-15 17:55:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 18:18:30
*/
let info=document.getElementById('info');
let t=setInterval(function(){
	if(info.innerText>=0){
		info.innerText-=1;
	}else{
        clearInterval(t);
		location.replace('login.html');
	}
},1000)

