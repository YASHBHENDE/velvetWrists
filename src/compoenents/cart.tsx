/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useEffect } from "react";

import { ProductItem } from "./cartProducts";

import { CartProducts } from "../store/CartProducts";
import {

  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { TotalCartPrice } from "../store/TotalCartPrice";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";

import { useNavigate } from "react-router-dom";

export function Cart() {


  
  const cartProducts = useRecoilValue(CartProducts);
  const totalCartPrice = useRecoilValue(TotalCartPrice)
  
  const settotal = useSetRecoilState(TotalCartPrice)
  
  const totalPrice = cartProducts.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
  }, 0);

  
  const navigate = useNavigate()
  useEffect(()=>{
    settotal(totalPrice)
  },[])
  
  
  if(cartProducts.length === 0 ){
    {console.log("no items")}
    return<>
        <center>
          <div>
            <h1 style={{marginTop:"100px "}}>no items</h1>
            <Button variant="contained" onClick={()=>{
              navigate('/')
            }}>Shop Now!</Button>
            
          </div>
        </center>
    </>
  }else{
  return <div style={{marginTop:"90px"}}>
      <h3 style={{ marginLeft: "870px" }}>price</h3>
      <h3 style={{ marginLeft: "1450px" }}>total </h3>
      

      {cartProducts.map((ele) => (
        <ProductItem name={ele.name} price={ele.price} id={ele.id}  />
      ))}

     
      <h3 style={{ marginLeft: "1450px" }}>total:{totalCartPrice} </h3>
      
      <Button variant="contained"
        onClick={()=>{
            alert("ordered")
      }}
      >   <Typography variant="button" display="block" gutterBottom>
            proceed to pay
        </Typography>
    </Button>
    </div>
  }
}
