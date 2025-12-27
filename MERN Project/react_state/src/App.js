import logo from './logo.svg';
import './App.css';
import Student from './pages/Student';
import Counter from './pages/Counter';
import Login from './pages/Login';
import Toggle from './pages/Toggle';
import Form from './pages/Form';
import LoginNew from './pages/LoginNew';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div>
      {/* Student Page */}
      <Student name="Suresh" dept="Ai & DS" age="20" />


      {/* Counter Page */}
      <Counter/>

      {/* Login Page */}
      <Login/>

      {/* Toggle Page */}
      <Toggle/>

      {/* Form page */}
      <Form/>

      {/* New Login Page */}
      <LoginNew/>

      {/* Dark Mode and Light Mode */}
      <ThemeToggle/>

    </div>
  );
}

export default App;
