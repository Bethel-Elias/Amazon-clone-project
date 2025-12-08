import React from 'react'
// import Layout from '../../Components/Layout/Layout'
import classes from './auth.module.css'
import { Link } from 'react-router-dom';

function Auth() {
  return (
    // <Layout>
    <section className={classes.login}>
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign-In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password"/>
          </div>
          <button className={classes.login_signInButton}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale. Please see your privacy Notice, our cookies notice and our interest-based Ads notice.
        </p>
        <button className={classes.login_registerButton}>Sign Up</button>
      </div>
    </section>
    // </Layout>
  );
}

export default Auth