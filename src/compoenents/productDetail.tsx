
import {  useParams } from "react-router-dom";
import { ProductsDetails, productdetail_array } from "../productsDetails";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { Button, Paper } from "@mui/material";
import { CartProducts } from "../store/CartProducts";
import {
  useSetRecoilState,
} from 'recoil';

interface product {
  id: number;
  img: string;
  name: string;
  price: number;
  offer: number;
  productdetail: {
    CaseDiameter: string;
    BandColour: string;
    CountryOrigin: string;
  };
}

export function ProductDetail() {
  const { id } = useParams();

  let numericId: number;

  if (id !== undefined) {
    numericId = parseInt(id, 10);
  }

  const [productDetails] = useState(ProductsDetails);
  const setProduct = useSetRecoilState(CartProducts)

  const [specificProduct, setspecificProduct] = useState<product | null>(null);

  function findDetail() {
    const detail = productDetails.find((ele) => ele.id === numericId);
    if (detail === undefined) {
      console.log("err");
    } else {
      setspecificProduct(detail);
    }
  }

  useEffect(() => {
    findDetail();
  }, [specificProduct]);

  // useEffect(() => {
    
  // }, [specificProduct]);

  if (specificProduct === null || specificProduct === undefined) {
    return <>loading..</>;
  } else {
    return (
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
        {/* Left Grid (Image) */}
        <Grid item xs={12} md={4}>
          <Paper>
            <img
              src={specificProduct.img}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
      
        {/* Right Grid (Product Details) */}
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              {specificProduct.name}
            </Typography>
      
            <Typography variant="h6">
              Price: ${specificProduct.price} <br />
              Offer: {specificProduct.offer}
            </Typography>
      
            {/* Table for Product Details */}
            <table>
              <tbody>
                <tr>
                  <td>Product Description:</td>
                  <td>{/* Add your product description property here */}</td>
                </tr>
                <tr>
                  <td>Case Diameter:</td>
                  <td>{specificProduct.productdetail.CaseDiameter}</td>
                </tr>
                <tr>
                  <td>Band Colour:</td>
                  <td>{specificProduct.productdetail.BandColour}</td>
                </tr>
                <tr>
                  <td>Country of Origin:</td>
                  <td>{specificProduct.productdetail.CountryOrigin}</td>
                </tr>
              </tbody>
            </table>
          </Paper>

          <div style={{marginTop:"10px"} }>
                
                
                
                <div><Button variant="contained"
                   onClick={()=>{
                    alert("added")
                     setProduct((prevProducts: productdetail_array) => [...prevProducts, specificProduct])
                    
                  }}
                ><Typography variant="button" display="block" gutterBottom>
            add to cart
        </Typography></Button></div>
          </div>
        </Grid>

       
      </Grid>
      
    );
  }
}
