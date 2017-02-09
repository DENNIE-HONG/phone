// JavaScript Document for alarm4
var alarm4Layer;//声明背景层
function alarm4()
{
		
	alarm4Layer=new LSprite();                                          //闹钟背景层初始化
	alarm4Layer.graphics.drawRect(1,"#000000",[25, 128, 256, 396],false);
	backLayer.addChild(alarm4Layer); 
	
	var al4=new LBitmap(new LBitmapData(imglist["alarm24"]));
	al4.x = 25;
	al4.y = 89;
	alarm4Layer.addChild(al4);
	
	var rect1=new LGraphics();
	var tourect1=new LSprite();
	tourect1.graphics.drawRect(0,"#35ee99",[25,89,64,39],true,"#97f2c8");//画个透明框
	tourect1.alpha=0.3;
	btalarm41=new LButton(rect1,tourect1);
	btalarm41.graphics.drawRect(0,"#ffffff",[25, 89, 64,39]);
	alarm4Layer.addChild(btalarm41);                               //添加到alarm的按钮
	btalarm41.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm4Main);
	
	var rect2=new LGraphics();
	var tourect2=new LSprite();
	tourect2.graphics.drawRect(0,"#35ee99",[89,89,64,39],true,"#97f2c8");//画个透明框
	tourect2.alpha=0.3;
	btalarm42=new LButton(rect2,tourect2);
	btalarm42.graphics.drawRect(0,"#ffffff",[89, 89, 64,39]);
	alarm4Layer.addChild(btalarm42);                               //添加到alarm2的按钮
	btalarm42.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm42);
	
	var rect3=new LGraphics();
	var tourect3=new LSprite();
	tourect3.graphics.drawRect(0,"#35ee99",[153,89,64,39],true,"#97f2c8");//画个透明框
	tourect3.alpha=0.3;
	btalarm43=new LButton(rect3,tourect3);
	btalarm43.graphics.drawRect(0,"#ffffff",[153, 89, 64,39]);
	alarm4Layer.addChild(btalarm43);                               //添加到alarm3的按钮
	btalarm43.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm43);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 542,37,37],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	alarm4back=new LButton(rect,bigrect);
	alarm4back.graphics.drawRect(0,"#ffffff",[238, 542, 37,37],false);//添加返回键
	alarm4Layer.addChild(alarm4back);
	alarm4back.addEventListener(LMouseEvent.MOUSE_DOWN,alarm4fan);
}
function alarm4fan()
{   alarm4Layer.die();
	alarm4Layer.removeAllChild();
	removeChild(alarm4Layer);
    alarmMain();
}

function Alarm4Main()
{
	 
    alarm4Layer.die();
	alarm4Layer.removeAllChild();
	backLayer.removeChild(alarm4Layer);
	alarmMain();
}
function Alarm42()
{
	alarm4Layer.die();
	alarm4Layer.removeAllChild();
	backLayer.removeChild(alarm4Layer);
	alarm2();
}
function Alarm43()
{
	alarm4Layer.die();
	alarm4Layer.removeAllChild();
	backLayer.removeChild(alarm4Layer);
	alarm3();
}