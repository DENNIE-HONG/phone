init(40,"mylegend",306,609,main);//设定游戏速度、传入一个div、界面宽、高、初始化后进入的函数
 var backLayer;                  //声明背景层
 var lockLayer;		             //声明解锁层
 var bitmap; 					 //声明手机壳
 var bitmap1; 					 //声明磁条
 var bitmap3; 					 //声明锁
 var loadingLayer;				 //声明进度条
 var imgData=new Array();  //需要读取图片和Js文件的路径
 var imglist={};		   //保存图片数据的数组
function main () {
	
	LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,true);
	imgData.push({name:"shell",path:"main/image/shell600.png"});	    //加载所有图片
	imgData.push({name:"bar",path:"main/image/bar600.png"});
	imgData.push({name:"lockguide",path:"main/image/lockguide.png"});
	imgData.push({name:"lock",path:"main/image/lock.png"});
	imgData.push({name:"lockguide2",path:"main/image/lockguide2.png"});
	imgData.push({name:"guide",path:"guide/image/guide.png"});
	imgData.push({name:"dot",path:"guide/image/dot.png"});
	imgData.push({name:"upcanv",path:"guide/image/upcanv.png"});
	imgData.push({name:"set",path:"guide/image/set.png"});
	imgData.push({name:"guidecall",path:"guide/image/guidecall.png"});
	imgData.push({name:"guidealarm",path:"guide/image/guidealarm.png"});
	imgData.push({name:"guidebook",path:"guide/image/guidebook.png"});
	imgData.push({name:"guidesearch",path:"guide/image/guidesearch.png"});
	imgData.push({name:"guideinternet",path:"guide/image/guideinternet.png"});
	imgData.push({name:"setbar",path:"setting/image/settingbar.png"});
	imgData.push({name:"sett",path:"setting/image/setting.png"});
	imgData.push({name:"open",path:"setting/image/2.png"});
	imgData.push({name:"close",path:"setting/image/1.png"});
	imgData.push({name:"menu0",path:"menu/image/menu0.png"});
	imgData.push({name:"alarm20",path:"alarm/image/20.png"});
	imgData.push({name:"alarm26",path:"alarm/image/26.png"});
	imgData.push({name:"alarm25",path:"alarm/image/25.png"});
	imgData.push({name:"alarm24",path:"alarm/image/24.png"});
	imgData.push({name:"alarm7",path:"alarm/image/7.png"});
	imgData.push({name:"alarm22",path:"alarm/image/22.png"});
	imgData.push({name:"alarm16",path:"alarm/image/16.png"});
	imgData.push({name:"alarm6",path:"alarm/image/6.png"});
	imgData.push({name:"search",path:"search/image/search.png"});
	imgData.push({name:"internet",path:"internet/image/internet.png"});
	imgData.push({name:"call",path:"call/image/call.png"});
	imgData.push({name:"call1",path:"call/image/call1.png"});
	imgData.push({name:"phonebookk",path:"phoneBook/image/phonebookk.png"});
	imgData.push({name:"peop1",path:"phoneBook/image/peop1.png"});
	imgData.push({name:"pbook1",path:"phoneBook/image/1122.png"});
	imgData.push({name:"pbook2",path:"phoneBook/image/1222.png"});
	imgData.push({name:"pbook3",path:"phoneBook/image/PBbar.png"});
	imgData.push({name:"msgList",path:"message/image/msgList.png"});
	imgData.push({name:"icon",path:"message/image/icon.png"});
	imgData.push({name:"msgBack",path:"message/image/msgBack.png"});
	imgData.push({name:"MsgSuccess",path:"message/image/MsgSuccess.png"});
	imgData.push({name:"downMenu",path:"message/image/downMenu.png"});
	imgData.push({name:"newMsg",path:"message/image/newMsg.png"});
	imgData.push({name:"callrecordmain",path:"callRecord/image/callrecordmain.png"});
	imgData.push({name:"callrecord1",path:"callRecord/image/callrecord1.png"});
	imgData.push({name:"callrecord2",path:"callRecord/image/callrecord2.png"});
	imgData.push({name:"callrecord3",path:"callRecord/image/callrecord3.png"});
	imgData.push({name:"list",path:"callRecord/image/list.png"});
	
	imgData.push({type:"js",path:"setting/setting.js"});	         //加载所有js文件
	imgData.push({type:"js",path:"guide/guide.js"});
	imgData.push({type:"js",path:"guide/guideleft.js"});	
	imgData.push({type:"js",path:"guide/guideright.js"});	
	imgData.push({type:"js",path:"menu/menu.js"});
	imgData.push({type:"js",path:"alarm/alarm.js"});
	imgData.push({type:"js",path:"alarm/alarm2.js"});
	imgData.push({type:"js",path:"alarm/alarm3.js"});
	imgData.push({type:"js",path:"alarm/alarm4.js"});
	imgData.push({type:"js",path:"search/search.js"});
    imgData.push({type:"js",path:"internet/internet.js"});
	imgData.push({type:"js",path:"call/callMain.js"});
	imgData.push({type:"js",path:"call/call1.js"});
	imgData.push({type:"js",path:"phoneBook/phoneBookMain.js"});
	imgData.push({type:"js",path:"phoneBook/phoneBook1.js"});
	imgData.push({type:"js",path:"phoneBook/phoneBook3.js"});
	imgData.push({type:"js",path:"message/messageMain.js"});
	imgData.push({type:"js",path:"message/LookMessage.js"});
	imgData.push({type:"js",path:"message/messageNew.js"});
	imgData.push({type:"js",path:"callRecord/callRecordMain.js"});
	
	backLayer=new LSprite();                       //背景层初始化
	addChild(backLayer);                           //添加背景层
	backLayer.graphics.drawRect(0,"#35ee99",[0,0,306,610],false,"#26ca92");//背景层（边框粗细，边框颜色，【x，y，宽，高】，是否填充颜色，颜色）
	
	loadingLayer = new LoadingSample3();       //加载进度条
	backLayer.addChild(loadingLayer);
	
	LLoadManage.load(                      //利用静态类的load函数读取数组中的图片和js
		imgData,
		function(progress)                 //读取每张图片后调用的函数
		{ loadingLayer.setProgress(progress);},//读取完图片个数占整个图片数组长度的比例，即进度
		function(result)                  //读取完所有图片调用的函数
	    {		
		    imglist = result;              //图片读完的结果集给imglist
			backLayer.removeChild(loadingLayer); //移除进度条
			loadingLayer = null; 
			gameInit();                  //开始手机仿真
		});
}
function gameInit(event){
	
    bitmap = new LBitmap(new LBitmapData(imglist["shell"]));//加载手机壳图片
	bitmap.x = 0;
	bitmap.y = 0;
	backLayer.addChild(bitmap);
	
	bitmap1 = new LBitmap(new LBitmapData(imglist["bar"]));  //加载手机磁条
	bitmap1.x = 25;
	bitmap1.y = 69;
	backLayer.addChild(bitmap1);
	
	var bitmap2 = new LBitmap(new LBitmapData(imglist["lockguide"])); //加载解锁图片
	bitmap2.x = 25;
	bitmap2.y = 89;
	backLayer.addChild(bitmap2);
	
    date=new Date();           //获取当前日期
	var title=new LTextField();    //时间文本初始化
	title.x=84;
	title.y=109;
	title.size=46;
	title.color="#ffffff";
	if(date.getMinutes()<10) {title.text=date.getHours()+":0"+date.getMinutes();} //显示时间的格式是00:00
	if(date.getMinutes()>10) {title.text=date.getHours()+":"+date.getMinutes();}
	backLayer.addChild(title);     //显示时间
	
	var time=new LTextField();     //日期文本初始化
	time.x=80;
	time.y=180;
	time.size=13;
	time.color="#ffffff";
	var Week =['日','一','二','三','四','五','六'];
	time.text=date.toLocaleDateString()+"      周"+Week[date.getDay()]; //显示周几
	backLayer.addChild(time);     //显示日期 
   
    bartime=new LTextField();
	bartime.x=236;
	bartime.y=74.5;
	bartime.size=11;
	bartime.color="#ffffff";
	if(date.getMinutes()<10) {bartime.text=date.getHours()+":0"+date.getMinutes();}
	if(date.getMinutes()>10) {bartime.text=date.getHours()+":"+date.getMinutes();}
	backLayer.addChild(bartime);         //磁条显示时间
	
	lockLayer=new LSprite();          //解锁层层初始化
	backLayer.addChild(lockLayer);    //添加解锁层
	lockLayer.graphics.drawRect(0,"#ffffff",[120,405,180, 65]);//解锁层大小和位置
	bitmap3 = new LBitmap(new LBitmapData(imglist["lock"]));        //加载锁图片
	bitmap3.x = 109;
	bitmap3.y = 398;
	lockLayer.addChild(bitmap3);
	
	//添加控制事件
	lockLayer.addEventListener(LMouseEvent.MOUSE_DOWN,ondown);//监听鼠标按下的动作，调用函数ondown
	lockLayer.addEventListener(LMouseEvent.MOUSE_UP,onup);	  //监听鼠标谈起的动作，调用函数onup
	lockLayer.addEventListener(LMouseEvent.MOUSE_MOVE,onmove);//监听鼠标移动的动作，调用函数onmove
	setInterval(SetTime,1000);      //刷新时间
	
}
function ondown(event){
	monseIsDown = true;   //确认鼠标按下
	mouseX1=event.offsetX;

}
			
