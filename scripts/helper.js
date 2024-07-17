import {notification} from 'antd'
import Cookies from 'js-cookie'

export const moreNaveData = [
  {
    id: 1,
    icon: '/assets/icons/profile.svg',
    url: '/more/profile',
    name: 'Profile',
  },
  {
    id: 2,
    icon: '/assets/icons/my-payment.svg',
    url: '/more/my-payments',
    name: 'My Payments',
  },
  {
    id: 3,
    icon: '/assets/icons/tax-planning.svg',
    url: '/more/tax-planning/life-insurance',
    name: 'Tax Planning',
  },
  {
    id: 4,
    icon: '/assets/icons/package.svg',
    url: '/more/orderStatus',
    name: 'Order Status',
  },
  {
    id: 4,
    icon: '/assets/icons/package.svg',
    url: '/',
    name: 'Packages',
  },
  {
    id: 5,
    icon: '/assets/icons/referral.svg',
    url: '/more/referral',
    name: 'Referral Program',
  },
  {
    id: 6,
    icon: '/assets/icons/communiaction.svg',
    url: '/more/communiaction',
    name: 'Communications',
  },
  {
    id: 7,
    icon: '/assets/icons/settings.svg',
    url: '/more/settings',
    name: 'Settings',
  },
  {
    id: 8,
    icon: '/assets/icons/contact-us.svg',
    url: '/contact-us',
    name: 'Contact Us',
  },
  {
    id: 9,
    icon: '/assets/icons/logout.svg',
    url: '/',
    name: 'Logout',
  },
]

export const checkRes = (param) => {
  if (param === 200 || param === 201 || param === 212) {
    return true
  } else if (param === 401) {
    Cookies.remove('bdtax_token')
    Cookies.remove('bdtax_user')
    localStorage.removeItem('bdtax_token')
    localStorage.removeItem('bdtax_user')
    window.location = '/en/signin'
  } else if (param === 403) {
    Cookies.remove('bdtax_token')
    Cookies.remove('bdtax_user')
    localStorage.removeItem('bdtax_token')
    localStorage.removeItem('bdtax_user')
    window.location = '/en/signin'
  } else {
    return false
  }
}

export const alertPop = (type, data, title = null) => {
  notification[type]({
    placement: 'bottomRight',
    message: title || `${type[0].toUpperCase()}${type.slice(1)}`,
    description: data,
  })
}
