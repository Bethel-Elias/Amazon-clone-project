import React, { useState, useEffect } from "react";
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { productUrl } from '../../Api/EndPoints';
import ProductCard from "../../Components/Product/ProductCard";
import classes from './results.module.css'



function Results() {

  const [results,setresults] = useState([])
  const {categoryName} = useParams()
  // console.log(categoryName);
  useEffect(()=> {
  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) => {
    // console.log(res);
    setresults(res.data);
    // console.log(res.data.product);
  })
  .catch((error) => { 
    console.log(error);
  });
},[])  
  


  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>products / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results