/*
* @Author: Administrator
* @Date:   2017-09-15 17:16:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 18:18:06
*/
let user=document.getElementById('user');
let pass=document.getElementById('pass');
let login=document.getElementById('login');

login.onclick=function(){
	let u=user.value.trim();
    let p=pass.value.trim();
	if(u=='qwert' && p=='12345'){
		alert('success');
	}else{
		location.replace('error.html');
	}
}