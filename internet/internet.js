// JavaScript Document for internent
var internetLayer;//声明浏览器背景层
function internet()
{	 
	internetLayer=new LSprite();
	addChild(internetLayer);
	internetLayer.graphics.drawRect(0,"#ffffff",[25, 89,256,435],false);//添加层
	
	var Internet = new LBitmap(new LBitmapData(imglist["internet"]));  
	Internet.x = 25;
	Internet.y = 89;
	internetLayer.addChild(Internet);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,37,37],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	internetback=new LButton(rect,bigrect);
	internetback.graphics.drawRect(0,"#ffffff",[238, 541, 37,37]);//添加返回键
	internetLayer.addChild(internetback);
	internetback.addEventListener(LMouseEvent.MOUSE_DOWN,internetfan);
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[138,542,35,35],true,"#97f2c8");//画个微透明大框
	bigrect1.alpha=0.3;
	inthome=new LButton(rect,bigrect1);
	internetLayer.addChild(inthome);
	inthome.graphics.drawRect(0,"#ffffff",[138, 542, 35, 35]);//添加浏览器home键
	inthome.addEventListener(LMouseEvent.MOUSE_DOWN,internetzhu);
	
}
function internetfan()
{
	internetLayer.removeAllChild();
	removeChild(internetLayer);	
	if(dot.x==-490) guideright();
	if(dot.x==-231)guide(); 
	if(dot.x==25)guideleft();
}

function internetzhu()
{   
	internetLayer.removeAllChild();
	removeChild(internetLayer);
	dot.x=-231;
	guide();
}