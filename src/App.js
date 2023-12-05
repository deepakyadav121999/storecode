import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import "./App.css";
import Footer from './Pages/Footer';
import Content from "./Pages/Content";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HomePage/>
      <Routes>
   
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Content/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
