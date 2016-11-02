var stompClient = null;
var puntos=[];
function connect() {
    var socket = new SockJS('/stompendpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        
        stompClient.subscribe('/topic/newpoint', function (data) {
            var theObject = JSON.parse(data.body);
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(theObject.x, theObject.y, 1, 0, 2 * Math.PI);  //Pintada de cada punto
            ctx.stroke();
        });
        
        stompClient.subscribe('/topic/newpolygon', function (data) {
            var puntos = JSON.parse(data.body); //Toca parsear lo de la pantalla a formato json
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            
            //Pintado del poligono y conexion de puntos
            ctx.fillStyle='#2712DF';
            ctx.beginPath();
            ctx.moveTo(puntos[0].x, puntos[0].y);
            ctx.lineTo(puntos[1].x, puntos[1].y);
            ctx.lineTo(puntos[2].x, puntos[2].y);
            ctx.lineTo(puntos[3].x, puntos[3].y);
            ctx.closePath();
            ctx.fill();
        });
        
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendPoint() {
    var corX = $("#x").val();  //El # hace referencia al id en el html
    var corY = $("#y").val();
    alert(corX);
    stompClient.send("/app/newpoint", {}, JSON.stringify({x:corX, y:corY}));   //Envio de valores del canvas a la parte logica
}

function nuevoUsuario() {
    var usuario=$("#tipo").val();
    if (usuario == "jefe") {
        //envio de la informacion con el JSON
        window.open("jefe.html");
    } else {
        window.open("empleado.html");
    }
    cargarDatos();
}

function cargarDatos(){
    var nombre=$("#nombre").val();
    var cedula=$("#cedula").val();
    //var habilidades=document.getElementsByTagName("input").checked;
    var seleccionadas = new Array();
    $("input:checkbox[name=habilidades]:checked").each(function () {
        seleccionadas.push($(this).val());
    });
    
    $.ajax({
        type: "POST",
        url: url,
        data: data,
    });
}



$(document).ready(
        function () {
            connect();
            console.info('connecting to websockets');

            //Funcion para la obtencion de las posiciones por el click
            function getMousePos(canvas, evt) {
                var rect = canvas.getBoundingClientRect();
                return {
                    posx: evt.clientX - rect.left,
                    posy: evt.clientY - rect.top
                };
            }
            var canvas = document.getElementById('myCanvas');
            var context = canvas.getContext('2d');

            canvas.addEventListener('mousedown', function (evt) {
                var mousePos = getMousePos(canvas, evt);
                stompClient.send("/app/newpoint", {}, JSON.stringify({x:mousePos.posx ,y:mousePos.posy}));
            }, false);
        }               
);
