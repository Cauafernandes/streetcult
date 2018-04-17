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