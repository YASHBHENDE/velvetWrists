/* eslint-disable @typescript-eslint/no-unused-vars */
import { atom } from "recoil";
import { productdetail_array } from "../productsDetails";

// export const CartProducts = atom<productdetail_array>({
//     key: 'CartProducts', 
//     default: [], 
// });

export const TotalCartPrice = atom({
    key:'TotalCartPrice',
    default:0
})