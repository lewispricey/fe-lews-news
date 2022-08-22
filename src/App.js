import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Articles from './components/Articles';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles/>}/>
        
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
