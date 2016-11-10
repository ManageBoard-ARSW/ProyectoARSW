var tareasDisp=[];
var tablerosDisp=[];
idTableroActual=-1;
tableroActual= null;
ToDo=[];
doingD=[];
doingP=[];
done=[];
habilidadesTareaActual =[];
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
/*
    funtion_get_all_tasks=function(){
          return $.get("/tableros").then(function(task){

            tareasDispDisp=plates;
    });
  };
*/

    funcionP=function(){
        for (i = 0; i < tareasDisp.length; i++){
            $("#tareas").append("<li id="+i+" class='draggable' >"+tareasDisp[i].nombre+"</li>");
      }

  };
  
     agregarTareaProyecto= function (p){
        p=new Tarea(tareasDisp[p].nombre,tareasDisp[p].idTarea);
  };
function abrirPop() { 
    open('popup.html','','top=450,left=450,width=450,height=400') ;
   
} 
function cerrarPop() { 
    datosPop();
    close("popup.html") ; 
}
nuevaTarea = function datosPop(){
    var nameT=$("#nomta").val();
    var idT=$("#idta").val();
    var seleccion = document.getElementsByClassName("formularioIni");
    for (var i = 0; i < seleccion.length; i++) {
        if (seleccion[i].checked) {
             habilidadesTareaActual.push(seleccion[i].value);
        }
    }
    almacenTareas(nameT, idT, habilidadesTareaActual);
};
almacenTareas = function(n,i,h){
    var idTableroActual=tableroActual.id;
    var info=  { "nombre":n ,"idTarea": i , "criterios":h };
     return $.ajax({url: "/tableros/"+idTableroActual, 
         type: 'PUT', 
         data: JSON.stringify(text),
         contentType: "application/json"});
         
};
function tablero() {
        open("tableroView.html","_self");
    } 
cambiarTablero= function(id){
    idTableroActual=id;
    tableroActual =tablerosDisp[id];
    funcion_get(id);
};
actualizartableros= function(){
    getAllBoards();
};
getAllBoards=function(){
    return $.get("/tableros").then(function(tablero){
   
        console.info("entro get");
      
        tablerosDisp=tablero;
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
    }
    });
};

funcion_get=function (id){
    return $.get('/tableros/'+id).then(
            function (data){
            tableroActual=data;
            
            deleteTabla();
            llenarTabla();
        });
};
deleteTabla =function (){
    var tabla=document.getElementById("tabla");
    while(tabla.rows.length>0){
        tabla.deleteRow(1);
    }
};

llenartabla = function(){
    var i=0;
    var renglon;
    var todo;
    var doingD;
    var doingP;
    var done;
    
    var tabla=document.getElementById("tableros");
    getTareasToDo(tableroActual.id);
    getTareasDoingDes(tableroActual.id);
    getTareasDoingP(tableroActual.id);
    getTareasDone(tableroActual.id);
    while(ToDo.length>i){
        renglon=tabla.insertRow(i+1);
        todo=renglon.insertCell(0);   
        Todo.innerHTML=tableroActual.tareasDisp[i].nombre;
        i=i+1;
    }
    
};
getTareasToDo=function(id){
    return $.get('/tableros/'+id+'tareasToDo').then(
            function (data){
            ToDo=data;
        });
};
getTareasDoingDes=function(id){
    return $.get('/tableros/'+id+'tareasDoingDes').then(
            function (data){
            doingD=data;
        });
};
getTareasDoingP=function(id){
    return $.get('/tableros/'+id+'tareasDoingP').then(
            function (data){
            doingP=data;
        });
};
getTareasDone=function(id){
    return $.get('/tableros/'+id+'tareasDone').then(
            function (data){
            done=data;
        });
};