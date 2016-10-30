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
public class Usuario {
    public String nombre;
    public ArrayList<Tablero> proyectos=null;
    public String[] habilidades;
    
    public Usuario(String n, String[] h){
        this.nombre=n;
        this.habilidades=h;
    }
    
    public void moverTarea(int id){
        //modificacion del tablero, solo la puede hacer quien este haciendo la tarea
        proyectos.get(id).cambiarEstado(this);
    }
    
    public void crearTarea(int id, String n){
        Tarea t= new Tarea(n,id);
        proyectos.get(id).nuevaTarea(t);
    }
    
    public void comentarTarea(){
    
    }
    
    public void consultarTareasSinRealizar(){
    
    }
    
}
