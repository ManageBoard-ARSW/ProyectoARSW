
import edu.eci.arsw.manageboard.logic.Tablero;
import edu.eci.arsw.manageboard.logic.Tarea;
import edu.eci.arsw.manageboard.logic.Usuario;
import edu.eci.arsw.manageboard.logic.Jefe;
import edu.eci.arsw.manageboard.logic.Empleado;
import edu.eci.arsw.manageboard.services.ManejadorUsuario;
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
        String[] habilidades1={"Finanzas", "Marketing", "marketing", "Ventas", "Diseño de paginas web"};
        String[] habilidades2={"Desarrollo de software", "Marketing", "Finanzas", "Diseño de paginas web"};
        String[] habilidades3={"Desarrollo de software", "Diseño de paginas web"};
        Jefe u1=new Jefe("Juan",habilidades1, 1026285452);
        Empleado u2=new Empleado("Nicolas",habilidades2, 1072568752);
        Empleado u3=new Empleado("Sebastian",habilidades3, 1010547896);
        manejador.registarUsuario(u1);
        manejador.registarUsuario(u2);
        manejador.registarUsuario(u3);
        assertTrue(manejador.empleados.size()==3);
    }
    
    @Test
    public void crearTableroTest(){
        String[] habilidades={"Diseño paginas web", "Administracion de proyectos", "Marketing", "Desarrollo de sotware", "Finanzas"};
        Jefe j=new Jefe("Camila",habilidades, 123456789);
        j.crearTablero(0, "Proyecto FGPR");
        assertNotNull(j.proyectos);
    }
    
    @Test
    public void crearTareaTest(){
        Tarea t1=new Tarea();
        Tarea t2=new Tarea();
        Tarea t3=new Tarea();
        Tarea t4=null;
        Tablero t= new Tablero();
        String[] habilidades={"Marketing", "Ventas", "Administracion de proyectos"};
        Jefe j=new Jefe("Andres",habilidades, 51964735);
        t=j.crearTablero(0, "Proyecto ARSW");
        t1=j.crearTarea(0, 0, "Pruebas");
        t2=j.crearTarea(0, 1, "Persistencia");
        t3=j.crearTarea(0, 2, "Logica");
        t4=j.crearTarea(0, 3, "Vistas");
        t.nuevaTarea(t1.getNombre(), t1.getId());
        t.nuevaTarea(t2.getNombre(), t2.getId());
        t.nuevaTarea(t3.getNombre(), t3.getId());
        t.nuevaTarea(t4.getNombre(), t4.getId());
        assertNotNull(t.tareas);
    }
    
    @Test
    public void consultarTareasSinRealizarTest(){
        Tablero t= new Tablero();
        String[] habilidades={"Diseño paginas web", "Administracion de proyectos"};
        Jefe j=new Jefe("Camilo",habilidades, 125856320);
        Tarea tar1= new Tarea("Vistas", 0);
        Tarea tar2= new Tarea("Pruebas", 1);
        t=j.crearTablero(0, "Proyecto PDSW");
        t.nuevaTarea(tar1.getNombre(), tar1.getId());
        t.nuevaTarea(tar2.getNombre(), tar2.getId());
        tar1.setToDo(true);
        tar2.setToDo(true);
        assertNotNull(j.consultarTareasSinRealizar(0));
    }
    
    @Test
    public void aprobarCulminacionTareaTest(){
        Tablero t= new Tablero();
        Tarea tar=new Tarea();
        String[] habilidades={"Diseño paginas web", "Administracion de proyectos"};
        Jefe j=new Jefe("Sergio",habilidades, 845631453);
        t= j.crearTablero(0, "Proyecto AREM");
        tar=j.crearTarea(0, 0, "Crear BD");
        t.nuevaTarea(tar.getNombre(), tar.getId());
        j.aprobarCulminacionTarea(0, 0);
        assertEquals(false, tar.isAprobado());
    }
    /*
    @Test
    public void agregarCriteriosTareaTest(){
        Tablero t= new Tablero();
        Tarea tar=new Tarea();
        String[] habilidades={"Finanzas", "Administracion de proyectos"};
        Jefe j=new Jefe("Alejandro",habilidades, 845631453);
        t=j.crearTablero(0, "Proyecto GFIN");
        tar=j.crearTarea(0, 0, "Hacer balance de resultados");
        t.nuevaTarea(tar.getNombre(), tar.getId());
        j.agregarCriteriosTarea(0, 0, "Debe contener todos los movimientos financieros del año");
        j.agregarCriteriosTarea(0, 0, "Debe ser clara su lectura");
        System.out.println("Criterios "+j.proyectos.get(0).getTarea(0).getComentarios().size());
        assertTrue(tar.getCriterios().size()==2);
    }
    
    @Test
    public void comentarTareaTest(){
        Tarea t1=new Tarea();
        Tarea t2=new Tarea();
        Tarea t3=new Tarea();
        Tablero t= new Tablero();
        String[] habilidades={"Diseño paginas web", "Desarrollo de software", "Administracion de proyectos"};
        Jefe j=new Jefe("Daniela",habilidades, 54896254);
        t=j.crearTablero(0, "Proyecto COSW");
        t1=j.crearTarea(0, 0, "Conexion BD");
        t2=j.crearTarea(0, 1, "Pruebas");
        t3=j.crearTarea(0, 2, "Vistas html");
        t.nuevaTarea(t1.getNombre(), t1.getId());
        t.nuevaTarea(t2.getNombre(), t2.getId());
        t.nuevaTarea(t3.getNombre(), t3.getId());
        j.comentarTarea(0, 0, "Todas las vitas funcionan");
        j.comentarTarea(0, 0, "4 vistas creadas y funcionando");
        System.out.println("Comentarios "+j.proyectos.get(0).getTarea(0).getComentarios().size());
        assertTrue(j.proyectos.get(0).getTarea(0).getComentarios().size()==2);
    }*/
}
