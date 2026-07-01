import React from 'react'

function Product(props) {
    const productinfo = props.product


  return (
    <div>
      <h1> Welcome To Product-App</h1>
      <h2>Product Name Is {productinfo.name}</h2>
       <h2>Product Price Is {productinfo.price}</h2>
       
    </div>
  )
}

export default Product
