/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.services;

import edu.eci.arsw.manageboard.logic.Usuario;
import java.util.ArrayList;

/**
 *
 * @author nicolasguzmanp
 */
public class ManejadorUsuario {
    
    public ArrayList<Usuario> empleados= new ArrayList<>();
    
    public void registarUsuario(Usuario user){
        empleados.add(user);
    }
    
    public Usuario getUsuario(int cedula){
        Usuario u = null;
        for(int i=0; i<empleados.size(); i++){
            if(empleados.get(i).cedula==cedula){
                u=empleados.get(i);
            }
        }
        return u;
    }
}