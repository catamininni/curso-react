import NavBar from '../NavBar/NavBar.js';
import './Main.css';
import ItemList from '../ItemList/ItemList.js';
import Counter from '../Counter/Counter'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

function Main() {
  return (
    <div cla
    ssName="App">
      <Router>
      <NavBar/>
      <Switch>

      <Route exact path="/">
        <ItemList/>
      </Route>

      <Route path='/products/:id'>
      <ItemDetailContainer/>
      </Route>

      <Route path='/informacion/:id'>
      <h3>Mas informacion...</h3>
      </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default Main;

