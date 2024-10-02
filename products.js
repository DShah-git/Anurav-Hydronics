let width = 0;
let screenWidth = screen.width;
if(screenWidth >600 ){
    width = 450;
}
else{
    width = 300;
}


// For Slider 1
const imageContainer1 = document.getElementById("images1");
let currentP1 = 1;
function back1(){
    if(currentP1<=1) { currentP1=3 }
    else {currentP1-=1;}
    imageContainer1.scrollLeft = ((currentP1-1)*width).toString();
}

function next1(){
    if(currentP1>=3) { currentP1=1 }
    else {currentP1+=1;}
    imageContainer1.scrollLeft = ((currentP1-1)*width).toString();
}


//For slider 2
const imageContainer2 = document.getElementById("images2");
let currentP2 = 1;
function back2(){
    if(currentP2<=1) { currentP2=2 }
    else {currentP2-=1;}
    imageContainer2.scrollLeft = ((currentP2-1)*width).toString();
}

function next2(){
    if(currentP2>=2) { currentP2=1 }
    else {currentP2+=1;}
    imageContainer2.scrollLeft = ((currentP2-1)*width).toString();
}


//For slider 3
const imageContainer3 = document.getElementById("images3");
let currentP3 = 1;
function back3(){
    if(currentP3<=1) { currentP3=3 }
    else {currentP3-=1;}
    imageContainer3.scrollLeft = ((currentP3-1)*width).toString();
}

function next3(){
    if(currentP3>=3) { currentP3=1 }
    else {currentP3+=1;}
    imageContainer3.scrollLeft = ((currentP3-1)*width).toString();
}


//For slider 4
const imageContainer4 = document.getElementById("images4");
let currentP4 = 1;
function back4(){
    if(currentP4<=1) { currentP4=2 }
    else {currentP4-=1;}
    imageContainer4.scrollLeft = ((currentP4-1)*width).toString();
}

function next4(){
    if(currentP4>=2) { currentP4=1 }
    else {currentP4+=1;}
    imageContainer4.scrollLeft = ((currentP4-1)*width).toString();
}
