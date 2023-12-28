import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-6 text-center " >
        <hr className= "mt-2 mb-4 h-2 bg-orange-500 rounded-full mr-12" />
          <div className="mx-auto " >
             <p className="text-center text-sm text-black" >
                &copy; 2023 <Link href={"https://bibek-portfolio.vercel.app/"}  target="_blank" className="font-bold text-xl" >Bibek</Link>-Store, Inc . All rights reserved
             </p>
          </div>
    </footer>
  )
}

export default Footer