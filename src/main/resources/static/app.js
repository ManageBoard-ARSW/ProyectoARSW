var usuario;
habilidades=[];
    //console.info(text);
    
nuevoUsuario = function () {
    var tipo=$("#tipo").val();
    var c=$("#cedula").val();
    cargarDatos(tipo);
};

direccion = function(){
    var t=$("#tipo").val();
    
    if (t == "jefe") {
        window.open("jefe.html","_self");
    } else {
        window.open("empleado.html", "_self");
    }
};

function menuPrincipal() {
        open("index.html","_self");
    } 

cargarDatos = function (u) {
    var cedula = $("#cedula").val();
    var nombre = $("#nombre").val();
    var seleccion = document.getElementsByClassName("formularioIni"); //Arreglo con las habilidades
    for (var i = 0; i < seleccion.length; i++) {
        if (seleccion[i].checked) {
            habilidades.push(seleccion[i].value);
        }
    }
    almacen(u,cedula, nombre, habilidades);
};

almacen = function(t, c, n, h){
    var text = {"tipo": t , "nombre":n , "habili":h };
    sessionStorage.setItem('cc',c); 
    return $.ajax({url: "/usuario/"+c, 
         type: 'PUT', 
         data: JSON.stringify(text),
         contentType: "application/json"}).then(direccion).then(pintaPerfil);
         
};

pintaPerfil = function () {
    
    $.get("/usuario/" + sessionStorage.getItem('cc'), function (user) {
        /*$("#grande").empty();
        $("#grande").append(
                "<h1>Producto</h1>" +
                "<h3>Precio</h3>" );*/
        console.info(user);
       document.getElementById("datosPer").innerHTML = "<h1> user.nombre.toString() </h1>" ;
          
               
    });
};
