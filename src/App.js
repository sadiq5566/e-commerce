import Navbar from './components/Navbar';
import ProductContextProvider from './global/ProductContext'
import CartContextProvider from './global/CartContext'
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';
import NotFound from './components/NotFound';
import {BrowserRouter as Router ,  Switch , Route } from "react-router-dom"

function App() {
  return (

    < >
    <ProductContextProvider>
    <CartContextProvider>
    <Router>
    <Navbar />
    
    <Switch>

    <Route path="/" exact component={Products} />
    <Route path="/cart" exact component={Cart} />
    <Route path="*" component={NotFound} />
    </Switch>
    </Router>

    </CartContextProvider>
    </ProductContextProvider>
    </>
  );
}

export default App;
