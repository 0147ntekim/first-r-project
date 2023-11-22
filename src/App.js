import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BlogList from './Blog';
import Navbar from './navbar';


function App() {
  return (  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList/>}></Route>  
      </Routes>      
    </Router>
    
  );
}

export default App;
