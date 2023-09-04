import React from 'react';
import './HelloWorld.css';

function HelloWorld() {
  const user = {
    name: 'Ram lal ',
    contact: 981134567,
    address: 'Bhaktapur',
    profession: 'Software Engineer',
  };

  const product = [
    {
      id: 1,
      name: 'basmati chamal',
      price: 2200,
      description: 'Babal chamal in the market',
    },
    {
      id: 2,
      name: 'basmati chamal',
      price: 2200,
      description: 'Babal chamal in the market',
    },
    {
      id: 3,
      name: 'basmati chamal',
      price: 2200,
      description: 'Babal chamal in the market',
    },
    {
      id: 4,
      name: 'basmati chamal',
      price: 2200,
      description: 'Babal chamal in the market',
    },
  ];

  return (
    <div className="productContainer">
      {product.map((item) => {
        return (
          <div className="helloContainer" key={item.id}>
            <div>
              <div className="title">
                <h2>{item.name}</h2>
                <h1>{item.price}</h1>
              </div>
              <div className="info">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HelloWorld;
