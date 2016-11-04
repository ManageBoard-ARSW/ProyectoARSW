/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.controller;

import edu.eci.arsw.manageboard.logic.Tablero;
import edu.eci.arsw.manageboard.logic.Tarea;
import edu.eci.arsw.manageboard.services.ManejadorTablero;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PathVariable;
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
    ManejadorTablero manejador = null;
    
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> manejadorGetTablero() {
        System.out.println("entro al get ...............................");
        try {
            //obtener datos que se enviarán a través del API
            List<Tablero> tableros = manejador.getTablero();

            return new ResponseEntity<>(tableros, HttpStatus.ACCEPTED);

        } catch (Exception ex) {
            Logger.getLogger(TableroController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no tablero", HttpStatus.NOT_FOUND);
        }
    }
    
    @RequestMapping("/{id}")
    public ResponseEntity<?> manejadorGetRecursoId(@PathVariable int id){

        try {
        //obtener datos que se enviarán a través del API
        Tablero tab=manejador.getTableroId(id);
        

        return new ResponseEntity<>( tab, HttpStatus.ACCEPTED);
        

        } catch (Exception ex) {
            Logger.getLogger(TableroController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no existe Tablero",HttpStatus.NOT_FOUND);

        }
      
    }
    
    @RequestMapping("/{id}/tareasToDo")
    public ResponseEntity<?> manejadorGetTareasToDoId(@PathVariable int id){

        try {
        //obtener datos que se enviarán a través del API
        List<Tarea> tarTodo=manejador.getTareasToDoId(id);
        

        return new ResponseEntity<>( tarTodo, HttpStatus.ACCEPTED);
        

        } catch (Exception ex) {
            Logger.getLogger(TableroController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no existe Tablero",HttpStatus.NOT_FOUND);

        }
      
    }
    @RequestMapping("/{id}/tareasDoingDes")
    public ResponseEntity<?> manejadorGetTareasDoingDes(@PathVariable int id){

        try {
        //obtener datos que se enviarán a través del API
        List<Tarea> tarTodo=manejador.getTareasDoingDesId(id);
        

        return new ResponseEntity<>( tarTodo, HttpStatus.ACCEPTED);
        

        } catch (Exception ex) {
            Logger.getLogger(TableroController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no existe Tablero",HttpStatus.NOT_FOUND);

        }
      
    }
    @RequestMapping("/{id}/tareasDoingP")
    public ResponseEntity<?> manejadorGetTareasDoingPId(@PathVariable int id){

        try {
        //obtener datos que se enviarán a través del API
        List<Tarea> tarTodo=manejador.getTareasDoingPId(id);
        

        return new ResponseEntity<>( tarTodo, HttpStatus.ACCEPTED);
        

        } catch (Exception ex) {
            Logger.getLogger(TableroController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no existe Tablero",HttpStatus.NOT_FOUND);

        }
      
    }
    @RequestMapping("/{id}/tareasDone")
    public ResponseEntity<?> manejadorGetTareasDoneId(@PathVariable int id){

        try {
        //obtener datos que se enviarán a través del API
        List<Tarea> tarTodo=manejador.getTareasDoneId(id);
        

        return new ResponseEntity<>( tarTodo, HttpStatus.ACCEPTED);
        

        } catch (Exception ex) {
            Logger.getLogger(TableroController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no existe Tablero",HttpStatus.NOT_FOUND);

        }
      
    }
    
}