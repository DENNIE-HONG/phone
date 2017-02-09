var guideL;     //声明guide层
var btguideL;      
function guideleft()
{    
     guideLayer.die();            //guide层清空
	 guideLayer.removeAllChild(); //删除guide层所有对象
	 backLayer.removeChild(guideLayer);     //删除guide层
	 
	guideL=new LSprite();
	backLayer.addChild(guideL);
	guideL.graphics.drawRect(0,"#ffffff",[25, 89,256,435]);//添加左滑动层
	
	guideL.addChild(bitmap5);        //添加guide图
	guideL.addChild(dot);           //添加图标
	backLayer.setChildIndex(bitmap,backLayer.numChildren-1); 
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[166,378,43,43],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	var btalarm=new LButton(rect,bigrect);                            //初始化闹钟按钮
	btalarm.graphics.drawRect(0,"#35ee99",[166,378,43,43]); //按钮范围
	guideL.addChild(btalarm);                                     //添加闹钟按钮
	btalarm.addEventListener(LMouseEvent.MOUSE_DOWN,Alarm);       //监听事件
	
	
	var arc=new LGraphics();         //菜单
	var bigarc=new LSprite();
	bigarc.graphics.drawArc(0,"#35ee99",[150, 488, 20, 0,360],true,"#97f2c8");
	bigarc.alpha=0.3;                                                        
    var btmenuL=new LButton(arc,bigarc);
	guideL.addChild(btmenuL);
	btmenuL.graphics.drawArc(0,"#ffffff",[150, 488, 20, 0,360]);
	btmenuL.addEventListener(LMouseEvent.MOUSE_DOWN,MenuLeft);
	
	btguideL=new LSprite();                           
	btguideL.graphics.drawRect(0,"#35ee99",[37,542,37,37]);  
	guideL.addChild(btguideL);                                     //添加按钮
	btguideL.addEventListener(LMouseEvent.MOUSE_DOWN,canupL);       //监听事件
	
	                          //联系人
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#35ee99",[105,378,43,43],true,"#97f2c8");
	bigrect3.alpha=0.3;
	var btbook=new LButton(rect,bigrect3);                            
	btbook.graphics.drawRect(0,"#35ee99",[105,378,43,43]);  
	guideL.addChild(btbook);                                      
	btbook.addEventListener(LMouseEvent.MOUSE_DOWN,bookLeft);
	
	                           //联系人
	var bigrect4=new LSprite();
	bigrect4.graphics.drawRect(0,"#f26970",[84,469,40,40],true,"#0a75ed");
	bigrect4.alpha=0.3;
    var btlBook=new LButton(rect,bigrect4);      
	guideL.addChild(btlBook);                  
	btlBook.graphics.drawRect(0,"#ffffff",[84,469,40,40]);
	btlBook.addEventListener(LMouseEvent.MOUSE_DOWN,bookLeft);
	
	                            //拨号
	var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#f26970",[36,469,40,40],true,"#0a75ed");
	bigrect5.alpha=0.3;
    var btlCall=new LButton(rect,bigrect5);    
	guideL.addChild(btlCall);            
	btlCall.graphics.drawRect(0,"#ffffff",[36,469,40,40]);
	btlCall.addEventListener(LMouseEvent.MOUSE_DOWN,CallLeft);
	
	                         //浏览器
	var bigrect6=new LSprite();
	bigrect6.graphics.drawRect(0,"#f26970",[229,469,40,40],true,"#0a75ed");
	bigrect6.alpha=0.3;
    var btlInternet=new LButton(rect,bigrect6);  
	guideL.addChild(btlInternet);            
	btlInternet.graphics.drawRect(0,"#ffffff",[229,469,40,40]);
	btlInternet.addEventListener(LMouseEvent.MOUSE_DOWN,InternetLeft);
	
	var bigrect7=new LSprite();
	bigrect7.graphics.drawRect(0,"#f26970",[179.5,469,40,40],true,"#97f2c8");
	bigrect7.alpha=0.3;
	var btlMsg=new LButton(rect,bigrect7);          //添加短信按键
	btlMsg.graphics.drawRect(0,"#ffffff",[179.5,469,40,40]);
	guideL.addChild(btlMsg);
	btlMsg.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		  guideL.die();              
          guideL.removeAllChild();   
	      backLayer.removeChild(guideL);
	      messageMain();
		});
	
	guideL.addChild(upcanv);
	
	guideL.addEventListener(LMouseEvent.MOUSE_DOWN,guideLdown);
	guideL.addEventListener(LMouseEvent.MOUSE_MOVE,guideLmove);
	guideL.addEventListener(LMouseEvent.MOUSE_UP,guideLup);
	monseIsDown = false;
   
    guidebook = new LBitmap(new LBitmapData(imglist["guidebook"])); //联系人图标（为了闪）
	guidebook.x = 110;
	guidebook.y = 380;
    guidebook.visible=false;  
	guideL.addChild(guidebook);	  
		 
    guidealarm = new LBitmap(new LBitmapData(imglist["guidealarm"])); //闹钟图标
	guidealarm.x = 170;
	guidealarm.y = 378;
    guidealarm.visible=false;   
	guideL.addChild(guidealarm);
    
	guideL.addChild(callm);
	guideL.addChild(Book);
	guideL.addChild(Inter);
    glow();           //滤镜特效	
	}
