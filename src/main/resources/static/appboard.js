var stompClient = null;
var newItemsCount = 0;
var tableroId;

// Caracteristacas basicas de creacion de tablero
var columnas = [
    {text: "To Do", dataField: "primera", access: "none", maxItems: 20},
    {text: "Doing Developing", dataField: "segunda", access: "none", maxItems: 20},
    {text: "Doing Testing", dataField: "tercera", access: "none", maxItems: 20},
    {text: "Done", dataField: "cuarta", access: "none", maxItems: 20}
];

var tareas = [];
//--------------

function connect() {
   var socket = new SockJS('/stompendpoint');
    stompClient = Stomp.over(socket);
     stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        
        stompClient.subscribe('/topic/', function (data) {
            console.log(data+"Lo que le llega al suscribir");
            var tarea = JSON.parse(data.body); //Tarea que fue movida
            var tareaId=tarea.itemData.id;
            var columnaNueva=tarea.newColumn.dataField;
            var titulo=tarea.itemData.text;
            var descripcion=tarea.itemData.tags;
            var criticidad=tarea.itemData.color;
            
            //$('#nombre').jqxKanban('updateItem', tareaId, { status: columnaNueva, text: "Task", tags: "Ya ahora si se cambiooooo", color: "#0917f1 "});
            
            
            //Re pintada de la tarea modificada
            $('#nombre').jqxKanban('addItem', {status: columnaNueva, text: "titulohjasbdhjsbadhb", tags:"descripcion", color: criticidad});  
            
            /*
            //Limpiado de tablero             
            $('#nombre').jqxKanban('removeItem', tareaId); 
            */
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

nuevaTarea= function(){
    //Para el codigo de colores aca poedir la criticidad y asignar color
    var datos={"newColumn":{"dataField":"primera"},"oldColumn":{"dataField":"primera"},"itemData":{"id":0,"status":"primera","text":"Task" + newItemsCount,"tags":"task" + newItemsCount,"color":"#5dc3f0"}};
   // $('#nombre').jqxKanban('addItem', {status: "primera", text: "Task" + newItemsCount, tags: "task" + newItemsCount, color: "#5dc3f0"});
    newItemsCount++;
    stompClient.send("/topic/", {},JSON.stringify(datos));
}



function tablero() {
        open("tableroView.html","_self");
    } 
function poupnuevotablero(){
    open('popupNewTablero.html','','top=450,left=450,width=450,height=400') ;
}
 crearTablero = function(){
    tableroId=$("#nombreT").val();
    console.log("/tableros/"+tableroId);
    putTablero(tableroId)
    
}
function putTablero(idT){
     console.log("entro")   
     var info=  {"idTablero": idT};
     return $.ajax({url: "/tableros/"+idT, 
         type: 'PUT', 
         data: JSON.stringify(info),
         contentType: "application/json"});
};




$(document).ready(function () {
    connect();
    
    var staff = [
        {id: 0, name: "No name" , common: true},
        {id: 3, name: "Steven Buchanan"}
    ];    
    
    /*
     * Se captura el movimiento de una tarea especifica y se actualiza en todos los tableros
     * de los usuarios suscritos a dicho tablero
     */
    $('#nombre').on('itemMoved', function (event) {
        console.log(event);
        var args = event.args;  //Filtro los datos necesarios para tratar la tarea
        stompClient.send("/topic/", {},JSON.stringify(args));
    });
    
    $('#nombre').jqxKanban({
        width: 750,
        height: 650,
        source: tareas,
        columns: columnas,
        resources: staff
    });
});
