<!DOCTYPE html>
<html lang="pt-br">
   <?php include("includes/head.php"); ?>
   <?php include("includes/header.php"); ?>
   <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="gerarproduto">
                        <div class="ttcar">
                            <h3>GERADOR DE PRODUTOS</h3>
                            <span></span>
                        </div>
                        <form>
                            <label>Nome do Produto</label>
                            <input type="text" placeholder="Camisa Chronic Sweet Girl"/>
                            <label>Cores</label>
                            <input type="text" placeholder="Azul,Branco,Preto,Vermelho"/>
                            <label>Tamanhos</label>
                            <input type="text" placeholder="GG,G,M,P,PP"/>
                            <label>Marca</label>
                            <input type="text" placeholder="Chronic"/>
                            <label>Imagens</label>
                            <input type="text" value="assets/img/" placeholder="Frente"/>
                            <input type="text" value="assets/img/" placeholder="Costas"/>
                            <button>GERAR</button>
                        </form>
                    </div>
                    <table class="listagemprodutos" border='0' cellpadding='0' cellspacing='0' width='100%'>
                        <tr>
                            <th>ID</th>
                            <th>IMAGEM</th>
                            <th>NOME</th>
                            <th>CORES</th>
                            <th>TAMANHO</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
   </main>
   <script src="js/scriptadmin.js"></script>
<?php include("includes/footer.php"); ?>