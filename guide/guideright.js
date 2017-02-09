var guideR;
var btguideR;   
function guideright()
{
	guideLayer.die();            //guide层清空
    guideLayer.removeAllChild(); 
    backLayer.removeChild(guideLayer);     
	  
	guideR=new LSprite();
	backLayer.addChild(guideR);
	guideR.graphics.drawRect(0,"#ffffff",[25, 89,256,435]);//添加右滑动层
	
	guideR.addChild(bitmap5);          //添加guide图
	guideR.addChild(dot);              //添加图标
	backLayer.setChildIndex(bitmap,backLayer.numChildren-1);  //手机壳置顶
	
	
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[160,378,43,43],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	var btsearch=new LButton(rect,bigrect);                            //初始化搜索按钮
	btsearch.graphics.drawRect(0,"#35ee99",[160,378,43,43]); //按钮范围
	guideR.addChild(btsearch);                                     //添加搜索按钮
	btsearch.addEventListener(LMouseEvent.MOUSE_DOWN,SearchRight);       //监听事件
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[222,378,43,43],true,"#97f2c8");//画个大框
	bigrect1.alpha=0.3;
	var btinternet=new LButton(rect,bigrect1);                            //初始化浏览器按钮
	btinternet.graphics.drawRect(0,"#35ee99",[222,378,43,43]); //按钮范围
	guideR.addChild(btinternet);                                     //添加浏览器按钮
	btinternet.addEventListener(LMouseEvent.MOUSE_DOWN,InternetRight);       //监听事件
	
	var arc=new LGraphics();                                      //菜单                  
	var bigarc=new LSprite();
	bigarc.graphics.drawArc(0,"#35ee99",[150, 488, 20, 0,360],true,"#97f2c8");
	bigarc.alpha=0.3;                                                        
    var btmenuR=new LButton(arc,bigarc);
	guideR.addChild(btmenuR);
	btmenuR.graphics.drawArc(0,"#ffffff",[150, 488, 20, 0,360]);
	btmenuR.addEventListener(LMouseEvent.MOUSE_DOWN,MenuRight);
	
	guideR.addChild(upcanv);	
	
    btguideR=new LSprite()                          //初始化按钮
	btguideR.graphics.drawRect(0,"#35ee99",[37,542,37,37]);  //按钮范围
	guideR.addChild(btguideR);                                     //添加按钮
	btguideR.addEventListener(LMouseEvent.MOUSE_DOWN,canupR);       //监听事件
	
	                       //拨号
	var bigrect4=new LSprite();
	bigrect4.graphics.drawRect(0,"#f26970",[36,469,40,40],true,"#0a75ed");
	bigrect4.alpha=0.3;
    var btrCall=new LButton(rect,bigrect4);    
	guideR.addChild(btrCall);            
	btrCall.graphics.drawRect(0,"#ffffff",[36,469,40,40]);
	btrCall.addEventListener(LMouseEvent.MOUSE_DOWN,CallRight);
	
                         //联系人
	var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#f26970",[84,469,40,40],true,"#0a75ed");
	bigrect5.alpha=0.3;
    var btrBook=new LButton(rect,bigrect5);      
	guideR.addChild(btrBook);                  
	btrBook.graphics.drawRect(0,"#ffffff",[84,469,40,40]);
	btrBook.addEventListener(LMouseEvent.MOUSE_DOWN,BookRight);
	
	                    //浏览器
	var bigrect6=new LSprite();
	bigrect6.graphics.drawRect(0,"#f26970",[229,469,40,40],true,"#0a75ed");
	bigrect6.alpha=0.3;
    var btrInternet=new LButton(rect,bigrect6);  
	guideR.addChild(btrInternet);            
	btrInternet.graphics.drawRect(0,"#ffffff",[229,469,40,40]);
	btrInternet.addEventListener(LMouseEvent.MOUSE_DOWN,InternetRight);
	
	
	var bigrect7=new LSprite();
	bigrect7.graphics.drawRect(0,"#f26970",[179.5,469,40,40],true,"#97f2c8");
	bigrect7.alpha=0.3;
	var btrMsg=new LButton(rect,bigrect7);          //添加短信按键
	btrMsg.graphics.drawRect(0,"#ffffff",[179.5,469,40,40]);
	guideR.addChild(btrMsg);
	btrMsg.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		  guideR.die();              
          guideR.removeAllChild();   
	      backLayer.removeChild(guideR);
	      messageMain();
		});
   
    var bigrect8=new LSprite();
	bigrect8.graphics.drawRect(0,"#f26970",[72+25,305+69,43,43],true,"#97f2c8");
	bigrect8.alpha=0.3;
	var btmessage=new LButton(rect,bigrect8);          //添加短信按键
	btmessage.graphics.drawRect(0,"#ffffff",[72+25,305+69,43,43]);
	guideR.addChild(btmessage);
	btmessage.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		  guideR.die();              
          guideR.removeAllChild();   
	      backLayer.removeChild(guideR);
	      messageMain();
		});	
	
	
	guideR.addEventListener(LMouseEvent.MOUSE_DOWN,guideRdown);
	guideR.addEventListener(LMouseEvent.MOUSE_MOVE,guideRmove);
	guideR.addEventListener(LMouseEvent.MOUSE_UP,guideRup);
	monseIsDown = false;
	
	guidesearch = new LBitmap(new LBitmapData(imglist["guidesearch"])); //添加搜索图标
	guidesearch.x = 161;
	guidesearch.y = 377;
    guidesearch.visible=false;  
	guideR.addChild(guidesearch);	  
		
    guideinternet = new LBitmap(new LBitmapData(imglist["guideinternet"])); //添加浏览器图标
	guideinternet.x = 223;
	guideinternet.y = 379;
    guideinternet.visible=false; 
	guideR.addChild(guideinternet);
	
	guideR.addChild(callm);
	guideR.addChild(Book);
	guideR.addChild(Inter);
	glow();                //调用光晕函数
}
function guideRdown(event){
	monseIsDown = true;
	mouseX1=event.offsetX;
}
function guideRmove(event)
{
	if(monseIsDown)
	{  
	     if(event.offsetX-mouseX1>0)//只能往左滑
		{ glow1();  //不闪了
		  dot.x+=(event.offsetX-mouseX1)/5;
		  if(dot.x>-231)dot.x=-231;
		}
	}
}

