console.log("Javascript Iniciado."),$(".autoplay").slick({dots:!1,arrows:!0,infinite:!0,speed:1e3,autoplay:!0,fade:!0,cssEase:"linear",prevArrow:$(".prev"),nextArrow:$(".next")}),$.get({url:"produtos.json",dataType:"json",success:function(n){var t=$(".lancamentos");$.each(n,function(n,o){$("<li class='lancamento' data-type="+o.type+"><figure><img src='"+o.image+"'/></figure><h3>"+o.nome+"</h3></li>").appendTo(t)}),$(".filtro-es[data-action]").on("click",function(){var n=$(this).prop("id");$("#rmvflt").show(),this.id==n?($(".fltnt").hide(),$("#vmr").parent().hide(),$(".cupom-pR").hide(),$(".cupom-pR[data-type='"+n+"']").show(),$(".cupom-pR:nth-child(3n+1)").css("clear","none"),0==$("li.cupom-pR").is(":visible")&&($(".fltnt").show(),$(".fltnt").html("Nenhum cupom foi encontrado."))):($("li").show(),console.log("ERROR"))}),$("#rmvflt").on("click",function(){$(".fltnt").hide(),$("#vmr").parent().show(),$(".cupom-pR").show(),$(".cupom-pR:nth-child(1n+7)").hide(),$(".cupom-pR:nth-child(3n+1)").css("clear","both"),$("#rmvflt").hide()}),cupomoft()}});var cupomoft=function(){$(".vroft").on("click",function(){var n=setInterval(function(){FB.getLoginStatus(function(t){$("#fblgn").hasClass("fblgn-active")&&t.authResponse||t.authResponse?(window.location.replace("http://www.graodegente.com.br/?utm_source=cupomgraodegente"),clearInterval(n)):($(".fblgn").addClass("fblgn-active"),$(".closelgn").on("click",function(){$(".fblgn").removeClass("fblgn-active"),clearInterval(n)}))})},500)})};$(".scrlltp").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(window).on("scroll",function(){window.pageYOffset>400&&$(".scrlltp").show(),window.pageYOffset<400&&$(".scrlltp").hide()}),initInstagramFeed=void $.ajax({type:"GET",dataType:"jsonp",cache:!1,url:"https://api.instagram.com/v1/users/6139852857/media/recent/?access_token=6139852857.1aaecad.2f3878b935de435dba34b99d675c189d&count=18",success:function(n){for(var t=0;t<18;t++)$(".phtinst").append("<a target='_blank' href='"+n.data[t].link+"'><img src='"+n.data[t].images.thumbnail.url+"' /><span></span></a>");console.log(n)},error:function(){console.log("Something went wrong",data)}});