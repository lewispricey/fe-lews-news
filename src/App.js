import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import Articles from './components/Articles';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/articles/:topic" element={<Articles/>}/>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
