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
import org.springframework.stereotype.Service;

/**
 *
 * @author Owner
 */
@Service
public class ManejadorTablero {
    public List<Tablero> tableros;
    
    public ManejadorTablero() {
        tableros=new LinkedList<>();
        cargarTableros(this);

    }
    
    public List<Tablero> getTablero() {
        return tableros;
    }

    private void cargarTableros(ManejadorTablero mt) {
        Tablero t=new Tablero(12, "tablero1");
        tableros.add(t);
        System.out.println(tableros);
    }
    

}
