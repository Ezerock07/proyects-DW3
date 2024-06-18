import { react } from "react";
import { ProveedorDeTareas} from './context/Tareas';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AgregarTarea from './components/AgregarTareas';
import EditarTarea from './components/EditarTareas';
import VerTodasLasTarea from './components/VerTodasLasTareas';
import Navbar from './components/Navbar/Navbar';

const app = ( ) => {
  return( 
    <Router>
      <ProveedorDeTareas>
        <Navbar/>
        <Routes>
          <Route path='/agregar' element= {<AgregarTarea/>}></Route>
          <Route path='/editar/:id' element= {<EditarTarea/>}></Route>
          <Route path='/ver-todas' element= {<VerTodasLasTarea/>}></Route>
        </Routes>
      </ProveedorDeTareas>
    </Router>
  );
};
export default app;
//tiene un par de errores 
//clase ocho de 35' para delante creo