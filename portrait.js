function setup() {
  createCanvas(600, 400);
  noStroke();

  rectMode(CENTER);
  ellipseMode(CENTER);
  
    fill(0, 0, 0); //black background
  rect(300, 200, 600, 400);

  fill(139, 69, 19); //hair
  rect(300, 210, 400, 380); 

   fill(255, 218, 185);//neck
  rect(300, 400, 150, 250);
  
   fill(225, 188, 155);//neck shadow
  ellipse(300, 210, 260, 350);
  
  fill(255, 218, 185);//head
  ellipse(300, 200, 280, 350); 
  
  //hair block
  fill(0, 0, 0);
  ellipse(0, 0, 350, 350);
  
  fill(0, 0, 0);
  ellipse(600, 0, 350, 350);
  
  //left eye
   fill(255, 255, 255);
  ellipse(220, 170, 50, 50);
  
  fill(0, 150, 100);
  ellipse(220, 170, 40, 40);
  
  fill(0, 0, 0);
  ellipse(220, 170, 35, 35);
  
   fill(255, 255, 255);
  ellipse(225, 165, 10, 10);
  
  //right eye
  
   fill(255, 255, 255);
  ellipse(370, 170, 50, 50);
  
   fill(0, 150, 100);
  ellipse(370, 170, 40, 40);
  
  fill(0, 0, 0);
  ellipse(370, 170, 35, 35);
  
   fill(255, 255, 255);
  ellipse(375, 165, 10, 10);
  
  //eye brows
  fill(139, 69, 19);//left
  rect(220, 130, 50, 5);
    fill(139, 69, 19);//right
  rect(370, 130, 50, 5);
  
  //mouth
  fill(0,0,0);
  rect(300,270,60,5);
  
  //nose
  fill(225, 188, 155);
  ellipse(300,230,30,20);
  
  
}
