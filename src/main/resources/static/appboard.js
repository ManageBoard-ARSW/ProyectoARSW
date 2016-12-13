var stompClient = null;
var newTask = 0;
var tableroId;
var tablerosDisponibles = [];
var tableroActual;
var idT;
var num =0;
var datos = [];

// Caracteristacas basicas de creacion de tablero
var fields = [
    {name: "id", type: "string"},
    {name: "status", map: "state", type: "string"},
    {name: "text", map: "label", type: "string"},
    {name: "tags", type: "string"},
    {name: "color", map: "hex", type: "string"}
];

var source ={};
             
var columnas = [
    {text: "To Do", dataField: "primera", access: "none", maxItems: 20},
    {text: "Doing Developing", dataField: "segunda", access: "none", maxItems: 20},
    {text: "Doing Testing", dataField: "tercera", access: "none", maxItems: 20},
    {text: "Done", dataField: "cuarta", access: "none" , maxItems: 20}
];

var tareas = [];
//--------------

function connect() {
   var socket = new SockJS('/stompendpoint');
    stompClient = Stomp.over(socket);
     stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/tablero.'+idT, function (data) {
            var tareaId;
            var columnaNueva;
            var titu;
            var descrip;
            var color;
            var loca = [];
            tareas = JSON.parse(data.body);
            for (var i = 0; i < tareas.length; i++) {
                tareaId = tareas[i].idTarea;
                columnaNueva = tareas[i].columna;
                titu = tareas[i].titulo;
                descrip = tareas[i].descripcion;
                color = tareas[i].criticidad;
                a = {id: tareaId, state: columnaNueva, label: titu, tags: descrip, hex: color};
                loca.push(a);
            }
            
            
            source = {
                localData: loca,
                dataType: "array",
                dataFields: fields
            }
              
    
            var dataAdapter = new $.jqx.dataAdapter(source);

            $('#nombre').jqxKanban({
                width: 750,
                height: 650,
                source: dataAdapter ,  //  tareas
                columns: columnas
            });
        });
    });
    return true;
};

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    
    console.log("Disconnected");
}

function nuevaTareaPop() {
        open('popup.html'+"?"+tableroActual,'','top=450,left=450,width=450,height=400') ;
 } 

function Tarea (id,c,t,de,colo) {
      this.idTarea = id;
      this.titulo=t;
      this.columna=c;
      this.descripcion=de;
      this.criticidad=colo;
      this.existe=true;
}

nuevaTarea= function() {
    
    idT =window.location.search.substr(1);
    console.info(idT);
    var titulo=$("#nombreTarea").val();
    var descripcion=$("#descripcionTarea").val();
    var prioridad=$("#prioridadTarea").val();
    var num=$("#valId").val();;
    var col;
    
    if(prioridad=="alto"){
        col="#DC143C";
    }else if(prioridad=="medio"){
        col="#2980b9";
    }else {
        col="#008000";
    }
    
    var info = new Tarea(num, "primera", titulo, descripcion, col);
    
    
    $.ajax({url: "/tableros/" + idT + "/tareas",
        type: 'PUT',
         data: JSON.stringify(info),
         contentType: "application/json"}).then(connect).then(traeElementos);
 };

/*
 * Trae la lista de tareas del tablero con id: idT 
 * y luego lo replica para todos los suscritos a ese tablero
 */
traeElementos = function () {
    var datos;
    $.get("/tableros/" + idT + "/tareas", function (tarjetas) {
        datos = tarjetas;
        stompClient.send("/topic/tablero."+idT, {}, JSON.stringify(datos));
    });
    
};

actualizadorTableros= function(){
    $.get("/tableros/",function(tableros){
        tablerosDisponibles=tableros;
    }).then(pintaTableros);
};

/*
 * Pinta los tablero de las opciones 
 */
pintaTableros = function(){
    for(var i = 0; i<tablerosDisponibles.length; i++){         
        $("#tableros").append("<option value="+tablerosDisponibles[i].idTablero+">"+tablerosDisponibles[i].idTablero+"</option>");
    
    }
};

cambiarTablero= function(id){
    $.get("/tableros/"+id,function(va){
        idT=id;
    });
    
    for(var i=0; i<tablerosDisponibles.length; i++){
        if(tablerosDisponibles[i].idTablero==id){
            tableroActual=tablerosDisponibles[i].idTablero;
        }
    }
    disconnect();
    connect();
      
};

function tablero() {
        open("tableroView.html","_self");
    } 
function poupnuevotablero(){
    open('popupNewTablero.html','','top=450,left=450,width=450,height=400') ;
}

crearTablero = function(){
    tableroId=$("#nombreT").val();
    putTablero(tableroId);
};

function putTablero(idT){ 
     var info= {"idTablero":idT};
     return $.ajax({url: "/tableros/"+idT, 
         type: 'PUT' ,
         data: JSON.stringify(info),
         contentType: "application/json"});
}

actualizadorTablero = function () {
    $.ajax({url: "/tableros/" + idT + "/tareas",
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json"}).then(traeElementos);
};

$(document).ready(function () {

    var source = {
        localData: [],
        dataType: "array",
        dataFields: fields
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    $('#nombre').jqxKanban({
        width: 750,
        height: 650,
        source: dataAdapter, //  tareas
        columns: columnas,
    });

    $('#nombre').on('itemMoved', function (event) {
        var tarea = event.args;  //Filtro los datos necesarios para tratar la tarea
        console.log("---------------");
        console.log(event);
        var actual=tarea.newColumn.dataField;
        var colu;
        if(actual=="primera"){
           colu="segunda"; 
        }else if (actual=="segunda"){
            colu="tercera";
        }else if (actual=="tercera"){
            colu="cuarta";
        }else{
            colu="tercera";
        }

        var info = new Tarea(tarea.itemData.id, colu , tarea.itemData.text, tarea.itemData.tags, tarea.itemData.color);

        $.get("/tableros/" + idT + "/tareas", function (tarjetas) {
            datos = tarjetas;
            for (var i = 0; i < datos.length; i++) {
                if (datos[i].idTarea == tarea.itemData.id) {
                    datos[i] = info;
                }
            };
        }).then(actualizadorTablero);
        
    });
   
});
