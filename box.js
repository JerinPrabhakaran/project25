class Box{
     constructor(x ,y ,width ,height){
      var options={
        isStatic : true

      }
      this.box1 = Bodies.rectangle(x-5 ,y ,width ,height ,options)
      this.box2 = Bodies.rectangle(x -100,y +85 ,width  ,height ,options)
      this.box3 = Bodies.rectangle(x -200,y ,width ,height ,options)
      this.width = width;
      this.height = height;
      World.add(world,this.box1);
      World.add(world,this.box2);
      World.add(world,this.box3);
      

     }
display(){
push();
var position1 = this.box1.position;
var angle1 = this.box1.angle;
fill("green")
translate(position1.x ,position1.y);
rotate(angle1)
//rect(0,0,this.width ,this.height);

pop();

push();
var position2 = this.box2.position;
var angle2 = this.box2.angle;
fill("yellow")
translate (position2.x ,position2.y);
rotate (angle2)
//rect(0,0,this.width + 170 ,this.height-170);


pop();

push();
var position3 = this.box3.position;
var angle3 = this.box3.angle;
fill("red")
translate (position3.x ,position3.y);
rotate (angle3)
//rect(0,0,this.width ,this.height);

pop();


}


}