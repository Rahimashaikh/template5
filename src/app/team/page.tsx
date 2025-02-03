import Link from 'next/link'
import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import TeamMember from '@/components/team-member';
import TrialSection from '@/components/trial-section';
import Footer from '@/components/footer';



const montserrat = Montserrat({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});


const team = () => {
  return (
    <div>
         <div> 
      {/* Navbar */}
      <div
        className={`w-full h-[58px] bg-white flex justify-between items-center px-4 shadow-md ${montserrat.className}`}
      >
        <div className="text-2xl font-bold text-gray-900">Bandage</div>

{/* Navigation Links */}
<nav className="hidden md:flex space-x-6 text-gray-600 font-bold ">
  <Link href="/" className="hover:text-gray-900 font-bold transition">Home</Link>
  <Link href="/products" className="hover:text-gray-900  transition">Product</Link>
  <Link href="/pricing" className="hover:text-gray-900  transition">Pricing</Link>
  <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
</nav>

{/* Login & Button */}
<div className="flex items-center space-x-6">
  <Link href="/login" className="text-blue-500 hover:text-blue-700 font-bold transition">
    Login
  </Link>
  <Link
    href="/signup"
    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center transition"
  >
    Become a member →
  </Link>
</div>
</div>
</div>

<section className="bg-gray-50 sm:p-8 max-w-[1440px]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-gray-500">WHAT WE DO</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Innovation<br className="sm:hidden"/> tailored for you
        </h1>
       
        
            <div className="flex items-center justify-center gap-3 mt-4 space-x-">
              <Link href="/" className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </Link>
              <Image src="/arrowright.png" alt="arrow" width={15}  height={16} className="text-[#BDBDBD]" />
              <Link href={"/team"} className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Team
              </Link>
            </div>
        </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-4">
        {/* Large Image */}
        <div className=" w-full">
          <Image
            src="/grid1.png"
            alt="Fashion"
            className="w-full h-full object-cover"
            width={700}
            height={530}
          />
        </div>

        {/* Small Images */} 
        <div className="grid grid-cols-2 gap-y-2 gap-x-1 sm:gap-4">
          <Image
            src="/grid2.png"
            alt="Detail 1"
            className=" h-[260px] w-[204px] sm:w-full object-cover"
            width={361}
            height={260}
          />
          <Image
            src="/gird3.png"
            alt="Detail 2"
            className="  h-[260px] w-[204px]  sm:w-full object-cover"
            width={361}
            height={260}
          />
          <Image
            src="/grid4.png"
            alt="Detail 3"
            className="  h-[260px] w-[204px] sm:w-full object-cover"
            width={361}
            height={260}
          />
          <Image
            src="/grid5.png"
            alt="Detail 4"
            className=" h-[260px] w-[204px]  sm:w-full  object-cover"
            width={361}
            height={260}
          />
        </div>
      </div>
    </section>



  <TeamMember />

   <TrialSection />


  <Footer />

</div>
  )
}

export default team