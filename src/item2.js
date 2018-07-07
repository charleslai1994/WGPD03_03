

var Item2Layer = cc.Layer.extend({
    ctor:function (data) {

        this._super();

        cc.log("Item2Layer:"+data);
        cc.log("ItemLayer:var1="+var2);

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

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back:function(){
        // popScene方法 將場景pop回去
        cc.director.popScene();
    },
});

var Item2Scene = cc.Scene.extend({
mydata:null,
    //建構式 , 物件的初始化

    // 需傳遞參數用ctor

    ctor:function(data){
        //呼叫父層
        this._super();
        this.mydata =data;
        cc.log("Item2Scene:ctor():"+data);
        var layer = new Item2Layer(data);
        this.addChild(layer);

    },

    // 不傳參數可以使用onEnter

    // onEnter:function () {
    //     // this._super();
    //     cc.log("item2Scene:onEnter()"+this.mydata);
    //
    // }
});

