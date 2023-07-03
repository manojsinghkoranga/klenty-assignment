import React, { useState, useEffect } from 'react';
import "./test.css";

function Test() {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const newData = [...Array(100)].map((_, index) => `Element ${index + 1}`);
      setData(newData);
      setVisibleData(newData.slice(0, 20));
    };
    fetchData();
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        const newVisibleData = data.slice(0, visibleData.length + 20);
        setVisibleData(newVisibleData);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data, visibleData]);

  return (
    <div>
      {visibleData.map((item, index) => (
        <div key={index} className='testItems'>{item}</div>
      ))}
    </div>
  );
}

export default Test;

