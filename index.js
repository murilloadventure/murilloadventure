let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;  
    }
}

//Funcion que oculta el menu una vez se seleccione una opcion
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//Funcion que aplica las animaciones de las habilidades

function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills= window.innerHeight-skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");

    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll=function(){
    efectoHabilidades();
}