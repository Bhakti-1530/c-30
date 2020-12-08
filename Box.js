class Box  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.visibility = 255;
  World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      var pos =this.body.position;
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
};

  