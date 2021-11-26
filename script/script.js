/*
function header(title){ñ
document.write("<header>" + title + "</header>")}
*/
var navOptions = new Array('Menú', 'Nosotros', 'Contacto', 'Cursos');
var navRedirects = new Array('https://google.com', 'https://youtube.com', 'https://facebook.com', 'https://twitter.com')
var courses = new Array('1°1', '1°2', '1°3', '1°4', '1°5', '2°1', '2°2', '2°3', '2°4', '2°5', '3°1', '3°2', '3°3', '3°4', '3°5', '4°1', '4°2', '4°3', '4°4', '4°5', '5°1', '5°2', '5°3', '5°4', '5°5', '6°1', '6°2', '6°3', '6°4', '6°5');
var info = new Array("Nombre", "Apellido", "DNI", "Email")
var alumno = new Array("Luis Fernando", "Lamiral Benitez", 45983405, "luisito.lfl69@gmail.com")
console.log(info);
function showHeader(title){
    document.write('<header class="header">');
    document.write('<h1 class="header__h1">' + title + "</h1>");
    document.write('</header>');
}
function showNav(){
    // var newNav = document.createElement("nav");
    // var newUL = document.createElement("ul");
    document.write('<nav class="nav">');
    document.write('<ul class="nav__ul">')
    for(var i=0; i<navOptions.length; i++){
        // document.write('<li class="nav__li"> <a href=' + navRedirects[i] + ' class="li__a" >' + navOptions[i] + '</a> </li>');
        document.write('<li class="nav__li">');
        document.write('<a href=' + navRedirects[i] + ' class="li__a" target="__blank">' + navOptions[i] + '</a>');
        document.write("</li>");
    }
    document.write("</ul>")
    document.write('<button class="ham" type="button"> <span class="br-1"></span><span class="br-2"></span><span class="br-3"></span></button>');
    document.write('</nav>');
}
function showSection1(){
    document.write('<section class="section1">');
    document.write('<div class="grid">');
    for(var i=0; i<courses.length; i++){
        document.write('<a href="#" class="grid__course">' + courses[i] + '</a>');
    }
    document.write('</div>');
    document.write('</section>');
}
function showSection2(){
    document.write('<section class="section2">');
    for(var i=0; i<info.length; i++){
        document.write('<p class="p__info">' + info[i] + '</p>');
    }
    document.write('</section>');
}
function showSection3(){
    document.write('<section class="section2">');
    for(var i=0; i<alumno.length; i++){
        document.write('<p class="p__info">' + alumno[i] + '</p>');
    }
    document.write('</section>');
}