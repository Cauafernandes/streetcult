console.log("Javascript Iniciado."),$(".autoplay").slick({dots:!1,arrows:!0,infinite:!0,speed:1e3,autoplay:!0,fade:!0,cssEase:"linear",prevArrow:$(".prev"),nextArrow:$(".next")}),$.get({url:"produtos.json",dataType:"json",success:function(o){var n=$(".lancamentos");$.each(o,function(o,t){$("<li class='lancamento' data-type="+t.type+"><figure><img src='"+t.image+"'/></figure><h3>"+t.nome+"</h3></li>").appendTo(n)}),$(".filtro-es[data-action]").on("click",function(){var o=$(this).prop("id");$("#rmvflt").show(),this.id==o?($(".fltnt").hide(),$("#vmr").parent().hide(),$(".cupom-pR").hide(),$(".cupom-pR[data-type='"+o+"']").show(),$(".cupom-pR:nth-child(3n+1)").css("clear","none"),0==$("li.cupom-pR").is(":visible")&&($(".fltnt").show(),$(".fltnt").html("Nenhum cupom foi encontrado."))):($("li").show(),console.log("ERROR"))}),$("#rmvflt").on("click",function(){$(".fltnt").hide(),$("#vmr").parent().show(),$(".cupom-pR").show(),$(".cupom-pR:nth-child(1n+7)").hide(),$(".cupom-pR:nth-child(3n+1)").css("clear","both"),$("#rmvflt").hide()}),cupomoft()}});var cupomoft=function(){$(".vroft").on("click",function(){var o=setInterval(function(){FB.getLoginStatus(function(n){$("#fblgn").hasClass("fblgn-active")&&n.authResponse||n.authResponse?(window.location.replace("http://www.graodegente.com.br/?utm_source=cupomgraodegente"),clearInterval(o)):($(".fblgn").addClass("fblgn-active"),$(".closelgn").on("click",function(){$(".fblgn").removeClass("fblgn-active"),clearInterval(o)}))})},500)})};$(".scrlltp").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(window).on("scroll",function(){window.pageYOffset>400&&$(".scrlltp").show(),window.pageYOffset<400&&$(".scrlltp").hide()});