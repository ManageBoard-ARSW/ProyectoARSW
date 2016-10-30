/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

import static com.oracle.nio.BufferSecrets.instance;

/**
 *
 * @author nicolas
 */
class Tarea {
    private String[] comentarios;
    private String[] criterios;
    private String nombre;
    private int idTarea;
    private int calificacion=0;
    private boolean aprobado=false;
    private boolean doingDesarrollo;
    private boolean doingPrueba;
    private boolean done; //3 false esta en To Do, doingDesarrollo=true y las otras F esta en Doing
    
    public Tarea(String[] cm, String n, int id){
        this.comentarios=cm;
        this.nombre=n;
        this.idTarea=id;
        this.doingDesarrollo=false;
        this.doingPrueba=false;
        this.done=false;
    }
    
    public Tarea(String n, int id){
        this.nombre=n;
        this.idTarea=id;
        this.doingDesarrollo=false;
        this.doingPrueba=false;
        this.done=false;
    }
    
    public int getId(){
        return idTarea;
    }
    
    public Tarea getTarea(int idtarea){
        return 
    } 
}
