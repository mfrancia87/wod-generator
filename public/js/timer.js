document.addEventListener("DOMContentLoaded", function() {

	var countup, countdown;

	var beep = document.getElementById('timer-beep');

	function startTimerUp(totalMinutes, display) {
		var currentTime = document.getElementById('timerScreen').innerHTML;
		currentTime = currentTime.split(':');
		var minutes = parseInt(currentTime[0], 10);
		var seconds = parseInt(currentTime[1], 10);

	    countup = setInterval(function () {
	    	
	    	seconds == 0 && beep.play();

	    	var min = minutes < 10 ? "0" + minutes : minutes;
	    	var sec = seconds < 10 ? "0" + seconds : seconds;
	    	if (parseInt(minutes, 10) == totalMinutes) {
	    		document.getElementById('pauseBtn').style.display = 'none';
	    		document.getElementById('startBtn').style.display = 'block';
	            clearInterval(countup);
	        }
	    	display.textContent = min + ":" + sec;
	    	++seconds;
			if(seconds >= 60){
				minutes++;
				seconds = 0;
			}
	        
	    }, 1000);
	}

	function startTimerDown(minutes, display) {
		var currentTime = document.getElementById('timerScreen').innerHTML;
		currentTime = currentTime.split(':');
		var minutes = parseInt(currentTime[0], 10);
		var seconds = parseInt(currentTime[1], 10);

	    countdown = setInterval(function () {
	    	var min = minutes < 10 ? "0" + minutes : minutes;
	    	var sec = seconds < 10 ? "0" + seconds : seconds;
	        display.textContent = min + ":" + sec;

	        if(seconds <= 0){
	        	beep.play();
	        	if(parseInt(minutes) == 0){
	        		display.textContent = "00:00";
	        		document.getElementById('pauseBtn').style.display = 'none';
					document.getElementById('startBtn').style.display = 'block';
	        		clearInterval(countdown);
	        	}
	        	seconds = 59;
	        	minutes--;
	        }
	        else{
	        	seconds--;
	        }
	    }, 1000);
	}

	document.getElementById('EMOMtimer').addEventListener('click', function(){
		document.getElementById('timerForm').style.display = 'block';
	});

	document.getElementById('startBtn').addEventListener('click', function(){
		this.style.display = 'none';
		document.getElementById('pauseBtn').style.display = 'block';

		document.getElementById('timerScreen').style.display = 'block';
		var minutes = document.getElementById('min').value;

		if (document.getElementById('countUp').checked) {
		  startTimerUp(minutes, timerScreen);
		}
		if (document.getElementById('countDown').checked) {
		  startTimerDown(minutes, timerScreen);
		}
		
	});

	document.getElementById('stopBtn').addEventListener('click', function(){

		clearInterval(countup);
		clearInterval(countdown);
		document.getElementById('pauseBtn').style.display = 'none';
		document.getElementById('startBtn').style.display = 'block';
		document.getElementById('timerScreen').innerHTML = '00:00';

	});

	document.getElementById('pauseBtn').addEventListener('click', function(){
		this.style.display = 'none';
		document.getElementById('startBtn').style.display = 'block';
		clearInterval(countup);
		clearInterval(countdown);
	});

});
