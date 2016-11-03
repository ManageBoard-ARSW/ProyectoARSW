/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package adu.eci.arsw.manageboard.model;

import edu.eci.arsw.manageboard.logic.Usuario;
import edu.eci.arsw.manageboard.services.ManejadorUsuario;
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
@RequestMapping("/usuario")
public class RESTUsuario {

    @Autowired
    ManejadorUsuario manejador = null;
    
    @Autowired
    SimpMessagingTemplate msgt;

    
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> registarUsuarios(@RequestBody Usuario u) {
        try {
            manejador.registarUsuario(u);
            return new ResponseEntity<>(u, HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(RESTUsuario.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error, ya existe el usuario", HttpStatus.NOT_FOUND);
        }
    }
    
    @RequestMapping(value="/{cedula}",method = RequestMethod.GET)
    public ResponseEntity<?> publicarUsuario(@RequestBody Integer cedula) {
        
        try {
            //obtener datos que se enviarán a través del API
            manejador.getUsuario(cedula);
            return new ResponseEntity<>(cedula, HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(RESTUsuario.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error no se encontro el usuario", HttpStatus.NOT_FOUND);
        }
    }
}
