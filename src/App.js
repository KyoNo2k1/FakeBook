import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Main/Home'
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
          <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Home />} />

          </Routes>
    </BrowserRouter>
  );
}

export default App;
