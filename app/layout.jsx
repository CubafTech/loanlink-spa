import Logo from '@/components/Logo'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({ subsets:['latin']})

export const metadata = {
  title: 'LoanLink | The app of the future',
  description: 'LoanLink is your trusted partner in financial success. We connect borrowers with tailored loan solutions and empower lenders to invest in promising opportunities. Join our lending marketplace and bridge the gap between financial aspirations and reality.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        {children}
      </body>
    </html>
  )
}
