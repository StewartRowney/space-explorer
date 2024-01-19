import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
