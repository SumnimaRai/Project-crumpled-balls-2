class Dustbin  {
  constructor() {
    
    var options =  {
      isStatic: true,

    }
   
    this.body = Bodies.rectangle(400,600,100,10,options);
    this.width=100;
    this.height=100;
    World.add(world,this.body);
    
   
    this.image = loadImage("images/dustbingreen.png")
   
   
  }
 display(){
  var pos =this.body.position;
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);
  fill("purple");
  
  
   imageMode(CENTER);
   
  image(this.image,0,0,this.width,this.height);
  pop()
  
 }
  
  }

