
import { useEffect } from "react";
import { ProductItem } from "./cartProducts";
import { CartProducts } from "../store/CartProducts";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { TotalCartPrice } from "../store/TotalCartPrice";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const cartProducts = useRecoilValue(CartProducts);
  const totalCartPrice = useRecoilValue(TotalCartPrice)
  const setTotal = useSetRecoilState(TotalCartPrice)
  
  const totalPrice = cartProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  const navigate = useNavigate()
  
  useEffect(() => {
    setTotal(totalPrice)
  }, [setTotal, totalPrice])

  if (cartProducts.length === 0) {
    return (
      <>
        <center>
          <div style={{ marginTop: "10%" }}>
            <h1>no items</h1>
            <Button
              variant="contained"
              onClick={() => {
                navigate('/');
              }}
            >
              Shop Now!
            </Button>
          </div>
        </center>
      </>
    );
  } else {
    return (
      <div style={{ marginTop: "5%" }}>
        <h3 style={{ marginLeft: "62%" }}>price</h3>
        <h3 style={{ marginLeft: "95%" }}>total </h3>

        {cartProducts.map((ele) => (
          <ProductItem name={ele.name} price={ele.price} id={ele.id}  />
        ))}

        <h3 style={{ marginLeft: "95%" }}>total: {totalCartPrice}</h3>
        
        <Button
          variant="contained"
          onClick={() => {
            alert("ordered");
          }}
        >
          <Typography variant="button" display="block" gutterBottom>
            proceed to pay
          </Typography>
        </Button>
      </div>
    );
  }
}
