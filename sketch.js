function setup() {
  createCanvas(600, 400);
  background(0); // black background
  noLoop();

  fill(255);
  noStroke();
  ellipse(520, 60, 40, 40); //moon

  fill(0, 100, 0); 
  noStroke();
  ellipse(width / 2, height + 50, width * 2, 150); //hill
  
  fill(101, 67, 33);
  noStroke();
  rect(520, 250, 30, 145); //right trunk (x,y,w,h)
  rect(50, 250, 30, 145);  //left trunk

  fill(0, 100, 0);
  noStroke();
  triangle(495, 350, 575, 350, 535, 180); 
//tree right (Lx,Ly,Rx,Ry,Tx,Ty) left, right, top.
  triangle(25, 350, 105, 350, 65, 180); //tree left

   fill(255);
  noStroke();
  
  ellipse(100, 50, 5, 5);
  ellipse(200, 80, 3, 3);
  ellipse(300, 60, 3, 3);
  ellipse(400, 100, 5, 5);
  ellipse(150, 30, 3, 3);
  ellipse(500, 70, 3, 3);
  ellipse(250, 40, 3, 3);
  ellipse(350, 90, 3, 3);
  ellipse(450, 50, 3, 3);
  ellipse(550, 30, 3, 3);
  ellipse(120, 100, 3, 3);
  ellipse(50, 150, 3, 3);
  ellipse(150, 180, 3, 3);
  ellipse(250, 160, 3, 3);
  ellipse(350, 200, 3, 3);
  ellipse(100, 130, 3, 3);
  ellipse(450, 170, 3, 3);
  ellipse(200, 140, 5, 5);
  ellipse(300, 190, 3, 3);
  ellipse(400, 150, 3, 3);
  ellipse(500, 130, 3, 3);
}

