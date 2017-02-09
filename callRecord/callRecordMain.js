var CRecordLayer,RenderLayer;
function callRecordMain()
{
	CRecordLayer=new LSprite();
	addChild(CRecordLayer);
	CRecordLayer.graphics.drawRect(0,"#000000",[25,89,256,435]);
	
	var callrecordmain=new LBitmap(new LBitmapData(imglist["callrecordmain"]));
	callrecordmain.x=25;
	callrecordmain.y=89;
	CRecordLayer.addChild(callrecordmain);
	
	var rect=new LGraphics();                //添加返回键
	var bigrect=new LSprite();
	bigrect.graphics.drawRect(0,"#35ee99",[238, 541,40,40],true,"#97f2c8");
	bigrect.alpha=0.3;
	var Back=new LButton(rect,bigrect);
	Back.graphics.drawRect(0,"#35ee99",[238, 541,40,40]);
	CRecordLayer.addChild(Back);
	Back.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		 closeCRecord();
		 menue();
		});
	            
	var bigrect1=new LSprite();
	bigrect1.graphics.drawRect(0,"#35ee99",[135,542,40,40],true,"#97f2c8");
	bigrect1.alpha=0.3;
	var Home=new LButton(rect,bigrect1);           //添加home键
	Home.graphics.drawRect(0,"#000000",[135,542,40,40]);
	CRecordLayer.addChild(Home);
	Home.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		closeCRecord();
		guide();
		});
		
	var bigrect2=new LSprite();
	bigrect2.graphics.drawRect(0,"#35ee99",[25,60+69,256/4,35],true,"#97f2c8");
	bigrect2.alpha=0.3;
	var btmain=new LButton(rect,bigrect2);           //添加通话记录主键
	btmain.graphics.drawRect(0,"#000000",[25,60+69,256/4,35]);
	CRecordLayer.addChild(btmain);
	btmain.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		closeCRecord();
		callRecordMain();
		});
		
	var bigrect3=new LSprite();
	bigrect3.graphics.drawRect(0,"#35ee99",[25+64,60+69,256/4,35],true,"#97f2c8");
	bigrect3.alpha=0.3;
	var record1=new LButton(rect,bigrect3);           //添加拨入键
	record1.graphics.drawRect(0,"#000000",[25+64,60+69,256/4,35]);
	CRecordLayer.addChild(record1);
	record1.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		closeRecord();
		var callrecord1=new LBitmap(new LBitmapData(imglist["callrecord1"]));
	    callrecord1.x=25;
	    callrecord1.y=89;
     	CRecordLayer.addChild(callrecord1);
		
		});
	var bigrect4=new LSprite();
	bigrect4.graphics.drawRect(0,"#35ee99",[25+128,60+69,256/4,35],true,"#97f2c8");
	bigrect4.alpha=0.3;
	var record2=new LButton(rect,bigrect4);           //添加拨出键
	record2.graphics.drawRect(0,"#000000",[25+128,60+69,256/4,35]);
	CRecordLayer.addChild(record2);
	record2.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		var callrecord2=new LBitmap(new LBitmapData(imglist["callrecord2"]));
	    callrecord2.x=25;
	    callrecord2.y=89;
     	CRecordLayer.addChild(callrecord2);
		LookRecord();
		});
   
    var bigrect5=new LSprite();
	bigrect5.graphics.drawRect(0,"#35ee99",[25+192,60+69,256/4,35],true,"#97f2c8");
	bigrect5.alpha=0.3;
	var record3=new LButton(rect,bigrect5);           //添加未接号码键
	record3.graphics.drawRect(0,"#000000",[25+192,60+69,256/4,35]);
	CRecordLayer.addChild(record3);
	record3.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		closeRecord();
		var callrecord3=new LBitmap(new LBitmapData(imglist["callrecord3"]));
	    callrecord3.x=25;
	    callrecord3.y=89;
     	CRecordLayer.addChild(callrecord3);
		});
    var bigrect6=new LSprite();
	bigrect6.graphics.drawRect(0,"#35ee99",[25,20+69,90,35],true,"#97f2c8");
	bigrect6.alpha=0.3;
	var btcall=new LButton(rect,bigrect6);          
	btcall.graphics.drawRect(0,"#000000",[25,20+69,90,35]);
	CRecordLayer.addChild(btcall);
	btcall.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		closeCRecord();
		call();
		});
    
    LookRecord();
}
function closeCRecord()
{
	 CRecordLayer.die();                //清空通话记录层
     CRecordLayer.removeAllChild();
     removeChild(CRecordLayer);	
}
function LookRecord()
{
	RenderLayer=new LSprite();
	RenderLayer.graphics.drawRect(0,"#000000",[25,98+69,256,80]);
	CRecordLayer.addChild(RenderLayer);
	
	var list=new LBitmap(new LBitmapData(imglist["list"]));
	list.x=25;
	list.y=98+69;
	RenderLayer.addChild(list);
	
	var callName=new LTextField();
	callName.x=25+65;
	callName.y=167+25;
	callName.color="#090909";
	callName.text="紧急号码";
	callName.size=15;
	RenderLayer.addChild(callName);
	
	var callNum=new LTextField();
	callNum.x=25+65;
	callNum.y=167+45;
	callNum.color="#090909";
	callNum.text="110";
	callNum.size=11;
	RenderLayer.addChild(callNum);
	
	var callDate=new LTextField();
	callDate.x=25+75;
	callDate.y=167+60;
	callDate.color="#090909";
	callDate.text="上午11:50";
	callDate.size=7;
	RenderLayer.addChild(callDate);
	
    RenderLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		closeCRecord();
		call();
		numberInput.text="紧急号码";
		call1();
		})
}
function closeRecord()
{
	 RenderLayer.die();                //清空通话记录层
     RenderLayer.removeAllChild();
     CRecordLayer.removeChild(RenderLayer);	
}