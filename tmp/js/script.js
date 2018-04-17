console.log('Javascript Iniciado.');

//---------------------------------------------
// [FILTROS] SLICK

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

            if($(".produtos").find('.produto').is(':visible') == false){
                $(produtos).html('<li>Nenhum produto encontrado.</li>');
            }
        });

        $('.lmpflt').unbind('click').bind('click', function(){
            $(produtos).find('li').remove();
            $('.lmpflt').css("display", "none");
            $('#vmr').show();
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
                
                // [PRODUTO] INFORMAÇÕES
                $('.close').on('click', function(){
                    $('.telaproduto').removeClass('open');
                });

                // [PRODUTO] ADD/REMOVE COR & TAMANHO
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
                $('.imageprodutocostas').prop('src', lista[id].imagecostas);
                $('.btncomprar').attr('data-id', id);

                if(lista[id].lancamento == true){
                    $('.prodinformacoes').append('<li class="lancamentoproduto"><i class="fas fa-check check"></i>Lançamento</li>');

                    if($('.lancamentoproduto').length == 2){
                        $('.lancamentoproduto:last-child').remove();
                    }

                } else{
                    $('.lancamentoproduto').remove();
                }

                if( lista[id].imagecostas == ''){
                    $('.imageprodutocostas').parent().hide();
                    $('.produtoimages').css('max-width', 'initial').css('width', 'initial');
                } else{
                    $('.imageprodutocostas').parent().show();
                    $('.produtoimages').css('max-width', '370px').css('width', '100%');
                }

                $('.btncomprar').unbind('click').bind('click', function(){
                    var carrinho = localStorage.getItem('Shopping');
                    var selcorprod = $(".coresproduto option:selected").val();
                    var seltamprod = $(".tamanhoproduto option:selected").val();
                    var qtd = 1;

                    var produtocliente = {id: id, nome: lista[id].nome, cor: selcorprod, tamanho: seltamprod, quantidade: qtd};

                    if(carrinho == null || carrinho == undefined){
                        produtocliente = JSON.stringify(produtocliente);
                        localStorage.setItem("Shopping", "[" + produtocliente + "]");
                        var listaprodutos = localStorage.getItem('Shopping');
                        listaprodutos = JSON.parse(listaprodutos);
                        $('.prodadd').fadeIn("fast");
                        setTimeout(function(){
                            $('.prodadd').fadeOut("slow");
                        }, 1500);
                    } else{
                        carrinho = JSON.parse(carrinho);
                        var deletarIdx = undefined;
                        var deletarProd = undefined;
                        var qtdNova = 1;

                        carrinho.forEach((prodatualizar, idx) => {
                            if(prodatualizar.id === produtocliente.id && prodatualizar.cor === produtocliente.cor && prodatualizar.tamanho === produtocliente.tamanho){
                                prodatualizar.quantidade++;
                                deletarIdx = idx;
                                qtdNova = prodatualizar.quantidade;
                            }
                        });

                        if(!isNaN(deletarIdx)){
                            carrinho = carrinho.splice(deletarIdx[0]);
                            produtocliente.quantidade = qtdNova;
                        } else{
                            carrinho.push(produtocliente);
                        }
        
                        carrinho = JSON.stringify(carrinho);
                        localStorage.setItem("Shopping", carrinho);
                        carrinho = JSON.parse(carrinho);

                        $('.prodadd').fadeIn("fast");
                        setTimeout(function(){
                            $('.prodadd').fadeOut("slow");
                        }, 1500);
                        $('.carqntd').html(carrinho.length);
                    }
                });
            });
        }
        ProdutoInfo();
    }
});


// [CARRINHO] QUANTIDADE
$(document).ready(function(){
    var carrinho = localStorage.getItem('Shopping');

    if(carrinho != null || carrinho != undefined){
        carrinho = JSON.parse(carrinho);
        $('.carqntd').html(carrinho.length);
    }
});

// [MENU] ROLAGEM
$('.scroll').on('click', function(){
    $("html, body").animate({ scrollTop: 1380 }, 600);
    return false;
});

$('.scrolllnc').on('click', function(){
    $("html, body").animate({ scrollTop: 800 }, 600);
    return false;
});

// [PRODUTO] LIMPAR FILTRO
$('.type').on('click', function(){
    $('.produtos').find('li').remove();
    $('#vmr').hide();
});

$('.lmpflt').on('click', function(){
    $('.produtos').find('.produto').remove();
});

