class  Ball{
 constructor(x,y,radius,color){
     var options={
         isStatic:true,
         restitution:0.4,
         friction:1.0,
         density:0.8
         
     }
     
     this.ball=Bodies.circle(x,y,radius,options);
     World.add(world,this.ball);
     this.radius=radius;
     this.color=color;
 }
display(){
    var pos=this.ball.position;
    var angle=this.ball.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();

}
}