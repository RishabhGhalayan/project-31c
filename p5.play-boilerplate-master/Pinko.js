class Pinko{
    constructor(x , y,r){
        var options={
            isStatic:true,
            friction:0,
            restitution:1,
            density:1
        }
    this.body=Bodies.circle(x,y,r,options) 
    this.diameter=2*r
  
    
    World.add(world,this.body);

  
  
  
    
    
    }
    
    display(){
        var pos=this.body.position
        var  angle=this.body.angle
        push()
        ellpiseMode(RADIUS)
        ellpise(x,y,this.diameter,this.diameter)
        pop()
    }
    
    }