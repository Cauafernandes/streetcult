console.log("Javascript Iniciado."),$(".autoplay").slick({dots:!1,arrows:!0,infinite:!0,speed:1e3,autoplay:!0,fade:!0,cssEase:"linear",prevArrow:$(".prev"),nextArrow:$(".next")}),$.get({url:"produtos.json",dataType:"json",success:function(s){var a=$(".lancamentos"),e=$(".produtos");$.each(s,function(s,o){function n(){$(".view").mouseenter(function(){$(this).find(".frente").css("display","none"),$(this).find(".costas").css("display","block"),""==$(this).find(".costas").find("img").attr("src")&&($(this).find(".frente").css("display","block"),$(this).find(".costas").css("display","none"))}).mouseleave(function(){$(this).find(".frente").css("display","block"),$(this).find(".costas").css("display","none")}),o.lancamento?$(".produto[data-type='"+o.lancamento+"']").addClass("lancamento"):$(a).find(".produto[data-type='"+o.lancamento+"']").remove()}$("<li class='produto view' data-type="+o.lancamento+"><figure class='frente'><img src='"+o.image+"'/></figure><figure class='costas' style='display:none;'><img src='"+o.imagecostas+"'/></figure><h3>"+o.nome+"</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(a),$("<li class='produto view' data-type="+o.lancamento+"><figure class='frente'><img src='"+o.image+"'/></figure><figure class='costas' style='display:none;'><img src='"+o.imagecostas+"'/></figure><h3>"+o.nome+"</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(e),$(".type").on("click",function(){var s=$(this).attr("class").split(/\s+/)[0],a=$(this).find("p").html();switch($("#category").html(a).addClass("filtro"),$(".lmpflt").fadeIn("slow"),s){case"camisas":"camisa"==o.produto&&($("<li class='produto view' data-type="+o.lancamento+"><figure class='frente'><img src='"+o.image+"'/></figure><figure class='costas' style='display:none;'><img src='"+o.imagecostas+"'/></figure><h3>"+o.nome+"</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(e),n());break;case"bermudas":"bermuda"==o.produto&&($("<li class='produto view' data-type="+o.lancamento+"><figure class='frente'><img src='"+o.image+"'/></figure><figure class='costas' style='display:none;'><img src='"+o.imagecostas+"'/></figure><h3>"+o.nome+"</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(e),n());break;case"mochilas":"mochila"!=o.produto&&"pochete"!=o.produto||($("<li class='produto view' data-type="+o.lancamento+"><figure class='frente'><img src='"+o.image+"'/></figure><figure class='costas' style='display:none;'><img src='"+o.imagecostas+"'/></figure><h3>"+o.nome+"</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(e),n());break;case"acessorios":"pochete"!=o.produto&&"bone"!=o.produto||($("<li class='produto view' data-type="+o.lancamento+"><figure class='frente'><img src='"+o.image+"'/></figure><figure class='costas' style='display:none;'><img src='"+o.imagecostas+"'/></figure><h3>"+o.nome+"</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(e),n())}}),$(".lmpflt").on("click",function(){$(".lmpflt").css("display","none"),$("#category").html("PRODUTOS").removeClass("filtro"),$("<li class='produto view' data-type="+o.lancamento+"><figure class='frente'><img src='"+o.image+"'/></figure><figure class='costas' style='display:none;'><img src='"+o.imagecostas+"'/></figure><h3>"+o.nome+"</h3><span class='lnc'>LANÇAMENTO</span></li>").appendTo(e),n()}),n()})}}),$(".type").on("click",function(){$(".produtos").find("li").remove()}),$(".lmpflt").on("click",function(){$(".produtos").find(".produto").remove()}),$(".scroll").on("click",function(){return $("html, body").animate({scrollTop:1400},600),!1}),$(".scrolllnc").on("click",function(){return $("html, body").animate({scrollTop:800},600),!1}),$(".scrlltp").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(window).on("scroll",function(){window.pageYOffset>400&&$(".scrlltp").show(),window.pageYOffset<400&&$(".scrlltp").hide()}),initInstagramFeed=void $.ajax({type:"GET",dataType:"jsonp",cache:!1,url:"https://api.instagram.com/v1/users/6139852857/media/recent/?access_token=6139852857.1aaecad.2f3878b935de435dba34b99d675c189d&count=18",success:function(s){for(var a=0;a<18;a++)$(".phtinst").append("<a target='_blank' href='"+s.data[a].link+"'><img src='"+s.data[a].images.thumbnail.url+"' /><span></span></a>")},error:function(){console.log("Something went wrong",data)}}),$(document).ready(function(){0!=".novidade".lenght?$(".novpdslk").slick({arrows:!0,slidesToShow:4,slidesToScroll:2,autoplay:!0,prevArrow:$(".prevnv"),nextArrow:$(".nextnv")}):($(".novidades").remove(),$(".catpr").remove())}),$("#cpf").mask("000.000.000-00",{reverse:!0});