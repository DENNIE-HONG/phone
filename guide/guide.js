// JavaScript Document for guide
var guideLayer; //声明guide层，凡是用LSprite监听动作的都要声明下
var btguide;
var dot,upcanv,bitmap5;
var TimeId,StopId; //声明光晕、停止光晕

function guide()
{	
    
	lockLayer.die();               //解锁层死
    lockLayer.removeAllChild();   // 移除解锁层所有对象
	backLayer.removeChild(lockLayer);//清空解锁层
	
	guideLayer=new LSprite();
	backLayer.addChild(guideLayer);
	guideLayer.graphics.drawRect(0,"#ffffff",[25,89,256,435]);//添加滑动层
   
    bitmap5 = new LBitmap(new LBitmapData(imglist["guide"]));   //添加guide背景图
	bitmap5.x = 25;
	bitmap5.y = 89;
	guideLayer.addChild(bitmap5);
	
	dot.visible=true;           
	guideLayer.addChild(dot);      //添加图标
    backLayer.setChildIndex(bitmap,backLayer.numChildren-1);//手机壳置顶
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[224,379,43,43],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;          //透明度
    btset=new LButton(rect,bigrect);   //初始化设置按钮（框，大框），按钮有两个状态，当鼠标没在按钮上时是rect，在按钮上时能显示透明方框进行提示
	guideLayer.addChild(btset);           //添加设置按钮
	btset.graphics.drawRect(0,"#ffffff",[224, 379, 43, 43]);//按钮触发的范围
	btset.addEventListener(LMouseEvent.MOUSE_DOWN,Setting);//监听动作，进入设置函数
	   
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[37,379,43,43],true,"#97f2c8");
	bigrect1.alpha=0.3;
    btcall=new LButton(rect,bigrect1);                  
	guideLayer.addChild(btcall);                           //添加打电话按钮
	btcall.graphics.drawRect(0,"#ffffff",[37, 379, 43, 43]);
	btcall.addEventListener(LMouseEvent.MOUSE_DOWN,CallMiddle); 
	
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#f26970",[84,469,40,40],true,"#0a75ed");
	bigrect2.alpha=0.3;
    btnBook=new LButton(rect,bigrect2);   
	guideLayer.addChild(btnBook);            //添加联系人按钮
	btnBook.graphics.drawRect(0,"#ffffff",[84,469,40,40]);
	btnBook.addEventListener(LMouseEvent.MOUSE_DOWN,BookMiddle);//监听动作
	
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#f26970",[229,469,40,40],true,"#0a75ed");
	bigrect3.alpha=0.3;
    btnInternet=new LButton(rect,bigrect3);   
	guideLayer.addChild(btnInternet);                                  //浏览器
	btnInternet.graphics.drawRect(0,"#ffffff",[229,469,40,40]);
	btnInternet.addEventListener(LMouseEvent.MOUSE_DOWN,InternetMiddle);//监听动作
	                                                 //拨号
	var bigrect4=new LSprite();
	bigrect4.graphics.drawRect(0,"#f26970",[36,469,40,40],true,"#0a75ed");
	bigrect4.alpha=0.3;
    btnCall=new LButton(rect,bigrect4);    
	guideLayer.addChild(btnCall);           
	btnCall.graphics.drawRect(0,"#ffffff",[36,469,40,40]);
	btnCall.addEventListener(LMouseEvent.MOUSE_DOWN,CallMiddle);
	                                  
	var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#f26970",[179.5,469,40,40],true,"#97f2c8");
	bigrect5.alpha=0.3;
	var btnMsg=new LButton(rect,bigrect5);          //添加短信按键
	btnMsg.graphics.drawRect(0,"#ffffff",[179.5,469,40,40]);
	guideLayer.addChild(btnMsg);
	btnMsg.addEventListener(LMouseEvent.MOUSE_DOWN,messageMiddle);
	
	var arc=new LGraphics();          //画个圆框
	var bigarc=new LSprite();
	bigarc.graphics.drawArc(0,"#35ee99",[150, 488, 20, 0,360],true,"#97f2c8");//画个大圆
	bigarc.alpha=0.3;                                                         // 微透明
    btmenu=new LButton(arc,bigarc);
	guideLayer.addChild(btmenu);
	btmenu.graphics.drawArc(0,"#ffffff",[150, 488, 20, 0,360]);//添加菜单按钮
	btmenu.addEventListener(LMouseEvent.MOUSE_DOWN,MenuMiddle);
	
    upcanv = new LBitmap(new LBitmapData(imglist["upcanv"]));  //添加guide提示图
    upcanv.x = 25;
    upcanv.y = 524;
    upcanv.visible=false;
    guideLayer.addChild(upcanv);
	
    btguide=new LSprite();                                  
	btguide.graphics.drawRect(0,"#35ee99",[35,542,37,37]);                 //按钮范围
	guideLayer.addChild(btguide);                                       //添加按钮
	btguide.addEventListener(LMouseEvent.MOUSE_DOWN,canup);             //点击手机底部的第一个键
	 
	 set = new LBitmap(new LBitmapData(imglist["set"])); //设置图标
	 set.x = 231;
	 set.y = 379;
     set.visible=false;                           
	 guideLayer.addChild(set);	
	   
     
	 guidecall = new LBitmap(new LBitmapData(imglist["guidecall"]));  //电话图标
	 guidecall.x = 39;
	 guidecall.y = 378;
     guidecall.visible=false;                               //先让图标看不见
	 guideLayer.addChild(guidecall);
   
	
	guideLayer.addChild(callm);     //电话小图标
	guideLayer.addChild(Book);      //联系人小图标
	guideLayer.addChild(Inter);     //浏览器小图标
	
	guideLayer.addEventListener(LMouseEvent.MOUSE_DOWN,down);
	guideLayer.addEventListener(LMouseEvent.MOUSE_MOVE,move);
	guideLayer.addEventListener(LMouseEvent.MOUSE_UP,up);
	monseIsDown = false;
	
    shadow = new LDropShadowFilter(4,0,"#f8ea70");  //添加滤镜（偏移距离，角度，颜色）
    glow();            //滤镜特效	
}

