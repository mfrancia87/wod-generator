document.addEventListener("DOMContentLoaded", function() {

	var countup, countdown;
	var beep = document.getElementById('timer-beep');
	var mode;

	function resetTimer(){
		clearInterval(countup);
		clearInterval(countdown);
		document.getElementById('timerScreen').innerHTML = '00:00';
	}

	function startTimerUp(totalMinutes, display) {
		var currentTime = document.getElementById('timerScreen').innerHTML;
		currentTime = currentTime.split(':');
		var minutes = parseInt(currentTime[0], 10);
		var seconds = parseInt(currentTime[1], 10);

	    countup = setInterval(function () {

	    	if (seconds == 0 && mode == 'emom'){
	    		beep.play();
	    	}
	    	else if (minutes == 0 && seconds == 0 && mode == 'amrap'){
	    		beep.play();
	    	}

	    	var min = minutes < 10 ? "0" + minutes : minutes;
	    	var sec = seconds < 10 ? "0" + seconds : seconds;
	    	if (parseInt(minutes, 10) == totalMinutes) {
	    		if (mode == 'amrap'){
		    		beep.play();
		    	}
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
		var currentTime = document.getElementById('timerScreen').innerHTML.split(':');
		var minutes = parseInt(currentTime[0], 10);
		var seconds = parseInt(currentTime[1], 10);

	    countdown = setInterval(function () {
	    	var min = minutes < 10 ? "0" + minutes : minutes;
	    	var sec = seconds < 10 ? "0" + seconds : seconds;
	        display.textContent = min + ":" + sec;

	        if(seconds <= 0){
	        	mode == 'emom' && beep.play();
	        	if(parseInt(minutes) == 0){
	        		resetTimer();
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
		resetTimer();
		document.getElementById('timer').style.display = 'block';
		document.getElementById('amrapTimerForm').style.display = 'none';
		document.getElementById('forTimeTimerForm').style.display = 'none';
		document.getElementById('emomTimerForm').style.display = 'block';
		mode = 'emom';
	});

	document.getElementById('startBtn').addEventListener('click', function(){
		this.style.display = 'none';
		document.getElementById('pauseBtn').style.display = 'block';
		var minutesEmom = document.getElementsByClassName('min')[0].value;
		var minutesAmrap = document.getElementsByClassName('min')[1].value;
		var minutesForTime = document.getElementsByClassName('min')[2].value;
		var timerScreen = document.getElementById('timerScreen');

		if (mode == 'emom' && document.getElementById('countDown').checked) {
			console.log('entra al timer DOWN');
		  startTimerDown(minutesEmom, timerScreen);
		}
		else if (mode == 'emom' && document.getElementById('countUp').checked) {
			console.log('entra al timer DOWN');
		  startTimerUp(minutesEmom, timerScreen);
		}
		else if (mode == 'forTime') {
		  startTimerUp(minutesForTime, timerScreen);
		}
		else{
			console.log('entra al timer up');
			startTimerUp(minutesAmrap, timerScreen);
		}
		
	});

	document.getElementById('stopBtn').addEventListener('click', function(){
		document.getElementById('pauseBtn').style.display = 'none';
		document.getElementById('startBtn').style.display = 'block';
		resetTimer();
	});

	document.getElementById('pauseBtn').addEventListener('click', function(){
		this.style.display = 'none';
		document.getElementById('startBtn').style.display = 'block';
		clearInterval(countup);
		clearInterval(countdown);
	});

	//AMRAP functions
	document.getElementById('AMRAPtimer').addEventListener('click', function(){
		resetTimer();
		document.getElementById('timer').style.display = 'block';
		document.getElementById('emomTimerForm').style.display = 'none';
		document.getElementById('forTimeTimerForm').style.display = 'none';
		document.getElementById('amrapTimerForm').style.display = 'block';
		mode = 'amrap';
	});

	//For Time functions
	document.getElementById('forTimeTimer').addEventListener('click', function(){
		resetTimer();
		document.getElementById('timer').style.display = 'block';
		document.getElementById('emomTimerForm').style.display = 'none';
		document.getElementById('amrapTimerForm').style.display = 'none';
		document.getElementById('forTimeTimerForm').style.display = 'block';
		mode = 'forTime';
	});

});
