// JavaScript Document for alarm3
var alarm3Layer;//声明背景层
function alarm3()
{
	
	alarm3Layer=new LSprite();                                          //闹钟背景层初始化
	alarm3Layer.graphics.drawRect(1,"#000000",[25, 128, 256, 396]);
	backLayer.addChild(alarm3Layer); 
	
	var al3=new LBitmap(new LBitmapData(imglist["alarm25"]));
	al3.x = 25;
	al3.y = 89;
	alarm3Layer.addChild(al3);
	
	var rect1=new LGraphics();
	var tourect1=new LSprite();
	tourect1.graphics.drawRect(0,"#35ee99",[25,89,64,39],true,"#97f2c8");//画个透明框
	tourect1.alpha=0.3;
	btalarm31=new LButton(rect1,tourect1);
	btalarm31.graphics.drawRect(0,"#ffffff",[25, 89, 64,39]);
	alarm3Layer.addChild(btalarm31);                               //添加到alarm的按钮
	btalarm31.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm3Main);
	
	var rect2=new LGraphics();
	var tourect2=new LSprite();
	tourect2.graphics.drawRect(0,"#35ee99",[89,89,64,39],true,"#97f2c8");//画个透明框
	tourect2.alpha=0.3;
	btalarm32=new LButton(rect2,tourect2);
	btalarm32.graphics.drawRect(0,"#ffffff",[89, 89, 64,39]);
	alarm3Layer.addChild(btalarm32);                               //添加到alarm2的按钮
	btalarm32.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm32);
	
	var rect3=new LGraphics();
	var tourect3=new LSprite();
	tourect3.graphics.drawRect(0,"#35ee99",[217,89,64,39],true,"#97f2c8");//画个透明框
	tourect3.alpha=0.3;
	btalarm34=new LButton(rect3,tourect3);
	btalarm34.graphics.drawRect(0,"#ffffff",[217, 89, 64,39]);
	alarm3Layer.addChild(btalarm34);                               //添加到alarm4的按钮
	btalarm34.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm34);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 542,37,37],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	alarm3back=new LButton(rect,bigrect);
	alarm3back.graphics.drawRect(0,"#ffffff",[238, 542, 37,37]);//添加返回键
	alarm3Layer.addChild(alarm3back);
	alarm3back.addEventListener(LMouseEvent.MOUSE_DOWN,alarm3fan);
}
function alarm3fan()
{
	alarm3Layer.removeAllChild();
	removeChild(alarm3Layer);
    alarmMain();
}
function Alarm3Main()
{
	 
    alarm3Layer.die();
	alarm3Layer.removeAllChild();
	backLayer.removeChild(alarm3Layer);
	alarmMain();
}
function Alarm32()
{
	alarm3Layer.die();
	alarm3Layer.removeAllChild();
	backLayer.removeChild(alarm3Layer);
	alarm2();
}
function Alarm34()
{
	alarm3Layer.die();
	alarm3Layer.removeAllChild();
	backLayer.removeChild(alarm3Layer);
	alarm4();
}