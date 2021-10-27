export const CartReducer = (state ,action)=>{

    let product;
    let updatedPrice;
    let updatedQty;
    let index;

    let {ShoppingCart , totalPrice , qty} = state;

    switch (action.type) {
        case 'ADD_TO_CART':
        const check = ShoppingCart.find(product => product.id === action.id)
        if(check){
            return state;
        }     else{
            product = action.product;
            product['qty'] = 1;
            updatedQty = qty +1;
            updatedPrice = totalPrice + product.price;
            return {ShoppingCart : [...ShoppingCart , product] , totalPrice : updatedPrice , qty : updatedQty}
        }
        break;
        default:
        return state;
    }

}