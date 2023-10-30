
import './App.css'

import { Download, Features, SectionWrapper } from './components';
import assets from '../spa/assets';
import styles from './styles/Global';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Howitworks from './components/Howitworks';

const App = () => {
  return (
    <div className=' w-full'>
        <div className='bg-[#7335EE]  w-full flex flex-col'>
      <div className='w-full flex flex-col  max-w-7xl mx-auto  '>
          <div className='mt-[2em]'>
          <Logo />
          </div>
          <div className='w-full flex flex-col  max-w-7xl mx-auto  '>
      <SectionWrapper 
        title="LoanLink is a Peer2Peer Lending Marketplace"
        description="Fuel Your Business Growth with LoanLink: Get low-interest loan to propel  Your business to new heights.Join our lending marketplace Today!"
        showBtn
        mockupImg={assets.home1}
        banner="banner"
        />
        </div>
        </div>
      </div>
      <div className='w-full flex flex-col  max-w-7xl mx-auto  '>
           <SectionWrapper 
        title="As a Lender On LoanLink"
          description="You will cultivate your financial future, 
           enjoy the power to diversify your investments, set your own interest rates, 
        and earn passive income while supporting small businesses and reducing risk."
        mockupImg={assets.homeCards}
        reverse
        />
        <Howitworks />
        </div>
      
    
        
        <Footer />
            </div>

  );
}

export default App;
