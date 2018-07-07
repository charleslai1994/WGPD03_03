

var Item1Layer = cc.Layer.extend({
    ctor:function () {

        this._super();

        this.initMenu();

        return true;
    },

    initMenu:function(){
        var back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            null, this
        );

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },
});

var Item1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item1Layer();
        this.addChild(layer);
    }
});

