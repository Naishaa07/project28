class boy{
    constructor(bodyA, pointB){
        var options = {
           bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
       // this.body = Bodies.rectangle(x, y, options);
        this.abc = Constraint.create(options);
        World.add(world, this.abc);
        
    }
    fly(){
        this.abc.bodyA=null
    }
    display(){
        if(this.abc.bodyA){
        var pointA = this.abc.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    

        }
        attach(body){
            this.abc.bodyA=body
            }
        
        
   
    
}