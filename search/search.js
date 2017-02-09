// JavaScript Document for search
var searchLayer;//声明搜索背景层
function Search()
{       
	searchLayer=new LSprite();
	addChild(searchLayer);
	searchLayer.graphics.drawRect(0,"#ffffff",[25, 89,256,435]);//添加层
	
	var Search = new LBitmap(new LBitmapData(imglist["search"]));  
	Search.x = 25;
	Search.y = 89;
	searchLayer.addChild(Search);
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,37,37],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	searchback=new LButton(rect,bigrect);
	searchback.graphics.drawRect(0,"#ffffff",[238, 541, 37,37]);//添加返回键
	searchLayer.addChild(searchback);
	searchback.addEventListener(LMouseEvent.MOUSE_DOWN,searchfan);
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[138,542,35,35],true,"#97f2c8");//画个微透明大框
	bigrect1.alpha=0.3;
	searchhome=new LButton(rect,bigrect1);
	searchLayer.addChild(searchhome);
	searchhome.graphics.drawRect(0,"#ffffff",[138, 542, 35, 35]);//添加搜索home键
	searchhome.addEventListener(LMouseEvent.MOUSE_DOWN,searchzhu);
}
function searchfan()
{
	searchLayer.removeAllChild();
	removeChild(searchLayer);
	if(dot.x==-490)guideright();
	else menue();
}
function searchzhu()
{   
	searchLayer.removeAllChild();
	removeChild(searchLayer);
	dot.x=-231;
	guide();
}