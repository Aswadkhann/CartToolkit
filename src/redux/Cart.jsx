import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove,increment,decrement } from './counterslice'
import Navbar from './Navbar'
const Cart = () => {
    const products = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
     const handleRemove = (productid)=>{
        dispatch(remove(productid))
     }
     const handleDecrement = (productid)=>{
      dispatch(decrement(productid))
     }
     const handleIncrement = (productid)=>{
      dispatch(increment(productid))
     }
  return (
    <div>
    <Navbar/>
    <div  className="grid grid-cols-4 gap-4">
    {products.map((product) => (
  <div key={product.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
    <img src={product.image} alt={product.title} className="w-32 h-32 mb-2" />
    <h4 className="text-lg font-semibold">{product.title}</h4>
    <h5 className="text-gray-500">${product.price}</h5>
    <div className="flex items-center">
      <button onClick={() => handleDecrement(product.id)} className="text-purple-500 px-2">
        -
      </button>
      <span className="mx-2">{product.quantity}</span>
      <button onClick={() => handleIncrement(product.id)} className="text-purple-500 px-2">
        +
      </button>
    </div>
    <p>Total Price: ${product.price * product.quantity}</p>
    <button onClick={() => handleRemove(product.id)} className="bg-purple-500 text-white py-2 px-4 mt-2 rounded-md">
      Remove
    </button>
  </div>
))}

    </div>
    
    
        </div>
  )
}

export default Cart