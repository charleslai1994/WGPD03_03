

var Item6Layer = cc.Layer.extend({
    ctor:function () {

        this._super();



        return true;
    }
});

var Item6Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item6Layer();
        this.addChild(layer);
    }
});

