	let x = 40;

	function setup(){
		createCanvas(800,600);


	}
	function draw(){
		background(0);
		rect(400,0,15,600);
		circle(x,300,50);
			
		if(x != 800){
			x++;

		}
		else {

			x--;
		}
		

	}