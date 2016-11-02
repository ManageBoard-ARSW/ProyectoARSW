
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
    /*
    @Test
    public void crearTareaTest(){
        Tarea t1=null;
        Tarea t2=null;
        Tarea t3=null;
        Tarea t4=null;
        String[] habilidades={"Marketing", "Ventas", "Administracion de proyectos"};
        Empleado u=new Empleado("Andres",habilidades, 51964735);
        Tablero t= new Tablero(1, "Proyecto ARSW");
        t1=u.crearTarea(1, 1, "Pruebas");
        t2=u.crearTarea(1, 2, "Persistencia");
        t3=u.crearTarea(1, 3, "Logica");
        t4=u.crearTarea(1, 4, "Vistas");
        t.nuevaTarea(t1.getNombre(), t1.getId());
        t.nuevaTarea(t2.getNombre(), t2.getId());
        t.nuevaTarea(t3.getNombre(), t3.getId());
        t.nuevaTarea(t4.getNombre(), t4.getId());
        assertNotNull(t.tareas);
    }
    
    @Test
    public void comentarTareaTest(){
        Tarea t1=null;
        Tarea t2=null;
        Tarea t3=null;
        String[] habilidades={"Diseño paginas web", "Desarrollo de software", "Administracion de proyectos"};
        String[] comentarios={"4 vistas creadas y funcionando", "Todas las vitas funcionan"};
        Jefe u=new Jefe("Daniela",habilidades, 54896254);
        Tablero t= new Tablero(1, "Proyecto COSW");
        t1=u.crearTarea(1, 1, "Conexion BD");
        t2=u.crearTarea(1, 2, "Pruebas");
        t3=u.crearTarea(1, 3, "Vistas html");
        t.nuevaTarea(t1.getNombre(), t1.getId());
        t.nuevaTarea(t2.getNombre(), t2.getId());
        t.nuevaTarea(t3.getNombre(), t3.getId());
        u.comentarTarea(1, 3, comentarios);
        assertTrue(u.proyectos.get(1).getTarea(3).getComentarios().length==2);
    }
    
    @Test
    public void consultarTareasSinRealizarTest(){
        String[] habilidades={"Diseño paginas web", "Administracion de proyectos"};
        Jefe u=new Jefe("Camilo",habilidades, 125856320);
        Tablero t= new Tablero(1, "Proyecto PDSW");
        Tarea tar1= new Tarea("Vistas", 1);
        Tarea tar2= new Tarea("Pruebas", 2);
        t.nuevaTarea(tar1.getNombre(), tar1.getId());
        t.nuevaTarea(tar2.getNombre(), tar2.getId());
        tar1.setToDo(true);
        tar2.setToDo(false);
        assertNotNull(u.consultarTareasSinRealizar(1));
    }
    
    @Test
    public void crearTableroTest(){
        String[] habilidades={"Diseño paginas web", "Administracion de proyectos", "Marketing", "Desarrollo de sotware", "Finanzas"};
        Jefe j=new Jefe("Camila",habilidades, 123456789);
        j.crearTablero(1, "Proyecto FGPR");
        assertNotNull(j.proyectos);
    }
    
    @Test
    public void aprobarCulminacionTareaTest(){
        String[] habilidades={"Diseño paginas web", "Administracion de proyectos"};
        Jefe u=new Jefe("Sergio",habilidades, 845631453);
        Tablero tab= new Tablero(1, "Proyecto AREM");
        Tarea t=new Tarea("Crear BD", 1);
        tab.nuevaTarea(t.getNombre(), t.getId());
        u.aprobarCulminacionTarea(1, 1);
        assertEquals(t.isAprobado(), true);
    }
    
    @Test
    public void agregarCriteriosTareaTest(){
        String[] habilidades={"Finanzas", "Administracion de proyectos"};
        String[] criterios={"Debe contener todos los movimientos financieros del año"};
        Jefe j=new Jefe("Alejandro",habilidades, 845631453);
        Tablero tab= new Tablero(1, "Proyecto GFIN");
        Tarea t=new Tarea("Hacer balance", 1);
        tab.nuevaTarea(t.getNombre(), t.getId());
        j.agregarCriteriosTarea(1, 1, criterios);
        assertEquals(1, t.getCriterios().length);
    }*/
}
