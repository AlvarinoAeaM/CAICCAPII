// script.js
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");
    var logo = document.getElementById("logo");
    var lightLogo = document.getElementById("lightLogo");
    var onePieceGif = document.getElementById("onePieceGif");

    function toggleBtn() {
        btn.classList.toggle("active");
        light.classList.toggle("on");

        if (light.classList.contains("on")) {
            logo.style.opacity = "1";
            logo.style.display = "block";
            lightLogo.style.opacity = "1";
            onePieceGif.style.display = "block";
        } else {
            logo.style.opacity = "0";
            setTimeout(() => {
                logo.style.display = "none";
            }, 500);
            lightLogo.style.opacity = "0";
            onePieceGif.style.display = "none";
        }
    }

    function initializeSlider() {
        document.getElementById('next').onclick = function () {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]);
        }
        document.getElementById('prev').onclick = function () {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').prepend(lists[lists.length - 1]);
        }
    }

    // Manejar el clic en el botón
    btn.addEventListener("click", toggleBtn);

    // Llama a las funciones específicas para la sección de Despliegue
    initializeSlider();
});
