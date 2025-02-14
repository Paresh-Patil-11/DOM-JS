let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let div = document.querySelector("div");

btn.addEventListener("click",function(){
    h2.innerText = getRandomColor();
    let randomColor = getRandomColor()
    div.style.backgroundColor = randomColor;
})

function getRandomColor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    let color = `rgb(${red},${green},${blue})`;
    return color
}