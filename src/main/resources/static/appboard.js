var stompClient = null;
var newTask = 0;
var tableroId;
var tablerosDisponibles = [];

// Caracteristacas basicas de creacion de tablero
var fields = [
    {name: "id", type: "string"},
    {name: "status", map: "state", type: "string"},
    {name: "text", map: "label", type: "string"},
    {name: "tags", type: "string"},
    {name: "color", map: "hex", type: "string"}
];

var source ={localData: [], dataType: "array", dataFields: fields};   
    
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

            /* DEBO tenertlo en este formato para modificar State, recargar el tablero  
             var source =
             {
             localData: [
             { id: "1161", state: "done", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0" },
             { id: "1645", state: "work", label: "Change Billing Address", tags: "billing", hex: "#f19b60"},
             { id: "9213", state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0"},
             { id: "6546", state: "done", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0"},
             { id: "9034", state: "done", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
             ],
             dataType: "array",
             dataFields: fields
             };
             
             var dataAdapter = new $.jqx.dataAdapter(source);
             */
            
            
            //Re pintada de la tarea modificada
            $('#nombre').jqxKanban('addItem', {status: columnaNueva, text: titulo, tags:descripcion, color: criticidad});  
            
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


nuevaTareaTR= function(){
    idT=$("#nombreT").val();
    var info = new Tarea(newTask, "primera", "Titulo", "Descripcion", "#5dc3f0");
    return $.ajax({url: "/tableros/"+idT+"/tareas", 
         type: 'PUT' ,
         data: JSON.stringify(info),
         contentType: "application/json"});
   //Para el codigo de colores aca poedir la criticidad y asignar color
    //var datos={"newColumn":{"dataField":"primera"},"oldColumn":{"dataField":"primera"},"itemData":{"id":0,"status":"primera","text":"Task" + newItemsCount,"tags":"task" + newItemsCount,"color":"#5dc3f0"}};
   // $('#nombre').jqxKanban('addItem', {status: "primera", text: "Task" + newItemsCount, tags: "task" + newItemsCount, color: "#5dc3f0"});
    newTask++;
    //Tiene que ir a Manejador SOMP
    //stompClient.send("/topic/", {},JSON.stringify(datos));
}

function nuevaTareaPop() {
        open('popup.html','','top=450,left=450,width=450,height=400') ;
 } 

nuevaTarea= function() {
    var titulo=$("#nombreTarea").val();
    var descripcion=$("#descripcionTarea").val();
    var prioridad=$("#prioridadTarea").val();
    var col;
    
    if(prioridad=="alto"){
        col="#DC143C";
    }else if(prioridad=="medio"){
        col="#2980b9";
    }else {
        col="#008000";
    }
    var datos={"newColumn":{"dataField":"primera"},"oldColumn":{"dataField":"primera"},"itemData":{"id":newTask,"status":"primera","text":titulo,"tags":descripcion,"color":col}};
    stompClient.send("/topic/", {},JSON.stringify(datos));
    console.info(prioridad);
    newTask++;
 };




actualizadorTableros= function(){
    $("#tableros").empty();
    $.get("/tableros/",function(tableros){
        tablerosDisponibles=tableros;
    }).then(pintaTableros);
};

pintaTableros = function(){
    for(var i = 0; i<=tablerosDisponibles.length; i++){         
        $("#tableros").append("<option value="+i+">"+tablerosDisponibles[i].idTablero+"</option>");
    }
};

cambiarTablero= function(id){
    $.get("/tableros/"+id,function(tareas){});
    
};

function tablero() {
        open("tableroView.html","_self");
    } 
function poupnuevotablero(){
    open('popupNewTablero.html','','top=450,left=450,width=450,height=400') ;
}

crearTablero = function(){
    tableroId=$("#nombreT").val();
    console.log("/tableros/"+tableroId);
    putTablero(tableroId);
};

function putTablero(idT){
     console.log("entro")   
     var info= {"idTablero":idT};
     return $.ajax({url: "/tableros/"+idT, 
         type: 'PUT' ,
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
    var dataAdapter = new $.jqx.dataAdapter(source);
    $('#nombre').jqxKanban({
        width: 750,
        height: 650,
        source: tareas,  // dataAdapter
        columns: columnas,
        resources: staff
    });
});
