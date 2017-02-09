var menuLayer;
function menue()
{  
   menuLayer=new LSprite();
   addChild(menuLayer);
   menuLayer.graphics.drawRect(1,"#000000",[25, 127, 256, 397],true);//添加菜单层
 
   var Menu = new LBitmap(new LBitmapData(imglist["menu0"])); 
   Menu.x = 25;
   Menu.y = 89;
   menuLayer.addChild(Menu); 
   
   var set=new LTextField();
   set.x=47;
   set.y=162;
   set.size=12;
   set.color="#ffffff";
   set.text="设置";
   menuLayer.addChild(set);
   
   var alarm=new LTextField();
   alarm.x=109;
   alarm.y=162;
   alarm.size=12;
   alarm.color="#ffffff";
   alarm.text="时钟";
   menuLayer.addChild(alarm);
   
   var video=new LTextField();
   video.x=169;
   video.y=162;
   video.size=12;
   video.color="#ffffff";
   video.text="视频";
   menuLayer.addChild(video);
   
   var music=new LTextField();
   music.x=231;
   music.y=162;
   music.size=12;
   music.color="#ffffff";
   music.text="音乐";
   menuLayer.addChild(music);
  
   var call=new LTextField();
   call.x=47;
   call.y=244;
   call.size=12;
   call.color="#ffffff";
   call.text="拨号";
   menuLayer.addChild(call);
   
   var Search=new LTextField();
   Search.x=109;
   Search.y=244;
   Search.size=12;
   Search.color="#ffffff";
   Search.text="搜索";
   menuLayer.addChild(Search);
   
   var calcu=new LTextField();
   calcu.x=167;
   calcu.y=244;
   calcu.size=12;
   calcu.color="#ffffff";
   calcu.text="计算器";
   menuLayer.addChild(calcu);
   
   var nca=new LTextField();
   nca.x=229;
   nca.y=244;
   nca.size=12;
   nca.color="#ffffff";
   nca.text="联系人";
   menuLayer.addChild(nca);
   
   var callIM=new LTextField();
   callIM.x=40;
   callIM.y=321;
   callIM.size=12;
   callIM.color="#ffffff";
   callIM.text="通话记录";
   menuLayer.addChild(callIM);
   
   var pict=new LTextField();
   pict.x=109;
   pict.y=321;
   pict.size=12;
   pict.color="#ffffff";
   pict.text="图库";
   menuLayer.addChild(pict);
   
   var weibo=new LTextField();
   weibo.x=170;
   weibo.y=321;
   weibo.size=12;
   weibo.color="#ffffff";
   weibo.text="微博";
   menuLayer.addChild(weibo);
   
   var file=new LTextField();
   file.x=223;
   file.y=321;
   file.size=12;
   file.color="#ffffff";
   file.text="文件管理";
   menuLayer.addChild(file);
   
   var rili=new LTextField();
   rili.x=47;
   rili.y=401;
   rili.size=12;
   rili.color="#ffffff";
   rili.text="日历";
   menuLayer.addChild(rili);
   
   var system=new LTextField();
   system.x=99;
   system.y=401;
   system.size=12;
   system.color="#ffffff";
   system.text="系统升级";
   menuLayer.addChild(system);
   
   var internet=new LTextField();
   internet.x=166;
   internet.y=401;
   internet.size=12;
   internet.color="#ffffff";
   internet.text="浏览器";
   menuLayer.addChild(internet);
  
   var camera=new LTextField();
   camera.x=231;
   camera.y=401;
   camera.size=12;
   camera.color="#ffffff";
   camera.text="相机";
   menuLayer.addChild(camera);
   
   var mess=new LTextField();
   mess.x=47;
   mess.y=480;
   mess.size=12;
   mess.color="#ffffff";
   mess.text="信息";
   menuLayer.addChild(mess);
   
   var input=new LTextField();
   input.x=85;
   input.y=480;
   input.size=12;
   input.color="#ffffff";
   input.text="讯飞输入法";
   menuLayer.addChild(input);
   
   var amazon=new LTextField();
   amazon.x=153;
   amazon.y=480;
   amazon.size=12;
   amazon.color="#ffffff";
   amazon.text="亚马逊购物";
   menuLayer.addChild(amazon);
   
   var mobile=new LTextField();
   mobile.x=225;
   mobile.y=480;
   mobile.size=12;
   mobile.color="#ffffff";
   mobile.text="移动门户";
   menuLayer.addChild(mobile);
  
   var rect3=new LGraphics();
   rect3.drawRect(1,"#35ee99",[40,112,42,42]);             //设置按钮
   var bigrect3=new LSprite();
   bigrect3.graphics.drawRect(0,"#35ee99",[40,112,42,42],true,"#97f2c8");
   bigrect3.alpha=0.3;
   Mset=new LButton(rect3,bigrect3);
   Mset.graphics.drawRect(0,"#35ee99",[40,112,42,42]);
   menuLayer.addChild(Mset);
   Mset.addEventListener(LMouseEvent.MOUSE_DOWN,MenuSet);
   
   var rect2=new LGraphics();
   rect2.drawRect(1,"#35ee99",[101,112,42,42]);             //闹钟
   var bigrect2=new LSprite();
   bigrect2.graphics.drawRect(0,"#35ee99",[101,112,42,42],true,"#97f2c8");
   bigrect2.alpha=0.3;
   var Malarm=new LButton(rect2,bigrect2);
   Malarm.graphics.drawRect(0,"#35ee99",[101,112,42,42]);
   menuLayer.addChild(Malarm);
   Malarm.addEventListener(LMouseEvent.MOUSE_DOWN,MenuAlarm);
   
   var rect4=new LGraphics();
   rect4.drawRect(1,"#35ee99",[40,194,42,42]);             //拨号
   var bigrect4=new LSprite();
   bigrect4.graphics.drawRect(0,"#35ee99",[40,194,42,42],true,"#97f2c8");
   bigrect4.alpha=0.3;
   var Mcall=new LButton(rect4,bigrect4);
   Mcall.graphics.drawRect(0,"#35ee99",[40,194,42,42]);
   menuLayer.addChild(Mcall);
   Mcall.addEventListener(LMouseEvent.MOUSE_DOWN,MenuCall);
   
   var rect5=new LGraphics();
   rect5.drawRect(1,"#35ee99",[102,194,42,42]);             //搜索
   var bigrect5=new LSprite();
   bigrect5.graphics.drawRect(0,"#35ee99",[102,194,42,42],true,"#97f2c8");
   bigrect5.alpha=0.3;
   var Msearch=new LButton(rect5,bigrect5);
   Msearch.graphics.drawRect(0,"#35ee99",[102,194,42,42]);
   menuLayer.addChild(Msearch);
   Msearch.addEventListener(LMouseEvent.MOUSE_DOWN,MenuSearch);
   
   var rect6=new LGraphics();
   rect6.drawRect(1,"#35ee99",[225,193,42,42]);             //联系人
   var bigrect6=new LSprite();
   bigrect6.graphics.drawRect(0,"#35ee99",[225,193,42,42],true,"#97f2c8");
   bigrect6.alpha=0.3;
   var Mphonebook=new LButton(rect6,bigrect6);
   Mphonebook.graphics.drawRect(0,"#35ee99",[225,193,42,42]);
   menuLayer.addChild(Mphonebook);
   Mphonebook.addEventListener(LMouseEvent.MOUSE_DOWN,MenuPB);
   
   var rect7=new LGraphics();
   rect7.drawRect(1,"#35ee99",[163,353,42,42]);             //浏览器
   var bigrect7=new LSprite();
   bigrect7.graphics.drawRect(0,"#35ee99",[163,353,42,42],true,"#97f2c8");
   bigrect7.alpha=0.3;
   var Minternet=new LButton(rect7,bigrect7);
   Minternet.graphics.drawRect(0,"#35ee99",[163,353,42,42]);
   menuLayer.addChild(Minternet);
   Minternet.addEventListener(LMouseEvent.MOUSE_DOWN,MenuInternet);
   
   var rect8=new LGraphics();
   rect8.drawRect(1,"#35ee99",[15+25,361+69,42,42]);             //浏览器
   var bigrect8=new LSprite();
   bigrect8.graphics.drawRect(0,"#35ee99",[15+25,361+69,42,42],true,"#97f2c8");
   bigrect8.alpha=0.3;
   var btmess=new LButton(rect8,bigrect8);
   btmess.graphics.drawRect(0,"#35ee99",[15+25,361+69,42,42]);
   menuLayer.addChild(btmess);
   btmess.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
	      menuLayer.die();              
          menuLayer.removeAllChild();   
	      removeChild(menuLayer);
	      messageMain();
	   });
	   
   var rect9=new LGraphics();
   rect9.drawRect(1,"#35ee99",[15+25,203+69,42,42]);             //通话记录
   var bigrect9=new LSprite();
   bigrect9.graphics.drawRect(0,"#35ee99",[15+25,203+69,42,42],true,"#97f2c8");
   bigrect9.alpha=0.3;
   var callIM=new LButton(rect9,bigrect9);
   callIM.graphics.drawRect(0,"#35ee99",[15+25,203+69,42,42]);
   menuLayer.addChild(callIM);
   callIM.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
	      menuLayer.die();              
          menuLayer.removeAllChild();   
	      removeChild(menuLayer);
	      callRecordMain();
	   });	   
  
   var rect=new LGraphics();
   var bigrect=new LSprite();
   bigrect.graphics.drawRect(0,"#35ee99",[238, 542,37,37],true,"#97f2c8");//画个大框
   bigrect.alpha=0.3;
   menuback=new LButton(rect,bigrect);
   menuLayer.addChild(menuback);
   menuback.graphics.drawRect(0,"#ffffff",[238, 542, 37,37]);     //添加返回键
   menuback.addEventListener(LMouseEvent.MOUSE_DOWN,menufan);
   
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[138,542,35,35],true,"#97f2c8");//画个大框
	bigrect1.alpha=0.3;
    Mhome=new LButton(rect,bigrect1);
	menuLayer.addChild(Mhome);
	Mhome.graphics.drawRect(0,"#ffffff",[138, 542, 35, 35]);        //添加HOME键
	Mhome.addEventListener(LMouseEvent.MOUSE_DOWN,Mzhu);
	
  }
