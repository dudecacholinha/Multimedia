"use strict";
 
class SpriteImage
{
    constructor(x, y, w, h, speed, clickable,img)
    {
        //posição e movimento
        this.xIni = x;
        this.yIni = y;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = speed;

 		this.drag=0;
        //imagem
        this.img = img;    
       	this.reqId;
        //rato
        this.clickableIni = clickable;
        this.clickable = clickable;
 	
        this.imgData = this.getimagedata(img);    
    }
 
 
    draw(ctx)
    {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
 
 
    clear(ctx)
    {
        ctx.clearRect(this.x, this.y, this.width, this.height);
    }  
    reset(ev, ctx)
    {
        this.clear(ctx);
        this.x = this.xIni;
        this.y = this.yIni;
        this.clickable = this.clickableIni;
    }
    getimagedata(img){
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img,0,0,this.width,this.height);
            //console.log(ctx.getImageData(0,0,this.width,this.height));
            var re =ctx.getImageData(0,0,this.width,this.height);
            console.log(re);
            return re;
    }
 
 
    mouseOverBoundingBox(ev) //ev.target é a canvas
    {
        var mx = ev.offsetX;  //mx, my = mouseX, mouseY na canvas
        var my = ev.offsetY;
        var x=mx-this.x;
        var y=my-this.y;
        var pos=y*(this.width)+x;
        if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height){
            if(this.imgData.data[(4*pos)-1]!=0){
                return true;
            }
            else{
            	/*console.log("hnmmm");*/
                return false;
            }
        }
        else
            return false;
    }
 
 
    clickedBoundingBox(ev) //ev.target é a canvas
    {
        if (!this.clickable)
            return false;
        else
            return this.mouseOverBoundingBox(ev);
    }
        rangeIntersecao(min0,max0,min1,max1){
    //console.log(Math.max(min0,max0),",",Math.min(min1,max1));
        return Math.max(min0,max0) >= Math.min(min1,max1) && Math.min(min0,max0) <= Math.max(min1,max1);
    }
   rectInter(r1){
        return this.rangeIntersecao(this.x,this.x + this.width, r1.x,r1.x + r1.width) && this.rangeIntersecao(this.y,this.y + this.height ,r1.y,r1.y + r1.height);
    }
    interceta(i1){
    var x_aux=Math.max(this.x,i1.x);
    var y_aux=Math.max(this.y,i1.y);
    var l_aux=Math.min(this.x+this.width,i1.x+i1.width)-x_aux;
    var c_aux=Math.min(this.y+this.height,i1.y+i1.height)-y_aux;
    console.log("x: "+x_aux);
    console.log("y_aux: "+y_aux);
    console.log("l_aux: "+l_aux);
    console.log("c_aux: "+c_aux);
    for(var i=x_aux;i<=x_aux+l_aux;i++){
        for(var j=y_aux;j<=y_aux+c_aux;j++){
            var pos1=(j-this.y)*(this.width)+(i-this.x);
            var pos2=(j-i1.y)*(i1.width)+(i-i1.x);
            if(this.imgData.data[pos1*4+3]!=0){
                if(i1.imgData.data[pos2*4+3]!=0){
                    return true;
                    }
            }
        }
    }
    return false;

}
    interceta_opacidade(r1){
    if(this.rectInter(r1)==true){
        if(this.interceta(r1)==true){
            return true;
            }
        }
    return false;
    }
    desenha_border(ctx){
        ctx.strokeStyle = "black";   
        ctx.lineWidth = 5;
        ctx.strokeRect(this.x+5,this.y+5,this.width-10,this.height-10);
        this.border=1;
    }
    apaga_border(ctx){
        if(this.border==1){
            ctx.clearRect(this.x,this.y,this.width,this.height);
            this.draw(ctx);
            this.border=0;
        }
    }
    desenha(x,width,y,height,ctx){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.draw(ctx);
    }
}