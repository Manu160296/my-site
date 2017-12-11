console.log('hola')
window.addEventListener('load', function() {
    var iconMenu = document.querySelector('.icon-menu');
    var disabledMenu = document.querySelector('.disabled-menu');
    iconMenu.addEventListener('click' , showMenu);
    
    function showMenu(event) {
        if(event) {
            console.log(event.target)
            disabledMenu.classList.toggle('disabled-menu') ;
            disabledMenu.classList.toggle('enabled-menu');
        }/*else  {
            disabledMenu.classList.toggle('enabled-menu') ;
            disabledMenu.classList.toggle('class','disabled-menu')
        } */
       
    }



});
