
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/javascript.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <!-- fuente awesome incluida con el metodo mostrado en una LT -->
</head>

<body>
    <div class="contenedor">

    <?php include('nav.html'); ?>

<div class="centro centroIndex">

        <header class="presentacionHome">
            
            <div class="separadorHeader">
                <div class="letrasHome"></div>
                <div class="espacioExtraHome"></div>
            </div>

            <div class="imagenHome" alt="presentacion"></div>
        </header>

        <article class="menuHome">
            <ul class="menuInferior" id="planes">
                <li class="botonInferior" id="vehiculos">
                    <h2>Vehículos</h2>
                    <p>Asegure los vehículos mas importantes</p>
                </li>
                <li class="botonInferior" id="hogar">
                    <h2>Hogar</h2>
                    <p>Cuide su hogar incluyendo electrodomésticos</p>
                </li>
                <li class="botonInferior" id="tecnologia">
                    <h2>Tecnología</h2>
                    <p>Para que sus aparatos electrónicos de trabajo o estudio esten a salvo</p>
                </li>
                <li class="botonInferior" id="salud">
                    <h2>Salud</h2>
                    <p>Mantenga el bienestar de su familia</p>
                </li>
            </ul>
        </article>

 </div>
    <?php include('footer.html'); ?>
    </div>
</body>

</html>