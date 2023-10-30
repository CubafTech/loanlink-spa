"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Eye, EyeOff,CheckCheck } from 'lucide-react';
import Logo from '@/components/Logo';
import validator from 'validator';
import { verifyPhoneNumber, sanitizePhoneNumber, COUNTRY_CODE } from "nigerian-phone-number-validator"
import instance from '@/config/Server';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Link from 'next/link';


const page = () => {
    const [passCheck, setPassCheck] = useState(false)
    const [emailCheck, setEmailCheck] = useState(false)
    const [phoneCheck, setPhoneCheck] = useState(false)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const router = useRouter();
     
    const validatePhone = (value) => {
        setPhone(value)
        if (verifyPhoneNumber('234' + value)) {
            setPhoneCheck(true)
        } else {
            setPhoneCheck(false);
        }
    }
    const validate = (value) => { 
         setPassword(value)
        if (validator.isStrongPassword(value, { 
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setPassCheck(true) 
        } else { 
            setPassCheck(false) 
        } 
    }
    const validateEmail = (value) => {
        setEmail(value);
        if (validator.isEmail( value)){
          setEmailCheck(true)
        } else {
            setEmailCheck(false);
        }
    }


    // for submission
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("https://loanlink.onrender.com/api/v1/auth/register", {
                email,
                phone,
                password
            });
            console.log("success", response.data);
            router.push("/verify-phone")
        } catch (error) {
            console.log("signup failed", error)
            toast.error(error.message)
        }
         }
   
    const handleEye = () => {
        setShowPass(!showPass);
    }

    useEffect(() => {
     

    }, [])


    return (
        <div className='max-w-xl w-full mx-auto'>
            <Logo />
            <div className='p-5 flex flex-col  w-full'>
                <div className='flex flex-col my-2'>
                    <h2 className='text-2xl'>Create Account</h2>
                    <h4 className=''>Provide your details to sign up</h4>
                </div>

                <div className='mt-6 flex flex-col'>
                    <form>
                              <div className='flex flex-col mt-5 mb-3'>
                            <label>Email </label>
                            <div className='flex flex-col mt-2'>
                                <input
                                    type='text'
                                    value={email}
                                    required
                                    onChange={(e) => validateEmail(e.target.value)}
                                    placeholder='johndoe@gmail.com'
                                    className='border-2 p-3 rounded-xl
                                     ring-gray-200 w-full
                                     ' />
                                {!emailCheck &&
                                    <h4 className='text-red-500 text-sm'>
                                    Enter a valid email adresss please
                                    </h4> }
                                

                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label>Phone Number</label>
                            <div className='mt-2 flex w-full items-center'>
                                <div className=''>
                                    <select
                                        className='rounded-xl border-2
                                         ring-gray-200 p-3 pr-5 mr-3'>
                                <option>
                                    +234
                            </option>
                                </select>     
                                </div>
                                <div className='w-full'>
                                    <input
                                        type='text'
                                        value={phone}
                                        onChange={(e) => validatePhone(e.target.value)}
                                        placeholder='Phone Number'
                                        className='rounded-xl border-2 w-full ring-gray-200 p-3' />
                                    
                                </div>
                            </div>
                            <div className=''>
                                {!phoneCheck &&
                                        <h4 className='text-sm text-red-500'>
                                        Enter a Valid Nigerian Phone Number Please (e.g: 8135058802)
                                        </h4>}
                            </div>
                        </div>

                        <div className='flex flex-col mt-5'>
                            <label>Password</label>
                            <div className='flex  mt-2'>
                                <input
                                    value={password}
                                    onChange={(e) => validate(e.target.value)}
                                    type={ showPass? "password" : "text"}
                                    placeholder='Enter Password' className='border-2 p-3 rounded-xl ring-gray-200 w-full relative' />
                                <span
                                    onClick={handleEye}
                                    className='absolute right-3 mt-3 mr-6'>
                                    {showPass
                                        ?
                                        <Eye className='text-gray-300' />
                                        :
                                        <EyeOff className='text-gray-300' />}
                                </span>
                            </div>
                            {!passCheck &&
                                        <h4 className='text-sm text-red-500'>
                                        Enter a Strong Password
                                        </h4>}
                        </div>
                        <div className='mt-5 flex flex-col  justify-start w-full'>
                            <span className='flex'>
                                {passCheck ? 
                                    <span>
                                        <CheckCheck className='text-green-500'/>
                                    </span>

                                 : <input
                                    type='radio'
                                    className=' fill-green-400'
                                    />
                                }
                                <span className='ml-3'> Minimum of 8 characters</span>
                            </span>
                             <span className='flex'>
             {passCheck ? 
                                    <span>
                                        <CheckCheck className='text-green-500'/>
                                    </span>

                                 : <input
                                    type='radio'
                                    className=' fill-green-400'
                                    checked={ passCheck ? "true": ""}
                                />}                                <span className='ml-3'> Must have a capital letter</span>
                            </span>
                             <span className='flex'>
             {passCheck ? 
                                    <span>
                                        <CheckCheck className='text-green-500'/>
                                    </span>

                                 : <input
                                    type='radio'
                                    className=' fill-green-400'
                                    checked={ passCheck ? "true": ""}
                                />}                                <span className='ml-3'> Must have a special character (@,...,etc)</span>
                            </span>
                             <span className='flex'>
             {passCheck ? 
                                    <span>
                                        <CheckCheck className='text-green-500'/>
                                    </span>

                                 : <input
                                    type='radio'
                                    className=' fill-green-400'
                                />}                                <span className='ml-3'> Must have a number</span>
                            </span>
                        </div>
                        <div className='my-7 flex w-full'>
                            <button
                                onClick={onSignup}
                                className='bg-primary  text-white w-full rounded-full p-3'>
                            Create Account
                            </button>
                        </div>
                        <span>have a LoanLink Account?
                            <span className='text-primary'>
                                <Link href='/auth/login'>
                                Log in
                                </Link>
                            </span>
                        </span>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default page
