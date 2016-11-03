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
        t.nuevaTarea("fgxd", 1);
        t.nuevaTarea("ghgh", 5);
        tableros.add(t);
        System.out.println(tableros);
    }

    public Tablero getTableroId(Integer id) {
        Tablero res=null;
        for (Tablero tablero : tableros) {
            if (tablero.idTablero==id) {
                res=tablero;
                break;
            }
        }return res;
    }

    public List<Tarea> getTareasToDoId(int id) {
        Tablero tab=this.getTableroId(id);
        return tab.TareasTodDo();
    }

    public List<Tarea> getTareasDoingDesId(int id) {
        Tablero tab=this.getTableroId(id);
        return tab.TareasDoingDes();
    }

    public List<Tarea> getTareasDoingPId(int id) {
        Tablero tab=this.getTableroId(id);
        return tab.TareasDoingP();    
    }

    public List<Tarea> getTareasDoneId(int id) {
        Tablero tab=this.getTableroId(id);
        return tab.TareasDone();
    }
    

}
