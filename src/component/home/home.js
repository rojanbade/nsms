import React from 'react';
import { datas } from '../dummy';
import Card from '../card';

const Home = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {datas.length > 0 &&
          datas.map((data) => (
            <Card
              key={data.id}
              rating={data.rating}
              size={data.size}
              downloads={data.downloads}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
