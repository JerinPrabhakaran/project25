class Ball{
    constructor(x ,y ,radius){
     var options={
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 0.2

     }
     this.body = Bodies.circle(x ,y ,radius/2 ,options);
     this.radius = radius;
     World.add(world,this.body);
     this.paper =loadImage("paper.png");

    }

    display(){
var pos = this.body.position

ellipseMode(CENTER);
fill("white")
//ellipse(pos.x ,pos.y ,this.radius);
image(this.paper,pos.x -25,pos.y -25 ,50,50)


    }
}
