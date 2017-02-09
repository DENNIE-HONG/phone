// JavaScript Document for 联系人
var PBLayer;//声明联系人背景层
var i;       //调用函数的次数
var CardId=0;//声明添加联系人数
var mingzi;  //名称
var TNumi;   //号码（其他模块需要调用）
function phoneBookMain()
{
	 
	PBLayer=new LSprite();
	addChild(PBLayer);
	PBLayer.graphics.drawRect(0,"#ffffff",[25, 89,256,435]);//添加层
		
	var phonebookk = new LBitmap(new LBitmapData(imglist["phonebookk"]));  
	phonebookk.x = 25;
	phonebookk.y = 89;
	PBLayer.addChild(phonebookk);      //添加背景图片
	
	mingzi=new LTextField();
    haoma=new LTextField();
	phoneBookUI();                 //调用联系人明信片
	var bar = new LBitmap(new LBitmapData(imglist["pbook3"]));  
	bar.x = 25;
	bar.y = 486;
	PBLayer.addChild(bar);         //避免明信片出框
	var shell=bitmap.clone();
	PBLayer.addChild(shell); 
	
	var rect=new LGraphics();
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[76,229,193,51],true,"#33b5e5");//画个透明框
	bigrect2.alpha=0.3;
	PB1=new LButton(rect,bigrect2);
	PB1.graphics.drawRect(0,"#ffffff",[76,229,193,51]);              //添加查看明信片键
	PBLayer.addChild(PB1);
	PB1.addEventListener(LMouseEvent.MOUSE_DOWN,infor1);
	
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#35ee99",[76,282,193,51],true,"#33b5e5");//画个透明框
	bigrect3.alpha=0.3;
	PB2=new LButton(rect,bigrect3);
	PB2.graphics.drawRect(0,"#ffffff",[76,282,193,51]);              //添加查看明信片键
	PBLayer.addChild(PB2);
	PB2.addEventListener(LMouseEvent.MOUSE_DOWN,infor2);

	var bigrect4=new LSprite();
	bigrect4.graphics.drawRect(0,"#35ee99",[76,335,193,51],true,"#33b5e5");//画个透明框
	bigrect4.alpha=0.3;
	PB3=new LButton(rect,bigrect4);
	PB3.graphics.drawRect(0,"#ffffff",[76,335,193,51]);              //添加查看明信片键
	PBLayer.addChild(PB3);
	PB3.addEventListener(LMouseEvent.MOUSE_DOWN,infor3);
	
	var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#35ee99",[225,486,55,36],true,"#33b5e5");//画个透明框
	bigrect5.alpha=0.3;
	btadd=new LButton(rect,bigrect5);
	btadd.graphics.drawRect(0,"#ffffff",[225,486,55,36]);              //添加联系人键
	PBLayer.addChild(btadd);
	btadd.addEventListener(LMouseEvent.MOUSE_DOWN,PhoneBook3);
	
    if(CardId>=1)
	   {
		   var bigrect6=new LSprite();
		   bigrect6.graphics.drawRect(0,"#35ee99",[76,335+1*53,193,51],true,"#33b5e5");//画个透明框
		   bigrect6.alpha=0.3;
		   var PB4=new LButton(rect,bigrect6);
		   PB4.graphics.drawRect(0,"#ffffff",[76,335+1*53,193,51]);              //添加查看明信片键
		   PBLayer.addChild(PB4);
		   PB4.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			    mingzi.text=NAME[1];
				haoma.text=NUMBER[1];
				phoneBook1();
			   });
	   }
	   
	   if(CardId>=2)
	   {
		   var bigrect7=new LSprite();
		   bigrect7.graphics.drawRect(0,"#35ee99",[76,335+2*53,193,51],true,"#33b5e5");//画个透明框
		   bigrect7.alpha=0.3;
		   var PB5=new LButton(rect,bigrect7);
		   PB5.graphics.drawRect(0,"#ffffff",[76,335+2*53,193,51]);              //添加查看明信片键
		   PBLayer.addChild(PB5);
		   PB5.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			    mingzi.text=NAME[2];
				haoma.text=NUMBER[2];
				phoneBook1();
			   });
	   } 
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");//画个大框
	bigrect.alpha=0.3;
	PBback=new LButton(rect,bigrect);
	PBback.graphics.drawRect(0,"#ffffff",[238, 541,40,40]);       //添加返回键
	PBLayer.addChild(PBback);
	PBback.addEventListener(LMouseEvent.MOUSE_DOWN,PBfan);
	
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");//画个微透明大框
	bigrect1.alpha=0.3;
	PBhome=new LButton(rect,bigrect1);
	PBLayer.addChild(PBhome);
	PBhome.graphics.drawRect(0,"#ffffff",[135, 542, 40, 40]);       //添加搜索home键
	PBhome.addEventListener(LMouseEvent.MOUSE_DOWN,PBzhu);
	
	
}
function PhoneBook3()
{
	PBLayer.die();              //清空联系人层
    PBLayer.removeAllChild();   //删除联系人层所有对象
	removeChild(PBLayer);       //删除联系人层	
	phoneBook3();
}
function PBfan()
{   PBLayer.die();                   //清空联系人层
	PBLayer.removeAllChild();
	removeChild(PBLayer);
	if(dot.x==25) guideleft();
	if(dot.x==-231)guide();
	if(dot.x==-490)guideright();
}
function PBzhu()
{   PBLayer.die();                   //清空联系人层
	PBLayer.removeAllChild();
	removeChild(PBLayer);
	dot.x=-231;
	guide();
}

function phoneBookUI()         //新加联系人信息
{ 
	for(i=1;i<=CardId;i++)
	{  var peopi = new LBitmap(new LBitmapData(imglist["peop1"]));  
	   peopi.x = 25;
	   peopi.y = 335+i*53;
	   PBLayer.addChild(peopi);     //新加联系人图标
	
	   TNamei=new LTextField();     //新加名字初始化
	   TNamei.x=89;
	   TNamei.y=344+i*53;
	   TNamei.size=14;
	   TNamei.color="#252424";
	   TNamei.text=NAME[i];         //名字是刚编辑的名字
	   PBLayer.addChild(TNamei);
	
	   TNumi=new LTextField();     //号码初始化
	   TNumi.x=88;
	   TNumi.y=368+i*53;
	   TNumi.size=15;
	   TNumi.color="#252424";
	   TNumi.text=NUMBER[i];       //号码是新编辑的号码
	   PBLayer.addChild(TNumi);
	   
	  }
	
}

function infor1()
{ 
   mingzi.text="李四";
   haoma.text="15210961111";
   phoneBook1();
} 
function infor2()
{ 
   mingzi.text="王文";
   haoma.text="15210965222";
   phoneBook1();
} 
function infor3()
{ 
   mingzi.text="张三";
   haoma.text="15210966333";
	phoneBook1();
}
