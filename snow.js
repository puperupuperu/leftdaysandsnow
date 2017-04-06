window.onload = function () {
	var canvas = document.getElementById('movearea');
	
	var w = $('#wrapper').width();
	var h = $('#wrapper').height();
	$('#movearea').attr('width', w);
	$('#movearea').attr('height', h);

	if(canvas && canvas.getContext) {
	  function snowStart(x,y){
		function draw(){
			ctx.beginPath();
			ctx.fillStyle = '#BBB' ;
			ctx.strokeStyle= '#BBB' ;
			ctx.arc(x, y, 5, 0,2*Math.PI,true);
			ctx.stroke();
			ctx.fill();
		}
		function clear(){
			for(var s = 0 ; s < 10; s++){
				ctx.beginPath();
				ctx.fillStyle = '#000';
				ctx.strokeStyle= '#000';
				ctx.arc(x, y, 5,0,2*Math.PI,true);
				ctx.stroke();	
				ctx.fill();
			}
		}
		function move(){
			var xBlur = 1.15*Math.random()-1.25*Math.random()
			var yBlur = 3*Math.random()
			var xSpeed = (1*speedCoefficient*speedCoefficient + xBlur)*speedCoefficient;
			var ySpeed = 1.1 + yBlur*speedCoefficient;
			if(x >= 0 && x <= w && y >= 0 && y <= h){
				clear();
				x += xSpeed*speedCoefficient;
				y += ySpeed*speedCoefficient;
				draw();
			} else if (x < w && y > h){
				clear();
				moveStop();
			} else if (x > w && y < h ){
				clear();
				x = 5;
			} else if ( x > w && y > h){
				clear();
				moveStop();
			}
		}
		  var snowMove
		  function moveStart(){
			  snowMove = setInterval(move,10);
		  }
		  function moveStop(){
			  clearInterval(snowMove);
		  }
		  
		var ctx = canvas.getContext('2d');
		draw();
		moveStart();
	  }
		
		function birthPlace(){
			var snowNum =Math.floor(3.1*Math.random());
			for(var i = 0; i < snowNum ; i++){
				var place = w * Math.random() 
				snowStart(place,0);
			}
		}
		
		var speedCoefficient = 0.5;
		setInterval(speedchange,5000);
		function speedchange(){
		speedCoefficient = 1+0.3*Math.random()-0.6*Math.random();
		}
		
		var birthRate = (1000+1000*Math.random())*speedCoefficient/2;
		setInterval(birthPlace,birthRate);
    }
}