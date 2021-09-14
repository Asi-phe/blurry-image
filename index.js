const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

//running blurring fuction every 30 mili second
let int = setInterval(blurring, 30)
let load = 0
function blurring(){
    load++

    if (load > 99){
        clearInterval(int)
    }
    //counting up on the DOM and showing a percentage sign when it's loading
   loadText.innerText = `${load}%`
   //fading out the apacity of the text
   loadText.style.opacity = scale(load, 0,100,1,0)
   //opacity on the image.
   bg.style.filter = `blur(${scale(load, 0, 100 , 30,0)}px)`
}
//got this function on stack overflow
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}