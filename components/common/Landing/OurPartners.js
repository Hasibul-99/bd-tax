'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function OurPartners() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  return (
    <div className='container partners !mt-6 !mb-10'>
      <h1 className='w3-center text-4xl font-semibold !mb-10'>Our Partners</h1>
      <div className='hidden md:block'>
        <Slider
          className='p-10 px-4 bg-[#F9FAFB] rounded-[12px] '
          {...settings}
        >
          <div className='px-2'>
            <img src='assets/images/logo_6.png' className='mx-auto' alt />
          </div>
          <div className='px-2'>
            <img src='assets/images/Orange_club.png' alt className />
          </div>
          <div className='px-2'>
            <img src='assets/images/logo_1.png' alt className />
          </div>
          <div className='px-2'>
            <img src='assets/images/logo_2.png' alt />
          </div>
          <div className='px-2'>
            <img src='assets/images/logo_3.png' alt />
          </div>
          <div className='px-2'>
            <img src='assets/images/logo_5.png' alt />
          </div>
          <div className='px-2'>
            <img src='assets/images/logo_4.png' alt />
          </div>
          <div className='px-2'>
            <img src='assets/images/logo_7.png' alt />
          </div>
          <div className='col-span-2 pt-12 px-2'>
            <img src='assets/images/prime_bank.png' className='mx-auto' alt />
          </div>
        </Slider>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 gap-10 md:gap-x-5  p-10 px-4 bg-[#F9FAFB] rounded-[12px] md:hidden'>
        <div>
          <img src='assets/images/logo_6.png' className='mx-auto' alt />
        </div>
        <div className>
          <img src='assets/images/Orange_club.png' alt className />
        </div>
        <div className>
          <img src='assets/images/logo_1.png' alt className />
        </div>
        <div className>
          <img src='assets/images/logo_2.png' alt />
        </div>
        <div className>
          <img src='assets/images/logo_3.png' alt />
        </div>
        <div className>
          <img src='assets/images/logo_5.png' alt />
        </div>
        <div className>
          <img src='assets/images/logo_4.png' alt />
        </div>
        <div className>
          <img src='assets/images/logo_7.png' alt />
        </div>
        <div className='col-span-2'>
          <img src='assets/images/prime_bank.png' className='mx-auto' alt />
        </div>
      </div>
    </div>
  )
}
