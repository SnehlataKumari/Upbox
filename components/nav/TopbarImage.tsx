import Image from 'next/image';
import TopbarMobilePng from '@/assets/topbar-mobile.png';
import TopbarTabImage from '@/assets/topbar-tablet.png';


export default function TopbarImage() {
  return (
    <>
      <Image src={TopbarMobilePng} alt="Top bar image" className='md:hidden ' />
      <Image src={TopbarTabImage} alt="Top bar image" className='hidden md:block' />
    </>
  )
}