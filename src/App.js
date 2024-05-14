
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Life from './components/pages/Life';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Achievements from './components/pages/Achievements';
import AboutUs from './components/pages/AboutUs';

function App() {
 
  return (
    <>
      
     <Router>

      
      
       <NavBar />  
      
       <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/life' element={<Life/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/achievements' element={<Achievements/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/sign-in' element={<SignIn/>} />
        
          <Route path='/fb' element='https://www.facebook.com/' />
        </Routes>    
     </Router>
    </>
  );
}

export default App;
