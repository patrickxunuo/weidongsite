import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PageFrame from "./components/PageFrame/PageFrame";

function App() {
let abbb = "1"
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/aboutus">
          <PageFrame/>
        </Route>
        <Route path="/products">
          <PageFrame/>
        </Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
