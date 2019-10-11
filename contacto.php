<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contacto</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/javascript.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <!-- fuente awesome incluida con el metodo mostrado en una LTs -->
</head>

<body>
    <dic class="contenedor">

        <?php include('nav.html'); ?>

        <div class="centro">
        <header class="header">
            <div class="presentacion_contacto">
                <h1>Contactanos</h1>
            </div>
        </header>
        

        <article id="centroContacto">
            <section>
                <div class="cuerpo">
                    <h2>¿Quiénes somos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At incidunt nisi porro dolor id ut amet
                        magnam,
                        perferendis temporibus nihil dignissimos doloremque praesentium dicta iusto nostrum nesciunt
                        eaque
                        excepturi
                        voluptate! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis voluptatem
                        recusandae maxime
                        accusantium ea suscipit omnis quam porro modi minima voluptatum deserunt hic dolore velit
                        placeat
                        ipsa
                        aliquid, odit assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        numquam
                        ad optio
                        nihil dolorum ea quos sint temporibus omnis quaerat? Nemo minima veniam ex reiciendis at dicta
                        molestiae
                        accusamus delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugit
                        voluptatibus
                        corporis sit, aperiam voluptatem quia sapiente eligendi vel a doloribus veritatis, distinctio,
                        velit
                        ratione
                        laudantium. Iusto placeat natus unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia
                        reprehenderit assumenda placeat fugit nobis molestiae? Commodi, rerum eaque ullam fugiat enim
                        est,
                        explicabo
                        incidunt molestias quam nisi maxime magni placeat. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Dignissimos minima eaque hic temporibus, facilis voluptatum veritatis officiis sunt
                        reprehenderit
                        inventore
                        recusandae excepturi explicabo tempora debitis placeat dolore corrupti perferendis culpa!</p>
                    <div>
            </section>
            <section>
                <h2>Ponete en contacto con nosotros!</h2>
                <p> Llená el formulario y te responderemos a la brevedad por e-mail</p>
                <form>
                    <label>Nombre/s: <input type="text" name="nombre" value="" /> Apellido/s: <input type="text"
                            name="nombre" value="" /></label>
                    <label>Masculino <input type="radio" name="sexo" value="masculino" /> Femenino<input type="radio"
                            name="sexo" value="femenino" /></label>
                    <label>Fecha de nacimiento<input type="date" name="fecha" value="" /></label>
                    <label>Dirección de correo electrónico: <input type="email" name="direccionemail"
                            placeholder="Ej.: usuario@gmail.com"></label>
                    <label><textarea name="comentario" rows="8" cols="40"
                            placeholder="Escriba su consulta aqui."></textarea></label>
                    <div>
                        <p>CAPTCHA</p>
                        <p id="captchaid">----</p>
                        <label>Ingrese el número: <input type="number" name="captcha" value="" id="leer" />
                    </div>
                    <input type="button" id="btnEnviarCaptcha" name="enviar" value="Enviar" />
                    <p id="mensajeComprobar"></p>
                </form>
                </div>
                </div>
            </section>
        </article>

        </div>

        <?php include('footer.html'); ?>
        </div>
</body>

</html>