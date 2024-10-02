var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var topButton = document.getElementById("topButton");

window.onscroll = function(e){
    var scrollTop = window.pageYOffset
    if(scrollTop>=100){
       nav.style.height = '75px';
       nav.style.backgroundColor = '#121212';
       logo.style.width = '320px';
       nav.style.fontSize = '1.25rem';
     
    }
    else{
        nav.style.height = '100px';
        nav.style.backgroundColor = '#121212';
        logo.style.width = '450px';
        nav.style.fontSize = '1.5rem';
    } 
    
    if(scrollTop>500){
        topButton.style.display = "flex";
    }
    else{
        topButton.style.display = "none";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    var scrollTop = window.pageYOffset
    console.log(scrollTop)
    if(scrollTop>=100){
       nav.style.height = '75px';
       nav.style.backgroundColor = '#121212';
       logo.style.width = '320px';
       nav.style.fontSize = '1.25rem';
        
    }
    else{
        nav.style.height = '100px';
        nav.style.backgroundColor = '#121212';
        logo.style.width = '370px';
        nav.style.fontSize = '1.5rem';
    }

    if(scrollTop>500){
        topButton.style.display = "flex";
    }
    else{
        topButton.style.display = "none";
    }
});


var menu = document.getElementById("menu");

function closeMenu(){
    menu.style.right = '-200px';
}

function openMenu(){
    menu.style.right = '0px';
}