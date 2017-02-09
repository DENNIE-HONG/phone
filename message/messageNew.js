// JavaScript Document
var NMsgLayer;
var NTipLayer,AddnumLayer;
function messageNew()
{
	 
	NMsgLayer=new LSprite();
	addChild(NMsgLayer);
	NMsgLayer.graphics.drawRect(0,"#000000",[25,89,256,435]);
	
	var newMsg=new LBitmap(new LBitmapData(imglist["newMsg"]));
	newMsg.x=25;
	newMsg.y=89;
	NMsgLayer.addChild(newMsg);      //添加短信的背景图
	
	var inputLayer=new LSprite();
	inputLayer.graphics.drawRect(0,"#35ee99",[0,-7,196,22]);
	
	var inputLayer1=new LSprite();
	inputLayer1.graphics.drawRect(0,"#35ee99",[0,-7,178,26]);
	
	sendname=new LTextField();     //输入发送号码
	sendname.x=33;
	sendname.y=142;
	sendname.size=14;
	sendname.color="#252424";
	sendname.setType(LTextFieldType.INPUT,inputLayer);
	NMsgLayer.addChild(sendname);
	
	sendcontent=new LTextField();     //输入发送内容
	sendcontent.x=59;
	sendcontent.y=491;
	sendcontent.size=14;
	sendcontent.color="#252424";
	sendcontent.setType(LTextFieldType.INPUT,inputLayer1);
	NMsgLayer.addChild(sendcontent);
	
	var rect=new LGraphics();             
	var bigrect2=new LSprite();    
	bigrect2.graphics.drawRect(0,"#35ee99",[245,485,36,36],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var newsend=new LButton(rect,bigrect2);       //添加发送键
	newsend.graphics.drawRect(0,"#000000",[245,485,36,36]);
	NMsgLayer.addChild(newsend);
	newsend.addEventListener(LMouseEvent.MOUSE_DOWN,SendNew);        //发送键
	
	var bigrect3=new LSprite();    
	bigrect3.graphics.drawRect(0,"#35ee99",[25,478,28,36],true,"#97f2c8"); //添加常用语键
	bigrect3.alpha=0.3;
	var btadd=new LButton(rect,bigrect3);
	btadd.graphics.drawRect(0,"#000000",[25,478,28,36]);
	NMsgLayer.addChild(btadd);
	btadd.addEventListener(LMouseEvent.MOUSE_DOWN,NewTip);
	
	var bigrect4=new LSprite();    
	bigrect4.graphics.drawRect(0,"#35ee99",[235,131,46,36],true,"#97f2c8"); //添加常用语键
	bigrect4.alpha=0.3;
	var addnum=new LButton(rect,bigrect4);
	addnum.graphics.drawRect(0,"#000000",[235,131,46,36]);
	NMsgLayer.addChild(addnum);
	addnum.addEventListener(LMouseEvent.MOUSE_DOWN,AddNum);
	                                         
	var bigrect=new LSprite();                     //添加返回键
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");
	bigrect.alpha=0.3;
	var NMsgBack=new LButton(rect,bigrect);
	NMsgBack.graphics.drawRect(0,"#35ee99",[238, 541,40,40]);
	NMsgLayer.addChild(NMsgBack);
	NMsgBack.addEventListener(LMouseEvent.MOUSE_DOWN,newmsgfan);
	                                                    //添加home键
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");
	bigrect1.alpha=0.3;
	var NMsgHome=new LButton(rect,bigrect1);
	NMsgHome.graphics.drawRect(0,"#000000",[135,542,40,40]);
	NMsgLayer.addChild(NMsgHome);
	NMsgHome.addEventListener(LMouseEvent.MOUSE_DOWN,newmsgzhu);
	
	
}
function SendNew()
{
	if(sendname.text==""||sendcontent.text=="")//没有输入进入提示
	  {
		 var Tip=new LTextField();     //提示的内容
		 Tip.x=85;
	     Tip.y=250;
	     Tip.size=14;
	     Tip.color="#000000";
	     Tip.text="输入不能为空！";
	     NMsgLayer.addChild(Tip);
		 setTimeout(function(){NMsgLayer.removeChild(Tip);},1500);//提示过1.5秒后消失
	   }
   else                                                           //有输入内容
	   {  
	      var success=new LBitmap(new LBitmapData(imglist["MsgSuccess"]));   
	      success.x=73;
	      success.y=250;
	      NMsgLayer.addChild(success);      //添加发送成功图
		  
		  MessageId++;                      //短信增加一个
	      LNumber[MessageId]=sendname.text;      //保存短信号码
	      Text[MessageId]=sendcontent.text;     //保存短信内容
		  Time[MessageId]=new Date();        //记录一个新的时间
	      setTimeout(function(){
			    NMsgLayer.die();                   //清空
	            NMsgLayer.removeAllChild();
	            removeChild(NMsgLayer);
	            messageMain();                 //1.5秒后回到短信主函数	
			  },1500);
		}     
}
function NewTip()
{
	NTipLayer=new LSprite();
	NMsgLayer.addChild(NTipLayer);
	NTipLayer.graphics.drawRect(0,"#000000",[25,160,157,310]);
	
	var downMenu=new LBitmap(new LBitmapData(imglist["downMenu"]));
	downMenu.x=25;
	downMenu.y=160;
    NTipLayer.addChild(downMenu);      //添加常用语
    var rect=new LGraphics();
    bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#000000",[25,197,157,39],true,"#97f2c8");
	bigrect1.alpha=0.3;
	var newcopy1=new LButton(rect,bigrect1);
	newcopy1.graphics.drawRect(0,"#000000",[25,197,157,39]);
	NTipLayer.addChild(newcopy1);
	newcopy1.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendcontent.text="你在哪里？"; NTipClose();});
	
    var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[25, 236,157,39],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var newcopy2=new LButton(rect,bigrect2);
	newcopy2.graphics.drawRect(0,"#35ee99",[25,236,157,39]);
	NTipLayer.addChild(newcopy2);
	newcopy2.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendcontent.text="你在做什么？";NTipClose();}); 
	
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#35ee99",[25, 275,157,39],true,"#97f2c8");
	bigrect3.alpha=0.3;
	var newcopy3=new LButton(rect,bigrect3);
	newcopy3.graphics.drawRect(0,"#35ee99",[25,275,157,39]);
	NTipLayer.addChild(newcopy3);
	newcopy3.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendcontent.text="急！请速回电。";NTipClose();}); 
	
	var bigrect4=new LSprite();
	bigrect4.graphics.drawRect(0,"#35ee99",[25, 313,157,39],true,"#97f2c8");
	bigrect4.alpha=0.3;
	var newcopy4=new LButton(rect,bigrect4);
	newcopy4.graphics.drawRect(0,"#35ee99",[25,313,157,39]);
	NTipLayer.addChild(newcopy4);
	newcopy4.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendcontent.text="抱歉，正在开会。";NTipClose();}); 
	
	var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#35ee99",[25, 352,157,39],true,"#97f2c8");
	bigrect5.alpha=0.3;
	var newcopy5=new LButton(rect,bigrect5);
	newcopy5.graphics.drawRect(0,"#35ee99",[25,352,157,39]);
	NTipLayer.addChild(newcopy5);
	newcopy5.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendcontent.text="待会儿再回你电话。";NTipClose();}); 
	
	var bigrect6=new LSprite();
	bigrect6.graphics.drawRect(0,"#35ee99",[25, 390,157,39],true,"#97f2c8");
	bigrect6.alpha=0.3;
	var newcopy6=new LButton(rect,bigrect6);
	newcopy6.graphics.drawRect(0,"#35ee99",[25,390,157,39]);
	NTipLayer.addChild(newcopy6);
	newcopy6.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendcontent.text="我没事，别担心。";NTipClose();}); 
	
	var bigrect7=new LSprite();
	bigrect7.graphics.drawRect(0,"#35ee99",[25, 430,157,39],true,"#97f2c8");
	bigrect7.alpha=0.3;
	var newcopy7=new LButton(rect,bigrect7);
	newcopy7.graphics.drawRect(0,"#35ee99",[25,430,157,39]);
	NTipLayer.addChild(newcopy7);
	newcopy7.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendcontent.text="正在回家的路上。";NTipClose();}); 
	
	var closetip=new LButton(rect,new LGraphics);                            //添加常用语关闭按键
	closetip.graphics.drawRect(0,"#000000",[25,478,34,36]);
	NTipLayer.addChild(closetip);
	closetip.addEventListener(LMouseEvent.MOUSE_DOWN,NTipClose);
	
}
function NTipClose()
{
	NTipLayer.die();
	NTipLayer.removeAllChild();
	NMsgLayer.removeChild(NTipLayer);
}
function AddNum()
 { 
    AddnumLayer=new LSprite();
	NMsgLayer.addChild(AddnumLayer);
	AddnumLayer.graphics.drawRect(1,"#000000",[25,229,193,153]);
	
	
    var phonebook=new LBitmap(new LBitmapData(imglist["phonebookk"]));
	phonebook.x=25;
	phonebook.y=89;
	AddnumLayer.addChild(phonebook);      //添加短信的背景图
	
	var rect=new LGraphics();
    var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#000000",[76,229,193,51],true,"#97f2c8");
	bigrect1.alpha=0.3;
	var people1=new LButton(rect,bigrect1);
	people1.graphics.drawRect(0,"#ffffff",[76,229,193,51]);              //添加查看明信片键
	AddnumLayer.addChild(people1);
	people1.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendname.text="李四(15210961111)";closeadd();});
	
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#000000",[76,282,193,51],true,"#97f2c8");
	bigrect2.alpha=0.3;
	people2=new LButton(rect,bigrect2);
	people2.graphics.drawRect(0,"#ffffff",[76,282,193,51]);              //添加查看明信片键
	AddnumLayer.addChild(people2);
	people2.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendname.text="王文(15210965222)";closeadd();});

    bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#000000",[76,335,193,51],true,"#97f2c8");
	bigrect3.alpha=0.3;
	people3=new LButton(rect,bigrect3);
	people3.graphics.drawRect(0,"#ffffff",[76,335,193,51]);              //添加查看明信片键
	AddnumLayer.addChild(people3);
	people3.addEventListener(LMouseEvent.MOUSE_DOWN,function(){sendname.text="张三(15210966333)";closeadd();});
}
function closeadd()
{
	AddnumLayer.die();
	AddnumLayer.removeAllChild();
	NMsgLayer.removeChild(AddnumLayer);
}
function newmsgfan()
{ 
  NMsgLayer.die();                //清空查看短信层
  NMsgLayer.removeAllChild();
  removeChild(NMsgLayer);
  messageMain();
}
function newmsgzhu()                //回到主guide界面
{
	NMsgLayer.die();
	NMsgLayer.removeAllChild();
	removeChild(NMsgLayer);
	dot.x=-231;
	guide();
}