function down(event)
{
	monseIsDown = true;
	mouseX1=event.offsetX;
}
function move(event)
{
   if(monseIsDown)
	{        
	         glow1(); //不闪了
		     dot.x+=(event.offsetX-mouseX1)/5;
			 if(dot.x<-490)dot.x=-490; //防止滑出界
			 if(dot.x>25)dot.x=25;
	}
}

function up(event){	
	monseIsDown = false;
	if(dot.x>-231) 
	{
		LTweenLite.to(dot,0.2,{x:25,onComplete:guideleft()});  //调用缓动函数，0.2秒完成移动，结束调用guideleft（）函数		
	}   
	if(dot.x<-231)
	{
		LTweenLite.to(dot,0.2,{x:-490,onComplete:guideright()});	
	}
}
function canup()
{ 
  if(upcanv.visible==false)                      //看不见时进入循环函数
       { btguide.addEventListener(LEvent.ENTER_FRAME,show); }	
  else 
       {btguide.addEventListener(LEvent.ENTER_FRAME,out);  }//看得见时进入out循环函数	
}
function show()
{ 

  upcanv.visible=true;
  guideLayer.setChildIndex(upcanv,guideLayer.numChildren-1); //要遮住其他图片
  upcanv.y-=15;                                              //图片上升
  if(upcanv.y<392){upcanv.y=392;btguide.removeEventListener(LEvent.ENTER_FRAME,show); }
		    
}
function out()	
 {  
  upcanv.y+=15;                 //图片下降
  if(upcanv.y>524)
     { upcanv.y=524;
	   upcanv.visible=false;  
	   btguide.removeEventListener(LEvent.ENTER_FRAME,out);
	 }   
} 	
function BookMiddle()
{
     guideLayer.die();              //清空guide层
     guideLayer.removeAllChild();   //删除guide层所有对象
	 backLayer.removeChild(guideLayer);       //删除guide层
	 guideleft();	
	 phoneBookMain();	               //调用联系人函数
}
function InternetMiddle()
{
	 guideLayer.die();              //清空guide层
     guideLayer.removeAllChild();   //删除guide层所有对象
	 backLayer.removeChild(guideLayer);       //删除guide层
	 guideright();
	 internet();
} 
                 
function glow()
{ 
 
    if(set.visible==false) {clearTimeout(StopId);}
	 callm.visible=true;
     callm.filters= [shadow];           //图标闪
	  
	  Book.visible=true;
      Book.filters= [shadow];
	  
	  Inter.visible=true;
      Inter.filters= [shadow];  
    if(dot.x==-231)  
	 { set.visible=true;
       set.filters = [shadow];
     
	  guidecall.visible=true;
      guidecall.filters= [shadow];
	 
	 }
     if(dot.x==25)	 
	    { guidebook.visible=true;
          guidebook.filters= [shadow];
     
	      guidealarm.visible=true;
          guidealarm.filters= [shadow];
	    }
	 if(dot.x==-490)
	    { guidesearch.visible=true;
          guidesearch.filters= [shadow];
      
	      guideinternet.visible=true;
          guideinternet.filters= [shadow];
		}
     StopId=setTimeout(glow1,600);       //闪了600毫秒进入函数glow1
  
		
}
function glow1()
{
	set.visible=false;                 //图标看不见时即不闪
	guidecall.visible=false;
	callm.visible=false;
	Book.visible=false;
	Inter.visible=false;
	if(dot.x==25)
	  {guidebook.visible=false;
	   guidealarm.visible=false;
	  }
    if(dot.x==-490)
	{
	  guidesearch.visible=false;	
	  guideinternet.visible=false;	
	}
	
    TimeId=setTimeout(glow,600);            //不闪600毫秒后进入闪的函数
	if(monseIsDown)clearTimeout(TimeId);	//当滑动guide层，图标不闪了
}
function Setting()
{
	guideLayer.die();            //清空guide层
	guideLayer.removeAllChild(); //删除guide层所有对象
	backLayer.removeChild(guideLayer);     //删除guide层
	setting();
}
function CallMiddle()           //调用拨号函数
{    guideLayer.die();             
     guideLayer.removeAllChild();  
	 backLayer.removeChild(guideLayer);      
	 call();
}  
function MenuMiddle()           //调用菜单函数
{
	 guideLayer.die();             
     guideLayer.removeAllChild();   
	 backLayer.removeChild(guideLayer); 
	 menue();
}
function messageMiddle()
{
	guideLayer.die();
	guideLayer.removeAllChild();
	backLayer.removeChild(guideLayer);
	messageMain();
}