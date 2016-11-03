
var usuario=null;
var usuarios = [];
cedula=0;
habilidades=[];

function nuevoUsuario() {
    var usuario=$("#tipo").val();
    if (usuario == "jefe") {
        //envio de la informacion con el JSON
        
        window.open("jefe.html");
        
    } else {
        
        window.open("empleado.html");
        var seleccion=document.getElementsByClassName("formularioIni"); //Arreglo con las habilidades
        for(var i=0; i < seleccion.length;i++){
            if(seleccion[i].checked){
                habilidades.push(seleccion[i].value);
            }
        }
        console.info(habilidades);
 /*
        document.getElementById("resultado").innerHTML=
        
      document.getElementsByClassName("formulario_check")[0].checked;*/
       
    }
    //cargarDatos();
}

cargarDatos = function(u){
    var user=usuarios[u];
    cedula=$("#cedula").val();
    var nombre=$("#nombre").val();
     var seleccionadas = new Array();
        $("input:checkbox[name=habilidades]:checked").each(function () {
            seleccionadas.push($(this).val());
        });
        alert(seleccionadas);
    actualizador(user);
    $("#board").append("<tr><td>"+user.nombre+"</td><td>"+user.cedula+"</td>"+"<td>"+user.habilidades+"</td</tr>");
};

actualizador = function (u) {
     return $.ajax({url: "/usuario/"+cedula, 
         type: 'PUT', 
         data: JSON.stringify(u),
         contentType: "application/json"});
};

getUser = function(cedula){
    return $.get("/usuario/"+cedula).then(function(data){
        usuario=data;
    });
};
