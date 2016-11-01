var tareasDisp=[];
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
    
        window.open("jefe.html");
    } 
