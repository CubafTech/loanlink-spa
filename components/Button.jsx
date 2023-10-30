import Image from 'next/image';

const Button = ({ icon, link, text }) => {
  return (
    <div 
      className='flex items-center justify-start w-[10em] md:w-[12em] bg-black text-white 
       m-1 py-3 px-4 
      rounded-2xl mt-2  cursor-pointer'
      onClick={() => window.open(link, "_blank")}
    >
      <Image
        className='w-6 h-6 object-contain'
        src={icon} 
      />  
      <div className="flex flex-col justify-start ml-4">
        <h2 className='md:text-xl font-medium'>{text}</h2>
      </div>
    </div>
  )
}

export default Button