function guideRup(event){	
	monseIsDown = false;
	if(dot.x>-490)
	{
	 LTweenLite.to(dot,0.2,{x:-231,onComplete:backguide()});
	}			
}
	
function canupR()
{
 if(upcanv.visible==false)
       { btguideR.addEventListener(LEvent.ENTER_FRAME,showR); }	
  else
       {btguideR.addEventListener(LEvent.ENTER_FRAME,outR);  }		
}

function showR()
{ 
  guideR.setChildIndex(upcanv,guideR.numChildren-1); //要遮住其他图片
  upcanv.visible=true;  
  upcanv.y-=15;
  if(upcanv.y<392){upcanv.y=392;btguideR.removeEventListener(LEvent.ENTER_FRAME,showR);}		    
}
function outR()	
 {  
  backLayer.setChildIndex(bitmap,backLayer.numChildren-1);
  upcanv.y+=15;
  if(upcanv.y>524) {upcanv.y=524;upcanv.visible=false; btguideR.removeEventListener(LEvent.ENTER_FRAME,outR);}		   
} 
function BookRight() //联系人
{
	 guideR.die();             
     guideR.removeAllChild();  
	 backLayer.removeChild(guideR);       
	 guideleft();
	 phoneBookMain();	
}
function backguide()  //当调用其他函数时，都要先把当前的层给清空
{
	 guideR.die(); 
	 guideR.removeAllChild();              
	 backLayer.removeChild(guideR); 
	 guide();   
}
function CallRight()        //拨号
{    guideR.die(); 
	 guideR.removeAllChild();              
	 backLayer.removeChild(guideR); 
	 call();
}
function MenuRight()   //菜单
{
     guideR.die(); 
	 guideR.removeAllChild();              
	 backLayer.removeChild(guideR); 
	 menue();	
}
function InternetRight()
{
	 guideR.die(); 
	 guideR.removeAllChild();              
	 backLayer.removeChild(guideR); 
	 internet();
}
function SearchRight()  //搜索
{
	 guideR.die(); 
	 guideR.removeAllChild();              
	 backLayer.removeChild(guideR); 
	 Search();
}