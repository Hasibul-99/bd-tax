'use client'
 
import React from 'react'
import { Select, Space } from 'antd';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// import { useRouter } from 'next/router';


export default function LanguageChange() {
    const router = useRouter();
    const pathname = usePathname();

    const selected = () => {
        if (pathname.startsWith('/en/')) {
            return 'en';
        } else return 'bn';
    }

    const languageHandel = (val) => {
        let url = pathname;

        // Check if the URL starts with '/en/'
        if (url.startsWith('/en/')) {
        // If it starts with '/en/', replace it with '/bn/'
        url = '/bn' + url.slice(3);
        } else if (url.startsWith('/bn/')) {
        // If it starts with '/bn/', replace it with '/en/'
        url = '/en' + url.slice(3);
        }

        router.push(url);
    };

    return (
        <Select
            defaultValue={selected()}
            style={{
                width: 120,
            }}
            onChange={languageHandel}
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
    )
}
