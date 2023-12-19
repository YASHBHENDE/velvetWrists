/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { ProductList } from './compoenents/ProductListing'
import { ProductDetail } from './compoenents/productDetail'
import { Appbar } from './compoenents/AppBar'
import './App.css'
import { Cart } from './compoenents/cart'
import { productdetail_array } from './productsDetails'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
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
