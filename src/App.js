import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import PageFrame from "./components/PageFrame/PageFrame";

function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/:pathname/:productCate/:productId">
          <PageFrame/>
        </Route>
        <Route path="/:pathname/:productCate">
          <PageFrame/>
        </Route>
        <Route path="/:pathname">
          <PageFrame/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
