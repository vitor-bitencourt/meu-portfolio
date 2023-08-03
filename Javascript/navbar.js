const nav = document.querySelector('.header');

window.addEventListener('scroll', () =>{
    
    if(window.scrollY > 0){
        nav.classList.remove('header');
        nav.classList.add('headerBg'); 
    }
    else if(window.scrollY === 0){
        nav.classList.remove('headerBg');
        nav.classList.add('header');
    }
         

});
