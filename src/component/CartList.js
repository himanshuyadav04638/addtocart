import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetoCart } from '../features/product/productSlice'

const CartList = () => {
    const qantity =useSelector((state)=>state.product.cart)
    const dispatch =useDispatch()
    const filterData =qantity.filter((a, i) => qantity.findIndex((s) => a.id === s.id) === i)

    const handlePrice =(item)=>{ 
    const qus = qantity.filter((items)=>items.id ===item)
     return qus.length
    }

    return (
    <div className='p-12'>
         <div className='flex items-center justify-around'>
            <div>
                 <h1>book</h1>
            </div>
            <div>
                 <h1>Discription</h1>
            </div>
            <div>
                 <h1>Quantity</h1>
            </div>
            <div>
                 <h1>Price</h1>
            </div>

            <div>
                 <h1>Action</h1>
            </div>


         </div>
        {filterData?.map((item)=>(
            <div className='flex items-center justify-around cardboder'>
              <div className='image-cart'>
                  <img src={item?.image} alt="" />
              </div>
              <div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {item?.author}
              </p>
              <p className='pera'>{item?.description}</p>
              </div>
              <p>{handlePrice(item?.id)}</p>

              <p>{500 * handlePrice(item?.id)} rs</p>
              <button className='btn2' onClick={()=>dispatch(removetoCart(item?.id))}>Delete</button>
          </div>

        ))}

        <div>
             <h1>Total price : { 500 * qantity.length}</h1>
        </div>
      

    </div>
  )
}

export default CartList