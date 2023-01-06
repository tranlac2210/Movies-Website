import React, { useState } from 'react';
import data from '../data';
import { useEffect } from 'react';

const Home = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    setMyData(data);
  }, []);
  //   console.log('🚀 ~ file: Home.js:7 ~ Home ~ myData', myData);
  return (
    <div>
      {myData.map((data, index) => {
        const { title } = data;
        return <div key={index}>{title}</div>;
      })}
    </div>
  );
};

export default Home;
