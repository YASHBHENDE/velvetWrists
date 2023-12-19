/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, ChangeEvent, useEffect } from 'react';
import { TextField, IconButton, InputAdornment, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { ProductsDetails, prod_details } from '../productsDetails';

import { productdetail_array } from '../productsDetails';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  const [product, setProduct] = useState(ProductsDetails)
  

  const [search,setsearch] = useState('')
  const [_searchedData,setSearchdata] = useState<productdetail_array>()

  
  function handleSearch(){
    
    let filteredProduct = product.filter((watch) =>
        watch.name.toLowerCase().includes(search.toLowerCase())
    );
    
      
    setSearchdata(filteredProduct)
  }
  const navigate = useNavigate()
  if(_searchedData == undefined){
    return  <>
    <div style={{ width: '300px', position: 'relative' }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth

          onChange={(e) => {
            setsearch(e.target.value);
          } }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }} />
      </div>
     
     
    </>
  }else{
    return  <>
          <div style={{ width: '300px', position: 'relative' }}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth

            onChange={(e) => {
              setsearch(e.target.value);
            } }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }} />
             {_searchedData.length > 0 && (
                <Paper elevation={3} style={{ position: 'absolute', zIndex: 1, width: '100%', marginTop: 8 }}>
                  <List>
                    {_searchedData.map((watch) => (
                      <ListItem key={watch.id}>
                        <ListItemText primary={watch.name} onClick={()=>{
                          navigate(`/productdetail/${watch.id}`)
                          setSearchdata([])
                          window.location.reload()
                        }}/>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
      )}
        </div>
  </>
  }
   
  
}