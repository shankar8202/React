import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { ProductProvider } from "./CreateContaxt";
import ProductList from "./ProductList";

const router = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  {
    path: "product-details/:meraProductId",
    element: <ProductDetails />,
  },
]);

function Maiiin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    // console.log({ url });
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log("okk", data);
        setProducts(data);
      });
  }, []);
  return (
    <ProductProvider value={products}>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default Maiiin;
