import './App.css';
import NavBar from './Components/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from './pages/CartPage.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import NotFound from './pages/NotFound.js';
import { useEffect,useState } from 'react';
const App=()=>{
  const [cartnum, setCartnum] = useState(0);
  return (
    <Router>
      <NavBar cartnum={cartnum} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/product/:id" component={ProductPage}/>
          <Route path="/cart" component={CartPage}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  )
}



export default App;
