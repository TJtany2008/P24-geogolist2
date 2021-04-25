class Iron {
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:3,
            density:30
        }

        this.body = Bodies.rectangle(x, y, 55, 55, options);
        this.width = 55;
        this.height = 55;
        //Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
		stroke("black");
        fill("red");
        rect(0,0, this.width, this.height);
        pop();

}

}