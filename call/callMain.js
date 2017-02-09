// JavaScript Document for call
var callLayer;//声明打电话背景层
var numberInput;//声明号码
var bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9,bt0,btjing,btxing,btdelete,btcall;//声明数字按键
function call()
{   
    
	callLayer=new LSprite();
	addChild(callLayer);
	callLayer.graphics.drawRect(0,"#ffffff",[25, 89,256,435]);//添加层
		
	var call = new LBitmap(new LBitmapData(imglist["call"]));  //背景图
	call.x = 25;
	call.y = 89;
	callLayer.addChild(call);
	
    numberInput=new LTextField();     //输入号码初始化
	numberInput.x=243;
	numberInput.y=241;
	numberInput.size=26;
	numberInput.color="#ffffff";
	numberInput.textAlign="right";
	numberInput.text="";
	callLayer.addChild(numberInput);
	
   
    bt1=new LSprite();
	bt1.graphics.drawRect(0,"#35ee99",[25, 285,85,44]);//画个框
	callLayer.addChild(bt1);                                 //添加拨号“1”
	bt1.addEventListener(LMouseEvent.MOUSE_DOWN,one);  
	
	bt2=new LSprite();
	bt2.graphics.drawRect(0,"#35ee99",[110, 285,85,44]);//画个框
	callLayer.addChild(bt2);                                 //添加拨号“2”
	bt2.addEventListener(LMouseEvent.MOUSE_DOWN,two);    
	
	bt3=new LSprite();
	bt3.graphics.drawRect(0,"#35ee99",[195, 285,85,44]);//画个框
	callLayer.addChild(bt3);                                 //添加拨号“3”
	bt3.addEventListener(LMouseEvent.MOUSE_DOWN,three); 
	
	bt4=new LSprite();
	bt4.graphics.drawRect(0,"#35ee99",[25,329,85,44]);//画个框
	callLayer.addChild(bt4);                                 //添加拨号“4”
	bt4.addEventListener(LMouseEvent.MOUSE_DOWN,four); 
	
	bt5=new LSprite();
	bt5.graphics.drawRect(0,"#35ee99",[110,329,85,44]);//画个框
	callLayer.addChild(bt5);                                 //添加拨号“5”
	bt5.addEventListener(LMouseEvent.MOUSE_DOWN,five);
	
	bt6=new LSprite();
	bt6.graphics.drawRect(0,"#35ee99",[195,329,85,44]);//画个框
	callLayer.addChild(bt6);                                 //添加拨号“6”
	bt6.addEventListener(LMouseEvent.MOUSE_DOWN,six);
	
	bt7=new LSprite();
	bt7.graphics.drawRect(0,"#35ee99",[25,373,85,44]);//画个框
	callLayer.addChild(bt7);                                 //添加拨号“7”
	bt7.addEventListener(LMouseEvent.MOUSE_DOWN,seven);
	
	bt8=new LSprite();
	bt8.graphics.drawRect(0,"#35ee99",[110,373,85,44]);//画个框
	callLayer.addChild(bt8);                                 //添加拨号“8”
	bt8.addEventListener(LMouseEvent.MOUSE_DOWN,eight);
	
	bt9=new LSprite();
	bt9.graphics.drawRect(0,"#35ee99",[195,373,85,44]);//画个框
	callLayer.addChild(bt9);                                 //添加拨号“9”
	bt9.addEventListener(LMouseEvent.MOUSE_DOWN,nine);
	
	btxing=new LSprite();
	btxing.graphics.drawRect(0,"#35ee99",[25,417,85,44]) ;//画个框
	callLayer.addChild(btxing);                                 //添加拨号“*”
	btxing.addEventListener(LMouseEvent.MOUSE_DOWN,xing);
	
	bt0=new LSprite();
	bt0.graphics.drawRect(0,"#35ee99",[110,417,85,44]) ;//画个框
	callLayer.addChild(bt0);                                 //添加拨号“0”
	bt0.addEventListener(LMouseEvent.MOUSE_DOWN,zero);
	
	btjing=new LSprite();
	btjing.graphics.drawRect(0,"#35ee99",[195,417,85,44]) ;//画个框
	callLayer.addChild(btjing);                                 //添加拨号“#”
	btjing.addEventListener(LMouseEvent.MOUSE_DOWN,jing);
	
	btdelete=new LSprite();
	btdelete.graphics.drawRect(0,"#35ee99",[235,241,46,38]) ;//画个框
	callLayer.addChild(btdelete);                                 //添加删除键
	btdelete.addEventListener(LMouseEvent.MOUSE_DOWN,delNumber);
	btcall=new LSprite();
	btcall.graphics.drawRect(0,"#35ee99",[89,481,127,41]) ;//画个框
	callLayer.addChild(btcall);                                 //添加拨打键
	btcall.addEventListener(LMouseEvent.MOUSE_DOWN,calling);
	
	var rect=new LGraphics();
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[225, 479,55,45],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var callbook=new LButton(rect,bigrect2);
	callbook.graphics.drawRect(0,"#ffffff",[225, 479,55,45]);       //添加联系人键
	callLayer.addChild(callbook);
	callbook.addEventListener(LMouseEvent.MOUSE_DOWN,CallBook);
	
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#35ee99",[25,410+69,55,45],true,"#97f2c8");
	bigrect3.alpha=0.3;
	var callrecord=new LButton(rect,bigrect3);
	callrecord.graphics.drawRect(0,"#ffffff",[25,410+69,55,45]);       //添加通话记录键
	callLayer.addChild(callrecord);
	callrecord.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		 callLayer.die();                   //清空call层
		 callLayer.removeAllChild();
		 removeChild(callLayer);
		 callRecordMain();
		});
	
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	var callback=new LButton(rect,bigrect);
	callback.graphics.drawRect(0,"#ffffff",[238, 541,40,40]);       //添加返回键
	callLayer.addChild(callback);
	callback.addEventListener(LMouseEvent.MOUSE_DOWN,callfan);
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");//画个微透明大框
	bigrect1.alpha=0.3;
	var callhome=new LButton(rect,bigrect1);
	callLayer.addChild(callhome);
	callhome.graphics.drawRect(0,"#ffffff",[135, 542, 40, 40]);//添加搜索home键
	callhome.addEventListener(LMouseEvent.MOUSE_DOWN,callzhu);
	
	              
}
function calling()
{if(numberInput.text!="")call1();}