function menufan()
{   
    menuLayer.die();
	menuLayer.removeAllChild();
	removeChild(menuLayer);
	if(dot.x==-231)guide();
    if(dot.x==25)guideleft();
	if(dot.x==-490)guideright();
	
}
function Mzhu()
{   menuLayer.removeAllChild();
	removeChild(menuLayer);
	dot.x = -231;
	guide();
}
function MenuSet()
{
   	menuLayer.removeAllChild();
	removeChild(menuLayer);
	setting();
}

function MenuAlarm()
{
 	menuLayer.removeAllChild();
	removeChild(menuLayer);
	//guideleft(); //因为模块不在主guide，要先调用左guide，按键监听才有用
	alarmMain();
}
function MenuCall()
{  
    menuLayer.removeAllChild();
	removeChild(menuLayer);
	call();
}
function MenuSearch()
{
    menuLayer.removeAllChild();
	removeChild(menuLayer);
	Search();	
}

function MenuPB()
{
	menuLayer.removeAllChild();
	removeChild(menuLayer);
	//guideleft();          //因为联系人不在主guide，要先调用左guide，按键监听才有用
	phoneBookMain();
}
function MenuInternet()
{
	menuLayer.removeAllChild();
	removeChild(menuLayer);
	//guideright();          //因为浏览器不在主guide，要先调用左guide，按键监听才有用
	internet();
}