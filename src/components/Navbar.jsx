import React, {useState} from 'react';
import { logo, lock, hamburgerMenu, close, aimbename, aimbelogowrapped } from '../assets';
const pallete = ['#0e0325','#19094f', '#E8FEFF']

const Navbar = () => {

    const [toggle, setToggle]= useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

  return (
    <div className='w-full h-[80px] bg-[#14063A]'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <img src={aimbelogowrapped} className='h-[70px]' />
                <img src={aimbename} className='h-[40px]' />
            </div>
            <div className='hidden md:flex items-center'>
                <ul className='flex gap-4 text-[#E8FEFF]'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className='hidden md:flex'>
                <button className='flex justify-between items-center bg-[#E8FEFF] px-6 gap-2'>
                    <img src={lock}/>
                    Login
                </button>
                <button className='px-8 py-3 rounded-md  bg-[#19094f] text-white font-bold'>Sign Up</button>
            </div>

            <div className='md:hidden' onClick={handleClick}>
                <img src={toggle? close:hamburgerMenu} />
            </div>        
        
        </div>

        <div className={toggle?'absolute z-10 p-4  bg-[#0e0325] w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4  text-white hover:bg-gray-100'>Home</li>
                    <li className='p-4  text-white hover:bg-gray-100'>About</li>
                    <li className='p-4  text-white hover:bg-gray-100'>Support</li>
                    <li className='p-4 text-white hover:bg-gray-100'>Support</li>
                    <li className='p-4 text-white hover:bg-gray-100'>Platform</li>
                    <li className='p-4 text-white hover:bg-gray-100'>Pricing</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[#19094f] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                         <img src={lock} />
                         Login
                        </button>
                        <button className='px-8 py-5 rounded-md bg-[#19094f] text-white font-bold'>Sign Up For Free</button>
                    </div>
            </ul>
        </div>


    </div>
  )
}

export default Navbar