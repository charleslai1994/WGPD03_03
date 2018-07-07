

var Item4Layer = cc.Layer.extend({
    ctor:function () {

        this._super();

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

        var next1 = new cc.MenuItemFont("Next1",this.next1,this);
        var next2 = new cc.MenuItemFont("Next2",this.next2,this);
        var next3 = new cc.MenuItemFont("Next3",this.next3,this);
        var next4 = new cc.MenuItemFont("Next4",this.next4,this);
        next1.x =0; next1.y =150;
        next2.x =0; next2.y =50;
        next3.x =0; next3.y =-50;
        next4.x =0; next4.y =-150;

        var menu =new cc.Menu(back,next1,next2,next3,next4);
        this.addChild(menu);

    },

    next1:function(){
      cc.director.pushScene(
          new cc.TransitionFadeTR(3,new Item41Scene())
      );
    },
    next2:function(){
        cc.director.pushScene(
            new cc.TransitionCrossFade(3,new Item41Scene())
        );
    },
    next3:function(){
        cc.director.pushScene(
            new cc.TransitionJumpZoom(3,new Item41Scene())
        );
    },
    next4:function(){
        cc.director.pushScene(
            new cc.TransitionProgressRadialCW(3,new Item41Scene())
        );
    },

    back:function(){
        // popScene方法 將場景pop回去
        cc.director.popScene();
    },

    onExitTransitionDidStart:function(){
        cc.log("Item41:start");
    },
});

var Item4Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item4Layer();
        this.addChild(layer);
    }
});

