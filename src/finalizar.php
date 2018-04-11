<!DOCTYPE html>
<html lang="pt-br">
   <?php include("includes/head.php"); ?>
   <?php include("includes/header.php"); ?>
   <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="inffnz">
                        <p>Todos os nossos produtos estão disponiveis também em nossa loja fisíca, perante pode se encontrar o produto em falta no estoque.</p>
                        <p>OBS: Toda compra feita pelo site será enviado um e-mail até o comprador para decidir formas de pagamento e dados de entrega.</p>
                    </div>
                    <div class="ttcar">
                        <h3>FINALIZAR COMPRA</h3>
                        <span></span>
                    </div>
                    <div class="infoscliente">
                    <form id="myform" method="post">
                        <label>E-Mail</label>
                        <input type="text" name="reply_to" />
                        <label>Nome Completo</label>
                        <input type="text" name="from_name" />
                        <label>Pedido</label>
                        <ul class="caruser">
                        </ul>
                        <br><br>
                        <button>Send</button>
                    </form>
                    <!-- <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> -->
                    <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
                    <script type="text/javascript">
                    (function(){
                        emailjs.init("user_PjVsZDGmiNaRSnULUeUkZ");
                    })();
                    </script>
                    </div>
                </div>
            </div>
        </div>
   </main>
<?php include("includes/footer.php"); ?>