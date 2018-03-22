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
// LANÇAMENTOS

$.get({
    url: "produtos.json",
    dataType: "json",
    success:function(data) {
        var lancamentos = $(".lancamentos");
        var produtos = $(".produtos");
        $.each(data, function(idx, obj) {
            $("<li class='produto view' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3 class='nmprdt'>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(lancamentos);
            $("<li class='produto view' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3 class='nmprdt'>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);

            $('.type').on('click', function(){
                var classe = $(this).attr('class').split(/\s+/)[0];
                var menu = $(this).find('p').html();

                $('#category').html(menu).addClass('filtro');
                $('.lmpflt').fadeIn("slow");

                switch(classe){
                    case 'camisas':
                        if(obj.produto == 'camisa'){
                            $("<li class='produto view' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                        }
                    break;

                    case 'bermudas':
                        if(obj.produto == 'bermuda'){
                            $("<li class='produto view' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                            console.log('esse é o length')
                        }
                    break;

                    case 'mochilas':
                        if(obj.produto == 'mochila' || obj.produto == 'pochete'){
                            $("<li class='produto view' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                        }
                    break;

                    case 'acessorios':
                        if(obj.produto == 'pochete' || obj.produto == 'bone'){
                            $("<li class='produto view' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                        }
                    break;
                }
            });

            $('.lmpflt').on('click', function(){
                $('.lmpflt').css("display", "none");
                $('#category').html('PRODUTOS').removeClass('filtro');
                $("<li class='produto view' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                photosNew();
            });

            function photosNew(){
                $('.view').mouseenter(function(){
                    $(this).find('.frente').css('display', 'none')
                    $(this).find('.costas').css('display', 'block')
    
                    if($(this).find('.costas').find('img').attr('src') == ''){
                        $(this).find('.frente').css('display', 'block')
                        $(this).find('.costas').css('display', 'none')
                    }
                }).mouseleave(function(){
                    $(this).find('.frente').css('display', 'block')
                    $(this).find('.costas').css('display', 'none')
                });
    
                if(!obj.lancamento){
                    $(lancamentos).find(".produto[data-type='" + obj.lancamento + "']").remove();
                } else{
                    $(".produto[data-type='" + obj.lancamento + "']").addClass('lancamento')
                }
            }
            photosNew();
        });

        $('.produto').on('click', function(){
            $('.telaproduto').css('left', '0');
        });
    }
});

// REMOVER PRODUTOS

$('.type').on('click', function(){
    $('.produtos').find('li').remove();
});

$('.lmpflt').on('click', function(){
    $('.produtos').find('.produto').remove();
});

// ROLAGEM

$('.scroll').on('click', function(){
    $("html, body").animate({ scrollTop: 1400 }, 600);
    return false;
});

$('.scrolllnc').on('click', function(){
    $("html, body").animate({ scrollTop: 800 }, 600);
    return false;
});

// JANELA DO PRODUTO

$('.close').on('click', function(){
    $('.telaproduto').css('left', '-120%');
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
     },
     error: function(){
         console.log('Something went wrong', data);
     }
 });
}());

// SLICK NOVIDADES

$(document).ready(function(){
    if(('.novidade').lenght != 0){
        $('.novpdslk').slick({
            //infinite: true,
            arrows:true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            prevArrow: $('.prevnv'),
            nextArrow: $('.nextnv')
        });
    } else{
        $('.novidades').remove();
        $('.catpr').remove();
    }
})

// MASK

$('#cpf').mask('000.000.000-00', {reverse: true});