class Ground {
    constructor (x,y,width,height) {
       var options = {
           isStatic : true
       }

       this.body = Bodies.rectangle(x,y,width,height,options);
       // purpose: here the body which is ground should fetch values(parametres)
       // from sketch.js
       this.width = width;
       // the word 'this' is helping us in the fetching of the values 
       this.height = height;
       World.add(world,this.body);
       // here the body along with the variable world should be added into the 
       // constant World. 
    } 
}