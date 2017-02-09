// JavaScript Document for alarm2
var alarm2Layer;//声明背景层
function alarm2()
{  
		
	alarm2Layer=new LSprite();                                          //闹钟背景层初始化
	alarm2Layer.graphics.drawRect(1,"#000000",[25, 128, 256, 396]);
	backLayer.addChild(alarm2Layer); 
	
	var al2=new LBitmap(new LBitmapData(imglist["alarm26"]));      
	al2.x = 25;
	al2.y = 89;
	alarm2Layer.addChild(al2);
	
	var rect1=new LGraphics();
	var tourect1=new LSprite();
	tourect1.graphics.drawRect(0,"#35ee99",[25,89,64,39],true,"#97f2c8");//画个透明框
	tourect1.alpha=0.3;
	btalarm21=new LButton(rect1,tourect1);
	btalarm21.graphics.drawRect(0,"#ffffff",[25, 89, 64,39]);
	alarm2Layer.addChild(btalarm21);                               //添加到alarm的按钮
	btalarm21.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm2Main);
	
	var rect2=new LGraphics();
	var tourect2=new LSprite();
	tourect2.graphics.drawRect(0,"#35ee99",[153,89,64,39],true,"#97f2c8");//画个透明框
	tourect2.alpha=0.3;
	btalarm23=new LButton(rect2,tourect2);
	btalarm23.graphics.drawRect(0,"#ffffff",[153, 89, 64,39]);
	alarm2Layer.addChild(btalarm23);                               //添加到alarm3的按钮
	btalarm23.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm23);
	
	var rect3=new LGraphics();
	var tourect3=new LSprite();
	tourect3.graphics.drawRect(0,"#35ee99",[217,89,64,39],true,"#97f2c8");//画个透明框
	tourect3.alpha=0.3;
	btalarm24=new LButton(rect3,tourect3);
	btalarm24.graphics.drawRect(0,"#ffffff",[217, 89, 64,39]);
	alarm2Layer.addChild(btalarm24);                               //添加到alarm4的按钮
	btalarm24.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm24);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 542,37,37],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	alarm2back=new LButton(rect,bigrect);
	alarm2back.graphics.drawRect(0,"#ffffff",[238, 542, 37,37]);//添加返回键
	alarm2Layer.addChild(alarm2back);
	alarm2back.addEventListener(LMouseEvent.MOUSE_DOWN,alarm2fan);
}
function alarm2fan()
{   
    alarm2Layer.die();
	alarm2Layer.removeAllChild();
	backLayer.removeChild(alarm2Layer);
    alarmMain();
}
function Alarm2Main()
{
	 
    alarm2Layer.die();
	alarm2Layer.removeAllChild();
	backLayer.removeChild(alarm2Layer);
	alarmMain();
}
function Alarm23()
{
	alarm2Layer.die();
	alarm2Layer.removeAllChild();
	backLayer.removeChild(alarm2Layer);
	alarm3();
}
function Alarm24()
{
	alarm2Layer.die();
	alarm2Layer.removeAllChild();
	backLayer.removeChild(alarm2Layer);
	alarm4();
}