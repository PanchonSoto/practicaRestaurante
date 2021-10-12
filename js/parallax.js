$(document).ready(()=>{

    $(window).scroll(function(){
        let windowWidth = $(window).width();

        if(windowWidth > 800 && $(window).scrollTop() <= 490){
            let scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(function(){
        let windowWidt= $(window).width();
        if(windowWidt < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });

});