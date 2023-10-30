import whitelogo from '@/assets/index';
import Image from 'next/image';
import Link from 'next/link';
import { PiggyBank } from 'lucide-react';

const Logo = () => {
  return (
    <div className='w-full justify-center h-full items-center text-primary'>
      <Link href="/">
        <div className='flex flex-col  items-center justify-center p-3'>
          <span>
            <PiggyBank />
          </span>
          <h1 className=' text-center text-2xl'>LoanLink.</h1>
          <h4 className='text-sm'>Lend Smart, Borrow Better</h4>
        </div>
      {/* <Image
        src={whitelogo}
        className='object-contain w-4 h-4'
        alt='loanlink' /> */}
        </Link>
      </div>
  )
}

export default Logo