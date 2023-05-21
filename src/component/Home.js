import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { productAsync } from '../features/product/productSlice'

const Home = () => {
  const [searchItem,setSearchItem] =useState("")
  const productData =useSelector((state)=>state.product.items)
  const dispatch =useDispatch()

  // console.log(items)

  useEffect(()=>{
    dispatch(productAsync())
  },[dispatch])

  return (
    <div className='p-12'>
        <div className='flex justify-center items-center '>
          <div className='mr-4'>
            <label htmlFor="">Search by Title: </label>
            <input  value={searchItem} type="text" placeholder='search' className='input-search' onChange={(e)=>setSearchItem(e.target.value)} />
          </div>
          
        </div>

        <div className="grid grid-cols-4 gap-16 p-12">
         {productData?.filter((val) => {
              if (searchItem == "") {
                       return val;
                     }
                     else if(val && val.title && val.title.toLowerCase().includes(searchItem.toLowerCase())){
                       return val
                     }
                     else if(val && val.genre && val.genre.toLowerCase().includes(searchItem.toLowerCase())){
                      return val
                    }
                     
                   }).map((item)=>(
           <Cart  item={item} />
         ))}
          
        </div> 
    </div>
  )
}

export default Home