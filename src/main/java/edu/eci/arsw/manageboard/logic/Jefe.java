/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

/**
 *
 * @author nicolas
 */
class Jefe extends Usuario{
    
    
    public Jefe(String n, String[] h){
        super(n,h);
    }
    
    public void crearTablero(int id, String nombre){
        Tablero tab = new Tablero(id, nombre);
        proyectos.add(tab);
    }
    
    private void consultarEstadisticas(){
    
    }
    
    private void asignarTarea(int id){
        proyectos.get(id).cambiarEstado(this);
    }
    
    private void consultarPerfilUsuario(){
    
    }
    
    private void aprobarCulminacionTarea(){
        //mover tarea de Doing a Done y califica tarea
    }
    
    private void agregarCriteriosTarea(){
    
    }
    
}