class Particles{
    constructor(x,y,radius){
    var options = {
        isStatic: false,
        resitution: 2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.color = color(random(0, 255), random(0,255), random(0,255));
    World.add(world, this.body);
    }
    
    display(){
    var pos = this.body.position;
    ellipse(pos.x, pos.y, this.radius);
    }
    }