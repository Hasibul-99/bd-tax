'use client'
import Cookies from 'js-cookie'

export default function TaxYear() {
  const userS = Cookies.get('bdtax_user')
  const user = userS ? JSON.parse(userS) : ''

  return <>{user?.tax_year ? user.tax_year : null}</>
}
