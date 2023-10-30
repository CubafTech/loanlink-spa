import React from 'react'

const Tabs = () => {
    return (
        <div className='mx-auto max-w-3xl w-full'>
            <ul
                className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-5">
                
                <li>
                    <a href="/"
                        className="flex justify-center
                         bg-white rounded-full shadow
                          text-indigo-500 py-4">Home</a>
                </li>
                <li>
                    <a href="/faqs"
                        className="flex justify-center py-4">Faqs</a>
                </li>
                    <li>
                          <a href="/terms" className="flex justify-center py-4">Terms</a>
                    </li>
                    <li>
                    <a href="/Customer" className="flex justify-center py-4">Cutomer Support</a>
                    </li>
            
            </ul>
        </div>
    )
}

export default Tabs
