import Packages from '@/components/shared/packages'
import {GUEST_PACKAGE_LIST} from '@/scripts/api'

async function getData() {
  const res = await fetch(
    `${
      process.env.BASE_URL || 'https://newdevapi.bdtax.com.bd/public/api/'
    }${GUEST_PACKAGE_LIST}`
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home(props) {
  const {
    params: {locale},
  } = props
  const data = await getData()

  return (
    <div className='custom-container-under mx-auto px-30 '>
      <Packages locale={locale} ssrData={data?.data} />
    </div>
  )
}
