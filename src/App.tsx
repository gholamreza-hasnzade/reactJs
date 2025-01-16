// src/App.tsx
import React, { useEffect, useState } from 'react';
import axios from "axios"
/* import Button from './Button';
import { FaBeer, FaCoffee } from 'react-icons/fa';  */// Example icons from react-icons

const App: React.FC = () => {
  /*   const [loading, setLoading] = useState(false);
  
    const handleClick = (variant: string, color: string) => {
      alert(`${color} ${variant} button clicked!`);
    };
  
    const handleLoadingClick = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert('Loading finished!');
      }, 2000); // Simulate a loading delay
    }; */
  const [forms, setForms] = useState({
    datas: [],
    detailData: {}
  });

  const { datas } = forms;
  console.log(datas);
  
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const { status, data } = await axios.get(`https://api.escuelajs.co/api/v1/products`)
        if (status === 200) {
          setForms((prev) => ({
            ...prev,
            datas: data,
          }));
        }
      } catch (error) {
        console.log(error);

      }

    }

    fetchDatas()
  }, [])
  return (
    <div className="">

    </div>
  );
};

export default App;