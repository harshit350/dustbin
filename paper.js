class Paper{
    Constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=bodies.circle(x,y,width,radius,options);
        this.radius=this.radius
    
        World.add(world,this.body);
    
    
    }
    display(){
        ellipsMode(RADIUS);
    fill("yellow")
    
    rect(this.body.position.x, this.body.position.y, this.radius)
    }
    };