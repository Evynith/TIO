<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aseguradora - Vehículos</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/javascript.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <!-- fuente awesome incluida con el metodo mostrado en una LTs -->
</head>

<body>

    <div class="contenedor">

    <?php include('nav.html'); ?>
    
    <div class="centro">
    <header class="header">
        <div class="presentacion_vehiculos" alt="presentacion">
            <h1>VEHÍCULOS</h1>
        </div>
    </header>
    

    <aside class="menu_vehiculos">
        <a id="autobtn" >Autos</a>
        <a id="bicibtn" >Bicicletas</a>
        <a id="motobtn" >Motocicletas</a>
    </aside>

    <article class="planesTabla">

        <section id="autos" class="invisible">
            <div class="plan">

                <div class="titulo_plan">
                    <h2>Autos</h2>
                </div>

                <figure class="imagenPlan">
                    <img src="images/auto.jpg" alt="auto chevrolet">
                </figure>>

                <table class="tablaVehiculos">
                    <tr>
                        <thead>
                            <th>Planes:</th>
                            <th>Plan contra todo riesgo</th>
                            <th>Contra terceros</th>
                            <th>Contra terceros y daños naturales</th>
                    </tr>
                    </thead>
                    <tr>
                        <td>daños por granizo</td>
                        <td>Cubre</td>
                        <td>No cubre</td>
                        <td>Cubre</td>
                    </tr>
                    <tr>
                        <td>Accidente total</td>
                        <td>Cubre</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                    </tr>
                    <tr>
                        <td>Robo o hurto total</td>
                        <td>Cubre</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                    </tr>
                    <tr>
                        <td>Responsabilidad civil</td>
                        <td>Cubre</td>
                        <td>Cubre</td>
                        <td>Cubre</td>
                    </tr>
                </table>
            </div>
        </section>

        <section id="bicicletas" class="invisible">

            <div class="plan">
                <div class="titulo_plan">
                    <h2>Bicicletas</h2>
                </div>

                <figure class="imagenPlan">
                    <img src="images/bicicleta.jpg" alt="Bicicleta" title="la bicicleta de un vendedor de waffles">
                </figure>
                <table class="tablaVehiculos">
                    <tr>
                        <thead>
                            <th>Planes:</th>
                            <th>Plan contra robo/accidente</th>
                            <th>Contra terceros</th>
                            <th>Contra desgaste</th>
                    </tr>
                    </thead>
                    <tr>
                        <td>daños por desgaste</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                        <td>Cubre</td>
                    </tr>
                    <tr>
                        <td>Accidente total</td>
                        <td>Cubre</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                    </tr>
                    <tr>
                        <td>Robo o hurto total</td>
                        <td>Cubre</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                    </tr>
                    <tr>
                        <td>Responsabilidad civil</td>
                        <td>Cubre</td>
                        <td>Cubre</td>
                        <td>Cubre</td>
                    </tr>
                </table>
            </div>
        </section>

        <section id="motocicletas" class="invisible">
            
            <div class="plan">
                <div class="titulo_plan">
                    <h2>Motocicletas</h2>
                </div>
                <figure class="imagenPlan">
                    <img src="images/moto.jpg" alt="Motocicleta" title="solo de exhibición">
                </figure>
                <table class="tablaVehiculos">
                    <tr>
                        <thead>
                            <th>Planes:</th>
                            <th>Plan contra robo/accidente</th>
                            <th>contra terceros</th>
                            <th>Contra incendios</th>
                    </tr>
                    </thead>
                    <tr>
                        <td>daños por incendios</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                        <td>Cubre</td>
                    </tr>
                    <tr>
                        <td>Accidente total</td>
                        <td>Cubre</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                    </tr>
                    <tr>
                        <td>Robo o hurto total</td>
                        <td>Cubre</td>
                        <td>No cubre</td>
                        <td>No cubre</td>
                    </tr>
                    <tr>
                        <td>Responsabilidad civil</td>
                        <td>Cubre</td>
                        <td>Cubre</td>
                        <td>Cubre</td>
                    </tr>
                </table>
            </div>
        </section>
    </article>

    </div>

    <?php include('footer.html'); ?>


    </div>

</body>

</html>