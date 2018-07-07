

var MenuLayer = cc.Layer.extend({
    ctor:function () {

        this._super();

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
        cc.log("doItem1");
    },
    doItem2:function(){
        cc.log("doItem2");
    },
    doItem3:function(){
        cc.log("doItem3");
    },
    doItem4:function(){
        cc.log("doItem4");
    },
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

