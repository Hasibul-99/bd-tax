import React from 'react'
import { Select, Space } from 'antd';
import Image from 'next/image';

// https://codepen.io/Blockshot/pen/rNwOYBE
export default function AuthNavbar() {
    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
                <div>
                    <a href="#">
                        <Image width={200} height={60} src="/assets/images/logo.png" />
                    </a>
                </div>
                <a href="#">
                    <svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
                <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <ul className="text-base text-gray-700 pt-4 md:mt-3 md:flex md:justify-between items-center md:pt-0">
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">Home</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">Packages</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">News</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">Blog</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">FAQ</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">About Us</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">Contact Us</a>
                        </li>
                        <li>
                            <Select
                                defaultValue="en"
                                style={{
                                    width: 120,
                                }}
                                // onChange={handleChange}
                                options={[
                                    {
                                        value: 'en',
                                        label: <Space>
                                            <img src="/assets/images/united-kingdom.png" />
                                            English
                                        </Space>,
                                    },
                                    {
                                        value: 'bn',
                                        label: <Space>
                                            <img src="/assets/images/bangladesh.png" />
                                            বাংলা
                                        </Space>,
                                    }
                                ]}
                            />
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">Log In</a>
                        </li>
                        <li>
                            <a class="btn-hover color-5 md:px-6 py-3" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
