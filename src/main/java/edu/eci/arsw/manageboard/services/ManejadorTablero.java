/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.services;

import edu.eci.arsw.manageboard.logic.Tablero;
import edu.eci.arsw.manageboard.logic.Tarea;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Owner
 */
@Service
public class ManejadorTablero {
    public ArrayList<Tablero> tableros;
    
    public ManejadorTablero() {
        tableros=new ArrayList<>();
    }
      
    public void setTablero(String id){
        Tablero a=new Tablero(id);
        tableros.add(a);
    }
    
    public List<Tablero> getTableros() {
        return tableros;
    }
    
    public Tablero getTablero(String id){
        Tablero res=null;
        for (int i=0; i<tableros.size(); i++){
            if(tableros.get(i).idTablero.equals(id)){
                res=tableros.get(i);
            }
        }
        return res;
    }
    
    public ArrayList<Tarea> getTarjetas(String id){
        return getTablero(id).getTareas();
    }
    
    public void addTarea(String id, Tarea t){
        if (t.getExiste()){
            getTablero(id).agregarTarea(t);
        } 
    }
    
    public void actualizarTablero(String id, ArrayList<Tarea> tablero){
        getTablero(id).actualizaTareas(tablero);
    }
}
