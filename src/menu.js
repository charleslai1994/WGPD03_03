//這個變數位置是全域 item2也看得到
var var2=321;
var MenuLayer = cc.Layer.extend({
    item2:null,
    ctor:function () {

        this._super();

        var title =new cc.LabelTTF("選單測試","",48);
        title.x = cc.winSize.width/2;
        title.y = cc.winSize.height*7/8;
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu:function(){


        // 建立文字選單
        cc.MenuItemFont.setFontSize(52);
        var menuItem1 = new cc.MenuItemFont("Item1",this.doItem1,this);
        cc.MenuItemFont.setFontSize(36);
        var menuItem2 = new cc.MenuItemFont("Item2",this.doItem2,this);
        cc.MenuItemFont.setFontSize(48);
        var menuItem3 = new cc.MenuItemFont("Item3",this.doItem3,this);
        var menuItem4 = new cc.MenuItemFont("Item4",this.doItem4,this);
        // 將文字選單放入主選單
        var menu = new cc.Menu(menuItem1,menuItem2,menuItem3,menuItem4);
        menu.alignItemsVertically();
        this.addChild(menu);
    },

    doItem1:function(){
        // cc.log("doItem1");
        // 用pushScene方法 , 將場景切換
        cc.director.pushScene(new Item1Scene());
    },
    doItem2:function(){
        cc.director.pushScene(new Item2Scene(100));
    },
    doItem3:function(){
        cc.director.pushScene(new Item3Scene());
    },
    doItem4:function(){
        cc.director.pushScene(new Item4Scene());
    },
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

