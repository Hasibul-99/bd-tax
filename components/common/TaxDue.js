import {defaultStore} from '@/store/default'
import Cookies from 'js-cookie'

export default function TaxDue() {
  const taxDue = defaultStore((state) => state.taxDue)
  const userS = Cookies.get('bdtax_user')
  const taxAmount = parseInt(userS?.tax_amount)

  // : taxAmount ? taxAmount
  return <span>{taxDue ? taxDue : 0}</span>
}
