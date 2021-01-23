class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   // this.image = loadImage("sprites/wood1.png");
   this.Visiblity = 255;
  }
    display(){
      if(this.body.speed < 2){
        super.display();
       }
       else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
       // rectMode(CENTER)
        //rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
        gameState="towerfell";
      }
    }

      Score(){
        if(this.Visiblity<0 && this.Visiblity>-105){
          score=score+10;
        }
      }

}