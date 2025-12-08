import React, { useState,useContext } from 'react'
// import Layout from '../../Components/Layout/Layout'
import classes from './auth.module.css'
import { Link } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import {Type} from '../../Utility/action.type'


function Auth() {

  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [error,seterror] = useState("")

  // console.log(password,email);

  const [{basket,user}, dispatch] = useContext(DataContext)

console.log(user);

  const authHandler = async(e) => {
    e.preventDefault();
    // console.log(e.target.name);

    if(e.target.name === "sign-In"){

      signInWithEmailAndPassword(auth,email,password)
      .then((userInfo) => {
        // console.log(userInfo);

        dispatch({
          type: Type.SET_USER,
          user:userInfo.user
        })

      }).catch((error) => {
          console.log(error);
      })


    }else{

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });

        })
        .catch((error) => {
          console.log(error);
        });

    }
  }



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
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button type="submit" name="sign-In" onClick={authHandler} className={classes.login_signInButton}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. Please see your privacy Notice, our cookies notice and our
          interest-based Ads notice.
        </p>
        <button type="submit"  name="sign-Up" onClick={authHandler} className={classes.login_registerButton}>Sign Up</button>
      </div>
    </section>
    // </Layout>
  );
}

export default Auth