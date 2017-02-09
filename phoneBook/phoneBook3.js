// JavaScript Document
var PBALayer;//声明添加联系人背景层
var InputName,InputNum;
var NAME=new Array();   //记录联系人的名字数组
var NUMBER=new Array(); //记录联系人的号码数组
function phoneBook3()
{
	
	 
	PBALayer=new LSprite();
	addChild(PBALayer);
	PBALayer.graphics.drawRect(0,"#ffffff",[25, 89,256,435],true,"#000000");//添加层
	
	var pbook2 = new LBitmap(new LBitmapData(imglist["pbook2"]));  
	pbook2.x = 25;
	pbook2.y = 93;
	PBALayer.addChild(pbook2);      //添加背景图片
	
    var inputLayer = new LSprite();
	inputLayer.graphics.drawRect(1,"#33b5e5",[-3,-7, 140,30]);  //设置姓名的输入框的规格
	var input1Layer = new LSprite();
	input1Layer.graphics.drawRect(1,"#33b5e5",[-3,-7, 140,30]); //设置号码的输入框规格
	
	
	InputName=new LTextField();     //输入姓名
	InputName.x=35;
	InputName.y=190;
	InputName.size=14;
	InputName.color="#252424";
	InputName.setType(LTextFieldType.INPUT,inputLayer);
    PBALayer.addChild(InputName);
	
	InputNum=new LTextField();     //输入号码
	InputNum.x=35;
	InputNum.y=328;
	InputNum.size=14;
	InputNum.color="#252424";
	InputNum.setType(LTextFieldType.INPUT,input1Layer);
	PBALayer.addChild(InputNum);
	
	var rect=new LGraphics();
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#33b5e5",[25,93, 83,38],true,"#33b5e5");//画个大框
	bigrect2.alpha=0.3;
	var PBAdone=new LButton(rect,bigrect2);
	PBAdone.graphics.drawRect(0,"#ffffff",[25,93, 83,38]);        //添加完成键
	PBALayer.addChild(PBAdone);
	PBAdone.addEventListener(LMouseEvent.MOUSE_DOWN,saveNew);
	
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	var PBAback=new LButton(rect,bigrect);
	PBAback.graphics.drawRect(0,"#ffffff",[238, 541,40,40]);        //添加返回键
	PBALayer.addChild(PBAback);
	PBAback.addEventListener(LMouseEvent.MOUSE_DOWN,PBAfan);
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");//画个微透明大框
	bigrect1.alpha=0.3;
	var PBAhome=new LButton(rect,bigrect1);
	PBALayer.addChild(PBAhome);
	PBAhome.graphics.drawRect(0,"#ffffff",[135, 542, 40, 40]);       //添加home键
	PBAhome.addEventListener(LMouseEvent.MOUSE_DOWN,PBAzhu);
}
function PBAfan()
{  
    PBALayer.die();                   //清空添加联系人层
	PBALayer.removeAllChild();
	removeChild(PBALayer);
	phoneBookMain();
}
function PBAzhu()
{  
    PBALayer.die();                   //清空添加联系人层
	PBALayer.removeAllChild();
	removeChild(PBALayer);
	dot.x=-231;
	guide();
}
function saveNew()
{  if(InputName.text==""||InputNum.text=="")Tip();//没有输入进入提示
   else 
	   {  PBALayer.die();                   //清空联系人层
	      PBALayer.removeAllChild();
	      removeChild(PBALayer);
	      CardId++;                         //联系人增加一个
	      NAME[CardId]=InputName.text;      //保存联系人名字
	      NUMBER[CardId]=InputNum.text;     //保存联系人号码
	      phoneBookMain();                 //回到联系人主函数	
		}                 				
}
function Tip()
{
    var booktip=new LTextField();     //提示的内容
	booktip.x=85;
	booktip.y=288;
	booktip.size=14;
	booktip.color="#fc0415";
	booktip.text="输入不能为空！";
	PBALayer.addChild(booktip);
	setTimeout(function(){PBALayer.removeChild(booktip);},1000);//提示过1.5秒后消失
}