

var Item7Layer = cc.Layer.extend({
    bricks:null,
    ball:null,
    bricksRect:null,
    ctor:function () {

        this._super();

        this.ball =new Ball(res.ball_png);
        this.ball.x =cc.winSize.width/2;
        this.ball.y =cc.winSize.height/2;
        this.ball.setXY(4,4);
        this.addChild(this.ball);


        this.bricks =[];
        this.bricksRect=[];
        //win.width = 960px

        for(var i=0;i<20;i++){
            this.bricks[i] = new cc.Sprite(res.brick_png);
            this.bricks[i].attr({
                x:this.bricks[i].width*i + this.bricks[i].width/2,
                y:cc.winSize.height*6/8
            });
            this.addChild(this.bricks[i]);

            this.bricksRect[i]= new cc.Rect(
                this.bricks[i].x-this.bricks[i].width/2-this.ball.width/2,
                this.bricks[i].y-this.bricks[i].height/2-this.ball.height/2,
                this.bricks[i].width+this.ball.width,
                this.bricks[i].height+this.ball.height
            );
        }



        this.ball.schedule(this.ballUpdate,0.01,cc.RepeatForever,1);


        return true;
    },

    ballUpdate:function(){
      //move
        var layer =this.getParent();

        for(var i =0;i<layer.bricks.length;i++){
         // 上下
         if (
                this.x<=layer.bricks[i].x+layer.bricks[i].width/2&&
                this.x>=layer.bricks[i].x-layer.bricks[i].width/2&&
                    ((this.y>layer.bricks[i].y&&
                 this.y-this.height/2<=layer.bricks[i].y+layer.bricks[i].height/2)||
                    (this.y<layer.bricks[i].y&&
                        this.y+this.height/2>=layer.bricks[i].y-layer.bricks[i].height/2)
                )){
                     layer.removeChild(layer.bricks[i]);
                     layer.bricks.splice(i,1);
                     this.dy*=-1;
                     break;
            }

         // 左右
         if (
                this.y<=layer.bricks[i].y+layer.bricks[i].height/2&&
                this.y>=layer.bricks[i].y-layer.bricks[i].height/2&&
                ((this.x>layer.bricks[i].x&&
                        this.x-this.width/2<=layer.bricks[i].x+layer.bricks[i].width/2)||
                    (this.x<layer.bricks[i].y&&
                        this.x+this.width/2>=layer.bricks[i].x-layer.bricks[i].width/2)
                )){
                    layer.removeChild(layer.bricks[i]);
                    layer.bricks.splice(i,1);
                    this.dx*=-1;
                    break;
            }

        }

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
});


var Ball = cc.Sprite.extend({
    dx:0,
    dy:0,
    ang:0,
    ctor:function(img){
        this._super(img);
    },

    setXY:function(dx,dy){
        this.dx = dx; this.dy =dy;
    }
});

var Item7Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item7Layer();
        this.addChild(layer);
    }
});

