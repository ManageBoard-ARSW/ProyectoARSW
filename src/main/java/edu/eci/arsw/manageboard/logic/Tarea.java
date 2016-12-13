/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

import java.util.Date;


/**
 *
 *
 */
public class Tarea {
    /*
    private ArrayList<String> comentarios;
    private ArrayList<String>criterios;
    private String nombre;
    private int calificacion=0;
    private boolean toDo=true;
    private boolean aprobado=false;
    private String estado;
    */
    
    private int idTarea;
    private boolean aprobado;
    private boolean existe;
    private String columna; // state -- Columna en la que se encuentra
    private String titulo; //label -- Titulo en el encabezado de la tarea
    private String descripcion; //tags 
    private String criticidad; // hex -- codigo de color respecto a la importancia
    private Date fechaActual= new Date();
    private int fecha=0;
       
    /*
    @param id, columna, titulo, descripcion, criticidad
    */
    public Tarea(int id, String c, String t, String de, String colo){
      this.idTarea = id;
      this.titulo=t;
      this.columna=c;
      this.descripcion=de;
      this.criticidad=colo;
      this.existe=true;
      this.aprobado=false;
      this.fecha= fechaActual.getDate();
    }

    public Tarea(){
    }
    
    public boolean isAprobado() {
        return aprobado;
    }
    
    public void setAprobado(boolean aprobado) {
        this.aprobado = aprobado;
    }
    
    public boolean getExiste(){
        return this.existe;    
    }
    
    public int getFecha(){
        return this.fecha;
    }
    
    public int getIdTarea() {
        return idTarea;
    }
    
    public String getTitulo() {
        return titulo;
    }
    
    public String getColumna() {
        return columna;
    }
    
    public String getDescripcion() {
        return descripcion;
    }
    
    public String getCriticidad() {
        return criticidad;
    }
    
    public void setColumna(String nueva){
        this.columna=nueva;
    }
    
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCriticidad(String criticidad) {
        this.criticidad = criticidad;
    }
}
