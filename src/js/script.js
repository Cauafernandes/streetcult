console.log('Javascript Iniciado.');

//---------------------------------------------
// SLICK DOS FILTROS

$('.autoplay').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

//---------------------------------------------
// JSON CUPONS + FILTROS

$.get({
    url: "produtos.json",
    dataType: "json",
    success:function(data) {
        var lancamento = $(".lancamentos");
        $.each(data, function(idx, obj) {
            $("<li class='lancamento' data-type=" + obj.type + "><figure><img src='" + obj.image + "'/></figure><h3>" + obj.nome + "</h3></li>").appendTo(lancamento);
        });

        $('.filtro-es[data-action]').on("click", function(){
            var type = $(this).prop('id');
            $('#rmvflt').show();

            if (this.id == type) {
                $('.fltnt').hide();
                $('#vmr').parent().hide();
                $(".cupom-pR").hide();
                $(".cupom-pR[data-type='" + type + "']").show();
                $(".cupom-pR:nth-child(3n+1)").css("clear", "none");

                if($("li.cupom-pR").is(":visible") == false){
                    $('.fltnt').show();
                    $('.fltnt').html('Nenhum cupom foi encontrado.');
                }
            } else{
                $("li").show();
                console.log('ERROR');
            }
        });

        $('#rmvflt').on("click", function(){
                $('.fltnt').hide();
                $('#vmr').parent().show();
                $(".cupom-pR").show();
                $(".cupom-pR:nth-child(1n+7)").hide();
                $(".cupom-pR:nth-child(3n+1)").css("clear", "both");
                $('#rmvflt').hide();
        });
        cupomoft();
    }
});

//---------------------------------------------
// VERIFICAÇÃO BOTÃO CUPONS

// $(document).ready(function() {
//     if ($(".cupom-pR").length <= 6){
//         $('#vmr').hide();
//     } else {
//         $('#vmr').show();
//     }
// });

//---------------------------------------------
// MOSTRAR OS CUPONS

// $(document).ready(function() {
//     $('#vmr').on('click', function(){
//         $('.cupom-pR:nth-child(1n+7)').css('display', 'table');
//         $(this).parent().hide();
//     });
// });

//---------------------------------------------
// JANELA DO FACEBOOK

var cupomoft = function(){
    $('.vroft').on('click', function(){
        var timer = setInterval(function(){
            FB.getLoginStatus(function(response){
                if($('#fblgn').hasClass('fblgn-active') && response.authResponse || response.authResponse){
                    window.location.replace("http://www.graodegente.com.br/?utm_source=cupomgraodegente");
                    clearInterval(timer);
                } else {
                    $('.fblgn').addClass('fblgn-active');
                    $('.closelgn').on('click',function(){
                        $('.fblgn').removeClass('fblgn-active');
                        clearInterval(timer);
                    });
                }
            });
        }, 500);
    });
}

// FACEBOOK SCRIPT

// FB.init({
//     appId: '504091833259869',
//     xfbml: true,
//     version: 'v2.5'
//   });

// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/pt_BR/all.js#xfbml=1&version=v2.5&appId=504091833259869&autoLogAppEvents=1';
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//         statusChangeCallback(response);
//         console.log(response)
//     });
// }

// // PEGANDO USUÁRIO NO LOAD DA PAGE
// FB.getLoginStatus(function(response){
//     console.log('Verificando conexão');
//     if (response.authResponse) {
//         FB.api('/me', function(response) {
//             console.log('Bem vindo, ' + response.name + '.')
//         }); 
//     } else {
//         console.log('Não houve uma conexão.')
//         return;
//     }
// });

//---------------------------------------------
// ROLAGEM PARA O TOPO

$('.scrlltp').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$(window).on("scroll", function(){
    if(window.pageYOffset > 400){
    $('.scrlltp').show();
    } 
    
    if(window.pageYOffset < 400){
    $('.scrlltp').hide();
    }
});

// THUMBNAIL

initInstagramFeed = (function(){
    var igID = '6139852857'; // StreetCult013 \\
    var igClientID = '1aaecad4dc7a4e65b2c9e85dcfdb4fbb';
    var igClientSecret = '6c50e0ca84ff49eea9452eef0f1c9241';
    var count = 18; // Número de fotos || MÁX: 20 \\
    var accessToken = '6139852857.1aaecad.2f3878b935de435dba34b99d675c189d';
 $.ajax({
     type: "GET",
     dataType: "jsonp",
     cache: false,
     url: "https://api.instagram.com/v1/users/" + igID + "/media/recent/?access_token=" + accessToken + '&count=' + count,
     success: function(data) {
         for (var i = 0; i < count; i++) {
             $(".phtinst").append("<a target='_blank' href='" + data.data[i].link +"'><img src='" + data.data[i].images.thumbnail.url +"' /><span></span></a>");
         }
         console.log(data);
     },
     error: function(){
         console.log('Something went wrong', data);
     }
 });
}());