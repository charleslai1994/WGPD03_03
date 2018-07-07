

var Item31Layer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var title =new cc.LabelTTF("Item31","",48);
        title.x = cc.winSize.width/2;
        title.y = cc.winSize.height*7/8;
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu:function(){
        var home = new cc.MenuItemFont("Home", this.home ,this);
        var back = new cc.MenuItemImage(
            // 放入按鈕的三種狀態
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            // 副程式back , 使用回呼方式 , 不能寫成this.back()
            this.back, this
        );

        var item1 = new cc.MenuItemFont("item1", this.item1 ,this);

        var menu = new cc.Menu(home,item1,back);
        menu.alignItemsVertically();
        this.addChild(menu);
    },



    back:function(){
        // 利用popToSceneStackLevel()方法 指定pop回去的階層 , Root層為1
        cc.director.popToSceneStackLevel(2);
    },
    home:function(){

        cc.director.popToSceneStackLevel(1);
    },
    item1:function(){
        cc.director.popToRootScene();

        cc.director.pushScene(new Item1Scene());
    },
});

var Item31Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item31Layer();
        this.addChild(layer);
    }
});

