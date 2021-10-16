console.log('hello word');


// menu mobile open
const Hamburguer = document.querySelectorAll ('.iconhamburger')[0];
const Menu = document.querySelectorAll ('.nav')[0];

Hamburguer.addEventListener('click', function(){
    if (Menu.classList.contains('navopen')){
        Menu.classList.remove('navopen');
    }

    else{
        Menu.classList.add('navopen');
    }
});


Menu.addEventListener('click', function(){
    if (Menu.classList.contains('navopen')){
        Menu.classList.remove('navopen');
    }

    else{
        Menu.classList.add('navopen');
    }
});


window.addEventListener('click', function(e){
    console.log((e.target));
    if(e.target !== Hamburguer){
        Menu.classList.remove('navopen');
    }

    else{
        
    }
    
})
