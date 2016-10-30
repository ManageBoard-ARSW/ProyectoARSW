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
 * @author nicolas
 */
public class Tablero {
    public ArrayList<Empleado> empleados;
    public Jefe boss;
    public final ConcurrentHashMap<Integer, Tarea> tareas;
    public String nombre;
    public int idTablero;
    
    public Tablero(int id, String n){
         nombre=n;
         idTablero=id;
         tareas= new ConcurrentHashMap<>();
    }
    
      
    public void nuevaTarea(Tarea t){
        tareas.put(0, t);
    }
    
    public void cambiarEstado(Usuario u){
         if (u instanceof Empleado) {
            
         
        }else if(u instanceof Jefe){
            if (tareas.containsKey(0)) {
                tareas.put(1, this.tareas.get(0).);
                tareas.remove(0, this.tareas.get(0));
            }else if(tareas.containsKey(2)){
                tareas.put(3, this.tareas.get(2));
                tareas.remove(2, this.tareas.get(2));
            }
        }         
        
        else if(u instanceof Jefe){
            if(doingDesarrollo==false && doingPrueba==false && done==false) doingDesarrollo=true;
            else if(doingDesarrollo==true && doingPrueba==false && done==false) doingPrueba=true;
            
        }
    }
    
    public Tarea getTarea(int idTarea){
        
        for(int i=0; i<tareas.size(); i++){
            if(tareas[i].)
        }
    }
    
}
