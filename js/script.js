var d = 0
var tiros = 0
window.addEventListener("keydown",function(event){
    var key = event.keyCode
    if (key == "65"){
        d = d - 20
        document.getElementById("object").style.transform="translateX("+d+"px"+")"
        document.getElementById("contador").innerHTML=d +"px"
        var widthofcont = document.getElementById("cont").clientWidth
        document.getElementById("contador").innerHTML=d +"px"
        var div = widthofcont / -2
        if (d < div){
            d = div
            document.getElementById("object").style.transform="translateX("+div+"px"+")"
        }
        document.getElementById("aoud").innerHTML="A"
    }
    else if (key == "68"){
        d = d + 20
        document.getElementById("object").style.transform="translateX("+d+"px"+")"
        document.getElementById("contador").innerHTML=d +"px"
        var widthofcont = document.getElementById("cont").clientWidth
        document.getElementById("contador").innerHTML=d +"px"
        var div = widthofcont / 2
        if (d > div){
            d = div
            document.getElementById("object").style.transform="translateX("+div+"px"+")"
        }
        document.getElementById("aoud").innerHTML="D"
    }
})
document.getElementById("cont").addEventListener("mousedown",function(){
    var span =document.createElement("span")
    span.setAttribute("id","bullet")
    var linha = document.getElementById("linha")
    linha.appendChild(span)
    span.style.transform="translateX("+d+"px"+")"
    setTimeout(() => {
        span.style.transform="translateY(-20000px)"
    }, 1);
    setTimeout(() => {
        document.getElementById("bullet").remove()
    }, 2000);
    document.getElementById("click").innerHTML="click"
    setTimeout(() => {
        document.getElementById("click").innerHTML="------"
    }, 100);
    tiros++
    document.getElementById("tiros").innerHTML=tiros
})
window.addEventListener("keydown",function(event){
    var key = event.keyCode
    if (key == "32"){
        var span =document.createElement("span")
        span.setAttribute("id","bullet")
        var linha = document.getElementById("linha")
        linha.appendChild(span)
        span.style.transform="translateX("+d+"px"+")"
        setTimeout(() => {
            span.style.transform="translateY(-20000px)"
        }, 1);
        setTimeout(() => {
            document.getElementById("bullet").remove()
        }, 2000);
    }
})