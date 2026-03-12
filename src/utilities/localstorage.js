const getCartFromLocalStorage = () =>{
    
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLacalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];
    
    saveCartToLacalStorage(newCart);
}

const getResolvedFromLocalStorage = () =>{
  const storedResolved = localStorage.getItem("resolved");
  if(storedResolved){
    return JSON.parse(storedResolved);
  }
  return [];
}

const saveResolvedToLocalStorage = (resolved) =>{
  localStorage.setItem("resolved", JSON.stringify(resolved));
}

const addResolvedToLocalStorage = (id) =>{
  const resolved = getResolvedFromLocalStorage();
  if(resolved.includes(id)) return;
  const newResolved = [...resolved, id];
  saveResolvedToLocalStorage(newResolved);
}

const removeItemFromCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();

  const remainingCart = cart.filter(itemId => itemId !== id);

  saveCartToLacalStorage(remainingCart);
};

export{
    getCartFromLocalStorage as getCart,
    addItemToCartLocalStorage as addItem,
    saveCartToLacalStorage as saveItem,

    getResolvedFromLocalStorage as getResolve,
    addResolvedToLocalStorage as addResolve,
    saveResolvedToLocalStorage as saveResolve,

    removeItemFromCartLocalStorage as removeItem
}