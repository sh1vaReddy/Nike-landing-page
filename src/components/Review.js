import React from 'react'
import { star } from '../assets/icons';

const Review = ({imgUrl,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgUrl} alt="customer" className='rounded-full  object-cover w-[120px] h-[120px]'/>
        <p className='mt-6 max-w-sm text-center'>{feedback}</p>
        <div className='mt-3 flex  justify-center items-center'>
            <img src={star}  alt="star" width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-gray-300'>{rating}</p>
        </div>
        <h3 className='mt-1  font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default Review;