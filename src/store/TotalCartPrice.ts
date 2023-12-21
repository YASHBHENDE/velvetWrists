
import { atom } from "recoil";


// export const CartProducts = atom<productdetail_array>({
//     key: 'CartProducts', 
//     default: [], 
// });

export const TotalCartPrice = atom({
    key:'TotalCartPrice',
    default:0
})