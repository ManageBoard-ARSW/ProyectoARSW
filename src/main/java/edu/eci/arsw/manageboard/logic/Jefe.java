/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

import java.util.ArrayList;

/**
 *
 * @author nicolas
 */
public class Jefe extends Usuario{
    
    
    public Jefe(String n, String[] h, int c){
        super(n,h,c);
        proyectos= new ArrayList<>();
    }
    
    public Tablero crearTablero(int id, String nombre){
        Tablero tab = new Tablero(id, nombre);
        proyectos.add(tab);
        return tab;
    }
    
    public void consultarEstadisticas(){
    
    }
    
    public void asignarTarea(int idTablero, int idTarea){
        proyectos.get(idTablero).cambiarEstado(this, idTarea);
    }
    
    public void consultarPerfilUsuario(){
    
    }
    
    public void aprobarCulminacionTarea(int idTablero, int idTarea){
        proyectos.get(idTablero).getTarea(idTarea).setAprobado(true);
        proyectos.get(idTablero).cambiarEstado(this, idTarea);
    }
    
    public void agregarCriteriosTarea(int idTablero, int idTarea, String criterio){
        proyectos.get(idTablero).getTarea(idTarea).agregarCriterios(criterio);
    }
    
}
