"use client"

import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';



const page = () => {

    const [showPass, setShowPass] = useState(false);

    const handleEye = () => {
        setShowPass(!showPass);
    }
    return (
        <div className='max-w-xl w-full mx-auto'>
            <div className='p-5 flex flex-col  w-full'>
                <div className='flex flex-col my-2'>
                    <h2 className='text-2xl'>Create Account</h2>
                    <h4 className=''>Provide your details to sign up</h4>
                </div>

                <div className='mt-6 flex flex-col'>
                    <form>
                              <div className='flex flex-col mt-5 mb-3'>
                            <label>Email </label>
                            <div className='flex  mt-2'>
                                <input
                                    type='text'
                                    placeholder='johndoe@gmail.com'
                                    className='ring-2 p-3 rounded-xl
                                     ring-gray-200 w-full' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label>Phone Number</label>
                            <div className='mt-2 flex w-full items-center'>
                                <div className=''>
                                <select className='rounded-xl ring-2 ring-gray-200 p-3 pr-5 mr-3'>
                                <option>
                                    +234
                            </option>
                                </select>     
                                </div>
                                <div className='w-full'>
                                    <input type='text' placeholder='Phone Number' className='rounded-xl ring-2 w-full ring-gray-200 p-3'/>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col mt-5'>
                            <label>Password</label>
                            <div className='flex  mt-2'>
                                <input
                                    type={ showPass? "password" : "text"}
                                    placeholder='Enter Password' className='ring-2 p-3 rounded-xl ring-gray-200 w-full relative' />
                                <span
                                    onClick={handleEye}
                                    className='absolute right-3 mt-3 mr-3'>
                                    {showPass
                                        ?
                                        <Eye className='text-gray-300' />
                                        :
                                        <EyeOff className='text-gray-300' />}
                                </span>
                            </div>
                        </div>
                        <div className='mt-5 flex flex-col  justify-start w-full'>
                            <span className='flex'>
                                <input type='radio' />
                                <span className='ml-3'> Minimum of 8 characters</span>
                            </span>
                             <span className='flex'>
                                <input type='radio' />
                                <span className='ml-3'> Must have a capital letter</span>
                            </span>
                             <span className='flex'>
                                <input type='radio' />
                                <span className='ml-3'> Must have a special character (@,...,etc)</span>
                            </span>
                             <span className='flex'>
                                <input type='radio' />
                                <span className='ml-3'> Must have a number</span>
                            </span>
                        </div>
                        <div className='my-7 flex w-full'>
                            <button className='bg-primary text-white w-full rounded-full p-3'>
                            Create Account
                            </button>
                        </div>
                        <span>have a LoanLink Account? <span className='text-primary'>Log in</span></span>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default page
