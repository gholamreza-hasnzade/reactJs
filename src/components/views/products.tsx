// src/Products.tsx
import React, { useEffect, useState } from 'react';
import axios from "axios"
/* import Button from './Button';
import { FaBeer, FaCoffee } from 'react-icons/fa';  */// Example icons from react-icons

const Products: React.FC = () => {
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
    <div className="flex items-center justify-between gap-3 w-[100%] h-[250px] overflow-x-auto px-10">

      {datas?.slice(0,10).map((data) => (
        <div className='w-[250px] h-[100%] bg-blue-800 flex items-center flex-col gap-6'>
          <span className='font-normal '>{data?.title}</span>

        </div>
      ))}
    </div>
  );
};

export default Products;