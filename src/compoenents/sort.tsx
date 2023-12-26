/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { productdetail_array } from '../productsDetails';
import { SetStateAction, useState } from 'react';
import { ProductsDetails } from '../productsDetails';

const drawerWidth = 240;


interface params{
  setProduct:React.Dispatch<SetStateAction<productdetail_array>>
}

export const Sort = React.memo(function _sort({setProduct}:params) {
  
  const [product, ] = useState(ProductsDetails);
  const [minPrice,setMinPrice] = useState(0)
  const [maxPrice,setmaxprice] = useState(1000000)
  const [selectedBrands,setBrand] = useState<string[]>([])



  React.useEffect(()=>{
    setProduct(product)
  },[])

  React.useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);


  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Typography> Sort by brand</Typography>

        <List>
            {   
              ['rolex', 'patek philippe', 'jacob and co', 'breitling'].map((text, index) => {
                const checkboxId = `checkbox-${index}`;

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Checkbox 
                          inputProps={{ 'aria-label': 'controlled' }} 
                          id={checkboxId} 
                          size="small" 
                          
                          onClick={() => {
                            const checkbox = document.getElementById(checkboxId) as HTMLInputElement;
                            
                            if(checkbox.checked){
                              setBrand((previousbrand) => [...previousbrand, text]);
                              setProduct((products)=>{ return products.filter((product)=>{return product.name.includes(text);})})
                            }else{
                              setProduct(product)
                              
                            }
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
        </List>


        <Divider />
        <Typography> Sort by price</Typography>

        <Box sx={{ width: 239 }} style={{display:'flex',justifyContent:'center'}}>
        <TextField
          id="outlined-number"
          label="Min"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event)=>{
            const input = parseInt(event.target.value)
            setMinPrice(input)
          }}
        />
        <TextField
          id="outlined-number"
          label="Max"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event)=>{
            const input = parseInt(event.target.value)
            setmaxprice(input)
          }}
        />
          <Button variant="outlined" onClick={()=>{
               setProduct((products) => {
                 return products.filter((product)=>{
                    return product.price >= minPrice && product.price <= maxPrice
                 })
              });
          }}>filter</Button>
        </Box>
      </Drawer>
    </>
  );
});
