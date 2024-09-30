import PackagePricing from '@/components/common/Landing/PackagePricing'
import {GUEST_PACKAGE_LIST} from '@/scripts/api'
import React from 'react'

async function getData() {
  const res = await fetch(
    `${
      process.env.BASE_URL || 'https://bdtaxliveapi.bdtax.com.bd/public/api/'
    }${GUEST_PACKAGE_LIST}`,
    {next: {revalidate: 60}}
  )

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Package() {
  const data = await getData()

  return (
    <div className='container parents '>
      <div className='bg-white pt-6 md:mt-10 pb-6 px-4 rounded-t-2xl'>
        <h1 className='font-semibold text-[36px] leading-[44px] text-center tracking-[-0.02em] text-[#020617]'>
          Compare Our Packages
        </h1>
      </div>

      <div className='custom-container-under mx-auto px-30 '>
        <PackagePricing data={data.data} />
      </div>
    </div>
  )
}
