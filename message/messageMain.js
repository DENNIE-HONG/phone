// JavaScript Document
var MsgLayer;   //声明短信层
var MessageId=0;//声明添加短信数量
var j;           //循环次数
function messageMain()
{
	MsgLayer=new LSprite();
	addChild(MsgLayer);
	MsgLayer.graphics.drawRect(0,"#000000",[25,89,256,435]);
	
	var msgList=new LBitmap(new LBitmapData(imglist["msgList"]));
	msgList.x=25;
	msgList.y=89;
	MsgLayer.addChild(msgList);      //添加短信的背景图
	
	number2=new LTextField();
	neirong=new LTextField();
	newtime=new LTextField();
    MessageUI();
	
	var rect1=new LGraphics();
	rect1.drawLine(0.8,"#727172", [25, 167, 25+256, 167]);
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#35ee99",[25+peopj.width,128,256- peopj.width,peopj.height],true,"#33b5e5");//画个透明框
	bigrect3.alpha=0.3;
	var btmessage=new LButton(rect1,bigrect3);
	btmessage.graphics.drawRect(0,"#ffffff",[25+peopj.width,128,256- peopj.width,peopj.height]);            //添加查看短信键
	MsgLayer.addChild(btmessage);
	btmessage.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		     number2.text="10086";
			 neirong.text="welcome";
			  if(date.getMinutes()<10)
			       {
					   newtime.text="发送时间  "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":0"
				     +date.getMinutes()+":"+date.getSeconds();
				   }
			   if(date.getMinutes()>10)
			       { newtime.text="发送时间  "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"
				     +date.getMinutes()+":"+date.getSeconds();
				  }
			 closeMain(); 
		   });
		   
    if(MessageId>=1)
       {
		rect2=new LGraphics();
		rect2.drawLine(0.8,"#727172", [25, 167+1*peopj.height,25+256, 167+1*peopj.height]);
		var bigrect4=new LSprite();
		bigrect4.graphics.drawRect(0,"#35ee99",[25+peopj.width,128+1*peopj.height,256- peopj.width,peopj.height],true,"#33b5e5");//画个透明框
		bigrect4.alpha=0.3;
		var btmessage1=new LButton(rect2,bigrect4);
		btmessage1.graphics.drawRect(0,"#ffffff",[25+peopj.width,128+1*peopj.height,256- peopj.width,peopj.height]);            //添加查看短信键
		MsgLayer.addChild(btmessage1);
		btmessage1.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		  number2.text=LNumber[1];
		  neirong.text=Text[1];
		  if(Time[1].getMinutes()<10)
			       {
					   newtime.text="发送时间  "+Time[1].getFullYear()+"-"+(Time[1].getMonth()+1)+"-"+Time[1].getDate()+" "+Time[1].getHours()+":0"
				     +Time[1].getMinutes()+":"+Time[1].getSeconds();
				   }
			   if(Time[1].getMinutes()>10)
			       { newtime.text="发送时间  "+Time[1].getFullYear()+"-"+(Time[1].getMonth()+1)+"-"+Time[1].getDate()+" "+Time[1].getHours()+":"
				     +Time[1].getMinutes()+":"+Time[1].getSeconds();
				  }
		  closeMain();
		   
		       });  
		}
	if(MessageId>=2)
       {
		rect3=new LGraphics();
		rect3.drawLine(0.8,"#727172", [25, 167+2*peopj.height,25+256, 167+2*peopj.height]);
		var bigrect5=new LSprite();
		bigrect5.graphics.drawRect(0,"#35ee99",[25+peopj.width,128+2*peopj.height,256- peopj.width,peopj.height],true,"#33b5e5");//画个透明框
		bigrect5.alpha=0.3;
		var btmessage2=new LButton(rect3,bigrect5);
		btmessage2.graphics.drawRect(0,"#ffffff",[25+peopj.width,128+2*peopj.height,256- peopj.width,peopj.height]);            //添加查看短信键
		MsgLayer.addChild(btmessage2);
		btmessage2.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		  number2.text=LNumber[2];
		  neirong.text=Text[2];
		  if(Time[2].getMinutes()<10)
			       {
					   newtime.text="发送时间  "+Time[2].getFullYear()+"-"+(Time[2].getMonth()+1)+"-"+Time[2].getDate()+" "+Time[2].getHours()+":0"
				     +Time[2].getMinutes()+":"+Time[2].getSeconds();
				   }
			   if(Time[2].getMinutes()>10)
			       { newtime.text="发送时间  "+Time[2].getFullYear()+"-"+(Time[2].getMonth()+1)+"-"+Time[2].getDate()+" "+Time[2].getHours()+":"
				     +Time[2].getMinutes()+":"+Time[2].getSeconds();
				  }
		  closeMain();
		   
		       });  
		}	   
	   
	var rect=new LGraphics();
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");
	bigrect.alpha=0.3;
	var MsgBack=new LButton(rect,bigrect);
	MsgBack.graphics.drawRect(0,"#35ee99",[238, 541,40,40]);
	MsgLayer.addChild(MsgBack);
	MsgBack.addEventListener(LMouseEvent.MOUSE_DOWN,msgfan);
	                                 //home键
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");
	bigrect1.alpha=0.3;
	var MsgHome=new LButton(rect,bigrect1);
	MsgHome.graphics.drawRect(0,"#000000",[135,542,40,40]);
	MsgLayer.addChild(MsgHome);
	MsgHome.addEventListener(LMouseEvent.MOUSE_DOWN,msgzhu);
                                          //编写短信键
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[25,487,53,37],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var Addmsg=new LButton(rect,bigrect2);
	Addmsg.graphics.drawRect(0,"#000000",[25,487,53,37]);
	MsgLayer.addChild(Addmsg);
	Addmsg.addEventListener(LMouseEvent.MOUSE_DOWN,AddMessage);
	

	
} 