// [CARRINHO] BOTÃO 
$(document).ready(function(){
    if(window.location.href.indexOf('/carrinho.php') != "-1"){
        var listaprodutos = localStorage.getItem('Shopping');
        listaprodutos = JSON.parse(listaprodutos);
        $('.carshop').remove();

        if(listaprodutos == null || listaprodutos == ''){
            $('.carrinhoprodutos,.slickpedido').html('Nenhum produto encontrado.');
            $('.carrinhoprodutos').css('min-height','457px');
        } else{
            listaprodutos.forEach((idprodsel, idx) => {
                $('<li class="carproduto" data-id='+ idprodsel.id +' data-idx='+ idx +'><figure><img src=' + lista[idprodsel.id].image + ' alt=""/></figure><h3>' + lista[idprodsel.id].nome + '</h3><p>'+ idprodsel.cor +'</p><p>'+ idprodsel.tamanho +'</p><p><span class="quantidadeproduto">' + idprodsel.quantidade + '</span></p><div class="qntarrow"><div class="arrow-up-count add" data-orientation="plus"></div><div class="arrow-down-count remove" data-orientation="minus"></div></div><p class="removeproduct"><i class="far fa-trash-alt"></i>REMOVER PRODUTO</p></li>').appendTo($('.carrinhoprodutos'));
                $('<li class="carslick" data-id='+ idprodsel.id +' data-idx='+ idx +'><figure><img src=' + lista[idprodsel.id].image + ' alt=""/></figure></li>').appendTo($('.slickpedido'));
            });    
            $('.carfnz').show();
        }

        // [CARRINHO] REMOVER PRODUTO
        $('.removeproduct').on('click', function(){
            $(this).parent().remove();
            listaprodutos.forEach((prodsel, idx) => {
                var idprodcar = $(this).parent().attr('data-id');
                var prodIdx = $(this).parent().attr('data-idx');

                if(idprodcar == prodsel.id && prodIdx == idx){
                    var deleteproduct = listaprodutos.splice(prodIdx, 1);
                    var productlist = JSON.stringify(listaprodutos);
                    localStorage.setItem("Shopping", productlist);
                    $('.carproduto').attr('data-idx', prodsel.idx);
                    
                    $('.proddel').fadeIn("fast");
                    setTimeout(function(){
                        $('.proddel').fadeOut("slow");
                    }, 1500);

                    if(listaprodutos.length == 0){
                        localStorage.clear();
                    }

                } else{
                    return;
                }
            });
            setTimeout(function(){
                location.reload();
            }, 800);
        });

        // [CARRINHO] AUMENTAR/DIMINUIR QUANTIDADE
        $(".add, .remove").on("click", function() {
            var qtd = parseInt($(this).parent().parent().find('.quantidadeproduto').text());
            var carrinho = localStorage.getItem('Shopping');
            var carIdx = $(this).parent().parent().attr('data-idx');
            carrinho = JSON.parse(carrinho);
      
            if($(this).attr('data-orientation') == 'plus'){
                carrinho.forEach((prodatualizar, idx) => {
                    if(carIdx == idx){
                        qtd++;
                        prodatualizar.quantidade++
                        carrinho = JSON.stringify(carrinho);
                        localStorage.setItem('Shopping', carrinho);
                    }
                });
            }else{
                carrinho.forEach((prodatualizar, idx) => {
                    if(carIdx == idx){
                        qtd--;
                        if(qtd<1){
                            qtd = 1;
                            prodatualizar.quantidade = 2;
                        } 
                        prodatualizar.quantidade--;
                        carrinho = JSON.stringify(carrinho);
                        localStorage.setItem('Shopping', carrinho);
                    }
                });
            }
    
            if(qtd<1) qtd = 1;                    
            $(this).parent().parent().find('.quantidadeproduto').text(qtd);
        });
    }
});

