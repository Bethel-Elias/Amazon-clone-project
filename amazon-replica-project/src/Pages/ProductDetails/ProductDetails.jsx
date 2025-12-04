import React,{useEffect, useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './productdetails.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetails() {

  const {productId} = useParams()
  // console.log(productId);
  const [product,setproduct] = useState({})
  const [isLoading,setisLoading] = useState(false)
  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res) =>{
      setproduct(res.data)
      // console.log(res.data);
      setisLoading(false)
    }).catch((err) => {
      console.log(err);
      setisLoading(false);
    })
  }, [])
  console.log(product);

  return (
    <Layout>
      {isLoading ? (<Loader />) : (<ProductCard product={product} />)}
    </Layout>
  ); 
}

export default ProductDetails