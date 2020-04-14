class    Box{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push()
        rotate(angle);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
}