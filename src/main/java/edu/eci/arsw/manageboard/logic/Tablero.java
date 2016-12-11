/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.ConcurrentHashMap;

/**
 *
 * 
 */
public class Tablero {
    /*
    public ArrayList<Empleado> empleados;
    public Jefe boss;
    public ArrayList<ConcurrentHashMap<String,?>> tasks;
    public final ConcurrentHashMap<Integer, Tarea> tareas;
    //public String nombre;    
        
    public Tablero(String n){
         idTablero=n;
         tareas= new ConcurrentHashMap<>();
    }
*/
    public ArrayList<Tarea> tareasTablero;
    public String idTablero;
    
    public Tablero(String id) {
        idTablero=id;
        tareasTablero= new ArrayList<Tarea>();
    }
    
    public void agregarTarea (Tarea tata){
        tareasTablero.add(tata);
    }
    
    public ArrayList<Tarea> getTareas (){
        return tareasTablero;
    }   
    
    
    
    
      
    /*
    public Tarea nuevaTarea(String n, int id){
        Tarea t= new Tarea(nombre, id);
        tareas.put(0, t);
        return t;
    }
    
    
    public void cambiarEstado(Usuario u, int idTarea) {
        if (u instanceof Empleado) {
            if(tareas.containsKey(0)){
                tareas.put(1, this.tareas.get(getTarea(idTarea)));
                tareas.remove(0, this.tareas.get(this.getTarea(idTarea)));
                this.getTarea(idTarea).setToDo(false);
            }
            
        } else if (u instanceof Jefe) {
            if (tareas.containsKey(2)) {
                if (tareas.get(getTarea(idTarea)).isAprobado()) {
                    tareas.put(3, this.tareas.get(getTarea(idTarea)));
                    tareas.remove(2, this.tareas.get(getTarea(idTarea)));
                } else {
                    tareas.put(1, this.tareas.get(getTarea(idTarea)));
                    tareas.remove(2, this.tareas.get(getTarea(idTarea)));
                }
            }
        }
    }
       
    public ArrayList<Tarea> TareasTodDo(){
        ArrayList<Tarea> res=new ArrayList<Tarea>();
        for (Tarea re : tareasTablero) {
            if(re.getEstado().equals("toDo")){
                res.add(re);
            }
        }return res;
    }
     public ArrayList<Tarea> TareasDoingDes(){
        ArrayList<Tarea> res=new ArrayList<Tarea>();
        for (Tarea re : tareasTablero) {
            if(re.getEstado().equals("doingDes")){
                res.add(re);
            }
        }return res;
    }
      public ArrayList<Tarea> TareasDoingP(){
        ArrayList<Tarea> res=new ArrayList<Tarea>();
        for (Tarea re : tareasTablero) {
            if(re.getEstado().equals("doingP")){
                res.add(re);
            }
        }return res;
    }
       public ArrayList<Tarea> TareasDone(){
        ArrayList<Tarea> res=new ArrayList<Tarea>();
        for (Tarea re : tareasTablero) {
            if(re.getEstado().equals("Done")){
                res.add(re);
            }
        }return res;
    }
    
    public Tarea getTarea(int idTarea){
        Tarea task=new Tarea();
        Iterator it = tareas.entrySet().iterator();
        ConcurrentHashMap.Entry t = (ConcurrentHashMap.Entry) it.next();
        while (it.hasNext()){
            Tarea tar = (Tarea)t.getValue();
            if(tar.getId()==idTarea){
                task = tar;
            }
        }    
        return task;
    }
    
    public ArrayList<Tarea> tareasSinRealizar() {
        ArrayList<Tarea> ta = new ArrayList<>();
        Iterator it = tareas.entrySet().iterator();
        ConcurrentHashMap.Entry t = (ConcurrentHashMap.Entry) it.next();
        while (it.hasNext()) {
            Tarea tar = (Tarea) t.getValue();
            if (tar.getToDo()) {
                ta.add(tar);
            }
        }
        return ta;
    }
    */
}