function guideLdown(event){
	monseIsDown = true;
	mouseX1=event.offsetX;
}
function guideLmove(event)
{
	if(monseIsDown)
	{  
	   if(event.offsetX-mouseX1<0)//只能往右滑
		{
			 glow1(); //不闪了
			 dot.x+=(event.offsetX-mouseX1)/5;
			 if(dot.x<-231)dot.x=-231;//防止滑出头
	    }
		
			
	}
}

function guideLup(event){	
	monseIsDown = false;
	if(dot.x<25)
	{ LTweenLite.to(dot,0.2,{x:-231,onComplete:Backguide()});}//滑到主guide界面
}
			                     
function canupL()
{
  if(upcanv.visible==false)
       { btguideL.addEventListener(LEvent.ENTER_FRAME,showL); }	
  else
       {btguideL.addEventListener(LEvent.ENTER_FRAME,outL);  }		
}
function showL()
{ 
  upcanv.visible=true;
  guideL.setChildIndex(upcanv,guideL.numChildren-1); //要遮住其他图片
  upcanv.y-=15;
  if(upcanv.y<392){upcanv.y=392;btguideL.removeEventListener(LEvent.ENTER_FRAME,showL);}
		    
}
function outL()	
 {  
  backLayer.setChildIndex(bitmap,backLayer.numChildren-1);
  upcanv.y+=15;
  if(upcanv.y>524) {upcanv.y=524;upcanv.visible=false; btguideL.removeEventListener(LEvent.ENTER_FRAME,outL);}
		   
} 	
function InternetLeft()  //调用浏览器函数
{
     guideL.die();              
     guideL.removeAllChild();   
	 backLayer.removeChild(guideL);       
	 guideright();
	 internet();
}
function Backguide()
{
	 guideL.die();              
     guideL.removeAllChild();   
	 backLayer.removeChild(guideL);
	 guide();
}
function CallLeft()        //调用拨号函数
{
     guideL.die();              //清空guide层
     guideL.removeAllChild();   //删除guide层所有对象
	 backLayer.removeChild(guideL);       //删除guide层  
	 call();	
}
function MenuLeft()         //调用菜单函数
{
	 guideL.die();             
     guideL.removeAllChild();   
	 backLayer.removeChild(guideL);      
	 menue();
}
function bookLeft()     //调用联系人函数
{
	 guideL.die();             
     guideL.removeAllChild();  
	 backLayer.removeChild(guideL);      
	 phoneBookMain(); 
}
function Alarm()         //调用闹钟函数
{
	 guideL.die();             
     guideL.removeAllChild();  
	 backLayer.removeChild(guideL);      
	 alarmMain(); 
	
}