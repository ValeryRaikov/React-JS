import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = 'http://localhost:3030/jsonstore/advanced/products';

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/details/${productId}`); 

        if (response.status === 204) {
          return <h1>No such product!</h1>
        }

        const result = await response.json();

        setProduct(result);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <p className="text-base font-semibold leading-7 text-indigo-600">Product</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
      <img src={product.imageSrc} alt={product.imageAlt} />
      <p className="mt-6 text-xl leading-8 text-gray-700">Color: {product.color}</p>
      <h2>Price: {product.price}</h2>
    </>
  );
}