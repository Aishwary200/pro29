class Polygon{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.width = width;
        this.height = height;
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y, this.radius*2, this.radius*2);
       
      }
  }