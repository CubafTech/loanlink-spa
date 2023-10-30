import { Home } from 'lucide-react'
import React from 'react'

const Tabs = () => {
    return (
        <div className='mx-auto max-w-3xl w-full'>
            <ul
                className="grid grid-flow-col text-center text-gray-500 rounded-full p-5">
                
                <li>
                    <a href="/"
                        className="flex justify-center
                         bg-white rounded-full shadow
                          text-indigo-500 py-4">
                          <Home />
                          </a>
                </li>
                <li>
                    <a href="/auth/register"
                        className="flex justify-center py-4">Register</a>
                </li>
                    <li>
                          <a href="/terms" className="flex justify-center py-4">Terms</a>
                    </li>
                    <li>
                    <a href="/Customer" className="flex justify-center py-4">LoanLinker Ai</a>
                    </li>
            
            </ul>
        </div>
    )
}

export default Tabs