function CallBook()
{
	callLayer.die();                   //清空call层
	callLayer.removeAllChild();
	removeChild(callLayer);
	phoneBookMain();                  //调用联系人
}

function callfan()
{   callLayer.die();                   //清空call层
	callLayer.removeAllChild();
	removeChild(callLayer);
	if(dot.x==-231) guide();
	if(dot.x==25)guideleft();
	if(dot.x==-490)guideright();
}
function callzhu()
{   callLayer.die();                   //清空call层
	callLayer.removeAllChild();
	removeChild(callLayer);
	dot.x=-231;
	guide();
} 

function one()   {if(numberInput.text.length<11) numberInput.text+="1";} //限制号码长度不超过11位
function two()   {if(numberInput.text.length<11) numberInput.text+="2";}
function three() {if(numberInput.text.length<11) numberInput.text+="3";}
function four()  {if(numberInput.text.length<11) numberInput.text+="4";}
function five()  {if(numberInput.text.length<11) numberInput.text+="5";}
function six()   {if(numberInput.text.length<11) numberInput.text+="6";}
function seven() {if(numberInput.text.length<11) numberInput.text+="7";}
function eight() {if(numberInput.text.length<11) numberInput.text+="8";}
function nine()  {if(numberInput.text.length<11) numberInput.text+="9";}
function xing()  {if(numberInput.text.length<11) numberInput.text+="*";}
function zero()  {if(numberInput.text.length<11) numberInput.text+="0";}
function jing()  {if(numberInput.text.length<11) numberInput.text+="#";}

function delNumber()                     //删除号码
{numberInput.text = numberInput.text.substr(0, numberInput.text.length-1); }