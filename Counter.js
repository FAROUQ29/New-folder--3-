// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const bt = document.querySelectorAll(".btn");


bt.forEach (function (btn){ 
    btn.addEventListener("click", function(e){
    const style =e.target.classList
            // console.log(e.target.classList)
        if(style.contains("decrease")){
        count--;
        } else if(style.contains("increase")) {
            count++;
        }    else {
            count=0        
        }


value.textContent=count;
  })
})

function myfunction() {
    var x =
    document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}