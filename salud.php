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

    
    <div class="centro">
    <header class="header">
        <div class="presentacion_salud" alt="presentacion">
            <h1>SALUD</h1>
        </div>
    </header>

    <article id="centroSalud">
        <section>
            <table>
                <thead>
                    <th>$300 Por mes</th>
                    <th>$600 por mes</th>
                    <th>$900 por mes</th>

                </thead>
                <tbody id="CuerpoTabla"></tbody>
            </table>
        </section>
        <section>
            <form>
                <label>Ingrese otro plan para el de $300</label>
                <input type="text" id="input300">
                <label>Ingrese otro plan para el de $600</label>
                <input type="text" id="input600">
                <label>Ingrese otro plan para el de $900</label>
                <input type="text" id="input900">
                <button type="button" id="BtnEnviar">"Enviar"</button>
            </form>
            <button type="button" id="BorrarTabla">"Borrar Tabla"</button>
            <button type="button" id="Btn3tests">"escribir 9 test's"</button>
            <form>
                <label class="busqueda">Ingrese contenido clave para resaltar</label>
                <input type="text" id="inputResaltaBusqueda">
                <button type="button" id="btnResaltar">"Enviar"</button>
            </form>

            <button type="button" id="BorrarTabla">"Borrar Tabla"</button>
            <button type="button" id="Btn3tests">"escribir 9 test's"</button>
            <div class="Editar"> </div>

        </section>
    </article>

    </div>

    <?php include('footer.html'); ?>

    </div>

</body>

</html>