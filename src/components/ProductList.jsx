import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsLoader } from './Loader';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsLoader().then(setProducts);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="display-3 text-center mb-4 ">Product List</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item list-group-item-action list-group-item-success text-center fs-3">
            <Link className="link text-capitalize" to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
