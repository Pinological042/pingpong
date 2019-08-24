	let x = 40;
	let xspeed = 10;
	let yspeed = 10;
	let move = 325;
	let y = 40;
	let movement = 325;

	function net(){
		rect(width/2,30,15,40);
		rect(width/2,80,15,40);
		rect(width/2,130,15,40);
		rect(width/2,180,15,40);
		rect(width/2,230,15,40);
		rect(width/2,280,15,40);
		rect(width/2,330,15,40);
		rect(width/2,380,15,40);
		rect(width/2,430,15,40);
		rect(width/2,480,15,40);
		rect(width/2,530,15,40);
		rect(width/2,580,15,40);
	}
	function player(){
		rect(10,mouseY,20,90);

	}
	function player1(){
		rect(780,movement,20,90);

	}
	function setup(){
		createCanvas(800,650);


	}
	function draw(){
		background(0);
		net();
		player();
		player1();
		
		circle(x,y,50);
		x += xspeed;
		y += yspeed;

			
		if(x+50 >= width){
			xspeed = -xspeed
			x = width - 50;
		}
		else if (x <= 0){
			xspeed = -xspeed;
			x = 0;
		}
		if (y+50 >= height){
			yspeed = -yspeed;
			y = height - 50;
		}
		else if(y<=0){
			yspeed = -yspeed;
			y = 0;
		}
		player();
		player1();
		

	}
	function keyTyped(){
		if(key == 'w'){
			movement = movement - 25;
		}
		if(key == 's'){
			movement = movement + 25;
		}
		

	}