/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.logic;

/**
 *
 * @author nicolas
 */
class Empleado extends Usuario{
    private int calificacion=5; // calificacion promedio
    
    
    public Empleado(String n, String[] h){
        super(n,h);
    }
    
    
}
