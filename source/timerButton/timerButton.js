
let longBreakCycle = 3;

document.getElementById("timer-btn").addEventListener("click", function() {

    console.log("okue");

    //This keeps track of the current number of cycles
    let numCycles = parseInt(localStorage.getItem("cycles"));

    
    // Get the current time of the timer
    let currentTime = document.getElementById("time");

    let onTask = localStorage.getItem("onTask");


    //Timer hasnt begun yet
    if(numCycles == null || onTask == null || (numCycles == 0 && onTask == "false")) {

        /* call the timer starter function **HERE** */

        localStorage.setItem("cycles", "0");

        //Need to id to the one in the html
        document.getElementById("timer-btn").textContent = "Fail Task";

        localStorage.setItem("onTask", "true");

    }

    else if(onTask == "true"){

       if(currentTime != 0) {

        /* 
        Set Timer interval to 25
        **HERE**
        */
        
       document.getElementById("timer-btn").textContent = "Start Pomo";

        }

        else {
            let newCycle = numCycles + 1;
            localStorage.setItem("cycles", newCycle);


            if(numCycles % longBreakCycle == 0) {
                /* 
                Set timer to 10 minutes
                Start Countdown
                **HERE**
                */
               document.getElementById("timer-btn").disabled = true;
            }
            else {
                /*
                Set timer to 5 minutes
                Start countdown
                **HERE**
                */
               document.getElementById("timer-btn").disabled = true;
            }

        }

        localStorage.setItem("onTask", "false");

    }

    else if(onTask == "false"){

        /*
        Set timer to 25 minutes
        Start Countdown
        **HERE**
        */

    }


});

document.getElementById("Time").addEventListener("change", function(){
    let currentTime = document.getElementById("Time");
    let numCycles = parseInt(localStorage.getItem("cycles"));
    let onTask = localStorage.getItem("onTask");

    if(currentTime == 0) {

        if(onTask == "false"){
            document.getElementById("timer-btn").textContent = "Start Pomo";
        }

        else{
            if(numCycles % longBreakCycle == 0) {
                document.getElementById("timer-btn").textContent = "Start Long Break";
            }
            else {
                document.getElementById("timer-btn").textContent = "Start Short Break";
            }

            document.getElementById("timer-btn").disabled = false;
        }
    }
})
