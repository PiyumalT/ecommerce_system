import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

export default function Products() {

  const [data, setData] = useState([]);

  useEffect(() => {
    //retrieve data from Spring Boot backend 
    fetch('http://localhost:8080/api/v1/items')
    .then(response => response.json())
    .then(data => {
      // do something with the data 
      setData(data); 
    });
  }, []);
  
  const rows = data.reduce((acc, item, index) => {
    if (index % 3 === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(item);
    return acc;
  }, []);
  
  return (
    <div>
      {rows.map((row, index) => (
        <div className="home-row" key={index}>
          {row.map(item => (
            <Product
              key={item.item_id}
              id={item.item_id}
              title={item.name}
              price={item.price}
              rating={4}
              image={`./Picture/${item.item_id}.jpg`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
