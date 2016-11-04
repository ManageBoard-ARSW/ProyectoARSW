
var usuario=null;
var usuarios = [];
cedula=0;
habilidades=[];
    //console.info(text);
    
function connect() {
    var socket = new SockJS('/stompendpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        
        stompClient.subscribe('/topic/', function (data) {
            
        });
    });
};

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

nuevoUsuario = function () {
    var tipo=$("#tipo").val();
    var c=$("#cedula").val();
    //direccion();
    cargarDatos(tipo);
    //pintaPerfil(c);
};

direccion = function(){
    var t=$("#tipo").val();
    if (t == "jefe") {
        window.open("jefe.html","_self");
    } else {
        window.open("empleado.html", "_self");
    }
};

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
    return $.ajax({url: "/usuario/"+c, 
         type: 'PUT', 
         data: JSON.stringify(text),
         contentType: "application/json"}).then(direccion).then(direccion);
         sessionStorage.setItem('nombre',cedula); 
         sessionStorage.getItem('nombre').direccion();
         
};

pintaPerfil = function(cedula){
    $.get("/usuario/"+cedula,function(user){
            console.info(user);
    });
};
