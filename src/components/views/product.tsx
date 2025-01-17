import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams()
  const fetchData = async (id: string) => {
    try {
      const { status, data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`,{
        headers:{
          "Content-Type": "application/json"
        }
      })
      console.log(data);

    } catch (error) {

    }
  }
  useEffect(() => {
    if (productId) {
      fetchData(productId)
    }
  }, [productId])
 
  return (
    <div>
     
      Product: {productId}
    </div>
  )
}

export default Product;
