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
    public int cedula;
    
    public Usuario(){
    }
    
    public Usuario(String n, String[] h, int c){
        this.nombre=n;
        this.habilidades=h;
        this.cedula=c;
    }
    
    public void moverTarea(int idTablero, int idTarea){
        proyectos.get(idTablero).cambiarEstado(this, idTarea);
    }
    
    public Tarea crearTarea(int idTablero, int idTarea, String n){
        return proyectos.get(idTablero).nuevaTarea(n, idTarea);
    }
    
    public void comentarTarea(int idTablero, int idtarea, String[] Comentarios){
        proyectos.get(idTablero).getTarea(idtarea).agregarComentario(Comentarios);
    }
    
    public ArrayList<Tarea> consultarTareasSinRealizar(int idTablero){
        return proyectos.get(idTablero).tareasSinRealizar();
    }
}
