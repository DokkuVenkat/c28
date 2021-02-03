class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
      //display the connection line only when bird position is avaliable that is when the bird is not flying
        if(this.sling.bodyA){ 
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);


        }
       
    }

//null=nothing,detach the bird from the connection to make it fly
    fly(){
      this.sling.bodyA=null
    }
    
}