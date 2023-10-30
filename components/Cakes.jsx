import { motion } from 'framer-motion';
import Image from 'next/image';

const Cakes = ({ svg, bgColor, title, description}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${bgColor} flex flex-col items-center bg-[#191e3c] rounded-[1em] m-4 max-w-[300px] h-[170px] `}>
      <div className=' -top-4 relative  bg-white shadow-inner rounded-full flex items-center justify-center  w-[2.5em] h-[2.5em] p-2' >
              <Image src={svg}  alt="steps" />
      </div>
      <div className="ml-4 flex items-center justify-center flex-col ">
        <h1 className="text-[1.1em]  text-[#f9f9f9] mb-2 ">{title}</h1>
        <p className="text-sm text-[#fff] text-center p-3">{description}</p>
      </div>
    </motion.div> 
  );
};




export default  Cakes