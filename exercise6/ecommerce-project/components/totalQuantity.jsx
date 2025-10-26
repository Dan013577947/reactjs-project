function totalQuantity(cart){
  let total = 0;

  cart.forEach((item) => {
    total += item.quantity;
  })

  return total
}

export default totalQuantity