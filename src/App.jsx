import react from 'react'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import OrderConfirmation from './Pages/OrderConfirmation'
import ProductDetails from './Pages/ProductDetails'
import ProductList from './Pages/ProductList'
import Navvar from './components/Navvar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <div className='min-h-screen bg-gray-950 font-sans' >
          <Navvar/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
        </Routes>
          <Footer/>
        </div>
      </Router>
      
    </>
    )
}
export default App
