/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.controller;

import edu.eci.arsw.manageboard.services.ManejadorTablero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

/**
 *
 * 
 */
@Controller
public class ManejadorSTOMP {
    @Autowired 
    SimpMessagingTemplate msgt;
    
    @Autowired
    ManejadorTablero manejador;
    
    
    
}
