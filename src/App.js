import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/articles/:topic" element={<Articles/>}/>
        <Route path="/topics" element={<Topics/>}/>
        <Route path="/article/:articleID" element={<Article />}/>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
