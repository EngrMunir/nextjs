"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname= usePathname();
    const router = useRouter();
    const links =[
        {
            title:'Meals',
            path:'/meals'
        },
        {
            title:'Posts',
            path:'/posts'
        },
    ]
    const handleLogin=()=>{
        router.push('/login')
    }
    if(pathname.includes('dashboard'))
        return (
            <div className='bg-green-400'>
                Dashboard layout
            </div>
        )
    return (
        <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
          <h6 className='text-3xl'>Next JS</h6>
          <ul className='flex justify-between items-center space-x-4'>
            {
                links.map((link)=><Link className={`${pathname === link.path && "text-cyan-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handleLogin} className='bg-white text-cyan-400 p-3'>Login</button>
        </nav>
    );
};

export default Navbar;