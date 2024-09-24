import '@/style/css/w3.css'
import '@/style/css/style.css'
import '@/style/css/other-style.css'
import Link from 'next/link'
import {GET_NEWS} from '@/scripts/api'

async function getData() {
  const res = await fetch(
    `${
      process.env.BASE_URL || 'https://bdtaxliveapi.bdtax.com.bd/public/api/'
    }${GET_NEWS}`,
    {next: {revalidate: 3600}}
  )

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function page() {
  const res = await getData()
  return (
    <div className='container parents'>
      <div className='bg-white pt-6 pb-6 px-4 rounded-t-2xl'>
        <h1 className='font-semibold text-[36px] leading-[44px] text-center tracking-[-0.02em] text-[#020617]'>
          In the news
        </h1>
        <p className='w3-center'>
          Discover where our product has made headlines
        </p>
      </div>
      <div className='rounded-b-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 bg-white pb-10 pt-6 px-4'>
        {res?.data?.length ? (
          <>
            {res.data.map((item, idx) => (
              <Link key={idx} href={item.link} target='_blank'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      className='!object-contain'
                      src={item.image}
                      alt='ballons'
                    />
                  </div>
                  <div className='card-body'>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className='user'>
                      <div className='user-info'>
                        <h5>{item.date}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : null}
      </div>
    </div>
  )
}
