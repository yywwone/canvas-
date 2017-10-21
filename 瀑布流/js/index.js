var IMG=[
			{"src":"image/17.jpg"},
			{"src":"image/18.jpg"},
			{"src":"image/19.jpg"},
			{"src":"image/20.jpg"},
			{"src":"image/21.jpg"},
			{"src":"image/22.jpg"},
			{"src":"image/23.jpg"},
			{"src":"image/24.jpg"},
			{"src":"image/25.jpg"},
			{"src":"image/26.jpg"},
			{"src":"image/27.jpg"},
			{"src":"image/28.jpg"},
			{"src":"image/29.jpg"},
			{"src":"image/30.jpg"},
			{"src":"image/31.jpg"},
			{"src":"image/32.jpg"},
			{"src":"image/1.jpg"},
			{"src":"image/2.jpg"},
			{"src":"image/3.jpg"},
			{"src":"image/4.jpg"},
			{"src":"image/5.jpg"},
			{"src":"image/6.jpg"},
			{"src":"image/7.jpg"},
			{"src":"image/8.jpg"},
			{"src":"image/9.jpg"},
			{"src":"image/10.jpg"},
			{"src":"image/11.jpg"},
			{"src":"image/12.jpg"},
			{"src":"image/13.jpg"},
			{"src":"image/14.jpg"},
			{"src":"image/15.jpg"},
			{"src":"image/16.jpg"}

]
var idd=null;
var fang={
	num:15
};	
		
	console.log(IMG[1].src);
	document.addEventListener("scroll",scrollT,false);
	function scrollT(){
		var sT=document.body.scrollTop;//页面滚动的高度
		var H=document.documentElement.clientHeight||window.innerHeight;//页面可视区的高度
		//var pageH=html.offsetHeight;//页面高度
		var pageH=getElements("image")[getElements("image").length-1].offsetTop;//页面高度
		//pageH=500;
		if (sT+H>pageH) {
			insertImg(document.getElementById('container'));
		}
		console.log(html.offsetHeight);
	}
	function getElements(classname,tagName){
		var all=document.getElementsByTagName('*');
		var allElement=[];
		for(var i=0,len=all.length;i<len;i++){
			if (all[i].className==classname) {
				allElement.push(all[i]);	//获取所有类名为 classname 的元素
			}
		}
		return allElement;	
	}
	console.log(getElements("image"));
	function imgding4wei4(objs,row,num){//objs对象集合（图片）,row图片行数,num图片下标
		var len=getElements("image").length;//获取所有图片张数
		var Arrimg=[];//存储上一行的图片
		for(var i=row*4,l=(row+1)*4;i<l;i++){
			Arrimg.push(objs[i]);//存储相应行数的图片(上一行图片)
		}
		for(var d=0;d<4;d++){//排序数组，值从小到大
			for(var e=0+d,f;e<4;e++){
				if (Arrimg[d].offsetHeight>Arrimg[e].offsetHeight) {
					f=Arrimg[d];
					Arrimg[d]=Arrimg[e];
					Arrimg[e]=f;
				}
			}
		}
		function xx(){
			for(var x=(row+1)*4,leng=(row+2)*4,y=0;x<leng;x++) {//当前行
				var left=Arrimg[y].offsetLeft;//上一行图片距离文档左边的距离
				var top=Arrimg[y].offsetTop;//上一行图片距离文档的高度
				var height=Arrimg[y].offsetHeight;//上一行图片的高
				objs[x].setAttribute("style","position:absolute;left:"+left+"px;top:"+(top+height+5)+"px;");
				y++;
			}
		}
		idd=setTimeout(xx,100);
		//console.log(minHeight)
	}//imgding4wei4(getElements("image"),1,0);imgding4wei4(getElements("image"),2,1);
	function imgPosition(objects){
		var rows=~~(objects.length/4);
		for(var r=0;r<rows;r++){
			imgding4wei4(getElements("image"),r);
		}
	}imgPosition(getElements("image"));
	function insertImg(obj1){
		for(var i=0,len=IMG.length;i<len;i++){
			var image=document.createElement("div");
			image.className="image";
			obj1.appendChild(image);
			var img=document.createElement("img");
			img.src=IMG[i].src;
			image.appendChild(img);
		}
		imgPosition(getElements("image"));
		//fang.num+=20;
	}

