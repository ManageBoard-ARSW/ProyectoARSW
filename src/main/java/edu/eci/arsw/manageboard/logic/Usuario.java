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
    public ArrayList<Tablero> proyectos=null;
    public String[] habilidades;
    
    public Usuario(String n, String[] h){
        this.nombre=n;
        this.habilidades=h;
    }
    
    public void moverTarea(int idTablero, int idTarea){
        proyectos.get(idTablero).cambiarEstado(this, idTarea);
    }
    
    public void crearTarea(int idTablero, int idTarea, String n){
        Tarea t= new Tarea(n,idTarea);
        proyectos.get(idTablero).nuevaTarea(t);
    }
    
    public void comentarTarea(int idTablero, int idtarea, String[] Comentarios){
        proyectos.get(idTablero).getTarea(idtarea).agregarComentario(Comentarios);
    }
    
    public void consultarTareasSinRealizar(int idTablero){
        proyectos.get(idTablero).tareasSinRealizar();
    }
}