function onmove(event){
	if(monseIsDown)     //鼠标按下同时移动
	{                                                      //向右拖动，锁移动，速度可调，但要考虑手机端流畅度不如电脑
	    if(event.offsetX-mouseX1>0){ bitmap3.x+=(event.offsetX-mouseX1)/5;}                 
		if(bitmap3.x>180)
		 { lockLayer.removeChild(bitmap3);      //当锁的位置大于180时消失
		   var lockguide2 = new LBitmap(new LBitmapData(imglist["lockguide2"]));  //加载解锁图片
		   lockguide2.x = 25;
		   lockguide2.y = 89;
		   lockLayer.addChild(lockguide2);
		  
		   dot = new LBitmap(new LBitmapData(imglist["dot"]));                  //加载guide界面的图标，先看不见
	       dot.x = -231;
	       dot.y = 89;
		   dot.visible=false; 
		  
		  callm = new LBitmap(new LBitmapData(imglist["guidecall"])); 
	      callm.x = 38;
	      callm.y = 469;
          callm.visible=false;        
		  
		  Book = new LBitmap(new LBitmapData(imglist["guidebook"])); 
	      Book.x = 87;
	      Book.y = 472;
          Book.visible=false; 
		  
		  Inter = new LBitmap(new LBitmapData(imglist["guideinternet"])); 
	      Inter.x = 230;
	      Inter.y = 469.5;
          Inter.visible=false;                                    //先让图标看不见
		  setTimeout("guide()",120);  //停顿一下，进入guide
		 
		 }
	}
}
function onup()
{
    monseIsDown = false;
	if(bitmap3.x<180){hui();}  //锁没到指定位置，返回		
}
				
function hui()
{  
    if(bitmap3.x>109)
	 {LTweenLite.to(bitmap3,0.3,{x:109,ease:LEasing.Strong.easeInOut})};    //调用缓动函数，用0.3秒返回到x=109的位置
}
function SetTime()
{
	var newdate=new Date();
	if(newdate.getMinutes()<10) {bartime.text=newdate.getHours()+":0"+newdate.getMinutes();}
	if(newdate.getMinutes()>10) {bartime.text=newdate.getHours()+":"+newdate.getMinutes();}
}

		