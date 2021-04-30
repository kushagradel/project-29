class Block{
    constructor(x,y,width,height){
        var options= {
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:1.2
        }

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
    
    
        World.add(world,this.body);


    }

    display(){


     push();

     fill("white");
        
        var pos= this.body.position; 
        


        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

        pop();
    
    }
}