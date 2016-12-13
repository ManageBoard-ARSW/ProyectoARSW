/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.controller;

import edu.eci.arsw.manageboard.config.ExcepcionTablero;
import edu.eci.arsw.manageboard.config.ExcepcionUsuario;
import edu.eci.arsw.manageboard.logic.Tablero;
import edu.eci.arsw.manageboard.logic.Tarea;
import edu.eci.arsw.manageboard.services.ManejadorTablero;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nicolasguzmanp
 */
@RestController
@RequestMapping("/tableros")
public class TableroController {
    
    @Autowired
    ManejadorTablero manejador;
    
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> manejadorGetTablero() throws ExcepcionTablero {
            List<Tablero> tableros = manejador.getTableros();
            return new ResponseEntity<>(tableros, HttpStatus.ACCEPTED);
    }

    @RequestMapping(path = "/{idT}", method = RequestMethod.PUT)
    public ResponseEntity<?> putTablero(@PathVariable String idT, @RequestBody Object json) throws ExcepcionTablero {
        manejador.setTablero(idT);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    
    @RequestMapping(path = "/{idT}/tareas", method = RequestMethod.PUT)
    public ResponseEntity<?> putTarea(@PathVariable String idT, @RequestBody Tarea t) throws ExcepcionTablero {
        manejador.addTarea(idT,t);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(path = "/{idT}/tareas", method = RequestMethod.POST)
    public ResponseEntity<?> postTablero(@PathVariable String idT, @RequestBody ArrayList<Tarea> table) {
        System.out.println("LLEGO AL POST ");
        manejador.actualizarTablero(idT,table);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    
    /*
    Devuelve el LocalData de un determinado tablero
    */
    @RequestMapping(value = "/{idT}/tareas", method = RequestMethod.GET)
    public ResponseEntity<?> getTareas(@PathVariable("idT") String idT) throws ExcepcionTablero {
       ArrayList<Tarea> tarjetas=manejador.getTarjetas(idT);
       return new ResponseEntity<>(tarjetas,HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "/{idT}", method = RequestMethod.GET)
    public ResponseEntity<?> getTablero(@PathVariable("idT") String idT) throws ExcepcionTablero {
       ArrayList<Tarea> tarjetas=manejador.getTarjetas(idT);
       return new ResponseEntity<>(tarjetas,HttpStatus.ACCEPTED);
    }       
}
