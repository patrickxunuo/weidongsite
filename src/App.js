import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/aboutus">
          <AboutUs/>
        </Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
