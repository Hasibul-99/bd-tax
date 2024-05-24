import Packages from '@/components/shared/packages';

async function getData() {
  const res = await fetch(`${process.env.BASE_URL || 'https://newdevapi.bdtax.com.bd/public/api/'}guest-package-list`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home(props) {
  const { params: { locale } } = props;
  const data = await getData();

  return (
    <div className="container mx-auto px-30 ">     
      <Packages locale={locale} ssrData={data?.data}/>
    </div>
  );
}
