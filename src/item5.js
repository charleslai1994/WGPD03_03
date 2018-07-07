var Item5Layer = cc.Layer.extend({
    ball:null,
    ball1:null,

    ctor:function () {

        this._super();

        this.ball = new cc.Sprite(res.ball_png);
        this.ball.ang=0;
        this.ball.dx=parseInt(Math.random()*2)==0?4:-4;
        this.ball.dy=parseInt(Math.random()*2)==0?4:-4;
        this.ball.x=cc.winSize.width/2;
        this.ball.y=cc.winSize.height/2;
        this.addChild(this.ball);

        this.ball1 = new cc.Sprite(res.ball_png);
        this.ball1.ang=0;
        this.ball1.dx=parseInt(Math.random()*2)==0?4:-4;
        this.ball1.dy=parseInt(Math.random()*2)==0?4:-4;
        this.ball1.x=cc.winSize.width/2+100;
        this.ball1.y=cc.winSize.height/2-100;
        this.addChild(this.ball1);



        this.ball.schedule(this.ballUpdate,0.01,cc.RepeatForever,1);

        this.ball1.schedule(this.ballUpdate,0.01,cc.RepeatForever,1);

        return true;
    },

    ballUpdate:function(){


        if (this.x - this.width/2 <= 0 ||
            this.x + this.width/2 >= cc.winSize.width){
            this.dx *= -1;
            if (this.dy<0){
                this.ang += this.dx>0?90:-90;
            }else{
                this.ang -= this.dx>0?90:-90;
            }
            this.runAction(cc.rotateTo(0.5,this.ang))
        }
        if (this.y - this.height/2 <= 0 ||
            this.y + this.height/2 >= cc.winSize.height){
            this.dy *= -1;
            if (this.dx>0){
                this.ang += this.dy>0?90:-90;
            }else{
                this.ang -= this.dy>0?90:-90;
            }
            this.runAction(cc.rotateTo(0.5,this.ang))
        }
        this.x += this.dx;
        this.y += this.dy;

    },
    update:function(){

    }
});




var Item5Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item5Layer();
        this.addChild(layer);
    }
});

