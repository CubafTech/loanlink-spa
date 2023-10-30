import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  return (
      <div className='min-h-[5em] py-[2em] w-full flex '>
          <div className='flex flex-col w-full items-center justify-center'>
              <Logo />
              <div className='flex items-center w-full p-2 justify-center gap-4'>
              <span>
                  <Facebook />
              </span>
              <Instagram />
              <span>
                  <Twitter />
              </span>
              <span>
                  <Youtube />
              </span>
        </div>
                <h1 className='text-center'>©CabufTech ,Team .All rights reserved</h1>
          </div>

          
    </div>
  )
}

export default Footer