import React, { useEffect, useState } from 'react';
import { datas } from '../dummy';
import Card from '../card';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setDatas(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log({ datas });
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {/* <div>
        <h3>{datas && datas.title}</h3>
        <p>{datas && datas.body}</p>
      </div> */}

      {datas.length > 0 &&
        datas.map((value) => {
          return (
            <div>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </div>
          );
        })}
      {/* {datas.length > 0 &&
        datas.map((data) => (
          <Card
            key={data.id}
            rating={data.rating}
            size={data.size}
            downloads={data.downloads}
          />
        ))} */}
    </div>
  );
};

export default Home;
