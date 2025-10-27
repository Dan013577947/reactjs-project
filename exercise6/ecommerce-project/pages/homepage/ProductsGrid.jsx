import { Fragment } from 'react';
import ProductContainer from './ProductContainer';

function ProductsGrid({ products, loadCart }) {

  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Fragment key={product.id}>
            <ProductContainer product={product} loadCart={loadCart} />
          </Fragment>
        );

      })}
    </div>
  );
}

export default ProductsGrid