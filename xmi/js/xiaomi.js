window.onload=function(){
	//nav 导航
	var linav=document.querySelectorAll("nav ul li");
	var dlnav=document.querySelector("nav ul li dl");
	//banner轮播图
	var as=document.querySelectorAll(".main div a");
	var dBan=document.querySelector(".main div");
	var imgBan=document.querySelector(".main img");
	var liBan=document.querySelectorAll(".main div li");
	var liAside=document.querySelectorAll(".main aside li");
	var dl=document.querySelector(".main aside dl");
	liBan[0].style.backgroundColor="white";
	var uLen=liBan.length;
	var arr=["img/xmad_14889653089832_lSZoz.jpg","img/xmad_14896277033887_TfmNz.jpg","img/xmad_14896279721108_MTuAi.jpg","img/xmad_14896281014869_QpPlV.jpg","img/xmad_14896278748071_oGNrK.jpg"]
	var i=0;
	as[0].onclick=function(){
	
		i--;
		fn();
	}
	as[1].onclick=function(){
		i++;
		fn();
	}
	function fn(){
		for(var j=0;j<uLen;j++){
			liBan[j].style.backgroundColor="";
		}
		
		if(i==-1){
			i=4;
		}
		if(i==5){
			i=0;
		}
		imgBan.src=arr[i];
		liBan[i].style.backgroundColor="white"
	}
	for(var j=0;j<uLen;j++){
		liBan[j].index=j;
		liBan[j].onclick=function(){
			imgBan.src=arr[this.index];
			for(var j=0;j<uLen;j++){
				liBan[j].style.backgroundColor="";
			}
			this.style.backgroundColor="white"
			i=this.index;
		}
	}
	function fnTime(){
		i++;
		fn();
	}
	timer=setInterval(fnTime,3000);
	dBan.onmouseover=function(){
		clearInterval(timer)
	}
	dBan.onmouseleave=function(){
		timer=setInterval(fnTime,3000);
	}
	for(var j=0;j<liAside.length;j++){
		liAside[j].index=j;
		liAside[j].onmouseover=function(){
			dl.style.display="block";
		}
			liAside[j].onmouseleave=function(){
			dl.style.display="none";
		}
	}
	//小米明星单品
	var ulstar=document.querySelector(".star ul");
	var saStar=document.querySelectorAll(".star a");
	var timerStar=setInterval(fnStar,6000)
	function fnStar(){
		if(ulstar.offsetLeft==0){
			ulstar.style.left=ulstar.offsetLeft-1227+"px";
		}else{
			ulstar.style.left=ulstar.offsetLeft+1227+"px";
		}
	}
	saStar[1].onclick=function(){
		if(ulstar.offsetLeft==0){
			ulstar.style.left=ulstar.offsetLeft-1227+"px";
		}
	}
	saStar[0].onclick=function(){
		if(ulstar.offsetLeft==-1227){
			ulstar.style.left=ulstar.offsetLeft+1227+"px";
		}
	}
//	ulstar.onmouseover=function(){
//		clearInterval(timer);
//	};
//	ulstar.onmouseleave=function(){
//		timerStar=setInterval(fnStar,3000);
//	}
}
