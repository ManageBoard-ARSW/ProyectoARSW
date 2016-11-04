/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.manageboard.services;

import edu.eci.arsw.manageboard.logic.Empleado;
import edu.eci.arsw.manageboard.logic.Jefe;
import edu.eci.arsw.manageboard.logic.Usuario;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author nicolasguzmanp
 */
@Service
public class ManejadorUsuario {
    
    public List<Usuario> empleados= new LinkedList<>();
    
    public void registarUsuario(String tipo, String nombre, int cc, ArrayList<String> h){
        Usuario us;
        if(tipo=="jefe"){
            us=new Jefe(nombre, h, cc);
        }else{
            us=new Empleado(nombre, h, cc);
        }
        ingresoUsuario(us);
    }
    
    public void ingresoUsuario(Usuario user){
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
