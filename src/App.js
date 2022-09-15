import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
