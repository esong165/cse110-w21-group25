let btn = document.getElementById("btn");
btn.addEventListener("click", changeVisibility);

function changeVisibility(){
    let display = document.getElementById("popup");
    let vis = window.getComputedStyle(display).visibility;
    console.log(vis);
    if(vis == "hidden"){
        display.style.visibility = "visible";
    }
    else{
        display.style.visibility = "hidden";
    }
}