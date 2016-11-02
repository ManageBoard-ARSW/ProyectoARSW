/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package adu.eci.arsw.manageboard.model;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nicolasguzmanp
 */
@RestController
@RequestMapping("/tablero")
public class RESTTablero {
    
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
            Logger.getLogger(RESTTablero.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no tablero", HttpStatus.NOT_FOUND);
        }
    }
}
