import { useContext } from "react";
import { Link } from "react-router-dom";
import {  Productss } from "./CreateContaxt";

const ProductList = () => {
  const product = useContext(Productss);

  return (
    <>
      <h1>My Products</h1>
      <div>
        {product.map((item) => {
          return (
            <Link to={`/product-details/${item.id}`} key={item.id}>
              <p>{item.title}</p>
           

            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
