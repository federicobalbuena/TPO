window.addEventListener("load", () =>{
    $(document).ready(function() {
        console.log("listo");
    });

});

jQuery('document').ready(function($) {
    var menuBtn = $('.menu-icon');
    menu = $('.nav ul');

    menuBtn.click(function() {

        if(menu.hasClass('show')) {
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });
});