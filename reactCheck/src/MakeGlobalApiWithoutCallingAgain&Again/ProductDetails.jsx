import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { meraProductId } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    console.log(meraProductId,"merpro")
    const url = `https://fakestoreapi.com/products/${meraProductId}`;
    console.log({ url });
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log({ data });
        setProductDetails(data);
      });
  }, [meraProductId]);
  return (
    <>
      <p>Product Details : {meraProductId}</p>
      <div>
        <p>{productDetails.id}</p>
        <p>{productDetails.title}</p>
        <img style={{height:300, width:200}} src={productDetails.image} alt="" />
        <p>{productDetails.description}</p>
      </div>
    </>
  );
};

export default ProductDetails;