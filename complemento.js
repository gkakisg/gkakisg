document.addEventListener("DOMContentLoaded", function () {

    const boton =
        document.getElementById("boton");

    const inicio =
        document.getElementById("inicio");

    const jardin =
        document.getElementById("jardin");

    const tallo =
        document.querySelector(".tallo");

    const flor =
        document.querySelector(".flor");

    const hojas =
        document.querySelectorAll(".hoja");

    const floresPequenas =
        document.querySelectorAll(".flor-pequena");

    const particulas =
        document.getElementById("particulas");

    const musica =
        document.getElementById("musica");

    const letraKaraoke =
        document.getElementById("letraKaraoke");


    /* ========================================
       LUNA
       ======================================== */

    const luna = document.querySelector(".luna");

const mensajeLuna =
    document.getElementById("mensajeLuna");

const cerrarLuna =
    document.getElementById("cerrarLuna");


    let ultimaLinea = -1;

    let letraIniciada = false;


    /* ========================================
       LETRA
       ======================================== */

    const letra = [

        { tiempo: 5, texto: "Our life" },
        { tiempo: 7, texto: "together" },
        { tiempo: 9, texto: "is so precious" },
        { tiempo: 12, texto: "together" },
        { tiempo: 14, texto: "We have grown," },
        { tiempo: 18, texto: "we have grown" },
        { tiempo: 23, texto: "Although our love" },
        { tiempo: 26, texto: "is still special" },
        { tiempo: 30, texto: "Let's take a chance" },
        { tiempo: 33, texto: "and" },
        { tiempo: 34, texto: "fly away" },
        { tiempo: 36, texto: "somewhere" },
        { tiempo: 39, texto: "alone" },

        { tiempo: 42, texto: "It's been too long since we took the time" },
        { tiempo: 45, texto: "No one's to blame, I know time flies" },
        { tiempo: 47, texto: "so quickly" },
        { tiempo: 52, texto: "But when I see you darling" },
        { tiempo: 57, texto: "It's like we both are falling in love again" },
        { tiempo: 63, texto: "It'll be" },
        { tiempo: 65, texto: "just like starting over" },
        { tiempo: 71, texto: "starting oveeeer" },

        { tiempo: 76, texto: "Every day," },
        { tiempo: 77, texto: "we used to make it love" },
        { tiempo: 79, texto: "Why can't we be making love " },
        { tiempo: 81, texto: "nice and easy" },
        { tiempo: 86, texto: "It's time to spread our wings and fly" },
        { tiempo: 91, texto: "Don't let another day go by my love" },
        { tiempo: 98, texto: "It'll be just like starting over" },
        { tiempo: 110, texto: "starting ooooooveeeer" }

    ];


    /* ========================================
       BOTÓN PRINCIPAL
       ======================================== */

    boton.addEventListener("click", function () {

        console.log(
            "BOTÓN FUNCIONANDO"
        );


        musica.volume = 0.6;


        /*
        La canción empieza
        en el segundo 4
        */

        musica.currentTime = 4;


        musica.play().then(function () {

            console.log(
                "MÚSICA INICIADA"
            );

        }).catch(function (error) {

            console.log(
                "ERROR AL REPRODUCIR:",
                error
            );

        });


        /* Pantalla inicial */

        inicio.style.opacity = "0";

        inicio.style.transform =
            "translate(-50%, -55%)";


        /* Jardín */

        setTimeout(function () {

            jardin.style.opacity = "1";

        }, 500);


        /* Tallo */

        setTimeout(function () {

            tallo.style.height = "300px";

        }, 1000);


        /* Hojas */

        setTimeout(function () {

            hojas.forEach(function (hoja) {

                hoja.style.opacity = "1";

            });

        }, 2800);


        /* Flor */

        setTimeout(function () {

            flor.style.transform =
                "scale(1)";


            setTimeout(function () {

                flor.style.animation =
                    "palpitarFlor 2.5s ease-in-out infinite";

            }, 2500);

        }, 4000);


        /* Flores pequeñas */

        setTimeout(function () {

            floresPequenas.forEach(
                function (flor, numero) {

                    setTimeout(function () {

                        flor.style.opacity =
                            "1";

                        flor.style.transform =
                            "scale(1)";

                    }, numero * 400);

                }
            );

        }, 5200);


        /* Partículas */

        setTimeout(function () {

            crearParticulas();

        }, 6000);


        /* Letra */

        iniciarLetra();

    });


    /* ========================================
       ABRIR MENSAJE DE LA LUNA
       ======================================== */

    luna.addEventListener(
        "click",
        function () {

            mensajeLuna.classList.add(
                "mostrar"
            );

        }
    );


    /* ========================================
       CERRAR MENSAJE
       ======================================== */

    cerrarLuna.addEventListener(
        "click",
        function () {

            mensajeLuna.classList.remove(
                "mostrar"
            );

        }
    );


    /* ========================================
       KARAOKE
       ======================================== */

    function iniciarLetra() {

        if (letraIniciada) {
            return;
        }

        letraIniciada = true;


        function actualizarLetra() {

            const tiempoActual =
                musica.currentTime;


            let indiceActual = -1;


            /*
            Encontrar la línea actual
            */

            for (
                let i = 0;
                i < letra.length;
                i++
            ) {

                if (
                    tiempoActual >=
                    letra[i].tiempo
                ) {

                    indiceActual = i;

                }

            }


            /*
            Si aparece una línea nueva
            */

            if (
                indiceActual !== -1 &&
                indiceActual !== ultimaLinea
            ) {

                ultimaLinea =
                    indiceActual;


                /*
                Quitar resaltado
                */

                const lineas =
                    letraKaraoke.querySelectorAll(
                        ".linea-karaoke"
                    );


                lineas.forEach(
                    function (linea) {

                        linea.classList.remove(
                            "linea-actual"
                        );

                        linea.classList.add(
                            "linea-pasada"
                        );

                    }
                );


                /*
                Crear nueva línea
                */

                const nuevaLinea =
                    document.createElement(
                        "div"
                    );


                nuevaLinea.className =
                    "linea-karaoke linea-actual";


                nuevaLinea.textContent =
                    letra[
                        indiceActual
                    ].texto;


                /*
                Agregar línea
                */

                letraKaraoke.appendChild(
                    nuevaLinea
                );


                /*
                Mantener visible
                la parte reciente
                */

                letraKaraoke.scrollTop =
                    letraKaraoke.scrollHeight;


                console.log(
                    "KARAOKE:",
                    letra[
                        indiceActual
                    ].texto
                );

            }


            requestAnimationFrame(
                actualizarLetra
            );

        }


        actualizarLetra();

    }


    /* ========================================
       PARTÍCULAS
       ======================================== */

    function crearParticulas() {

        if (
            particulas.children.length > 0
        ) {
            return;
        }


        for (
            let i = 0;
            i < 30;
            i++
        ) {

            const particula =
                document.createElement(
                    "div"
                );


            particula.className =
                "particula";


            particula.style.left =
                Math.random() * 100 +
                "%";


            particula.style.top =
                30 +
                Math.random() * 55 +
                "%";


            particula.style.animationDelay =
                Math.random() * 4 +
                "s";


            particula.style.animationDuration =
                3 +
                Math.random() * 4 +
                "s";


            particulas.appendChild(
                particula
            );

        }

    }

});