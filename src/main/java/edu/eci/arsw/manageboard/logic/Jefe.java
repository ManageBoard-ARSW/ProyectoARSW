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
    
    
    public Jefe(String n, ArrayList<String> h, int c){
        super(n,h,c);
        proyectos= new ArrayList<>();
    }
    
    
    public Tablero crearTablero(String nombre){
        Tablero tab = new Tablero(nombre);
        proyectos.add(tab);
        return tab;
    }
    
    public void consultarEstadisticas(){
    
    }
    
    
    public void consultarPerfilUsuario(){
    
    }
    
      /*
    public void agregarCriteriosTarea(int idTablero, int idTarea, String criterio){
        proyectos.get(idTablero).getTarea(idTarea).agregarCriterios(criterio);
    }
    */
}
