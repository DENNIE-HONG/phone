var setLayer;  //声明设置层
var back1;     //声明返回键
var STHome;    //声明Home键
var STswitch1; //声明开关1
var STswitch2; //声明开关2
var sett,Open1,Open2;	
function setting(event)
{  
	setLayer=new LSprite();       //设置层初始化
	backLayer.addChild(setLayer);
	setLayer.graphics.drawRect(1,"#000000",[25, 127, 256, 397],true);//添加设置层
	
	var shellshang = new LBitmap(new LBitmapData(imglist["setbar"])); //添加设置的bar层图片
	shellshang.x =25 ;
	shellshang.y = 89;
	setLayer.addChild(shellshang);
	
    sett = new LBitmap(new LBitmapData(imglist["sett"])); 
	sett.x = 25;
	sett.y = 127;
	setLayer.addChild(sett);
	backLayer.setChildIndex(bitmap,backLayer.numChildren-1);    //手机壳置顶
	backLayer.setChildIndex(bitmap1,backLayer.numChildren-1);    //手机磁条置顶
	backLayer.setChildIndex(bartime,backLayer.numChildren-1);    //手机磁条时间置顶
	setLayer.setChildIndex(shellshang,setLayer.numChildren-1);   //设置磁条置顶
	
	back1=new LSprite();
	setLayer.addChild(back1);
	back1.graphics.drawRect(1,"#ffffff",[238, 542, 35,35]);//添加返回键
	back1.addEventListener(LMouseEvent.MOUSE_DOWN,fanhui);
	
	STHome=new LSprite();
	setLayer.addChild(STHome);
	STHome.graphics.drawRect(1,"#ffffff",[138, 542, 35, 35]);//添加HOME键
	STHome.addEventListener(LMouseEvent.MOUSE_DOWN,STzhu);
	
	
	STswitch1=new LSprite();
	STswitch1.graphics.drawRect(0,"#ffffff",[188.6, 240.2, 63, 19]);//添加开关键
	setLayer.addChild(STswitch1);
    Open1 = new LBitmap(new LBitmapData(imglist["open"])); 
	Open1.x = 188.6;
	Open1.y = 240.2;
	Open1.visible=false;
	STswitch1.addChild(Open1);
	STswitch1.addEventListener(LMouseEvent.MOUSE_DOWN,STkg1);
	monseIsDown = false;
	
	
	STswitch2=new LSprite();
	setLayer.addChild(STswitch2);
	STswitch2.graphics.drawRect(0,"#ffffff",[188.6, 279.3, 63, 19]);//添加开关键
    Open2 = new LBitmap(new LBitmapData(imglist["open"])); 
	Open2.x = 188.6;
	Open2.y = 279.3;
	Open2.visible=false;
	STswitch2.addChild(Open2);
	STswitch2.addEventListener(LMouseEvent.MOUSE_DOWN,STkg2);
	
	//添加控制事件
	setLayer.addEventListener(LMouseEvent.MOUSE_DOWN,ondown1); 
	setLayer.addEventListener(LMouseEvent.MOUSE_UP,onup1);	
	setLayer.addEventListener(LMouseEvent.MOUSE_MOVE,onmove1);	
	monseIsDown = false;


}
function onup1(event){	
	monseIsDown = false;
	if(STswitch1.y>240.2){STswitch1.y=0;STswitch2.y=0;}
}              
				
function ondown1(event){
	monseIsDown = true;
	mouseY1=event.offsetY;
}
			
function onmove1(event){

	if(monseIsDown)
	{  
		sett.y+=(event.offsetY-mouseY1);
		STswitch1.y+=(event.offsetY-mouseY1);
		STswitch2.y+=(event.offsetY-mouseY1);
		if(sett.y<=13.8){STswitch1.visible=false;}  //当按钮看不见时按钮功能失效
		else {STswitch1.visible=true;}
		
		if(sett.y<=-25.3){STswitch2.visible=false;}
		else {STswitch2.visible=true;}
		
		if(sett.y<-382)sett.y=-382;    //防止滑出界
		if(sett.y>127){sett.y=127;STswitch1.y=0;STswitch2.y=0;}
	}
	
}
function fanhui()
{   
    setLayer.die();
	setLayer.removeAllChild();
	backLayer.removeChild(setLayer);
	if(dot.x==-231)guide(); //从guide点进去，回到guide 
	else {menue();}          //从菜单点进去，返回菜单
}				
function STzhu()
{   setLayer.removeAllChild();
	backLayer.removeChild(setLayer);
	
	dot.x=-231;
	guide();
}
function STkg1()
{  
	if(Open1.visible==false)
       {
          Open1.visible=true;  
        }	
     else
       {          
          Open1.visible=false;          	
        }	 	
}	

function STkg2()
{  
	if(Open2.visible==false) { Open2.visible=true; }	
    else                     { Open2.visible=false;}	 	
}	  