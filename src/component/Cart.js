import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, removetoCart } from '../features/product/productSlice'

const Cart = ({item}) => {
   const qantity =useSelector((state)=>state.product.cart)
    const filterQuantity =qantity.filter((items)=>items?.id === item?.id)
    console.log(filterQuantity,"id")
    const dispatch =useDispatch()
  
    return (
      <div className="w-100">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src={item?.image}
            alt=""
            className="cart-image"
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {item?.title}
            </h5>
          </a>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item?.author}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item?.description}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item?.genre}
          </p>
          <div className='flex justify-between'>
            <button className='mr-2 btn' onClick={()=>dispatch(addtoCart(item))}>Add to Cart {filterQuantity.length}</button>
            <button className='btn2' onClick={()=>dispatch(removetoCart(item?.id))}>Remove form Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
