const getCartFromLocalStorage = () =>{
    
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.part(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLacalStorage = cart =>{
    const CartStringified = JSON.stringify(cart);
    localStorage.setItem('cart, cartStringified');
}

const addItemToCartLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];
    
    saveCartToLacalStorage(newCart);
}

export{
    getCartFromLocalStorage as getCart,
    addItemToCartLocalStorage as addItem,
    saveCartToLacalStorage as saveItem,
}