import './App.css';
import './styles/loading-spinner.css'
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article';
import UserContext from './contexts/User'
import { useState } from 'react';
import SignIn from './components/SignIn';


function App() {
  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
    <UserContext.Provider value ={{user, setUser}}>

    <div className='loading hide'></div>
    <div className="App">
      <Navbar/>
      <p>Current User: {user.name}</p>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/articles/:topic" element={<Articles/>}/>
        <Route path="/topics" element={<Topics/>}/>
        <Route path="/article/:articleID" element={<Article />}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
