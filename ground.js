class Ground{
    constructor(x,y,width,height){
       var options={
        'isStatic':true,
        'restitution':0.8,
        'friction' : 0.3,
        'density':1.0,
       }
 
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
 
       World.add(world,this.body);
    }
 
    display(){
 
        push();
        var pos=this.body.position;
        translate(pos.x,pos.y);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
 } 