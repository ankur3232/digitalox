//Sidebar menu slider
let burger = document.querySelector('.toggle');
let list = document.querySelector('.menu');
let close = document.querySelector('.close-menu');

burger.addEventListener('click', () =>{        
        list.classList.toggle('slide');
        close.classList.toggle('is-open');
    });
close.addEventListener('click', () =>{        
        list.classList.toggle('slide');
        close.classList.toggle('is-open');
    });
