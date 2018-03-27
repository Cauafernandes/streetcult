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

var lista;
function Disponibility(obj1) {
    return obj1.tag === this.produto;
}

$.get({
    url: "produtos.json",
    dataType: "json",
    success:function(data) {
        var lancamentos = $(".lancamentos");
        var produtos = $(".produtos");
        lista = data;
        $.each(data, function(idx, obj) {
            $("<li class='produto view' data-id='"+ idx +"' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3 class='nmprdt'>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(lancamentos);
            $("<li class='produto view' data-id='"+ idx +"' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3 class='nmprdt'>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
        });

            $('.type').on('click', function(){
                var classe = $(this).attr('class').split(/\s+/)[0];
                var tag = $(this).attr('data-tag').split(',');
                var menu = $(this).find('p').html();
    
                $(produtos).find('li').remove();
                $('#category').html(menu).addClass('filtro');
                $('.lmpflt').fadeIn("slow");

                let doc = lista.find(Disponibility, {produto: tag});
                console.log(tag);

                if(doc == undefined){
                    // $(produtos).html('<li>Nenhum produto encontrado.</li>');
                    console.log('Nenhum produto encontrado.');
                }

                lista.forEach((obj, idx) => {
                switch(classe){
                    case 'camisa':
                        if(obj.produto == 'camisa'){
                            $("<li class='produto view' data-id='"+ idx +"' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                            ProdutoInfo();
                        }
                    break;
    
                    case 'bermuda':
                        if(obj.produto == 'bermuda'){
                            $("<li class='produto view' data-id='"+ idx +"' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                            ProdutoInfo();
                        }
                    break;
    
                    case 'mochila':
                        if(obj.produto == 'mochila' || obj.produto == 'pochete'){
                            $("<li class='produto view' data-id='"+ idx +"' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                            ProdutoInfo();
                        }
                    break;
    
                    case 'acessorios':
                        if(obj.produto == 'pochete' || obj.produto == 'bone'){
                            $("<li class='produto view' data-id='"+ idx +"' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
                            photosNew();
                            ProdutoInfo();
                        }
                    break;
                }
            });
        });

        $('.lmpflt').unbind('click').bind('click', function(){
            $(produtos).find('li').remove();
            $('.lmpflt').css("display", "none");
            $('#category').html('PRODUTOS').removeClass('filtro');
            
            lista.forEach((obj, idx) => {
                $("<li class='produto view' data-id='"+ idx +"' data-type=" + obj.lancamento + "><figure class='frente'><img src='" + obj.image + "'/></figure><figure class='costas' style='display:none;'><img src='" + obj.imagecostas + "'/></figure><h3>" + obj.nome + "</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(produtos);
            });
            photosNew();
            ProdutoInfo();
        });

        // FUNCTIONS

        function photosNew(){
            $('.view').mouseenter(function(){
                $(this).find('.frente').css('display', 'none');
                $(this).find('.costas').css('display', 'block');

                if($(this).find('.costas').find('img').attr('src') == ''){
                    $(this).find('.frente').css('display', 'block');
                    $(this).find('.costas').css('display', 'none');
                }
            }).mouseleave(function(){
                $(this).find('.frente').css('display', 'block');
                $(this).find('.costas').css('display', 'none');
            });

            lista.forEach((obj, idx) => {
                if(!obj.lancamento){
                    $(lancamentos).find(".produto[data-type='" + obj.lancamento + "']").remove();
                } else{
                    $(".produto[data-type='" + obj.lancamento + "']").addClass('lancamento')
                }
            });
        }
        photosNew();

        function ProdutoInfo(){
            $('.produto').unbind('click').bind('click', function(){
                var id = $(this).attr('data-id');
                var tamanho = lista[id].tamanho.split(',');
                var cores = lista[id].cor.split(',');
                
                // REMOVES
                $('.opcaopdt').remove();

                tamanho.forEach((tamanho) => {
                    $('.tamanhoproduto').append('<option class="opcaopdt" value="' + tamanho + '">' + tamanho + '</option>');
                });

                cores.forEach((cor) => {
                    $('.coresproduto').append('<option class="opcaopdt" value="' + cor + '">' + cor + '</option>');
                });

                $('.telaproduto').addClass('open');
                $('.nomeproduto').html(lista[id].nome);
                $('.marcaproduto').html(lista[id].type);
                $('.imageproduto').prop('src', lista[id].image);
                $('.btncomprar').attr('data-id', id);

                $('.btncomprar').unbind('click').bind('click', function(){
                    var carrinho = sessionStorage.getItem('Shopping');

                    if(carrinho == null){
                        sessionStorage.setItem("Shopping", id);
                    } else{
                        sessionStorage.setItem("Shopping", carrinho + ',' + id);
                    }
                });
            });
        }
        ProdutoInfo();
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
    $('.telaproduto').removeClass('open');
});

// BOTÃO DO CARRINHO

$(document).ready(function(){
    if(window.location.href == "http://localhost:9090/streetcult/src/carrinho.php"){
        var idprodutos = sessionStorage.getItem('Shopping');
        var ids = idprodutos.split(',');
        var carrinho = $('.carrinhoprodutos');

        ids.forEach((id) => {
            $('<li class="carproduto"><figure><img src=' + lista[id].image + ' alt=""/></figure><h3>' + lista[id].nome + '</h3></li>').appendTo(carrinho);
        });
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