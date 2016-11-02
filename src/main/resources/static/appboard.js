var tareasDisp=[];
var tablerosDisp=[];
idTableroActual=-1;
tableroActual= new tablero();
actualizarTareasDisponibles = function(){
    funtion_get_all_tasks().then(funcionP).then(function(){
        $("#contenido").droppable({
            drop: function (event, ui) {
            var idElementoSoltado=ui.draggable.attr("id");
                agregarTareaProyecto()(idElementoSoltado);
              }
            });
          
        $("li").draggable({
        helper: 'clone',
        containment: 'document',
        revert: true
        });
    });
};

    funtion_get_all_tasks=function(){
          return $.get("/tablero").then(function(task){

            tareasDispDisp=plates;
    });
  };


    funcionP=function(){
        for (i = 0; i < tareasDisp.length; i++){
            $("#tareas").append("<li id="+i+" class='draggable' >"+tareasDisp[i].nombre+"</li>");
      }

  };
  
     agregarTareaProyecto= function (p){
        p=new Tarea(tareasDisp[p].nombre,tareasDisp[p].idTarea);
  };
function tablero() {
    
        window.open("tablero.html");
    } 
cambiarTablero= function(id){
    idTableroActual=id;
    tableroActual =tablerosDisp[id];
    funcion_get(id);
    
    
};
actualizartableros= function(){
    //get_all_boards();
    getAllBoards();
};
getAllBoards=function(){
     $.get("/tablero").then(function (tablero){
         tablerosDisp=tableros;
     });
};
get_all_boards=function(){
    console.info($.get("/tablero"));
    return $.get("/tablero").then(function(tablero){
   
        console.info("entro get");
      
        tablerosDisp=tableros;
        var i = 0;
        var x = document.getElementById("tableros");
        var option;
        while(tablerosDisp.length>i){
            if(x.innerHTML.indexOf('value="' + i + '"') === -1){
                option = document.createElement("option");
                option.text = "tablero "+(i+1);
                option.value = i;
                x.add(option);            
        }
        i=i+1;
    }}
);
};

funcion_get=function (id){
    return $.get('/tablero/'+id).then(
            function (data){
            tableroActual=data;
            tablerosDisp[id]=tableroActual;
            deleteTabla();
            llenarTabla();
        }
                );
};
deleteTabla =function (){
    var tabla=document.getElementById("tabla");
    while(tabla.rows.length>1){
        tabla.deleteRow(1);
    }
};
llenartabla =function (){
    
};
