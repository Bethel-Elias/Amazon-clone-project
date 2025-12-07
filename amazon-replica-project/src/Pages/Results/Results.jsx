import React, { useState, useEffect } from "react";
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { productUrl } from '../../Api/EndPoints';
import ProductCard from "../../Components/Product/ProductCard";
import classes from './results.module.css'
import Loader from "../../Components/Loader/Loader";




function Results() {

  const [results,setresults] = useState([])
  const [isLoading,setisLoading] = useState(false)
  const {categoryName} = useParams()
  // console.log(categoryName);
  useEffect(()=> {
    setisLoading(true);
  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) => {
    // console.log(res);
    setresults(res.data);
    // console.log(res.data.product);
    setisLoading(false);
  })
  .catch((error) => { 
    console.log(error);
    setisLoading(false);
  });
},[])  
  


  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product, i) => (
              <ProductCard 
              key={i} 
              product={product} 
              renderDesc={false}
              renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results