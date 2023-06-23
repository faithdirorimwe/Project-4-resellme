import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import home from './pages/home';
// import Home from './pages/Home';
// import home from './pages/home'

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
