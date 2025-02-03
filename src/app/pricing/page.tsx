import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import Logo from '@/components/logo';
import TrialSection from '@/components/trial-section';
import Footer from '@/components/footer';



const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});


const pricingPage = () => {
  return (

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


  <div className="w-full bg-gray-50 py-10 flex justify-center">
            {/* Parent container */}
            <div className="max-w-[1440px] px-4 lg:px-0">
                {/* Inner section */}

                <div className="max-w-[1050px] mt-4 mx-auto text-center flex flex-col gap-6">
                    <h2 className="text-sm tracking-widest font-semibold text-gray-700 uppercase">Pricing</h2>
                    <h1 className=" text-2xl lg:text-6xl tracking-wide font-bold text-gray-800">Simple Pricing</h1>
                    <p className="text-sm text-gray-600 mt-2 flex justify-center gap-5"><span>Home</span> &gt; <span>Pricing</span></p>

                    <div className="mt-5 lg:mt-20">
                        <h1 className="text-4xl font-semibold text-black">Pricing </h1>
                        <p className="text-gray-500 mt-2  m-auto">
                            Problems trying to resolve the conflict between <br /> the two major realms of
                            Classical physics: Newtonian mechanics
                        </p>

                        {/* Toggle Button */}
                        <div className="flex justify-center items-center mt-10 gap-10">
                            <button className="px-4 py-2  text-slate-900 font-semibold rounded-full">Monthly</button>
                            <button className=" text-slate-900 font-semibold ">Yearly</button>
                            <span className="text-sm px-4 rounded-full py-2  bg-green-200 text-blue-500">Save 25%</span>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 m-auto  mt-10 w-[70%] sm:w-full">
                            {/* Free Plan */}
                            <div className="border flex flex-col py-20 gap-5 border-blue-600 mt-10 sm:pt-10 rounded-lg px-6 text-slate-700 shadow-md">
                                <h3 className="text-2xl font-semibold tracking-wider uppercase  ">Free</h3>
                                <p className="text-base w-40 font-semibold text-center m-auto">
                                    Organize across all apps by hand
                                </p>
                                <p className="text-5xl font-bold text-blue-500 mt-4 flex justify-center">0<span className="text-sm  text-blue-500   flex flex-col "><span className="text-3xl">$</span>Per Month</span></p>

                                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>

                                </ul>
                            </div>

                            {/* Standard Plan */}
                            <div className="border  flex py-20 flex-col gap-10 sm:pt-20 rounded-lg p-6 bg-slate-800 text-white shadow-md">
                                <h3 className="text-2xl font-semibold tracking-wider uppercase ">STANDARD</h3>
                                <p className="text-base w-40 font-semibold text-center m-auto">
                                    Organize across all apps by hand
                                </p>
                                <p className="text-5xl font-bold text-blue-500 sm:mt-4 flex justify-center">9.99<span className="text-sm  text-blue-500   flex flex-col "><span className="text-3xl">$</span>Per Month</span></p>

                                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>
                                </ul>
                            </div>

                            {/* Premium Plan */}
                            <div className="border flex flex-col py-20 gap-5 border-blue-600 mt-10 sm:pt-10 rounded-lg px-6 text-slate-700 shadow-md">
                                <h3 className="text-2xl font-semibold tracking-wider uppercase  ">PREMIUM</h3>
                                <p className="text-base w-40 font-semibold text-center m-auto">
                                    Organize across all apps by hand
                                </p>
                                <p className="text-5xl font-bold text-blue-500 mt-4 flex justify-center">19.99<span className="text-sm  text-blue-500   flex flex-col "><span className="text-3xl">$</span>Per Month</span></p>

                                <ul className="mt-4 space-y-6 tracking-wider font-semibold">
                                    <li className="text-sm "><span className="bg-green-400 p-2 rounded-full">✔</span> Unlimited product updates</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >



  
   
   
        <div>
      {/* COMPANIES SECTION */}
      <section className="bg-gray-100 py-20 flex justify-center overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
            <h3 className="text-2xl font-bold text-center text-gray-800">Trusted By Over 4000 Big Companies</h3>         

         <Logo />         

       </div>
       </section>
       </div>



       <div className="w-full bg-gray-50 py-10 flex justify-center">
            {/* Parent container */}
            <div className="max-w-[1440px] px-4 lg:px-0">
                {/* Inner section */}
                <div className="max-w-[1050px] mx-auto text-center pt-10">
                    {/* Header */}
                    <h1 className="text-4xl tracking-widest font-bold text-gray-800">Pricing FAQs</h1>
                    <p className="text-lg tracking-widest m-auto text-gray-600 mt-5 md:w-[500px]">
                        Problems trying to resolve the conflict between the two major realms of Classical physics
                    </p>



        <div>
      <div className="text-center mb-16 lg:mb-28">
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"> {/* Adjusted gap */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm"> {/* Increased padding */}
            <div className="flex items-start"> {/* Added flex for alignment */}
              <span className="text-blue-500 text-lg mr-4">&gt;</span> {/* Reduced margin */}
              <div>
                <h3 className="font-semibold text-gray-800">
                  The quick fox jumps over the lazy dog
                </h3>
                <p className="text-gray-600 mt-2"> {/* Adjusted margin */}
                  Met minim Mollie non deserunt Alamo est sit cliquey dolor do met sint. RELIT
                  official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                  nostrum met.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 lg:mt-28 text-center"> {/* Centered footer and added margin */}
        <p className="text-sm lg:text-2xl text-gray-600">
          Haven&apos;t got your answer? <span className="text-blue-500">Contact our support</span> {/* Added color to span */}
        </p>
      </div>
    </div>
</div>
</div>
</div>

<TrialSection />

<Footer /> 

</div>


    );
}


export default pricingPage;