/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.services;

import edu.eci.arsw.manageboard.logic.Tablero;
import edu.eci.arsw.manageboard.logic.Tarea;
import edu.eci.arsw.manageboard.logic.Usuario;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import java.util.concurrent.ArrayBlockingQueue;

/**
 *
 * @author Owner
 */

public class ManejadorTareas {
    public List<Tarea> tareas;
    
    public ManejadorTareas() {

    }
    
    public List<Tarea> getTareas() {
        return tareas;
    }
    
    private void registrarTarea(Tarea t) {
    tareas.add(t);
    }
}
