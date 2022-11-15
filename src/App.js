import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './Components/Layouts/Base';
import Home from './Pages/Home';
import Carddeposit from './Pages/Carddeposit';

function App() {
  return (
    <div>

   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path="/" element={<Home/>}/>
    <Route  path="/carddeposit" element={<Carddeposit/>}/>
   </Routes>
   </Base>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
