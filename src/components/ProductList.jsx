import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import ProductItem from "./ProductItem";
import Skeleton from "./Skeleton";

// status: pending, success, error
// data: undefined (null), [...], { message: "Something went wrong"}

export default function ProductList() {
  // Hooks ===== functions
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading || data === null) return <Skeleton />;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.products.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          description={product.description}
          brand={product.brand}
          category={product.category}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
}
