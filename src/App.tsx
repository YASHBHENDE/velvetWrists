import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { ProductList } from './compoenents/ProductListing'
import { ProductDetail } from './compoenents/productDetail'
import { Appbar } from './compoenents/AppBar'
import './App.css'
import { Cart } from './compoenents/cart'

import {
  RecoilRoot,

} from 'recoil';


function App() {
  
  
  return <>
  <RecoilRoot>
    <Router>
        <Appbar/>
        <Routes>
          
          <Route element={<ProductList/>} path='/'></Route>
          <Route element={<ProductDetail />} path='/productdetail/:id'></Route>
          <Route element={<Cart/>} path='/cart'/>
        </Routes>
    </Router>
   </RecoilRoot>
   </>
}

export default App
