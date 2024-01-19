import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Pages/Pages.css';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import Planets from './Pages/Planets';
import Rockets from './Pages/Rockets';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/planets" element={<Planets/>}/>
            <Route path="/rockets" element={<Rockets/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
