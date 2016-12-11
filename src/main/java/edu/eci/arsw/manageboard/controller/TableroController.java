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
    ManejadorTablero manejador = null;
    
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> manejadorGetTablero() throws ExcepcionTablero {
            //obtener datos que se enviarán a través del API
            List<Tablero> tableros = manejador.getTablero();
            return new ResponseEntity<>(tableros, HttpStatus.ACCEPTED);
    }

    @RequestMapping(path="/{idT}",  method = RequestMethod.PUT)
    public ResponseEntity<?> putTablero(@PathVariable String idT,@RequestBody Object json ) throws ExcepcionTablero {
     
            System.out.println("entro put ");
            //registrar dato
            LinkedHashMap<?,?> info=(LinkedHashMap) json;
       
            //String no=(String)info.get("nombre");
            //manejador.addTableros(idT, no);
            
            return new ResponseEntity<>(HttpStatus.CREATED);
     }
    
    @RequestMapping(value = "/{idT}", method = RequestMethod.GET)
    public ResponseEntity<?> getTablero(@PathVariable("idT") String idT) throws ExcepcionTablero {
       return new ResponseEntity<>(HttpStatus.ACCEPTED);
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
