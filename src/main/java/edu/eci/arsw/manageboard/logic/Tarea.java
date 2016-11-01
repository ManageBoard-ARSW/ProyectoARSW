/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;


/**
 *
 *
 */
public class Tarea {
    private String[] comentarios;
    private String[] criterios;
    private String nombre;
    private int idTarea;
    private int calificacion=0;
    private boolean toDo=true;
    private boolean aprobado=false;
    
    public Tarea(String[] c, String n, int id){
        this.criterios = c;
        this.nombre = n;
        this.idTarea = id;
    }
    
    public Tarea(String n, int id){
        this.nombre = n;
        this.idTarea = id;
    }
    
    public int getId(){
        return idTarea;
    }
    
    void agregarCriterios(String[] c) {
        this.criterios = c;
    }

    void agregarComentario(String[] c) {
        this.comentarios = c;
    }

    public String[] getComentarios() {
        return comentarios;
    }

    public String[] getCriterios() {
        return criterios;
    }

    public boolean isAprobado() {
        return aprobado;
    }

    public void setAprobado(boolean aprobado) {
        this.aprobado = aprobado;
    }
    
    public boolean getToDo(){
        return toDo;
    }
    
    public void setToDo(boolean t){
        toDo = t;
    }
}
