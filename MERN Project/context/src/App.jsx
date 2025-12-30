import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <NavBar />
      <Home />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
