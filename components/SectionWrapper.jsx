
import assets from '../assets';
import Button from './Button';
import Image from 'next/image';
import blob1 from '../assets/blobs/blob.svg'

const SectionWrapper = ({ title, description, showBtn, mockupImg, }) => {
  return (
    <div className='min-h-screen mt-[4em] flex  justify-center  overflow-y-hidden items-center px-5 pt-9'>
      <div className='flex flex-col  items-center justify-center w-full'>
        <div className='w-full h-full flex justify-center flex-col '>
          <h2 className='text-4xl md:text-5xl lg:text-6xl  text-white text-center '>{title}</h2>
          <h2 className='md:text-xl my-4 text-center text-white  '>{description}</h2>
          {showBtn && (
            <div className='flex flex-col md:flex-row w-full items-center justify-center  px-[4em] md:px-[0] mb-10'>
            <Button 
                icon={assets.appstore}
                text="App Store"
              link="#"
              />
             <Button 
                icon={assets.playstore}
                text="Google Play"
              link="#"
              />
              </div>
          )}
        </div>
        <div
          className='flex justify-center items-center w-full h-full  sm:px-0'
        >
          <Image
            src={blob1}
            alt="mockup"
            className='' />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper