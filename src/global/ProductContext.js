import React,{createContext,useState} from 'react'
import dslr from '../assets/dslr.jpg'
import ball from '../assets/ball.jpg'
import headphone from '../assets/headphone.jpg'
import iphone from '../assets/iphone.jpg'
import microphone from '../assets/microphone.jpg'
import perfume from '../assets/perfume.jpg'
import ring from '../assets/ring.jpg'
import shoes from '../assets/shoes.jpg'

export const ProductsContext =  createContext();
const ProductContextProvider = (props) => {
    const [products]  = useState([
        {id:1,name:"dslr", price:25000 , image: dslr, status:"hot"},
        {id:2,name:"ball", price:1000 , image: ball, status:"hot"},
        {id:3,name:"headphone", price:500 , image: headphone, status:"new"},
        {id:4,name:"iphone", price:65000 , image: iphone, status:"new"},
        {id:5,name:"microphone", price:1500 , image: microphone, status:"new"},
        {id:6,name:"perfume", price:3000 , image: perfume, status:"hot"},
        {id:7,name:"ring", price:5000 , image: ring, status:"hot"},
        {id:8,name:"shoes", price:2000 , image: shoes, status:"new"},
    ])
    
    return (
        <div>
            <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
            </ProductsContext.Provider>
        </div>
    )
}
 
export default ProductContextProvider
