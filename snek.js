var canvas,easy,medium,hard,score,Pscore;
var snake;
var gscale = 30;
var food;

function setup(){
	canvas = createCanvas(900, 600);
	easy = createButton('easy');
	medium = createButton('medium');
	hard = createButton('hard');
	pScore = createElement('h1','Score: 0');
	score = 0;

	easy.position((windowWidth-easy.width-30-medium.width-30-hard.width)/2,100);
	easy.mousePressed(function(){start(5);});
	
	medium.position(easy.x+easy.width+30, easy.y);
	medium.mousePressed(function(){start(10);});
	
	hard.position(medium.x+medium.width+30, medium.y);
	hard.mousePressed(function(){start(20);});

	pScore.position((windowWidth-30-hard.width)/2,easy.y+15);

	snake = new Snake();
	food = new Food();
	food.setSpawn();
	food.spawn();

	noLoop();
}

function draw(){
	background(30,30,30);
	snake.checkGameOver();
	snake.update();
	snake.show();
	if(snake.eat(food) == true)
		food.setSpawn();
	food.spawn();
}

function start(x){
	frameRate(x);
	easy.remove();
	medium.remove();
	hard.remove();
	loop();
}

function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 0;
	this.tail = [];
	this.size = 0;

	this.update = function(){
		if(this.size == this.tail.length)
			for(var i = 0; i < this.size-1; i++)
				this.tail[i] = this.tail[i+1];
		this.tail[this.size-1] = createVector(this.x,this.y);
		this.x = this.x + this.xspeed*gscale;
		this.y = this.y + this.yspeed*gscale;
	}

	this.show = function(){
		fill(255);
		if(this.x>=canvas.width) this.x = 0;
		if(this.y>=canvas.height) this.y = 0;
		if(this.x<0) this.x = canvas.width - gscale;
		if(this.y<0) this.y = canvas.height - gscale;
		for(var i = 0; i < this.size; i++)
			rect(this.tail[i].x,this.tail[i].y,gscale,gscale);
		fill(200);
		rect(this.x,this.y,gscale,gscale);
	}

	this.direction = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.eat = function(foo){
		if(this.x == foo.x && this.y == foo.y)
			{
				this.size++;
				score++;
				pScore.html('Score: ' + score);
				return true;
			}
	}

	this.checkGameOver = function(){
		for(var i =0; i<this.tail.length; i++)
			if(this.tail[i].x == this.x && this.tail[i].y == this.y)
				noLoop();
	}
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.yspeed != 1) {
    snake.direction(0, -1);
  } else if (keyCode === DOWN_ARROW && snake.yspeed != -1) {
    snake.direction(0, 1);
  } else if (keyCode === RIGHT_ARROW && snake.xspeed != -1) {
    snake.direction(1, 0);
  } else if (keyCode === LEFT_ARROW && snake.xspeed != 1) {
    snake.direction(-1, 0);
  }
}

function Food(){
	this.x = 0;
	this.y = 0;

	this.setSpawn = function(){
		this.x = randCol();
		this.y = randRow();
		var onSnake = false;
		if(this.x == snake.x && this.y == snake.y)
			onSnake = true;
		for(var i = 0; i < snake.tail.length; i++)
			if(this.x == snake.tail[i].x && this.y == snake.tail[i].y)
				onSnake = true;
		if(onSnake == true)
			this.setSpawn();
	}

	this.spawn = function(){
		fill(floor(random(255)),100,floor(random(255)));
		rect(this.x,this.y,gscale,gscale);
	}
}

function randCol(){
	return floor(random(canvas.width/gscale))*gscale;
}

function randRow(){
	return floor(random(canvas.height/gscale))*gscale;
}