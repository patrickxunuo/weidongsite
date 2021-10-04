import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import PageFrame from "./components/PageFrame/PageFrame";
import {Layout} from 'antd'

function App() {
  const {Header: AntHeader, Footer: AntFooter, Content} = Layout

  return (
    <div className="App">
      <AntHeader>
        <Header/>
      </AntHeader>
      <Content>
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
      </Content>
      <AntFooter>
        <Footer/>
      </AntFooter>
    </div>
  );
}

export default App;
