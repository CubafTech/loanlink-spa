// import { Dashboard, Leaderboard, PersonStandingIcon } from "lucide-react";
import { motion } from "framer-motion";
import Cakes from "./Cakes";


const  Howitworks = () => {
  return (
    <section className="border-white/25 border-t-[1px] border-b-[1px] py-5 mt-[2em]">
      <div className="flex flex-col">
              <div className="p-3 px-[2em]">
 <h1 className='text-4xl md:text-5xl lg:text-6xl  text-center '>Application Process</h1>
          <h2 className='text-2xl my-4 text-center text-white  '>Create an account and in few step start wining </h2>
          <div className="flex justify-center md:justify-start mt-5  flex-wrap ">
            
            <Cakes
            bgColor='bg-[#e0344c]'
            icon = '1' 
            title =  "Account"
            description =  "complete account creation for your company and  get verified"
            />
            <Cakes 
              bgColor='bg-[#f6a50d]'
              icon = '2'
              title =  "Loan Listing"
              description =  "create a loan listing on LoanLink with you desired amount and set payback day"
            
              
              />
              <Cakes 
                bgColor = 'bg-[#25aa7c]'
                icon = '3' 
                title =  "Get Funded"
                description =  "Boom!!, Lenders on LoanLink Funds Your LoanListing with little interest"
                
                
                />
             
              </div>
        </div>
      </div>
    </section>
  );
};


export default Howitworks;