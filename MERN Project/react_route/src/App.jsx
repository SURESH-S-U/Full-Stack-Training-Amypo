import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Students from './components/Students';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>


      {/* Props (Properties) - Sending Values to Child Component */}
      
      <Students name="Suresh" course="AIDS" year="2025"/>

      {/* We can use it multiple times with diff Properties */}
      <Students name="Sharan" course="AIDS" year="2025"/>
      <Students name="Thamarai" course="AIDS" year="2025"/>
      <Students name="Thilak" course="AIDS" year="2025"/>



      {/* React Router Dom usage */}
      

    </div>
  );
}

export default App;
