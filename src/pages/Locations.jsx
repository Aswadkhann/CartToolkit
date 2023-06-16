import React from 'react'


import axios from 'axios'
const Locations = () => {
  axios.get('https://fakestoreapi.com/products')
  .then(response => {
    // The API response data will be available in response.data
    const products = response.data;
    // Do something with the products data, such as updating your state or rendering it in your application
    console.log(products);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error(error);
  });

  return (
    <div>Locations</div>
  )
}

export default Locations