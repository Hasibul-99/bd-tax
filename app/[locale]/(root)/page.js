import Packages from '@/components/shared/packages';

export default async function Home(props) {
  const { params: { locale } } = props;

  return (
    <div className="container mx-auto px-30 ">     
      <Packages locale={locale}/>
    </div>
  );
}
