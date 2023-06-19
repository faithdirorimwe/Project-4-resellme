import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './components/Footer';

function App() {
  
  return (
   <Router>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
      </Routes> 
      <Footer/>
    </div>
   </Router>
  )
}

export default App
