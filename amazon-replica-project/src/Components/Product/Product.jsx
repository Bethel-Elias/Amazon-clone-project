import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "./product.module.css"
import Loader from "../../Components/Loader/Loader"


function Product() {
  const [products, setproducts] = useState([]);
  const [isLoading,setisLoading] = useState(false)

  useEffect(() => {
    setisLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setproducts(res.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
  }

export default Product