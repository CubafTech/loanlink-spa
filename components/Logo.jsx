import whitelogo from '@/assets/index';
import Image from 'next/image';
import Link from 'next/link';


const Logo = () => {
  return (
    <div className='w-full justify-center items-center'>
      <Link href="/">
      <Image
        src={whitelogo}
        className='object-contain w-4 h-4'
        alt='loanlink' />
        </Link>
      </div>
  )
}

export default Logo