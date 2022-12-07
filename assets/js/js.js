// devoile la reponse au click

$(document).ready(function(){

    $('.faq ').click(function(){
        $('p', this).toggle();
    });

// ajouter des questions

    $('#ajout').click(function(){
        let question = $('#question').val();
        let reponse = $('#reponse').val();
        $('body').html($('body').html() + '<div class="faq"><h3>' + question + '</h3><p>' + reponse + '</p> </div');
    });

// animation image quand on click sur afficher

    $('button[name="sk8"]').click(function(){
        $('.image').css('width','0%')
        $('.image').css('display','block');
        $('.image img').css('display','block');
        $('.image').animate({display: "block",width:"100%",height:"auto"},5000);
    });

// reduction de l'image quand on click dessus

    $('.image img').click(function(){
        $(this).slideUp();
    })
});

/*$(document).bind('mousemove',function(e){
    $('#souris').text(e.pageX+","+e.pageY);
    $('#img_souri').css('top' , e.pageY);
    $('#img_souri').css('left',e.pageX);
});*/