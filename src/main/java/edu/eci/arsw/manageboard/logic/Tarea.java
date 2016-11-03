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
public class Tarea {
    private ArrayList<String> comentarios;
    private ArrayList<String>criterios;
    private String nombre;
    private int idTarea;
    private int calificacion=0;
    private boolean toDo=true;
    private boolean aprobado=false;
    
    public Tarea(){
        comentarios=new ArrayList<>();
        criterios=new ArrayList<>();
    }
    
    public Tarea(String n, int id){
        this.nombre = n;
        this.idTarea = id;
        comentarios=new ArrayList<>();
        criterios=new ArrayList<>();
    }
    
    public int getId(){
        return idTarea;
    }

    public String getNombre() {
        return nombre;
    }
    
    void agregarCriterios(String c) {
        criterios.add(c);
    }

    void agregarComentario(String c) {
        comentarios.add(c);
    }

    public ArrayList<String> getComentarios() {
        return comentarios;
    }

    public ArrayList<String> getCriterios() {
        return criterios;
    }

    public boolean isAprobado() {
        return aprobado;
    }

    public void setAprobado(boolean a) {
        this.aprobado = a;
    }
    
    public boolean getToDo(){
        return toDo;
    }
    
    public void setToDo(boolean t){
        toDo = t;
    }
}
