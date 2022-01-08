import { useState, useEffect } from 'react'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Main/Home'
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth/Auth';
import './App.css';

function App() {
  // const user = JSON.parse(localStorage.getItem('profile'))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  // useEffect(() => {
  //   setUser(null)
  // },[user])
  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/home" exact element={<Home user={user} setUser={setUser} />} />
        <Route path="/login" exact element={!user ? <Auth/> : <Navigate to="/home"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
