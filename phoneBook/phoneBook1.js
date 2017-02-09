// JavaScript Document
var PBMLayer;//声明明信片背景层
var name1;
function phoneBook1()
{ 
   	PBLayer.die();              //清空联系人层
    PBLayer.removeAllChild();   //删除联系人层所有对象
	removeChild(PBLayer);       //删除联系人层	
	 
	PBMLayer=new LSprite();
	addChild(PBMLayer);
	PBMLayer.graphics.drawRect(0,"#ffffff",[25, 89,256,435],true,"#000000");//添加层
	
	var pbook1 = new LBitmap(new LBitmapData(imglist["pbook1"]));  
	pbook1.x = 25;
	pbook1.y = 93;
	PBMLayer.addChild(pbook1);      //添加背景图片
	
	
	name1=new LTextField();         //号码名字初始化
	name1.x=37;
	name1.y=106;
	name1.size=12;
	name1.color="#141414";
	name1.text=mingzi.text;
	PBMLayer.addChild(name1);
	
	num1=new LTextField();         //号码初始化
	num1.x=46;
	num1.y=305;
	num1.size=15;
	num1.color="#010101";
	num1.text=haoma.text;
	PBMLayer.addChild(num1);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	var PBMback=new LButton(rect,bigrect);
	PBMback.graphics.drawRect(0,"#ffffff",[238, 541,40,40],false);       //添加返回键
	PBMLayer.addChild(PBMback);
	PBMback.addEventListener(LMouseEvent.MOUSE_DOWN,PBMfan);
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");//画个微透明大框
	bigrect1.alpha=0.3;
	var PBMhome=new LButton(rect,bigrect1);
	PBMLayer.addChild(PBMhome);
	PBMhome.graphics.drawRect(0,"#ffffff",[135, 542, 40, 40]);       //添加home键
	PBMhome.addEventListener(LMouseEvent.MOUSE_DOWN,PBMzhu);
	
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#33b5e5",[38,293,135,43],true,"#33b5e5");//画个微透明大框
	bigrect2.alpha=0.3;
    var PBMcall=new LButton(rect,bigrect2);
	PBMLayer.addChild(PBMcall);
	PBMcall.graphics.drawRect(0,"#ffffff",[38,293,135, 43]);       //添加拨号键
	PBMcall.addEventListener(LMouseEvent.MOUSE_DOWN,PBMcalling);
	
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#33b5e5",[25+202,204+89,41,38],true,"#33b5e5");//画个微透明大框
	bigrect3.alpha=0.3;
    var PBMmess=new LButton(rect,bigrect3);
	PBMLayer.addChild(PBMmess);
	PBMmess.graphics.drawRect(0,"#ffffff",[25+202,204+89,41,38]);       //添加拨号键
	PBMmess.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		 PBMLayer.die();                   //清空明信片层
		 PBMLayer.removeAllChild();
	     removeChild(PBMLayer);
		 messageNew();
		});


}
function PBMfan()
{   PBMLayer.die();                   //清空明信片层
	PBMLayer.removeAllChild();
	removeChild(PBMLayer);
	phoneBookMain();
}
function PBMzhu()
{   PBMLayer.die();                   //清空明信片层
	PBMLayer.removeAllChild();
	removeChild(PBMLayer);
	dot.x=-231;
	guide();
}
function PBMcalling()
{                      //清空明信片层
	PBMLayer.die();
	PBMLayer.removeAllChild();
	removeChild(PBMLayer);
	call();
    call1();	
 }