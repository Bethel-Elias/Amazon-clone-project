import axios from 'axios'
 


const axiosInstance = axios.create({
  //local url
  // baseURL: "http://127.0.0.1:5001/clone-a73d3/us-central1/api",

  //firebase.com deployed url-backend(functions with card)
  // baseURL: "https://us-central1-clone-a73d3.cloudfunctions.net/api",


  //backend deployed url for amazon api with out card on render.com
  baseURL: "https://amazon-api-deploy-2-2ih7.onrender.com/",
});

export {axiosInstance}