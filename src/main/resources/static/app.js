
var usuario=null;
var usuarios = [];
cedula=0;
habilidades=[];

nuevoUsuario = function () {
    var tipo=$("#tipo").val();
    cargarDatos(tipo);
};

direccion = function(t){
    if (t == "jefe") {
        window.open("jefe.html");
    } else {
        window.open("empleado.html");
    }
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
    console.info(habilidades);
    almacen(u,cedula, nombre, habilidades);
};

almacen = function(t, c, n, h){
    return $.ajax({url: "/usuario/"+c, 
         type: 'PUT', 
         data: JSON.stringify([t,n,h]),
         contentType: "application/json"});
}
