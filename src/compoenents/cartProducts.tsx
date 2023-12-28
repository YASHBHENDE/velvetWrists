
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from "react"
import { CartProducts } from "../store/CartProducts";

import {
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { TotalCartPrice } from '../store/TotalCartPrice';

interface types {
  name: string,
  price: number,
  id:number
}

export const ProductItem: React.FC<types> = React.memo(function ProductItem({ name, price,id }) {
  const [quantity, setQuantity] = useState<number>(1)

  
  const settotal = useSetRecoilState(TotalCartPrice)
  const _cartProducts = useRecoilValue(CartProducts)
  const setCartProducts = useSetRecoilState(CartProducts)
  console.log("first "+quantity)

  useEffect(()=>{
    if(quantity <= 0){
      const updatedCartProducts = _cartProducts.filter((product) => product.id !== id);
      
      setCartProducts(updatedCartProducts);
     

    }
  },[quantity])
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: 4,
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <div style={{padding:"5px"}}>
          <Typography sx={{ marginLeft: 2 }}>{name}</Typography> <br />
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }} onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
              console.log("after "+quantity)
              
            }else if(quantity <= 0){
              const updatedCartProducts = _cartProducts.filter((product) => product.id !== id);
            
              setCartProducts(updatedCartProducts);
              

            }
            settotal((para: number) => para - price);
          }}>
            -
          </Button>
          {quantity}
          <Button variant="outlined" size="small" onClick={() => {
            setQuantity(quantity + 1);
            settotal((para: number) => para +  price);
            
          }}>
            +
          </Button>
        </div>
      </Box>
      <Typography>{price}</Typography>
      <Typography>${price * quantity}</Typography>
    </Box>
  );
});
