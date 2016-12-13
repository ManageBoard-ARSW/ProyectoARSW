/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

import java.util.ArrayList;

/**
 *
 * 
 */
public class Tablero {
  
    public ArrayList<Tarea> tareasTablero;
    public String idTablero;
    
    public Tablero(String id) {
        idTablero=id;
        tareasTablero= new ArrayList<Tarea>();
    }
    
    public void agregarTarea (Tarea tata){
        tareasTablero.add(tata);
    }
    
    public void actualizaTareas (ArrayList<Tarea> sa){
        tareasTablero=sa;
    }
    
    public ArrayList<Tarea> getTareas (){
        return tareasTablero;
    }   
    
    
    public Tarea getTarea(int idTarea){
        Tarea task=new Tarea();
        for(int i=0; i<tareasTablero.size(); i++){
            if(tareasTablero.get(i).getIdTarea() == idTarea){
                task = tareasTablero.get(i);
            }
        }   
        return task;
    }
    
    public ArrayList<Tarea> TareasTodDo(){
        ArrayList<Tarea> res=new ArrayList<Tarea>();
        for (Tarea re : tareasTablero) {
            if(re.getColumna().equals("toDo")){
                res.add(re);
            }
        }return res;
    }
}
