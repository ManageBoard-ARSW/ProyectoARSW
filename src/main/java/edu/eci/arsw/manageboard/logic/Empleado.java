/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

import java.util.ArrayList;

/**
 *
 * 
 */
public class Empleado extends Usuario{
    private int calificacion=5; // calificacion promedio
    
    
    public Empleado(String n, ArrayList<String> h, int c){
        super(n,h,c);
        proyectos= new ArrayList<>();
    }
    
    
}
