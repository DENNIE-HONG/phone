// JavaScript Document for call1
var call1Layer;//声明打电话背景层
var btcalldown; //声明拨号关闭键
var seconds;    //声明秒
var minutes;    //声明分
var hours;      //声明小时
var id;
var calling1Number; //声明打电话显示的是号码或者人名
var j;              
function call1()
{
    callLayer.die();              //清空拨号层
    callLayer.removeAllChild();   //删除拨号层所有对象
	removeChild(callLayer);       //删除拨号层
	
	call1Layer=new LSprite();
	addChild(call1Layer);
	call1Layer.graphics.drawRect(0,"#ffffff",[25, 89,256,435]);//添加层
	
	var call1 = new LBitmap(new LBitmapData(imglist["call1"]));  
	call1.x = 25;
	call1.y = 89;
	call1Layer.addChild(call1);	
	
	calling1Number=new LTextField();      //显示拨打的号码
	calling1Number.x=35;
	calling1Number.y=110;
	calling1Number.size=18;
	calling1Number.color="#ffffff";
	calling1Number.text=numberInput.text; //显示的是输入的号码
	if(calling1Number.text==""){calling1Number.text=name1.text;} //从明信片里拨打显示的是人名
	for(j=1;j<=CardId;j++)         //循环函数：如果拨打的是新建立的联系人，显示人名
	    {
			if(calling1Number.text==NUMBER[j])calling1Number.text=NAME[j];
	    }
	if(calling1Number.text=="15210961111"){calling1Number.text="李四";} //输入的是旧联系人时，拨打显示人名
	if(calling1Number.text=="15210965222"){calling1Number.text="王文";}
	if(calling1Number.text=="15210966333"){calling1Number.text="张三";}
	call1Layer.addChild(calling1Number);
	
	callingtime=new LTextField();     //拨号计时初始化
	callingtime.x=112;
	callingtime.y=333;
	callingtime.size=19;
	callingtime.color="#000000";
	callingtime.text="";
	call1Layer.addChild(callingtime);
	
	btcalldown=new LSprite();
	btcalldown.graphics.drawRect(0,"#35ee99",[25, 407,256,57]);//画个框
	call1Layer.addChild(btcalldown);                                //添加拨号关闭
	btcalldown.addEventListener(LMouseEvent.MOUSE_DOWN,callDown);
	
	seconds=0;   //计时清零
    minutes=0;
    hours=0;
	id=setInterval(Calltime,1100);   //每1.1秒调用函数
	
	var rect=new LGraphics();
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[225, 474,50,50],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var call1book=new LButton(rect,bigrect2);
	call1book.graphics.drawRect(0,"#ffffff",[225, 474,50,50]);       //建立新联系人
	call1Layer.addChild(call1book);
	call1book.addEventListener(LMouseEvent.MOUSE_DOWN,Call1Book);
	
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	call1back=new LButton(rect,bigrect);
	call1back.graphics.drawRect(0,"#ffffff",[238, 541,40,40]);       //添加返回键
	call1Layer.addChild(call1back);
	call1back.addEventListener(LMouseEvent.MOUSE_DOWN,call1fan);
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");//画个微透明大框
	bigrect1.alpha=0.3;
	call1home=new LButton(rect,bigrect1);
	call1Layer.addChild(call1home);
	call1home.graphics.drawRect(0,"#ffffff",[135, 542, 40, 40]);//添加搜索home键
	call1home.addEventListener(LMouseEvent.MOUSE_DOWN,call1zhu);
	
	
}
function Calltime()           //计时函数
{
     seconds++;
     if(seconds==60)
       {
         minutes++;
         seconds=0;
        }
      if(minutes==60)
        {
        	hours++;
        	minutes=0;
        }
      if(hours<10)
        hoursString="0"+hours+":";
      else
        hoursString=hours+":";
   	  if(minutes<10)
    	minutesString="0"+minutes+":";
   	  else
    	minutesString=minutes+":";
   	  if(seconds<10)
    	secondsString="0"+seconds;
   	  else
    	secondsString=String(seconds);
    		
    callingtime.text=hoursString+minutesString+secondsString;          
}
function callDown()
{   clearInterval(id);                  //停止调用计时函数
    call1Layer.die();                   //清空cal1l层
	call1Layer.removeAllChild();
	removeChild(call1Layer);
	if(dot.x==-231) guide();
	if(dot.x==25)guideleft();
	if(dot.x==-490)guideright();
}
function Call1Book()
{
	clearInterval(id);                  //停止调用计时函数
    call1Layer.die();                   //清空cal1l层
	call1Layer.removeAllChild();
	removeChild(call1Layer);
	phoneBook3();

}
function call1fan()
{   clearInterval(id);                  //停止调用计时函数
    call1Layer.die();                   //清空call1层
	call1Layer.removeAllChild();
	removeChild(call1Layer);
	call();                             //返回call主界面
}
function call1zhu()  
{   clearInterval(id);                  //停止调用计时函数
    call1Layer.die();                   //清空call1层
	call1Layer.removeAllChild();
	removeChild(call1Layer);
	dot.x=-231;
	guide();                           //回到guide主界面
}