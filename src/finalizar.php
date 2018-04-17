<!DOCTYPE html>
<html lang="pt-br">
   <?php include("includes/head.php"); ?>
   <?php include("includes/header.php"); ?>
   <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="ttcar infcomp">
                        <h3>INFORMAÇÕES DE COMPRA</h3>
                        <span></span>
                    </div>
                    <div class="inffnz">
                        <p>Todos os nossos produtos estão disponiveis também em nossa loja fisíca, perante pode se encontrar o produto em falta no estoque.</p>
                        <p>OBS: Toda compra feita pelo site será enviado um e-mail até o comprador para decidir formas de pagamento e dados de entrega.</p>
                    </div>
                    <div class="ttcar">
                        <h3>FINALIZAR COMPRA</h3>
                        <span></span>
                    </div>
                    <div class="infoscliente">
                    <form id="infoscliente" method="post">
                        <ul class="userinfos">
                            <li>
                                <label>Nome</label>
                                <input type="text" name="user_nome" required/>
                            </li>
                            <li>
                                <label>Sobrenome</label>
                                <input type="text" name="user_sobrenome" required/>
                            </li>
                            <li>
                                <label>E-Mail</label>
                                <input type="email" name="mail" required/>
                            </li>
                            <li>
                                <label>CPF</label>
                                <input type="text" id="cpf" placeholder="000.000.000-00" name="user_cpf" required/>
                            </li>
                            <li>
                                <label>Celular</label>
                                <input type="text" id="cel" placeholder="(00) 00000-0000" name="user_cel" required/>
                            </li>
                        </ul>
                        <ul class="userend">
                            <li>
                                <label>Endereço</label>
                                <input type="text" name="end_rua" required/>
                            </li>
                            <li>
                                <label>Número</label>
                                <input type="text" name="end_num" required/>
                            </li>
                            <li>
                                <label>Complemento</label>
                                <input type="text" placeholder="Apartamento 21" name="end_comp"/>
                            </li>
                            <li>
                                <label>CEP</label>
                                <input type="text" id="cep" placeholder="00000-000" name="cep" required/>
                            </li>
                        </ul>
                        <input type="hidden" class="pedido" name="pedido"/>
                        <input type="hidden" class="numpedido" name="numero_pedido">
                        <div class="envped">
                            <button class="sendped">ENVIAR PEDIDO<i class="fas fa-arrow-right"></i></button>
                        </div>
                    </form>
                    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
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