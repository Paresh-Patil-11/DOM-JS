let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

btn.addEventListener("click", function(){
    let newli = document.createElement("li");
    newli.innerText = inp.value;
    ul.appendChild(newli);

    let newbtn = document.createElement("button");
    newbtn.innerText = "delete";
    newbtn.classList.add("delete");
    newli.appendChild(newbtn);
    
    inp.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
    }
})