function MessageUI()         //新加信息
{   
	
	for(j=0;j<=MessageId;j++)
	{  peopj = new LBitmap(new LBitmapData(imglist["icon"]));  
	   peopj.x = 25;
	   peopj.y = 128+j*peopj.height;
	   MsgLayer.addChild(peopj);     //新加短信图标
	   
	   MNumj=new LTextField();     //号码初始化
	   MNumj.x=75;
	   MNumj.y=135+j*peopj.height;
	   MNumj.size=13;
	   MNumj.color="#252424";
	   if(j==0) MNumj.text="10086";
	   if(j>0)MNumj.text=LNumber[j];       //号码是新编辑的号码
	   MsgLayer.addChild(MNumj);
	 
	 
	   
	   MTextj=new LTextField();     //新加内容初始化
	   MTextj.x=75;
	   MTextj.y=152+j*peopj.height;
	   MTextj.size=13;
	   MTextj.color="#727172";
	   if(j==0) MTextj.text="welcome";
	   if(j>0)
	      {  
		     MTextj.text=Text[j];         //文本是刚编辑的内容
			 if( MTextj.text.length>10)   //判断长度是否大于10
			 {  
				 MTextj.text= MTextj.text.substr(0,10);//如果长度大于10,只显示10个字符大小
			 }
		  }
	   MsgLayer.addChild(MTextj);
	   
	   msgtimej=new LTextField();    //时间文本初始化
	   msgtimej.x=225;
	   msgtimej.y=152+j*peopj.height;
	   msgtimej.size=13;
	   msgtimej.color="#727172";
	   if(j==0) 
	        { if(date.getMinutes()<10) {msgtimej.text=date.getHours()+":0"+date.getMinutes();} //显示时间的格式是00:00
	          if(date.getMinutes()>10) {msgtimej.text=date.getHours()+":"+date.getMinutes();}
			}
	   if(j>0)
	        {         //存取现在的时间
	          if(Time[j].getMinutes()<10) {msgtimej.text=Time[j].getHours()+":0"+Time[j].getMinutes();} //显示时间的格式是00:00
	          if(Time[j].getMinutes()>10) {msgtimej.text=Time[j].getHours()+":"+Time[j].getMinutes();}
			}
       MsgLayer.addChild(msgtimej);     //显示时间
	
	 }
	
}
function closeMain()
{  
	 MsgLayer.die();                //清空短信层
     MsgLayer.removeAllChild();
     removeChild(MsgLayer);	
	 LookMessage();
}
function AddMessage()
{
	 MsgLayer.die();                //清空短信层
     MsgLayer.removeAllChild();
     removeChild(MsgLayer);
	 messageNew();
}
function msgfan()
{ 
  MsgLayer.die();                //清空短信层
  MsgLayer.removeAllChild();
  removeChild(MsgLayer);
  if(dot.x==-231)guide();
  if(dot.x==25)guideleft();
  if(dot.x==-490)guideright();
}
function msgzhu()                //回到主guide界面
{
	MsgLayer.die();
	MsgLayer.removeAllChild();
	removeChild(MsgLayer);
	dot.x=-231;
	guide();
}