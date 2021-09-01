import './App.css';
import NavBar from './Components/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {cartPage} from './pages/cartPage.js';
import {homePage} from './pages/cartPage.js';
import {productPage} from './pages/cartPage.js';
import { useEffect,useState } from 'react';
const App=()=>{
  const [state, setstate] = useState(0);
  return (
    <Router>
      <NavBar click={()=>{}} />
      <main>
        <Switch>
          <Route path="/" component={homePage}/>
          <Route path="/product:id" component={productPage}/>
          <Route path="/cart" component={cartPage}/>
        </Switch>
      </main>
    </Router>
  )
}



export default App;
