import React, { useState,useContext } from 'react'
// import Layout from '../../Components/Layout/Layout'
import classes from './auth.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import {Type} from '../../Utility/action.type'
import { ClipLoader } from 'react-spinners';


function Auth() {

  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [error,seterror] = useState("")
  // console.log(password,email);
  const [loading, setloading] = useState({
    signIn:false,
    signUp:false
  })

  const [{basket,user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate()

console.log(user);

  const authHandler = async(e) => {
    e.preventDefault();
    // console.log(e.target.name);

    if(e.target.name === "sign-In"){
      setloading({...loading,signIn:true})
      signInWithEmailAndPassword(auth,email,password)
      .then((userInfo) => {
        // console.log(userInfo);

        dispatch({
          type: Type.SET_USER,
          user:userInfo.user
        })
        setloading({...loading, signIn:false})
        navigate("/")
      }).catch((error) => {
          // console.log(error);
          seterror(error.message)
          setloading({ ...loading, signIn: false });
      })


    }else{
      setloading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
         setloading({ ...loading, signUp: false }); 
         navigate("/")
        })
        .catch((error) => {
          // console.log(error);
           seterror(error.message);
           setloading({ ...loading, signUp: false }); 
        });

    }
  }



  return (
    // <Layout>
    <section className={classes.login}>
      <Link to="/">
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
          <button
            type="submit"
            name="sign-In"
            onClick={authHandler}
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#36d7b7" size={15} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. Please see your privacy Notice, our cookies notice and our
          interest-based Ads notice.
        </p>
        <button
          type="submit"
          name="sign-Up"
          onClick={authHandler}
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#36d7b7" size={15} />
          ) : (
            " Sign Up"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
    // </Layout>
  );
}

export default Auth