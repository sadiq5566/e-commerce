import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductContext'
import { CartContext } from '../global/CartContext'
import Banner from './Banner';

const Products = () => {
    const { products } = useContext(ProductsContext)
    const {dispatch , qty , ShoppingCart ,  totalPrice } = useContext(CartContext)
    
    return (
        <div className="container">
                <Banner />

            <div className="products">
                {
                    products.map((product) => (
                        <div className="product" key={product.id}>
                           
                            <div className="product-image">
                                <img src={product.image} alt="iamge" />
                            </div>
                            <div className="product-detail">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    {product.price}/-PKR
                                </div>
                                {/* <div className="product-status">
                                    {product.status}
                                </div> */}

                            </div>


                            <div className="add-to-cart" onClick={()=>{
                                dispatch({type:'ADD_TO_CART', id:product.id , product:product })
                            }}>
                        Add to Cart
                                </div>
                                {product.status === "hot" ? <div className="hot">Hot </div>: <div className="new">New </div> }



                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default Products
