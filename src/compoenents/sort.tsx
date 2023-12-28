/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { FormGroup, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import { productdetail_array } from '../productsDetails';
import { SetStateAction, useState } from 'react';
import { ProductsDetails } from '../productsDetails';

const drawerWidth = 240;

interface params {
  setProduct: React.Dispatch<SetStateAction<productdetail_array>>;
}

export const Sort = React.memo(function _sort({ setProduct }: params) {
  const [product, ] = useState(ProductsDetails);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [selectedBrands, setBrand] = useState<string[]>([]);

  React.useEffect(() => {
    setProduct(product);
  }, []);

  React.useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  const handleCheckboxChange = (text: string) => {
    setBrand((previousbrand) =>
      previousbrand.includes(text)
        ? previousbrand.filter((brand) => brand !== text)
        : [...previousbrand, text]
    );
  };

  const handleFormSubmit = () => {
    // Filter products based on selected brands
    const filteredProducts = product.filter((product) =>
      selectedBrands.some((brand) => product.name.includes(brand))
    );
    if (filteredProducts.length === 0) {
      setProduct(product);
    } else {
      setProduct(filteredProducts);
    }
    
  };

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
        <Typography>Sort by brand</Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <MuiCheckbox
                checked={selectedBrands.includes('rolex')}
                onChange={() => handleCheckboxChange('rolex')}
              />
            }
            label="Rolex"
          />
          <FormControlLabel
            control={
              <MuiCheckbox
                checked={selectedBrands.includes('patek philippe')}
                onChange={() => handleCheckboxChange('patek philippe')}
              />
            }
            label="Patek Philippe"
          />
          <FormControlLabel
            control={
              <MuiCheckbox
                checked={selectedBrands.includes('jacob and co')}
                onChange={() => handleCheckboxChange('jacob and co')}
              />
            }
            label="Jacob and Co"
          />
          <FormControlLabel
            control={
              <MuiCheckbox
                checked={selectedBrands.includes('breitling')}
                onChange={() => handleCheckboxChange('breitling')}
              />
            }
            label="Breitling"
          />
          <br />
          <Button
            variant="contained"
            size="medium"
            onClick={handleFormSubmit}
            sx={{ width: '150px', height: '40px' }}
          >
            Check
          </Button>
          <br />

        </FormGroup>

        <Divider />
        <Typography>Sort by price</Typography>

        <Box sx={{ width: 239 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            id="outlined-number"
            label="Min"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              const input = parseInt(event.target.value);
              setMinPrice(input);
            }}
          />
          <TextField
            id="outlined-number"
            label="Max"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              const input = parseInt(event.target.value);
              setMaxPrice(input);
            }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              setProduct((products) => {
                return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
              });
            }}
          >
            Filter
          </Button>
        </Box>
      </Drawer>
    </>
  );
});
