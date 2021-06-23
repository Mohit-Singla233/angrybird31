class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.flightpath=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position=[this.body.position.x,this.body.position.y];
    this.flightpath.push(position)

    for (let i = 0; i < this.flightpath.length; i++) {
      image(this.smokeImage,this.flightpath[i][0],this.flightpath[i][1])      
    }
  }
}
