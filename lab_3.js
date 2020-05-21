$(function(){
    $('#select_theme').change(function(){
        if($('#select_theme').val() == 1)
        {
            $('body').css('background',"white");
            $('body').css('color',"black");
        }
        if($('#select_theme').val() == 2)
        {
            $('body').css('background',"black");
            $('body').css('color',"white");
        }
    });
});
    