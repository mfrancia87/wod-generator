document.addEventListener("DOMContentLoaded", function() {
	
	var wods = JSON.parse(decodedJson);

	function getRandomWod(wods){
		var wod = wods[Math.floor(Math.random()*wods.length)].wod;
		var wodArray = wod.split('/');
		var wodText = '<h3><span class="badge badge-secondary">' + wodArray[0] + '</span></h3>';
		for (var i = 1; i < wodArray.length; i++) {
			wodText += '<br>' + wodArray[i];
		}
		return wodText;
	}

	document.getElementById('wodBtn').addEventListener('click', function(){
		//clear content
		document.getElementById('wodList').innerHTML = '';

		//pick random exercise
		var wodText = getRandomWod(wods);
		document.getElementById('wodList').innerHTML = wodText;
	});

});
