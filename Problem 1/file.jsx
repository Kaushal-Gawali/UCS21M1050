import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [col, setCol] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/product")
      .then(res => {
        const products = res.data.Products;

        if (products.length > 0) {
          const columns = Object.keys(products[0]);
          setCol(columns);
          setRecords(products);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='container mt-5'>
      <table className='table'>
        <thead>
          <tr>
            {col.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((product, i) => (
            <tr key={i}>
              <td>{product.productname}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.discount}</td>
              <td>{product.availability ? "Available" : "Not Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}