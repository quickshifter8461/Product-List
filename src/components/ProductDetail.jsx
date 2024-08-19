import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productLoader } from "./Loader";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productLoader(productId).then(setProduct);
  }, [productId]);

  if (!product) {
    return <h1 className="text-center m-5 p-5 text-danger">Loading...</h1>;
  }

  return (
    <div className="container mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-capitalize list-group-item list-group-item-action list-group-item-success">{product.title}</h2>
          <br />
          <p className="card-text">{product.body}</p>
        </div>
      </div>
       <Link className="btn btn-primary mt-4" to={'/'}>Back to Product List</Link> 
    </div>
  );
}

export default ProductDetail;
