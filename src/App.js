import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./context";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#1e1e1e" : "",
        color: darkMode ? "#ffffff" : "",
      }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
