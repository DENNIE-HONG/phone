// JavaScript Document for alarm
var alarmLayer;//声明闹钟主层
var showduan;    //声明时间段
var showtime;    //声明时间
var ALswitch1;   //声明开关键1
var ALswitch2;   //声明开关键2
var alopen1,alopen2;    
var settimeLayer;        //声明设置时间层
var songLayer,LSLayer;    //声明选歌层
var time1,time2,lingsheng,lingsheng1;
var al6;
function alarmMain()
{	
	alarmLayer=new LSprite();                                          //闹钟背景层初始化
	alarmLayer.graphics.drawRect(1,"#000000",[25, 128, 256, 396]);
	backLayer.addChild(alarmLayer);                                     //添加闹钟的背景
	var almain=new LBitmap(new LBitmapData(imglist["alarm20"]));  
	almain.x = 25;
	almain.y = 89;
	alarmLayer.addChild(almain);                                      //添加闹钟主图
	
	var rect1=new LGraphics();
	var tourect1=new LSprite();
	tourect1.graphics.drawRect(0,"#35ee99",[89,89,64,39],true,"#97f2c8");//画个透明框
	tourect1.alpha=0.3;
	btalarm2=new LButton(rect1,tourect1);
	btalarm2.graphics.drawRect(0,"#ffffff",[89, 89, 64,39]);
	alarmLayer.addChild(btalarm2);                               //添加到alarm2的按钮
	btalarm2.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm2);
	
	var rect2=new LGraphics();
	var tourect2=new LSprite();
	tourect2.graphics.drawRect(0,"#35ee99",[153,89,64,39],true,"#97f2c8");//画个透明框
	tourect2.alpha=0.3;
	btalarm3=new LButton(rect2,tourect2);
	btalarm3.graphics.drawRect(0,"#ffffff",[153, 89, 64,39]);
	alarmLayer.addChild(btalarm3);                               //添加到alarm3的按钮
	btalarm3.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm3);
	
	var rect3=new LGraphics();
	var tourect3=new LSprite();
	tourect3.graphics.drawRect(0,"#35ee99",[217,89,64,39],true,"#97f2c8");//画个透明框
	tourect3.alpha=0.3;
	btalarm4=new LButton(rect3,tourect3);
	btalarm4.graphics.drawRect(0,"#ffffff",[217, 89, 64,39]);
	alarmLayer.addChild(btalarm4);                               //添加到alarm4的按钮
	btalarm4.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm4);
	
    showduan=new LTextField();   //显示时段
	showduan.x=36;
	showduan.y=174;
	showduan.size=11;
	showduan.color="#939495";
	showduan.text="上午";
	alarmLayer.addChild(showduan);
	
	showtime=new LTextField();  //显示时间
	showtime.x=58;
	showtime.y=151;
	showtime.size=38;
	showtime.color="#939495";
	showtime.text="8:30";
	alarmLayer.addChild(showtime);
	
	ALswitch1=new LSprite();
	ALswitch1.graphics.drawRect(0,"#ffffff",[206, 154.1, 63, 19]);//添加开关键1
	alarmLayer.addChild(ALswitch1);	
	alopen1 = new LBitmap(new LBitmapData(imglist["open"]));     //添加“开”的图片
	alopen1.x = 206;
    alopen1.y = 154.1;
	alopen1.visible=false;
	ALswitch1.addChild(alopen1);
	ALswitch1.addEventListener(LMouseEvent.MOUSE_DOWN,ALkg1);
	
	ALswitch2=new LSprite();
	ALswitch2.graphics.drawRect(0,"#ffffff",[206, 253.5, 63, 19]);//添加开关键2
	alarmLayer.addChild(ALswitch2);	
	alopen2 = new LBitmap(new LBitmapData(imglist["open"])); 
	alopen2.x = 206;
    alopen2.y = 253.5;
	alopen2.visible=false;
	ALswitch2.addChild(alopen2);
	ALswitch2.addEventListener(LMouseEvent.MOUSE_DOWN,ALkg2);
	
	var rect4=new LGraphics();
	rect4.drawArc(1,"#35ee99",[152, 495, 22,0,360]); //画个圆框
	var bigrect4=new LSprite();
	bigrect4.graphics.drawArc(0,"#35ee99",[152, 495, 22,0,360],true,"#97f2c8");//画个透明圆框
	bigrect4.alpha=0.3;	
	clock=new LButton(rect4,bigrect4);
	clock.graphics.drawArc(0,"#ffffff",[152, 495, 22,0,360]);//添加设置时间键
	alarmLayer.addChild(clock);
	clock.addEventListener(LMouseEvent.MOUSE_DOWN,settime);
	
	var rect6=new LGraphics();
	rect6.drawRect(1,"#35ee99",[30, 198, 30,30]); //画个框
	var bigrect6=new LSprite();
	bigrect6.graphics.drawRect(0,"#35ee99",[30,198,30,30],true,"#97f2c8");//画个透明框
	bigrect6.alpha=0.3;	
	btlink=new LButton(rect6,bigrect6);
	btlink.graphics.drawArc(0,"#ffffff",[30, 198,30,30]);//添加设置选歌键
	alarmLayer.addChild(btlink);
	btlink.addEventListener(LMouseEvent.MOUSE_DOWN,Link);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 542,37,37],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;	
	alarmback=new LButton(rect,bigrect);
	alarmback.graphics.drawRect(0,"#ffffff",[238, 542, 37,37]);//添加返回键
	alarmLayer.addChild(alarmback);
	alarmback.addEventListener(LMouseEvent.MOUSE_DOWN,alarmfan);
	
	var rect5=new LGraphics();
	var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#35ee99",[137,542,37,37],true,"#97f2c8");//画个微透明大框
	bigrect5.alpha=0.3;
	alarmhome=new LButton(rect5,bigrect5);
    alarmLayer.addChild(alarmhome);
	alarmhome.graphics.drawRect(0,"#ffffff",[137, 542, 37, 37]);//添加闹钟home键
	alarmhome.addEventListener(LMouseEvent.MOUSE_DOWN,alarmzhu);
 }
