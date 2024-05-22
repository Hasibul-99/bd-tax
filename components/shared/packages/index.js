"use client"

import WelcomeMessage from '@/components/shared/WelcomeMessage';
import Premium from '@/components/shared/packages/Premium';
import PremiumPlus from '@/components/shared/packages/PremiumPlus';
import Standard from '@/components/shared/packages/Standard';
import { PACKAGE_LIST } from '@/scripts/api';
import { getData } from '@/scripts/api-service';
import { useEffect, useState } from 'react';

export default function Packages({ locale }) {
    const [packageList, setPackageList] = useState()

    const getPackagesList = async () => {
        let res = await getData(PACKAGE_LIST);

        if (res) {
            setPackageList(res?.data)
        }
    }

    useEffect(() => {
        getPackagesList()
    }, [])

    return (
        <>
            {
                packageList ? <>
                    <div className='bg-white py-10 px-4'>
                        <WelcomeMessage />
                        <div className='text-center bg-slate-100 mt-4 py-5 rounded-md '>
                            <h5 className='text-base font-semibold'>{packageList.page_tite_tax_year}</h5>
                            <p>{packageList.page_tite}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 bg-white pb-10 px-4">
                        {
                            packageList.packages?.length ? <>
                                {
                                    packageList.packages.map(item => {
                                        return item.title === "Premium Plus" ? <PremiumPlus locale={locale} pack={item} /> : 
                                        item.title === "Premium " ? <Premium locale={locale} pack={item} /> : 
                                        item.title === "Standard" ? <Standard ocale={locale} pack={item} /> : ''
                                    })
                                }
                            </> : ''
                        }
                    </div>
                </> : ''
            }
        </>

    )
}
