var stompClient = null;
var newItemsCount = 0;

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
            var tarea = JSON.parse(data.body); //Tarea que fue movida
            var tareaId=tarea.itemData.id;
            var columnaNueva=tarea.newColumn.dataField;
            var titulo=tarea.itemData.text;
            var descripcion=tarea.itemData.tags;
            var criticidad=tarea.itemData.color;
            
            //$('#nombre').jqxKanban('updateItem', tareaId, { status: columnaNueva, text: "Task", tags: "Ya ahora si se cambiooooo", color: "# #0917f1 "});
            
            
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

nuevaTarea= function(){
    //Para el codigo de colores aca poedir la criticidad y asignar color
    $('#nombre').jqxKanban('addItem', {status: "primera", text: "Task" + newItemsCount, tags: "task" + newItemsCount, color: "#5dc3f0"});
    newItemsCount++;
    
    $('#nombre').jqxKanban('updateItem', 0, { status: "cuarta", text: "Task", tags: "task", color: "#5dc3f0"}); 
}



function tablero() {
        open("tableroView.html","_self");
    } 
function poupnuevotablero(){
    open('popupNewTablero.html','','top=450,left=450,width=450,height=400') ;
}
function crearTablero(){
    var nombret=$("#nombreT").val();
    var idt=$("#idT").val();
    putTablero(nombret,idT)
    
}
function putTablero(nombret,idT){
     console.info("entro")   
     var info=  { "nombre":nombret ,"idTablero": idT };
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
        template: "<div class='jqx-kanban-item' id=''>"
                + "<div class='jqx-kanban-item-color-status'></div>"
                + "<div style='display: none;' class='jqx-kanban-item-avatar'></div>"
                + "<div class='jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon'></div>"
                + "<div class='jqx-kanban-item-text'></div>"
                + "<div style='display: none;' class='jqx-kanban-item-footer'></div>"
                + "</div>",
        width: 750,
        height: 650,
        source: tareas,
        columns: columnas,
        resources: staff
    });
});
