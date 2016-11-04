/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.controller;

import edu.eci.arsw.manageboard.config.ExcepcionUsuario;
import edu.eci.arsw.manageboard.logic.Usuario;
import edu.eci.arsw.manageboard.services.ManejadorUsuario;
import java.util.ArrayList;
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
 * @author Owner
 */
@RestController
@RequestMapping(value="/usuario")
public class RESTUsuario {

    @Autowired
    ManejadorUsuario manejador;
    
    @Autowired
    SimpMessagingTemplate msgt;
    
    @RequestMapping(path ="/{cedula}", method = RequestMethod.PUT)
    public ResponseEntity<?> registarUsuarios(@PathVariable Integer cedula ,@RequestBody String tipo , @RequestBody String nombre , @RequestBody ArrayList<String> carac) throws ExcepcionUsuario{
        System.out.println("Entro al PUT");
        //Usuario u= new Usuario(nombre, carac, cedula);
        manejador.registarUsuario(tipo, nombre, cedula, carac);
        //System.out.println(manejador.getUsuario(cedula));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    
    @RequestMapping(value= "/{cedula}", method = RequestMethod.GET)
    public ResponseEntity<?> getDatosUsuario(@PathVariable Integer cedula) throws ExcepcionUsuario {
        Usuario u = manejador.getUsuario(cedula);
        return new ResponseEntity<>(u,HttpStatus.ACCEPTED);
    }
    
    
}
