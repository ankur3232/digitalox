//Sidebar menu slider
let burger = document.querySelector('.toggle');
let list = document.querySelector('.menu');
let close = document.querySelector('.close-menu');
let upperLine = document.querySelector('.ham-line1');
let midLine = document.querySelector('.ham-line2');
let lowerLine = document.querySelector('.ham-line3');

burger.addEventListener('click', () =>{        
        list.classList.toggle('slide');
        close.classList.toggle('is-open');
        upperLine.classList.toggle('upanim');
        midLine.classList.toggle('midanim');
        lowerLine.classList.toggle('downanim');
    });
close.addEventListener('click', () =>{        
        list.classList.toggle('slide');
        close.classList.toggle('is-open');
        upperLine.classList.toggle('upanim');
        midLine.classList.toggle('midanim');
        lowerLine.classList.toggle('downanim');
    });

