import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      {/* Header Imported */}
      <Header/>

      {/* It is Used to Navigation */}
      <BrowserRouter>

        {/* Creating Links For Created URL Paths */}
        <nav>
          
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>

        </nav>

        {/* Creating URL Paths for Each page */}
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />

        </Routes>

      </BrowserRouter>

      {/* Footer Imported */}
      <Footer/>

    </div>
  );
}

export default App;
