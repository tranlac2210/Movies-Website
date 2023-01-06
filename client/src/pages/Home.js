import React, { useState } from 'react';
import data from '../data';
import { useEffect } from 'react';

const Home = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    setMyData(data);
  }, []);
  
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
