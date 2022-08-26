import './styles/loading-spinner.css'
import './styles/new-App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article';
import UserContext from './contexts/User'
import { useState } from 'react';
import SignIn from './components/SignIn';
import Err404 from './components/Err404';


function App() {
  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
    <UserContext.Provider value ={{user, setUser}}>
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/articles/:topic" element={<Articles/>}/>
        <Route path="/topics" element={<Topics/>}/>
        <Route path="/article/:articleID" element={<Article />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="*" element={<Err404 />} />
      </Routes>    
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
