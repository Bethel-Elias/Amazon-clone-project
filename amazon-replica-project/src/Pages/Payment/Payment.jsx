import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import { useElements, useStripe,CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';

function Payment() {
 

const [{basket,user}] = useContext(DataContext)

// for total items
const totalItem = basket?.reduce((amount, item) => {
  return item.amount + amount;
}, 0);
//  for price
const total = basket.reduce((amount, item) => {
  return item.price * item.amount + amount;
}, 0);

const [cardError,setCardError] = useState(null)

const stripe = useStripe();
const elements = useElements();


 const handleChange = (e) => {
  console.log(e);
  e?.error?.message ? setCardError(e?.error?.message) : setCardError("")
 }

 const handlePayment = (e) => {
  e.preventDefault()

  // backend function - get client secret

  // client side/react side confirmation

  // after confiramtion order firestore database,save and clear basket

 }

  return (
    <Layout>
      <div className={classes.payment_header}>checkout({totalItem}) items</div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Ethiopia</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard product={item} key={i} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="" onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card */}
                <CardElement onChange={handleChange} />
                {/* price to pay */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:"flex" ,gap:"5px"}}>
                      <p>Total order  |</p>  <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment