import React from 'react';
import {products} from '../constans/index';
import Popularporductcard from '../components/Popularporductcard';

const Popularporductit = () => {
  return (
    <div>
       <section id="products" className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-4xl font-palanquin font-bold'>
           Our  <spna className="text-red-500"> Popular  </spna> 
               Products </h2>
          <p className='lg:max-w-lg mt-2 font-montser text-gray-400'>
            Expercise top-notach quality  and style  with our sougth-after  selections.Discover 
            a world of comfort,design and value
          </p>

        </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {products.map((product)=>
          (
            <Popularporductcard key={product.name} {...product}/>
          )
          )}

        </div>

       </section>

    </div>
  )
}

export default Popularporductit