const btn = document.getElementById('btn')
btn.addEventListener('click', changeVisibility)

/**
 * A function to change visibility of a popup.
 */
function changeVisibility() {
    let display = document.getElementById('popup')
    const vis = window.getComputedStyle(display).visibility
    if(vis === 'hidden'){
        display.style.visibility = 'visible'
    }
    else{
        display.style.visibility = 'hidden'
    }
}
