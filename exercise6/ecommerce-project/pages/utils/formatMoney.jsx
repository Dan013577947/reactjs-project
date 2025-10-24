export function formatMoney(productPriceCents){
  return `$${(productPriceCents/100).toFixed(2)}`
}
