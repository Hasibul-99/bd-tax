'use client'

import React from 'react'
import Cookies from "js-cookie";

export default function WelcomeMessage() {
    const userS = Cookies.get('bdtax_user');
    const user = userS ? JSON.parse(userS) : ''

    return (
        <div>
            {
                user?.message ? <h3 className='text-xl font-semibold'>{user?.message}</h3> : ''
            }
        </div>
    )
}
