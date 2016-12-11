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
    private boolean existe;
    private String columna; // state -- Columna en la que se encuentra
    private String titulo; //label -- Titulo en el encabezado de la tarea
    private String descripcion; //tags 
    private String criticidad; // hex -- codigo de color respecto a la importancia
    /*
    localData: [
                  { id: "1161", state: "done", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0" },
                  { id: "1645", state: "work", label: "Change Billing Address", tags: "billing", hex: "#f19b60"},
                  { id: "9213", state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0"},
                  { id: "6546", state: "done", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0"},
                  { id: "9034", state: "done", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
         ],
    */    
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
    }

    public Tarea(){
    }
    
    public boolean getExiste(){
        return this.existe;    
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
        
    /*
    public void setIdTarea(int idTarea) {
        this.idTarea = idTarea;
    }

    public int getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
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
    */

 
}
