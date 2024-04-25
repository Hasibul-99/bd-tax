import React from 'react'
import { Select, Space } from 'antd';
import Image from 'next/image';

export default function AuthNavbar() {
    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
                <div>
                    <a href="#">
                    <Image width={200} height={60} src="/assets/images/logo.png" />
                    </a>
                </div>
                <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">Home</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">Packages</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">News</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">Blog</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">FAQ</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">About Us</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">Contact Us</a>
                        </li>
                        <li>
                            <Select
                                className='mt-3'
                                defaultValue="en"
                                style={{
                                    width: 120,
                                }}
                                // onChange={handleChange}
                                options={[
                                    {
                                        value: 'en',
                                        label: 'English',
                                    },
                                    {
                                        value: 'bn',
                                        label: 'বাংলা',
                                    }
                                ]}
                            />
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-green-400" href="#">Log In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
