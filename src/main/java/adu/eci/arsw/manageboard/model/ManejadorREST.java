/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package adu.eci.arsw.manageboard.model;

import edu.eci.arsw.manageboard.logic.Tarea;
import edu.eci.arsw.manageboard.logic.Usuario;
import edu.eci.arsw.manageboard.services.Manejador;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Owner
 */
@RestController
@RequestMapping("/tablero")
public class ManejadorREST {

    @Autowired
    Manejador manejador = null;
    
    @Autowired
    SimpMessagingTemplate msgt;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> manejadorGetTarea() {
        
        try {
            //obtener datos que se enviarán a través del API
            List<Tarea> tareas = manejador.getTareas();

            return new ResponseEntity<>(tareas, HttpStatus.ACCEPTED);

        } catch (Exception ex) {
            Logger.getLogger(ManejadorREST.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no tareas", HttpStatus.NOT_FOUND);
        }
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getDatosUsuarios(@RequestBody String nombre, String[] habilidades, int cedula) {
        
        try {
            //obtener datos que se enviarán a través del API
            Usuario u = manejador.registarUsuario(nombre, habilidades, cedula);
            msgt.convertAndSend("/topic/usuarios",u);

            return new ResponseEntity<>(u, HttpStatus.ACCEPTED);

        } catch (Exception ex) {
            Logger.getLogger(ManejadorREST.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no se encontro el usuario", HttpStatus.NOT_FOUND);
        }
    }
}
