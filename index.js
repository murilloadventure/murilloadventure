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



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll=function(){
    efectoHabilidades();
}