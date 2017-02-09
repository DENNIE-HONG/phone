// JavaScript Document
var LMsgLayer,TipLayer;
var LNumber=new Array();   //记录短信的号码数组
var Text=new Array();       //记录短信的内容数组
var Time=new Array();       //记录短信发送时间

function LookMessage()
{
	 
	LMsgLayer=new LSprite();
	addChild(LMsgLayer);
	LMsgLayer.graphics.drawRect(0,"#000000",[25,89,256,435]);
	
	var Lookmsg=new LBitmap(new LBitmapData(imglist["msgBack"]));
	Lookmsg.x=25;
	Lookmsg.y=89;
	LMsgLayer.addChild(Lookmsg);      //添加短信的背景图
	
	Lnum=new LTextField();     //显示号码
	Lnum.x=70;
	Lnum.y=103;
	Lnum.size=15;
	Lnum.color="#ffffff";
	Lnum.text=number2.text;
	LMsgLayer.addChild(Lnum);
	
	var Ltext=new LTextField();     //显示内容
	Ltext.x=30;
	Ltext.y=178;
	Ltext.size=15;
	Ltext.color="#000000";
	Ltext.text=neirong.text;
	Ltext.setWordWrap(true);     //文本能自动换行
	LMsgLayer.addChild(Ltext);
	
	 var sendtime=new LTextField();     //显示发送时间
	 sendtime.x=60;
	 sendtime.y=320;
     sendtime.size=13;
	 sendtime.color="#000000";
	 sendtime.text=newtime.text;
	 LMsgLayer.addChild(sendtime); 
	 
	
	var inputLayer=new LSprite();
	inputLayer.graphics.drawRect(0,"#35ee99",[0,-7,180,26]);
	 
    InputText=new LTextField();     //输入内容
	InputText.x=60;
	InputText.y=490;
	InputText.size=14;
	InputText.color="#252424";
	InputText.setType(LTextFieldType.INPUT,inputLayer);
	LMsgLayer.addChild(InputText);
	 
	var rect=new LGraphics();                //添加返回键
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");
	bigrect.alpha=0.3;
	var LMsgBack=new LButton(rect,bigrect);
	LMsgBack.graphics.drawRect(0,"#35ee99",[238, 541,40,40]);
	LMsgLayer.addChild(LMsgBack);
	LMsgBack.addEventListener(LMouseEvent.MOUSE_DOWN,lookmsgfan);
	
	var rect1=new LGraphics();               //添加home键
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");
	bigrect1.alpha=0.3;
	var LMsgHome=new LButton(rect1,bigrect1);
	LMsgHome.graphics.drawRect(0,"#000000",[135,542,40,40]);
	LMsgLayer.addChild(LMsgHome);
	LMsgHome.addEventListener(LMouseEvent.MOUSE_DOWN,lookmsgzhu);
	
	var rect2=new LGraphics();              //添加发送键
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[245,485,36,36],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var btsend=new LButton(rect2,bigrect2);
	btsend.graphics.drawRect(0,"#000000",[245,485,36,36]);
	LMsgLayer.addChild(btsend);
	btsend.addEventListener(LMouseEvent.MOUSE_DOWN,SendYes);        //发送键
	
	var btadd=new LButton(new LGraphics,new LGraphics);           //添加使用常用语键
	btadd.graphics.drawRect(0,"#000000",[25,478,34,36]);
	LMsgLayer.addChild(btadd);
	btadd.addEventListener(LMouseEvent.MOUSE_DOWN,tip);
}
function lookmsgfan()
{ 
  LMsgLayer.die();                //清空查看短信层
  LMsgLayer.removeAllChild();
  removeChild(LMsgLayer);
  messageMain();
}
function lookmsgzhu()                //回到主guide界面
{
	LMsgLayer.die();
	LMsgLayer.removeAllChild();
	removeChild(LMsgLayer);
	dot.x=-231;
	guide();
}
function SendYes()
{
	if(InputText.text=="")//没有输入进入提示
	  {
		 var Tip=new LTextField();     //提示的内容
		 Tip.x=85;
	     Tip.y=250;
	     Tip.size=14;
	     Tip.color="#000000";
	     Tip.text="输入不能为空！";
	     LMsgLayer.addChild(Tip);
		 setTimeout(function(){LMsgLayer.removeChild(Tip);},1500);//提示过1.5秒后消失
	   }
   else                                                           //有输入内容
	   {  
	      var success=new LBitmap(new LBitmapData(imglist["MsgSuccess"]));   
	      success.x=73;
	      success.y=250;
	      LMsgLayer.addChild(success);      //添加发送成功图
		  
		  MessageId++;                      //短信增加一个
	      LNumber[MessageId]=Lnum.text;      //保存短信号码
	      Text[MessageId]=InputText.text;     //保存短信内容
		  Time[MessageId]=new Date();        //记录一个新的时间
	      setTimeout(function(){
			    LMsgLayer.die();                   //清空
	            LMsgLayer.removeAllChild();
	            removeChild(LMsgLayer);
	            messageMain();                 //1.5秒后回到短信主函数	
			  },1500);
		}     
}
function tip()                                //添加常用语函数
{
	TipLayer=new LSprite();
	LMsgLayer.addChild(TipLayer);
	TipLayer.graphics.drawRect(0,"#000000",[25,160,157,310]);
	
	var downMenu=new LBitmap(new LBitmapData(imglist["downMenu"]));
	downMenu.x=25;
	downMenu.y=160;
	TipLayer.addChild(downMenu);      //添加常用语

    var rect=new LGraphics();
    bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#000000",[25,197,157,39],true,"#97f2c8");
	bigrect1.alpha=0.3;
	var copy1=new LButton(rect,bigrect1);
	copy1.graphics.drawRect(0,"#000000",[25,197,157,39]);
	TipLayer.addChild(copy1);
	copy1.addEventListener(LMouseEvent.MOUSE_DOWN,function(){InputText.text="你在哪里？"; TipClose();});
	
    var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[25, 236,157,39],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var copy2=new LButton(rect,bigrect2);
	copy2.graphics.drawRect(0,"#35ee99",[25,236,157,39]);
	TipLayer.addChild(copy2);
	copy2.addEventListener(LMouseEvent.MOUSE_DOWN,function(){InputText.text="你在做什么？";TipClose();}); 
	
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#35ee99",[25, 275,157,39],true,"#97f2c8");
	bigrect3.alpha=0.3;
	var copy3=new LButton(rect,bigrect3);
	copy3.graphics.drawRect(0,"#35ee99",[25,275,157,39]);
	TipLayer.addChild(copy3);
	copy3.addEventListener(LMouseEvent.MOUSE_DOWN,function(){InputText.text="急！请速回电。";TipClose();}); 
	
	var bigrect4=new LSprite();
	bigrect4.graphics.drawRect(0,"#35ee99",[25, 313,157,39],true,"#97f2c8");
	bigrect4.alpha=0.3;
	var copy4=new LButton(new LGraphics(),bigrect4);
	copy4.graphics.drawRect(0,"#35ee99",[25,313,157,39]);
	TipLayer.addChild(copy4);
	copy4.addEventListener(LMouseEvent.MOUSE_DOWN,function(){InputText.text="抱歉，正在开会。";TipClose();}); 
	
	var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#35ee99",[25, 352,157,39],true,"#97f2c8");
	bigrect5.alpha=0.3;
	var copy5=new LButton(new LGraphics(),bigrect5);
	copy5.graphics.drawRect(0,"#35ee99",[25,352,157,39]);
	TipLayer.addChild(copy5);
	copy5.addEventListener(LMouseEvent.MOUSE_DOWN,function(){InputText.text="待会儿再回你电话。";TipClose();}); 
	
	var bigrect6=new LSprite();
	bigrect6.graphics.drawRect(0,"#35ee99",[25, 390,157,39],true,"#97f2c8");
	bigrect6.alpha=0.3;
	var copy6=new LButton(new LGraphics(),bigrect6);
	copy6.graphics.drawRect(0,"#35ee99",[25,390,157,39]);
	TipLayer.addChild(copy6);
	copy6.addEventListener(LMouseEvent.MOUSE_DOWN,function(){InputText.text="我没事，别担心。";TipClose();}); 
	
	var bigrect7=new LSprite();
	bigrect7.graphics.drawRect(0,"#35ee99",[25, 430,157,39],true,"#97f2c8");
	bigrect7.alpha=0.3;
	var copy7=new LButton(new LGraphics(),bigrect7);
	copy7.graphics.drawRect(0,"#35ee99",[25,430,157,39]);
	TipLayer.addChild(copy7);
	copy7.addEventListener(LMouseEvent.MOUSE_DOWN,function(){InputText.text="正在回家的路上。";TipClose();}); 
	
	var closetip=new LButton(rect,rect);                            //添加常用语关闭按键
	closetip.graphics.drawRect(0,"#000000",[25,478,34,36]);
	TipLayer.addChild(closetip);
	closetip.addEventListener(LMouseEvent.MOUSE_DOWN,TipClose);
	
}
function TipClose()
{
	TipLayer.die();
	TipLayer.removeAllChild();
	LMsgLayer.removeChild(TipLayer);
}