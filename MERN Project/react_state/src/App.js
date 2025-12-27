import logo from './logo.svg';
import './App.css';
import Student from './pages/Student';
import Counter from './pages/Counter';
import Login from './pages/Login';

function App() {
  return (
    <div>
      {/* Student Page */}
      <Student name="Suresh" dept="Ai & DS" age="20" />


      {/* Counter Page */}
      <Counter/>

      {/* Login Page */}
      <Login/>

    </div>
  );
}

export default App;
