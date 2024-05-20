import React, { useState, useEffect } from "react";
import "../App.css";
import { Card, Spinner } from "react-bootstrap";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status" style={{ margin: "200px" }} />
    );
  }
  return (
    <>
      <Card>
        <div className="product-list">
          {data.map((product) => (
            <div className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Products;
