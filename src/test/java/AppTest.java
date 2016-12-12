
import edu.eci.arsw.manageboard.logic.Tablero;
import edu.eci.arsw.manageboard.logic.Tarea;
import edu.eci.arsw.manageboard.logic.Usuario;
import edu.eci.arsw.manageboard.logic.Jefe;
import edu.eci.arsw.manageboard.logic.Empleado;
import edu.eci.arsw.manageboard.services.ManejadorTablero;
import edu.eci.arsw.manageboard.services.ManejadorUsuario;
import java.util.ArrayList;
import static org.junit.Assert.*;
import org.junit.Test;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author 2098165
 */
public class AppTest {
    
    @Test
    public void registrarUsuarioTest(){
        ManejadorUsuario manejador = new ManejadorUsuario();
        ArrayList<String> habilidades1=new ArrayList<>();
        ArrayList<String> habilidades2=new ArrayList<>();
        ArrayList<String> habilidades3=new ArrayList<>();
        habilidades1.add("Finanzas");
        habilidades1.add("Marketing");
        habilidades1.add("Ventas");
        habilidades2.add("Finanzas");
        habilidades2.add("Desarrollo de software");
        habilidades2.add("Diseño de paginas web");
        habilidades3.add("Desarrollo de software");
        habilidades3.add("Diseño de paginas web");
        manejador.registarUsuario("jefe", "Juan", 1026285452, habilidades1);
        manejador.registarUsuario("empleado", "Sebastian", 1072568752, habilidades2);
        manejador.registarUsuario("empleado", "Nicolas", 1010547896, habilidades3);
        assertTrue(manejador.empleados.size()==3);
    }
    
    @Test
    public void registrarTableroTest(){
        /*
        ManejadorUsuario mu = new ManejadorUsuario();
        ArrayList<String> habilidades=new ArrayList<>();
        habilidades.add("Diseño de paginas web");
        habilidades.add("Ventas");
        habilidades.add("Desarrollo de software");
        Tablero t= new Tablero(0, "Proyecto final ARSW");
        */
        ManejadorTablero mt = new ManejadorTablero();
        mt.setTablero("0");
        mt.setTablero("1");
        mt.setTablero("2");
        mt.setTablero("3");
        assertTrue(mt.tableros.size()==4);
    }
    
    @Test
    public void crearTableroTest(){
        ArrayList<String> habilidades=new ArrayList<>();
        habilidades.add("Diseño paginas web");
        habilidades.add("Administracion de proyectos");
        habilidades.add("Marketing");
        habilidades.add("Desarrollo de sotware");
        habilidades.add("Finanzas");
        Jefe j=new Jefe("Camila",habilidades, 123456789);
        j.crearTablero("Proyecto FGPR");
        assertNotNull(j.proyectos);
    }
    
    @Test
    public void crearTareaTest(){
        Tarea t1;
        Tarea t2;
        Tarea t3;
        Tarea t4;
        Tablero t= new Tablero("0");
        ArrayList<String> habilidades=new ArrayList<>();
        habilidades.add("Marketing");
        habilidades.add("Ventas");
        habilidades.add("Administracion de proyectos");
        Jefe j=new Jefe("Andres",habilidades, 51964735);
        t=j.crearTablero("Proyecto ARSW");
        t1=j.crearTarea(0, 0, "toDo", "Pruebas", "Realizar pruebas de la aplicacion", "#DC143C");
        t2=j.crearTarea(0, 1, "toDo", "Persistencia", "Realizar la persistencia de la aplicacion", "#DC143C");
        t3=j.crearTarea(0, 2, "toDo", "Logica", "Realizar la parte logica de la aplicacion", "#DC143C");
        t4=j.crearTarea(0, 3, "toDo", "Vistas", "Realizar las vistas de la aplicacion", "#DC143C");
        /*t.nuevaTarea(t1.getNombre(), t1.getId());
        t.nuevaTarea(t2.getNombre(), t2.getId());
        t.nuevaTarea(t3.getNombre(), t3.getId());
        t.nuevaTarea(t4.getNombre(), t4.getId());*/
        assertNotNull(t.tareasTablero);
    }
    
