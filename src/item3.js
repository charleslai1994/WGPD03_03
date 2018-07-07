

var Item3Layer = cc.Layer.extend({
    ctor:function () {

        this._super();
        cc.log("Item3:ctor()");
        var title =new cc.LabelTTF("Item3","",48);
        title.x = cc.winSize.width/2;
        title.y = cc.winSize.height*7/8;
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu:function(){
        var next = new cc.MenuItemFont("Next", this.next ,this);
        var back = new cc.MenuItemImage(
            // 放入按鈕的三種狀態
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            // 副程式back , 使用回呼方式 , 不能寫成this.back()
            this.back, this
        );

        var menu = new cc.Menu(next,back);
        menu.alignItemsHorizontally();
        this.addChild(menu);
    },

    back:function(){
        // popScene方法 將場景pop回去
        cc.director.popScene();
    },

    next:function(){
        // pushScene方法 將場景轉向Item31
        cc.director.pushScene(new Item31Scene());
    },


    onEnter:function(){
        cc.log("Item3:onEnter()");
    },

    onExit:function(){
        cc.log("Item3:onExit()");
    }


});

var Item3Scene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new Item3Layer();
        this.addChild(layer);
    },

    onEnter:function () {

    }
});

