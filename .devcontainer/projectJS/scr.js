let s1 = document.getElementById("sp1")
s1.addEventListener("mouseenter", function(){
    let x = Math.floor(Math.random()*100)
    s1.innerHTML= `<h1> ${x}</h1>`
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML = "<h1>1</h1>"

})

let sp3 = document.getElementById("sp3")
sp3.addEventListener("mouseenter", function(){
    let a = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let c = Math.floor(Math.random()*256)      
sp3.style.backgroundColor = `rgb(${a},${b},${c})`
})
sp3.addEventListener("mouseleave",function(){
    sp3.style.backgroundColor = "white";
})

let sp4 =  document.getElementById("sp4")
sp4.addEventListener("click",function(){
    sp1.style.backgroundColor= "red"
    sp3.style.backgroundColor= "yellow"
})
sp4.addEventListener("mouseleave",function(){
    sp1 .style.backgroundColor= "white"
    sp3.style.backgroundColor= "white"
})
