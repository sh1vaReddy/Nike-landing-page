import React from 'react';
import {reviews} from  '../constans/index';
import Review from '../components/Review';

const Customerreview = () => {
  return (
    <div>
      <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-red-500'> Customers </span>
        Say?
      </h3>
      <p className='mt-4 m-auto max-w-lg text-center '>
      Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='mt-24 flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <Review  key={review.customerName}
          imgUrl={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}

      </div>

      </section>
    </div>
  )
}

export default Customerreview