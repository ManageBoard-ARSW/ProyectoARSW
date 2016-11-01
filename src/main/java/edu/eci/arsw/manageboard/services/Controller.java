/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.services;

import edu.eci.arsw.manageboard.logic.Tarea;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Owner
 */
@RestController
@RequestMapping("/tablero")
public class Controller {
     @Autowired 
     Manejador manejador=null;

       @RequestMapping(method = RequestMethod.GET)
       public ResponseEntity<?> manejadorGetTarea(){
       
        try {
        //obtener datos que se enviarán a través del API
        List<Tarea> tareas=manejador.getTareas();

        return new ResponseEntity<>( tareas, HttpStatus.ACCEPTED);
        

    } catch (Exception ex) {
        Logger.getLogger(Controller.class.getName()).log(Level.SEVERE, null, ex);
        return new ResponseEntity<>("Error no platos",HttpStatus.NOT_FOUND);
    }  
  }
}