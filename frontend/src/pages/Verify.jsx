import { Check, LogIn } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        toast.warning("Login will only work if your email has been verified.");

        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };

    return (
        <div className='relative w-full min-h-screen overflow-hidden bg-[#003F3A] flex items-center justify-center px-4'>
            
            <div className='bg-[#042f2b] p-8 rounded-md shadow-lg w-full max-w-md text-center'>

                <h2 className='flex justify-center items-center text-2xl font-semibold text-[#08cdbd] mb-4'>
                    <Check className='mx-2' />
                    Check Your Email
                </h2>

                <p className='text-gray-400 text-sm mb-6'>
                    We've sent you an email to verify your account.
                    Please check your inbox and click the verification link.
                </p>

                <button
                    onClick={handleLoginClick}
                    className='flex justify-center items-center w-full bg-[#003F3A] text-[#08cdbd] hover:text-[#003F3A] hover:bg-[#08cdbd] py-2 rounded-md transition-all duration-300'
                >
                    I have verified my email
                    <LogIn className='h-4 w-4 ml-2' />
                </button>

            </div>
        </div>
    );
};

export default Verify;