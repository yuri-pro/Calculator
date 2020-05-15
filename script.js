
let sum = document.querySelectorAll("button")[0];                   //finding items for future actions
let minus = document.querySelectorAll("button")[1];
let times = document.querySelectorAll("button")[2];
let division = document.querySelectorAll("button")[3];
let leftOf = document.querySelectorAll("button")[4];
let answer = document.querySelector("span");
let reset = document.querySelectorAll(".reset")[0];
// -----------------------------------------------------------------

let a = document.querySelectorAll(".input1")[0];        // setting up future input fields
let b = document.querySelectorAll(".input2")[0];

function addIT(){
    var sum = Number(a.value) + Number(b.value);       //creating new variable to store calculation 
    answer.innerHTML = "  " + sum; 
}

 function minusIt(){
    var minus = Number(a.value) - Number(b.value);
    answer.innerHTML = "  " + minus; 
}

function timesIt(){
    var times = Number(a.value) * Number(b.value);
    answer.innerHTML = "  " + times;  
}

function devideIt(){
    var division = Number(a.value) / Number(b.value);
    answer.innerHTML = "  " + division;   
}

function restOf(){
    leftOf = Number(a.value) % Number(b.value);
    answer.innerHTML = "  " + leftOf;   
};

 function fieldCheck(){
    if (a.value.length===0 || b.value.length === 0){
        alert("Please enter your numbers!!!");
    }
  
 }

 function emptyField(){
    a.value.length === "0" && b.value.length === "0";
 }

sum.addEventListener("click",function(){
    fieldCheck();
    addIT();
});

minus.addEventListener("click",function(){
    fieldCheck();
    minusIt();
});

times.addEventListener("click",function(){
    fieldCheck();
    timesIt();
});

division.addEventListener("click",function(){
    fieldCheck();
    devideIt();
});

leftOf.addEventListener("click",function(){
    fieldCheck();
    restOf();
});

reset.addEventListener("click", function(){
    a.value = "";
    b.value = "";
    answer.innerHTML = "";
})



 
 
