
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ProductsDetails } from '../productsDetails';
import { Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Sort } from './sort';


export function ProductList() {
  const [product, setProduct] = useState(ProductsDetails);

  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: 'flex' }} marginTop={"20px"}>
      {/* Sort Component */}
      <Sort setProduct={setProduct}/>
      {/* ProductList Component */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Grid container spacing={2} style={{ marginTop: '10px' }}>
          {product.map((ele) => (
            <Grid item key={ele.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <center>
                  <CardMedia
                    sx={{ height: 140, width: 140 }}
                    image={ele.img}
                    title="green iguana"
                  />
                </center>
                <CardContent>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      navigate(`/productdetail/${ele.id}`);
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {ele.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {ele.price}(-{ele.offer}%)
                    </Typography>
                  </a>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
