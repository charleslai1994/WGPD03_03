

var Item41Layer = cc.Layer.extend({
    ctor:function () {

        this._super();
        cc.log("Item41:ctor()");

        var bg = new cc.Sprite(res.bg_jpg);
        bg.x =cc.winSize.width/2;
        bg.y =cc.winSize.height/2;

        this.addChild(bg);


        var title =new cc.LabelTTF("Item1","",48);
        title.x = cc.winSize.width/2;
        title.y = cc.winSize.height*7/8;
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu:function(){
        var back = new cc.MenuItemImage(
            // 放入按鈕的三種狀態
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            // 副程式back , 使用回呼方式 , 不能寫成this.back()
            this.back, this
        );

        back.x = 0-cc.winSize.width/2+back.width/2;
        back.y = 0 -cc.winSize.height/2 +back.height/2;

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back:function(){
        // popScene方法 將場景pop回去
        cc.director.popScene();
    },

    onEnterTransitionDidFinish:function(){
        cc.log("Item41:finish");
    },

});

var Item41Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item41Layer();
        this.addChild(layer);
    }
});