    @Test
    public void consultarTareasSinRealizarTest(){
        Tablero t;
        ArrayList<String> habilidades=new ArrayList<>();
        habilidades.add("Diseño paginas web");
        habilidades.add("Administracion de proyectos");
        Jefe j=new Jefe("Camilo",habilidades, 125856320);
        Tarea tar1= new Tarea(0, "toDo", "Diseño pagina", "Crear los html de las paginas", "#DC143C");
        Tarea tar2= new Tarea(1, "toDo", "Logica", "Diseñar la logica de la aplicacion", "#DC143C");
        t=j.crearTablero("Proyecto PDSW");
        t.agregarTarea(tar1);
        t.agregarTarea(tar2);
        assertNotNull(j.consultarTareasSinRealizar(0));
    }
    
    @Test
    public void aprobarCulminacionTareaTest(){
        Tablero t;
        Tarea tar;
        ArrayList<String> habilidades=new ArrayList<>();
        habilidades.add("Diseño paginas web");
        habilidades.add("Administracion de proyectos");
        Jefe j=new Jefe("Sergio",habilidades, 845631453);
        t= j.crearTablero("Proyecto AREM");
        tar=j.crearTarea(0, 0, "toDo", "Crear BD", "Crear base de datos para la aplicacion", "#DC143C");
        t.agregarTarea(tar);
        j.aprobarCulminacionTarea(0, 0, true);
        assertEquals(true, tar.isAprobado());
    }
    /*
    @Test
    public void agregarCriteriosTareaTest(){
        Tablero t;
        Tarea tar;
        ArrayList<String> habilidades=new ArrayList<>();
        habilidades.add("Administracion de proyectos");
        habilidades.add("Finanzas");
        Jefe j=new Jefe("Alejandro",habilidades, 845631453);
        t=j.crearTablero(0, "Proyecto GFIN");
        tar=j.crearTarea(0, 0, "Hacer balance de resultados");
        t.nuevaTarea(tar.getNombre(), tar.getId());
        j.agregarCriteriosTarea(0, 0, "Debe contener todos los movimientos financieros del año");
        j.agregarCriteriosTarea(0, 0, "Debe ser clara su lectura");
        System.out.println("Criterios "+j.proyectos.get(t.idTablero).getTarea(tar.getId()).getCriterios().size());
        System.out.println("Nombre tablero " +t.nombre);
        System.out.println("Nombre tarea " +tar.getNombre());
        assertNotNull(j.proyectos.get(t.idTablero).getTarea(tar.getId()).getCriterios());
        //assertTrue(tar.getCriterios().size()==0);
    }
    
    @Test
    public void comentarTareaTest(){
        Tarea t1;
        Tablero t;
        ArrayList<String> habilidades=new ArrayList<>();
        habilidades.add("Diseño paginas web");
        habilidades.add("Desarrollo de software");
        habilidades.add("Administracion de proyectos");
        Jefe j=new Jefe("Andres",habilidades, 54896254);
        t=j.crearTablero(0, "Proyecto COSW");
        t1=j.crearTarea(0, 0, "Conexion BD");
        t.nuevaTarea(t1.getNombre(), t1.getId());
        j.comentarTarea(0, 0, "Todas las vitas funcionan");
        j.comentarTarea(0, 0, "4 vistas creadas y funcionando");
        System.out.println("Comentarios "+j.proyectos.get(t.idTablero).getTarea(t1.getId()).getComentarios().size());
        System.out.println("Proyectos " +j.proyectos.size());
        System.out.println("nombre Tablero "+j.proyectos.get(0).nombre);
        System.out.println("id Tarea "+j.proyectos.get(0).getTarea(0).getId());
        assertNotNull(j.proyectos.get(t.idTablero).getTarea(t1.getId()).getComentarios());
        //assertTrue(j.proyectos.get(0).getTarea(t1.getId()).getComentarios().size()==2);
    }*/
}