// [CARRINHO] FINALIZAR COMPRA
$(document).ready(function(){
    var carrinho = localStorage.getItem('Shopping');
    carrinho = JSON.parse(carrinho);
    if(window.location.href.indexOf('finalizar') != "-1"){

        var numped = Math.floor((Math.random() * 100000) + 1);
        var pedidocar;

        $('#cpf').mask('000.000.000-00', {reverse: true});
        $('#cep').mask('00000-000', {reverse: true});
        $('#cel').mask('(00) 00000-0000',);
        $('.numpedido').val(numped);

        if(carrinho == null){
            window.location.replace("carrinho.php");

        } else{
            // [MAIL] GERAR PRODUTOS DO CARRINHO
            var pedidos = "";
            carrinho.forEach((obj, idx) => {
                pedidos+= "<li><b style='color:#b51919'>Produto:</b> " + obj.nome + " <br><b style='color:#b51919'>Cor:</b> " + obj.cor + " <br><b style='color:#b51919'>Tamanho:</b> " + obj.tamanho  + " <br><b style='color:#b51919'>Quantidade:</b> " + obj.quantidade + "</li><br>";
            });
            $('.pedido').val("<ul style='padding:15px 30px 0;color:#000000;background-color:#efefef'>" + pedidos + "</ul>");


            // [MAIL] ENVIAR E-MAIL
            var myform = $("form#infoscliente");
            myform.submit(function(event){
            event.preventDefault();
            var service_id = "caua_fernandes";
            var template_id = "streetcultcompras";

            myform.find(".sendped").text("Enviando...");
            emailjs.sendForm(service_id,template_id,"infoscliente")
                .then(function(){
                    alert("Pedido enviado!");
                myform.find(".sendped").remove();
                window.location.replace("index.php");
                localStorage.clear();
                }, function(err) {
                alert("Erro ao enviar pedido!\r\n Response:\n " + JSON.stringify(err));
                myform.find("button").text("ENVIAR NOVAMENTE");
                });
            return false;
            });
        }
    }
});

$('.carfnz').find("button").on('click', function(){
    var carrinho = localStorage.getItem('Shopping');

    if(carrinho == null){
        alert('Adicione um item ao carrinho');
    } else{
        window.location.replace("finalizar.php");
    }
});

$('.menumob').on('click', function(){
    console.log('teste');
<<<<<<< HEAD
    $('.navmobile').css('left', '0').css('transition', '0.5s all');

    $('.menumobclose').on('click', function(){
        console.log('fechei');
=======
    $('.navmobile').css('left', '0');

    $('.menumobclose').on('click', function(){
>>>>>>> 10688a91ab227a328344ca247d10337c8b999e6f
        $('.navmobile').css('left', '-120%');
    });
});

//---------------------------------------------
// VERIFICAÇÃO BOTÃO PRODUTOS

$(document).ready(function() {
    if ($('.produtos').find(".produto").length <= 11){
        $('#vmr').hide();
    } else {
        $('#vmr').show();
    }
});

//---------------------------------------------
// MOSTRAR OS PRODUTOS

$(document).ready(function() {
    $('#vmr').on('click', function(){
        $('.produtos').find('.produto:nth-child(1n+13)').css('display', 'table');
        $(this).hide();
    });
});

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
    $('.scrlltp').fadeIn('fast');
    } 
    
    if(window.pageYOffset < 400){
    $('.scrlltp').fadeOut('fast');
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
             $(".phtinst").append("<a class='fotoinst' target='_blank' href='" + data.data[i].link +"'><img src='" + data.data[i].images.thumbnail.url +"' /><span></span></a>");
         }
     },
     error: function(){
         console.log('Something went wrong', data);
     }
 });
}());

// SLICK NOVIDADES

$(document).ready(function(){
    var lancamentosver = $('.lancamentos').find('.lancamento').length;

    if(lancamentosver != 0){
        $('.novpdslk').slick({
            arrows:true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            infinite:false,
            prevArrow: $('.prevnv'),
            nextArrow: $('.nextnv'),
            responsive:[
                {
                    breakpoint: 780,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ] 
        });
    } else{
        $('.lancamentos').remove();
        $('.catpr').remove();
    }

    $('.slickpedido').slick({
        infinite: true,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        prevArrow: $('.prevnv'),
        nextArrow: $('.nextnv')
    });
});
console.log('JavaScript ADMIN...');

//--------------------------------------------------------------------------------------

var lista;
var prodidx;
$.get({
    url: "produtos.json",
    dataType: "json",
    success:function(data) {
        lista = data;
        lista.forEach((produto, idx) => {
            prodidx = idx;
            $('.listagemprodutos').append("<tr class='produtoadmin' data-id=" + idx + "><td>"+ idx +"</td><td><figure><img src='" + produto.image + "'/></figure></td><td>" + produto.nome + "</td><td><select class='coresadmin'></select></td><td><select class='tamanhosadmin'></select></td></tr>")

            var id = $('.produtoadmin:last-child').attr('data-id');
            var tamanho = produto.tamanho.split(',');
            var cores = produto.cor.split(',');
    
            if(id == prodidx){
                console.log('Entrou no IF');
                tamanho.forEach((tamanho) => {
                    $('.tamanhosadmin').append('<option class="opcaopdt" value="' + tamanho + '">' + tamanho + '</option>');
                });
    
                cores.forEach((cor) => {
                    $('.coresadmin').append('<option class="opcaopdt" value="' + cor + '">' + cor + '</option>');
                });
            }
        });
    }
});