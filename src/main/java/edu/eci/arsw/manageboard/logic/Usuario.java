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
public class Usuario {
    public String nombre;
    public ArrayList<Tablero> proyectos;
    public ArrayList<String>  habilidades;
    public int cedula;
    
    public Usuario(){
        proyectos= new ArrayList<>();
    }
    
    public Usuario(String n, ArrayList<String> h, int c){
        this.nombre=n;
        this.habilidades=h;
        this.cedula=c;
        proyectos= new ArrayList<>();
    }
    
    public Tarea crearTarea(int idTablero, int id, String c, String t, String de, String colo){
        Tarea tarea = new Tarea(id, c, t, de, colo);
        proyectos.get(idTablero).agregarTarea(tarea);
        return tarea;
    }
    
    public ArrayList<Tarea> consultarTareasSinRealizar(int idTablero){
        return proyectos.get(idTablero).TareasTodDo();
    }
    
    /*
    public void moverTarea(int idTablero, int idTarea){
        proyectos.get(idTablero).cambiarEstado(this, idTarea);
    }
    
    
    
    public void comentarTarea(int idTablero, int idtarea, String Comentario){
        proyectos.get(idTablero).getTarea(idtarea).agregarComentario(Comentario);
    }
    
    
    */
}
