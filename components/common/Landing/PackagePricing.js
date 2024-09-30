'use client'

import Link from 'next/link'
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import Cookies from 'js-cookie'
import {postData} from '@/scripts/api-service'
import {TEMP_PACKAGES} from '@/scripts/api'

export default function PackagePricing({data}) {
  const [token, setToken] = useState()

  const premiumPlus = data?.packages?.length
    ? data?.packages.find((item) => item.package_type === 'premiumPlus')
    : null
  const premium = data?.packages?.length
    ? data.packages.find((item) => item.package_type === 'premium')
    : null
  const standard = data?.packages?.length
    ? data.packages.find((item) => item.package_type === 'standard')
    : null

  const tempUserPackages = async (packId) => {
    let res = await postData(
      TEMP_PACKAGES,
      {package_id: packId},
      null,
      null,
      true
    )

    if (res) {
      // router.push(`/${locale}/premium`)
    }
  }

  useEffect(() => {
    const cotoken = Cookies.get('bdtax_token'),
      locatToken = localStorage?.getItem('bdtax_token')

    if (cotoken || locatToken) {
      setToken(cotoken || locatToken)
    }
  }, [])

  return (
    <div className='rounded-b-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 bg-white pb-10 pt-6 px-4'>
      <div className='mb-5'>
        {premiumPlus ? (
          <PremiumPlus
            premiumPlus={premiumPlus}
            token={token}
            tempUserPackages={tempUserPackages}
          />
        ) : null}
      </div>
      <div className='mb-5'>
        {premium ? (
          <Premium
            premium={premium}
            token={token}
            tempUserPackages={tempUserPackages}
          />
        ) : null}
      </div>
      <div className='mb-5'>
        {standard ? (
          <Standard
            standard={standard}
            token={token}
            tempUserPackages={tempUserPackages}
          />
        ) : null}
      </div>
    </div>
  )
}

const PremiumPlus = ({premiumPlus, token, tempUserPackages}) => {
  return (
    <div className='block rounded-[20px] bg-transparent text-surface shadow-secondary-1 relative h-full border-[1.15857px] border-solid border-[rgba(212,175,55,0.4)]'>
      <div className='bg-[#f7ab3c] border border-[#D4AF37] rounded-[50px] absolute px-2 py-1 top-[-18px] font-semibold start-1/3'>
        Most Popular
      </div>
      <div className='premium-plus-card-landing !border-0 !border-b-[1.15857px] border-[rgba(212,175,55,0.4)]'>
        <div className='packages-price'>
          <div className='pp-image'>
            <img src='/assets/images/primium-plus.png' alt='Premium Plus' />
          </div>
          <span className='price-text'>
            {premiumPlus.title} (৳{premiumPlus.price})
          </span>
        </div>
        <div
          id='premium-plus-details'
          className='pack-details'
          style={{height: 59}}
        >
          <p>{premiumPlus.description}</p>
        </div>
        {premiumPlus?.show_selection === 0 ? (
          <button
            type='button'
            className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-plus-Button text-lg font-medium cursor-not-allowed'
          >
            <span>Select</span>
          </button>
        ) : (
          <Link href={token ? '/premium-plus' : '/signup'} className='w-full'>
            <button
              type='button'
              className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-plus-Button text-lg font-medium '
              onClick={() => tempUserPackages(premiumPlus.id)}
            >
              <span>Select</span>
            </button>
          </Link>
        )}
      </div>
      <div className='p-4'>
        {premiumPlus?.more?.length ? (
          <ul>
            {premiumPlus.more.map((item, idx) => (
              <li key={idx} className='package-details'>
                <div className='pp-details'>
                  <img
                    src='/assets/icons/post-icons/star.svg'
                    alt='Premium Plus'
                    width={16}
                    className='mt-1'
                  />
                  <div className={`mt-0.5 ${idx === 0 ? 'font-semibold' : ''}`}>
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

const Premium = ({premium, token, tempUserPackages}) => {
  return (
    <div className='block rounded-[20px] bg-transparent text-surface shadow-secondary-1 relative h-full border-[1.15857px] border-solid border-[rgba(75,127,82,0.4)]'>
      <div className='premium-card-landing !border-0 !border-b-[1.15857px] border-[rgba(75,127,82,0.4)]'>
        <div className='packages-price'>
          <div className='p-image'>
            <img src='/assets/images/premium.png' alt='Premium' />
          </div>
          <span className='price-text'>
            {premium.title} (৳{premium.price})
          </span>
        </div>
        <div
          id='premium-details'
          className='pack-details '
          style={{height: 59}}
        >
          <p>{premium.description}</p>
        </div>
        {premium?.show_selection === 0 ? (
          <button
            type='button'
            className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-Button font-medium cursor-not-allowed text-white text-lg'
          >
            <span>Select</span>
          </button>
        ) : (
          <Link href={token ? '/premium' : '/signup'} className='w-full'>
            <button
              type='button'
              className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-Button text-white text-lg font-medium'
              onClick={() => tempUserPackages(premium.id)}
            >
              <span>Select</span>
            </button>
          </Link>
        )}
      </div>
      <div className='p-4'>
        {premium?.more?.length ? (
          <ul>
            {premium.more.map((item, idx) => (
              <li className='package-details' key={idx}>
                <div className='pp-details'>
                  <img
                    src='/assets/icons/post-icons/star_2.svg'
                    alt='Premium Plus'
                    width={16}
                    className='mt-1'
                  />
                  <div className={`mt-0.5 ${idx === 0 ? 'font-semibold' : ''}`}>
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

const Standard = ({standard, token, tempUserPackages}) => {
  return (
    <div className='block rounded-[20px] bg-transparent text-surface shadow-secondary-1 relative h-full border-[1.15857px] border-solid border-[rgba(15,23,42,0.25)]'>
      <div className='standard-card-landing !border-0 !border-b-[1.15857px] border-[rgba(15,23,42,0.25)]'>
        <div className='packages-price'>
          <div className='s-image'>
            <img src='/assets/images/standerd.png' alt='standard' />
          </div>
          <span className='price-text'>
            {standard.title} (৳{standard.price})
          </span>
        </div>
        <div
          id='standard-details'
          className='pack-details'
          style={{height: 59}}
        >
          <p>{standard.description}</p>
        </div>
        {standard?.show_selection === 0 ? (
          <button
            type='button'
            className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg standard-button  !bg-slate-50 cursor-not-allowed text-lg font-medium'
          >
            <span>Select</span>
          </button>
        ) : (
          <Link href={token ? '/standard' : '/signup'} className='w-full'>
            <button
              type='button'
              className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg standard-button text-lg font-medium'
              onClick={() => tempUserPackages(standard.id)}
            >
              <span>Select</span>
            </button>
          </Link>
        )}
      </div>
      <div className='p-4'>
        {standard?.more?.length ? (
          <ul>
            {standard.more.map((item, idx) => (
              <li key={idx} className='package-details'>
                <div className='pp-details'>
                  <img
                    src='/assets/icons/post-icons/star_3.svg'
                    alt='Premium Plus'
                    width={16}
                    className='mt-1'
                  />
                  <div className={`mt-0.5 ${idx === 0 ? 'font-semibold' : ''}`}>
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