function alarmfan()
{  
    alarmLayer.die();
	alarmLayer.removeAllChild();
	backLayer.removeChild(alarmLayer);
    if(dot.x==25){guideleft();}
	else menue();  //从菜单点进去的，返回到菜单
}

function alarmzhu()               //返回到guide界面
{  
    alarmLayer.die();
	alarmLayer.removeAllChild();
	backLayer.removeChild(alarmLayer);
	dot.x=-231;
	guide();
}
function ALkg1()
{
  if(alopen1.visible==false)
       { alopen1.visible=true; }	
  else
       { alopen1.visible=false; }	
}
function ALkg2()
{
  if(alopen2.visible==false)
       {alopen2.visible=true;  }	
  else
       {alopen2.visible=false; }	
}
function Alarm2()
{
	alarmLayer.die();
	alarmLayer.removeAllChild();
	backLayer.removeChild(alarmLayer);
	alarm2();
}

function Alarm3()
{
	alarmLayer.die();
	alarmLayer.removeAllChild();
	backLayer.removeChild(alarmLayer);
	alarm3();
}
function Alarm4()
{
	alarmLayer.die();
	alarmLayer.removeAllChild();
	backLayer.removeChild(alarmLayer);
	alarm4();
}

function settime()
{
    settimeLayer=new LSprite();                                          //设置时间层初始化
	settimeLayer.graphics.drawRect(0,"#000000",[25, 89, 256, 435]);
	alarmLayer.addChild(settimeLayer);                                              
	
	var Stime=new LBitmap(new LBitmapData(imglist["alarm7"]));    
	Stime.x = 25;
	Stime.y = 89;
	settimeLayer.addChild(Stime);                                        //添加设置闹钟主图
	
	time1=new LTextField();   //选小时
	time1.x=137;
	time1.y=154;
	time1.size=40;
	time1.color="#ff3333";
	time1.text="12";
	time1.textAlign="right";
	settimeLayer.addChild(time1);	
	
	time2=new LTextField();     //选分钟
	time2.x=142;
	time2.y=154;
	time2.size=40;
	time2.color="#ffffff";
	time2.text=":00";
	settimeLayer.addChild(time2);
	
	showduan1=new LTextField();  //时段
	showduan1.x=195;
	showduan1.y=184;
	showduan1.size=11;
	showduan1.color="#ffffff";
	showduan1.text="上午";
	settimeLayer.addChild(showduan1);
	
	var arc=new LGraphics();
	var bigarc=new LSprite();
	bigarc.graphics.drawArc(0,"#ff3333",[187, 254, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc.alpha=0.3;	
	one=new LButton(arc,bigarc);
	one.graphics.drawArc(0,"#ffffff",[187, 254, 14,0,360]);//添加1点键
	settimeLayer.addChild(one);
	one.addEventListener(LMouseEvent.MOUSE_DOWN,yidian);
	
	var arc1=new LGraphics();
	var bigarc1=new LSprite();
	bigarc1.graphics.drawArc(0,"#ff3333",[213, 282, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc1.alpha=0.3;	
	two=new LButton(arc1,bigarc1);
	two.graphics.drawArc(0,"#ffffff",[213, 282, 14,0,360]);//添加2点键
	settimeLayer.addChild(two);
	two.addEventListener(LMouseEvent.MOUSE_DOWN,erdian);
	
	var arc2=new LGraphics();
	var bigarc2=new LSprite();
	bigarc2.graphics.drawArc(0,"#ff3333",[224, 316, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc2.alpha=0.3;	
	three=new LButton(arc2,bigarc2);
	three.graphics.drawArc(0,"#ffffff",[224, 316, 14,0,360]);//添加3点键
	settimeLayer.addChild(three);
	three.addEventListener(LMouseEvent.MOUSE_DOWN,sandian);
	
	var arc3=new LGraphics();
	var bigarc3=new LSprite();
	bigarc3.graphics.drawArc(0,"#ff3333",[214, 352, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc3.alpha=0.3;	
	four=new LButton(arc3,bigarc3);
	four.graphics.drawArc(0,"#ffffff",[214, 352, 14,0,360]);//添加4点键
	settimeLayer.addChild(four);
	four.addEventListener(LMouseEvent.MOUSE_DOWN,sidian);
	
	var arc4=new LGraphics();
	var bigarc4=new LSprite();
	bigarc4.graphics.drawArc(0,"#ff3333",[188, 377, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc4.alpha=0.3;	
	five=new LButton(arc4,bigarc4);
	five.graphics.drawArc(0,"#ffffff",[188, 377, 14,0,360]);//添加5点键
	settimeLayer.addChild(five);
	five.addEventListener(LMouseEvent.MOUSE_DOWN,wudian);
	
	var arc5=new LGraphics();
	var bigarc5=new LSprite();
	bigarc5.graphics.drawArc(0,"#ff3333",[153, 386, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc5.alpha=0.3;	
	six=new LButton(arc5,bigarc5);
	six.graphics.drawArc(0,"#ffffff",[153, 386, 14,0,360]);//添加6点键
	settimeLayer.addChild(six);
	six.addEventListener(LMouseEvent.MOUSE_DOWN,liudian);
	
	var arc6=new LGraphics();
	var bigarc6=new LSprite();
	bigarc6.graphics.drawArc(0,"#ff3333",[116, 376, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc6.alpha=0.3;	
	seven=new LButton(arc6,bigarc6);
	seven.graphics.drawArc(0,"#ffffff",[116, 376, 14,0,360]);//添加7点键
	settimeLayer.addChild(seven);
	seven.addEventListener(LMouseEvent.MOUSE_DOWN,qidian);
	
	var arc7=new LGraphics();
	var bigarc7=new LSprite();
	bigarc7.graphics.drawArc(0,"#ff3333",[90, 352, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc7.alpha=0.3;	
	eight=new LButton(arc7,bigarc7);
	eight.graphics.drawArc(0,"#ffffff",[90, 352, 14,0,360]);//添加8点键
	settimeLayer.addChild(eight);
	eight.addEventListener(LMouseEvent.MOUSE_DOWN,badian);
	
	var arc8=new LGraphics();
	var bigarc8=new LSprite();
	bigarc8.graphics.drawArc(0,"#ff3333",[82, 316, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc8.alpha=0.3;	
	nine=new LButton(arc8,bigarc8);
	nine.graphics.drawArc(0,"#ffffff",[82, 316, 14,0,360]);//添加9点键
	settimeLayer.addChild(nine);
	nine.addEventListener(LMouseEvent.MOUSE_DOWN,jiudian);
	
	var arc9=new LGraphics();
	var bigarc9=new LSprite();
	bigarc9.graphics.drawArc(0,"#ff3333",[93, 279, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc9.alpha=0.3;	
	ten=new LButton(arc9,bigarc9);
	ten.graphics.drawArc(0,"#ffffff",[93, 279, 14,0,360]);//添加10点键
	settimeLayer.addChild(ten);
	ten.addEventListener(LMouseEvent.MOUSE_DOWN,shidian);
	
	var arc10=new LGraphics();
	var bigarc10=new LSprite();
	bigarc10.graphics.drawArc(0,"#ff3333",[117, 253, 14,0,360],true,"#ff3333");//画个透明圆框
	bigarc10.alpha=0.3;	
	elven=new LButton(arc10,bigarc10);
	elven.graphics.drawArc(0,"#ffffff",[117, 253, 14,0,360]);//添加11点键
	settimeLayer.addChild(elven);
	elven.addEventListener(LMouseEvent.MOUSE_DOWN,shiyidian);
	
	var arc11=new LGraphics();
	var bigarc11=new LSprite();
	bigarc11.graphics.drawArc(0,"#ff3333",[81, 404, 16,0,360],true,"#ff3333");//画个透明圆框
	bigarc11.alpha=0.3;	
	morning=new LButton(arc11,bigarc11);
	morning.graphics.drawArc(0,"#ffffff",[81, 404, 16,0,360]);//添加上午键
	settimeLayer.addChild(morning);
	morning.addEventListener(LMouseEvent.MOUSE_DOWN,AM);
	
	var arc12=new LGraphics();
	var bigarc12=new LSprite();
	bigarc12.graphics.drawArc(0,"#ff3333",[222, 404, 16,0,360],true,"#ff3333");//画个透明圆框
	bigarc12.alpha=0.3;	
	afternoon=new LButton(arc12,bigarc12);
	afternoon.graphics.drawArc(0,"#ffffff",[222, 404, 16,0,360]);//添加下午键
	settimeLayer.addChild(afternoon);
	afternoon.addEventListener(LMouseEvent.MOUSE_DOWN,PM);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#ff3333",[45,434,216,38.4],true,"#ff3333");//画个大框
	bigrect.alpha=0.3;	
	yes=new LButton(rect,bigrect);
	yes.graphics.drawRect(0,"#ffffff",[45, 434, 216,38.4]);//添加完成键
	settimeLayer.addChild(yes);
	yes.addEventListener(LMouseEvent.MOUSE_DOWN,done);	
}
function yidian() {time1.text="1";}
function erdian() {time1.text="2";}
function sandian(){time1.text="3";}
function sidian() {time1.text="4";}
function wudian() {time1.text="5";}
function liudian(){time1.text="6";}
function qidian() {time1.text="7";}
function badian() {time1.text="8";}
function jiudian(){time1.text="9";}
function shidian(){time1.text="10";}
function shiyidian(){time1.text="11";}

function AM(){showduan1.text="上午";}
function PM(){showduan1.text="下午";}
function done()
{
   showtime.text=time1.text+time2.text;          //更新时间
   showduan.text=showduan1.text;                 //更新时段
   settimeLayer.removeAllChild;
   alarmLayer.removeChild(settimeLayer); 
}
function Link()
{
	songLayer=new LSprite();                                                //闹钟选铃声层初始化
	songLayer.graphics.drawRect(0,"#000000",[25, 128, 256, 396],false);
	alarmLayer.addChild(songLayer);                                          //添加闹钟选铃声层
	
	var al22=new LBitmap(new LBitmapData(imglist["alarm22"]));               //选铃声主图
	al22.x = 25;
	al22.y = 89;
	songLayer.addChild(al22);
	
	duan=new LTextField();   //显示时段
	duan.x=34;
	duan.y=174;
	duan.size=11;
	duan.color="#939495";
	duan.text=showduan.text;
	songLayer.addChild(duan);
	
	ltime=new LTextField();  //显示时间
	ltime.x=58;
	ltime.y=151;
	ltime.size=38;
	ltime.color="#939495";
	ltime.text=showtime.text;
	songLayer.addChild(ltime);
	
	lingsheng1=new LTextField();     //铃声副本
	//lingsheng1.text="";
	
	lingsheng=new LTextField();     //铃声文本
	lingsheng.x=55;
	lingsheng.y=285;
	lingsheng.size=13;
	lingsheng.color="#FFFFFF";
	lingsheng.text="Dreamland";
	//if(lingsheng1.text!="")lingsheng.text=lingsheng1.text;
	songLayer.addChild(lingsheng);
	
	var rect1=new LGraphics();
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[25, 273, 149,46],true,"#97f2c8");//画个大框
	bigrect1.alpha=0.3;	
	btling=new LButton(rect1,bigrect1);
	btling.graphics.drawRect(0,"#ffffff",[25, 273,149,46]);//添加选择铃声键
	songLayer.addChild(btling);
	btling.addEventListener(LMouseEvent.MOUSE_DOWN,lingshengc); 	
	
	var rect=new LGraphics();
	rect.drawRect(1,"#35ee99",[30,322,30,30]); //画个框
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[30,322,30,30],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;	
	qued=new LButton(rect,bigrect);
	qued.graphics.drawRect(0,"#ffffff",[30,322,30,30]);//添加选歌返回键
	songLayer.addChild(qued);
	qued.addEventListener(LMouseEvent.MOUSE_DOWN,songclose); 
}
function songclose()
{
   songLayer.removeAllChild;
   alarmLayer.removeChild(songLayer);	
}
function lingshengc()
{
	LSLayer=new LSprite();                                                //闹钟选铃声层初始化
	LSLayer.graphics.drawRect(1,"#000000",[25, 128, 256, 396]);
	songLayer.addChild(LSLayer); 
	var al16=new LBitmap(new LBitmapData(imglist["alarm16"]));            
	al16.x = 25;
	al16.y = 89;
	LSLayer.addChild(al16);
	
    var rect=new LGraphics();
    var al6=new LBitmap(new LBitmapData(imglist["alarm6"])); 
	al6.x=231;
	al6.y=226;
	song1=new LButton(rect,al6);                           //鼠标指在第一首歌时出现选中的小蓝标
	song1.graphics.drawRect(0,"#ffffff",[38,216,180,40]);  //添加第一首歌键
	LSLayer.addChild(song1);
	song1.addEventListener(LMouseEvent.MOUSE_DOWN,xuansong1); 
	
	var rect1=new LGraphics();
    al61=new LBitmap(new LBitmapData(imglist["alarm6"])); 
	al61.x=231;
	al61.y=266;
	song2=new LButton(rect1,al61);
	song2.graphics.drawRect(0,"#ffffff",[38,256,190,40]);//添加第二首歌键
	LSLayer.addChild(song2);
	song2.addEventListener(LMouseEvent.MOUSE_DOWN,xuansong2); 
	
	var rect2=new LGraphics();
	var al62=new LBitmap(new LBitmapData(imglist["alarm6"])); 
	al62.x=231;
	al62.y=306;
	song3=new LButton(rect2,al62);
	song3.graphics.drawRect(0,"#ffffff",[38,296,190,40]);//添加第三首歌键
	LSLayer.addChild(song3);
	song3.addEventListener(LMouseEvent.MOUSE_DOWN,xuansong3); 
	
	var rect3=new LGraphics();
	var al63=new LBitmap(new LBitmapData(imglist["alarm6"])); 
	al63.x=231;
	al63.y=346;
	song4=new LButton(rect3,al63);
	song4.graphics.drawRect(0,"#ffffff",[38,336,190,40]);//添加第四首歌键
	LSLayer.addChild(song4);
	song4.addEventListener(LMouseEvent.MOUSE_DOWN,xuansong4);
	
	var rect4=new LGraphics();
	var al64=new LBitmap(new LBitmapData(imglist["alarm6"])); 
	al64.x=231;
	al64.y=385;
	song5=new LButton(rect4,al64);
	song5.graphics.drawRect(0,"#ffffff",[38,375,190,40]);//添加第五首歌键
	LSLayer.addChild(song5);
	song5.addEventListener(LMouseEvent.MOUSE_DOWN,xuansong5); 
	
	var rect5=new LGraphics();
	var al65=new LBitmap(new LBitmapData(imglist["alarm6"])); 
	al65.x=231;
	al65.y=424;
	song6=new LButton(rect5,al65);
	song6.graphics.drawRect(0,"#ffffff",[38,414,190,40]);//添加第六首歌键
	LSLayer.addChild(song6);
	song6.addEventListener(LMouseEvent.MOUSE_DOWN,xuansong6); 
	
	var rect6=new LGraphics();
	var bigrect6=new LSprite();
	bigrect6.graphics.drawRect(1,"#F5EFEF",[152,452,115,38.2],true,"#F5EFEF"); //画个框
	bigrect6.alpha=0.5;
	que=new LButton(rect6,bigrect6);
	que.graphics.drawRect(0,"#ffffff",[152,452,115,38.2]);//添加选铃声确认键
	LSLayer.addChild(que);
	que.addEventListener(LMouseEvent.MOUSE_DOWN,queling); 
	
	var rect7=new LGraphics();
	var bigrect7=new LSprite();
	bigrect7.graphics.drawRect(1,"#F5EFEF",[37,452,115,38.2],true,"#F5EFEF"); //画个框
	bigrect7.alpha=0.5;
	que=new LButton(rect7,bigrect7);
	que.graphics.drawRect(0,"#ffffff",[37,452,115,38.2]);//添加选铃声取消键
	LSLayer.addChild(que);
	que.addEventListener(LMouseEvent.MOUSE_DOWN,cancel); 
}
function xuansong1(){lingsheng1.text="无";}
function xuansong2(){lingsheng1.text="Afternoon tea";}	
function xuansong3(){lingsheng1.text="Church bells";}
function xuansong4(){lingsheng1.text="Di di";}
function xuansong5(){lingsheng1.text="Dreamland";}	
function xuansong6(){lingsheng1.text="Early morning";}			


function queling()
{  
    lingsheng.text=lingsheng1.text;      //更新铃声
	if(lingsheng1.text=="")lingsheng.text="Dreamland";
    LSLayer.die();
	LSLayer.removeAllChild;
    songLayer.removeChild(LSLayer);
 }
function cancel()
{   
    LSLayer.die();
    LSLayer.removeAllChild;
    songLayer.removeChild(LSLayer);
}