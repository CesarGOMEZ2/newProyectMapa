import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registro from '../pages/Registro';
import Mainpage from '../pages/Mainpage';
import Rutter from '../pages/Rutter';
import Ofertas from '../pages/Ofertas';
import Pago from "../pages/PagoMeet";
import ProfileAdmin from '../pages/ProfileAdmin';
import LoadinPage from '../pages/LoadinPage';
function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Registro/>}/>     
                <Route path="/inicioMain" element={<Mainpage/>}/>
                <Route path="/Rutas" element={<Rutter/>}/>
                <Route path="/Ofertas" element={<Ofertas/>}/>
                <Route path="/ProfileAdim" element={<ProfileAdmin/>}/>
                <Route path="/Pagos" element={<Pago/>}/>
                <Route path="/PageLoading" element={<LoadinPage/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;