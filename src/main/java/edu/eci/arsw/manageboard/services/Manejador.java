/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.services;

import edu.eci.arsw.manageboard.logic.Tablero;
import edu.eci.arsw.manageboard.logic.Tarea;
import edu.eci.arsw.manageboard.logic.Usuario;
import java.util.LinkedList;
import java.util.List;

import java.util.concurrent.ArrayBlockingQueue;

/**
 *
 * @author Owner
 */

public class Manejador {
    List<Tarea> tareas;

    public Manejador() {
        tareas = new LinkedList<>();
        cargarTareas(this);

    }
    
    public List<Tarea> getTareas() {
        return tareas;
    }
    
    public Usuario registarUsuario(String nombre, String[] habilidades, int cedula){
        Usuario u= new Usuario(nombre,habilidades,cedula);
        return u;
    }

    private void cargarTareas(Manejador mt) {
       Tarea t = new Tarea("HACER PROYECTO", 0);
       mt.registrarTarea(t);
       Tarea t1 = new Tarea("HACER PROYECTO1", 1);
       mt.registrarTarea(t);
       Tarea t2 = new Tarea("HACER PROYECTO2", 2);
       mt.registrarTarea(t);
       Tarea t3 = new Tarea("HACER PROYECTO3", 3);
       mt.registrarTarea(t);
       
    }

    private void registrarTarea(Tarea t) {
    tareas.add(t);
    }
}
