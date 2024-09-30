import React from 'react'
import {Carousel} from 'antd'

export default function Slider2() {
  return (
    <div className='container mt-12 mb-10 client-say'>
      <Carousel arrows={true} autoplay={true} infinite={true} dots={false}>
        <div className='client-say-content pb-12 md:pb-0'>
          <p className='md:mx-12'>
            “Awesome work by the development and support team. Done my taxing
            using their service for the last two years. Very friendly and
            helpful service.Thanks for existing bdtax.com.bd making this
            complicated task a bit easy”
          </p>
          <div className='img'>
            <img src='/assets/images/slider_1.jpg' alt />
          </div>
          <h2>Eshar Zaman Sowmmo</h2>
        </div>
        <div className='client-say-content pb-12 md:pb-0'>
          <p className='md:mx-12'>
            “bdtax.com.bd is a great option for tax return submission without
            any hassle. Their service is so far very good. Highly Recommended.”
          </p>
          <div className='img'>
            <img src='/assets/images/slider_2.jpg' alt />
          </div>
          <h2>Shofi Choudhury</h2>
        </div>
        <div className='client-say-content pb-12 md:pb-0'>
          <p className='md:mx-12'>
            “I have submitted my return for consecutive two years through bdTax.
            Their USP of them is their transparent consultation- they will not
            hide anything, rather they will try their best to make the return
            submission error-free.”
          </p>
          <div className='img'>
            <img src='/assets/images/slider_3.jpg' alt />
          </div>
          <h2>Mahfuj Rahman</h2>
        </div>
      </Carousel>
    </div>
  )
}
