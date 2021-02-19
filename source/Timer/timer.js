var myMinutes;
var mySeconds;
var intervalHandle;
document.getElementById('start-timer').addEventListener('click', startCounter);

function resetPage(){
	document.getElementById("input-area").style.display="block";		
	document.getElementById("rules").style.display="block";
	document.getElementById("start-timer").style.display="block";	
}
function tick(){
	var timeDisplay=document.getElementById("time-display");
		
	var min=myMinutes;
	var sec=mySeconds;

	if (sec < 10) {
		sec="0"+sec;
	}
	if (min==0){
		min="00";
	}
	else if (min < 10) {
		min="0"+min;
	}
		
	var message=min.toString()+":"+sec;
		
	timeDisplay.innerHTML=message;
		
	if(mySeconds==0 && myMinutes != 0)
	{
		myMinutes--;
		mySeconds=60;
	}
	else if(mySeconds===0){
		document.getElementById("alarm").play();
		clearInterval(intervalHandle);
		resetPage();
	}
	mySeconds--;
}


function startCounter(){
	myMinutes = document.getElementById("minutes").value;
	mySeconds = document.getElementById("seconds").value;
	if (isNaN(myMinutes)){
		alert("Type a valid number please");
		return;
	}
	if (isNaN(mySeconds)){
		alert("Type a valid number please");
		return;
	}
		
	intervalHandle=setInterval(tick, 1000);
		
	document.getElementById("rules").style.display="none";
	document.getElementById("input-area").style.display="none";	
	document.getElementById("start-timer").style.display="none";	
}
