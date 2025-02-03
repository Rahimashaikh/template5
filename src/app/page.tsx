import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { LuPhone } from 'react-icons/lu';
import { TfiEmail } from 'react-icons/tfi';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa6';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import Image from 'next/image';
import FeaturesPosts from '@/components/shop-component/featuresposts';
import { BestSeller } from '@/components/bestSeller';


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const Topline = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Topline */}
      <div
        className={`w-full h-[58px] bg-[#252B42] flex justify-between items-center px-4 ${montserrat.className}`}
      >
        <div className="flex gap-4 text-white">
          <button className="flex items-center gap-2">
            <LuPhone />
            <h6 className="text-sm font-bold">(225) 555-0118</h6>
          </button>
          <button className="flex items-center gap-2">
            <TfiEmail />
            <h6 className="text-sm font-bold">michelle.rivera@example.com</h6>
          </button>
        </div>
        <div className="text-white">
          <h6 className="text-sm font-bold">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="flex items-center gap-4 text-white">
          <h6 className="text-sm font-bold">Follow Us:</h6>
          <div className="flex gap-2">
            <a href="#">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`w-full h-[58px] bg-white flex justify-between items-center px-4 shadow-md ${montserrat.className}`}
      >
        <div className="text-2xl font-bold">Bandage</div>
        <div className="flex gap-6">
          <Link href="/" className="text-sm hover:text-gray-600 font-bold">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-bold hover:text-gray-600 flex items-center gap-1">
            Shop <RiArrowDropDownLine className="text-lg" />
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-600 font-bold">
            About
          </Link>
          <Link href="/products" className="text-sm hover:text-gray-600 font-bold">
            Products
          </Link>
          <Link href="/team" className="text-sm hover:text-gray-600 font-bold">
            Blog
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-600 font-bold">
            Contact
          </Link>
          
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-[#23A6F0]">
            <MdOutlineAccountCircle />
            Login / Register
          </button>
          <button className="text-[#23A6F0]">
            <CiSearch className="text-xl" />
          </button>
          <button className="text-[#23A6F0] flex items-center gap-1">
            <IoCartOutline />
            1
          </button>
          <button className="text-[#23A6F0] flex items-center gap-1">
            <CiHeart />
            1
          </button>
        </div>
      </div>
  
      <nav className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 text-black" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className=" bg-slate-200 font-bold text-black italic text-4xl">
                    Bandage
                  </SheetTitle>
                  <SheetDescription>
                    <ul className=" font-bold mt-40 gap-10 justify items-center row-auto text-lg">
                    <Link href="/" className="text-sm hover:text-gray-600 font-bold">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-bold hover:text-gray-600 flex items-center gap-1">
            Shop <RiArrowDropDownLine className="text-lg" />
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-600 font-bold">
            About
          </Link>
          <Link href="/products" className="text-sm hover:text-gray-600 font-bold">
            Products
          </Link>
          <Link href="/team" className="text-sm hover:text-gray-600 font-bold">
            Blog
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-600 font-bold">
            Contact
          </Link>   
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </nav>
      <div className="relative w-full h-screen ">
  {/* Background Image */}
  <Image
    src="/pic1.jpeg"
    alt="Fashion Model"
    layout="fill"
    objectFit="cover"
    quality={100}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-opacity-80"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-screen-lg px-6 mx-auto">
    <h4 className="text-white text-sm uppercase mt-4 tracking-wide">Summer 2020</h4>
    <h1 className="text-white text-5xl font-bold mt-6">
      NEW COLLECTION
    </h1>
    <p className="text-white text-lg mt-6 max-w-md">
      We know how large objects will act, but things on a small scale.
    </p>
    <Link href="/shop" className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold hover:bg-green-600 transition-all">
      Shop Now 
    </Link>
  </div>
</div>
  <div>
  </div>

   
   <div className="bg-white px-8 py-16">


<div className="w-full bg-[#FAFAFA] py-12 px-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-[#252B42] font-montserrat text-2xl font-bold leading-8 tracking-[0.1px]">
          EDITOR’S PICK
        </h2>
        <p className="font-montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

     {/* Wrapper for Full Centering */}
<div className=" relative flex justify-around items-center w-full h-50% lg:h-auto bg-[#FAFAFA]">
  <div className="w-12/12  lg:6/12  md:flex justify-center gap-4 ">
    {/* Men */}
    <div className="relative group">
      <img
        src="\col-md-6.png"
        alt="Men"
        width={510}
        height={500}
        className="w-12/12 h-full  object-cover rounded-md"
      />
     <button className="absolute bottom-5 left-7 bg-white text-black font-bold py-2 px-16 shadow-lg group-hover:bg-gray-800 group-hover:text-white">
    MEN
  </button>
    </div>

    {/* Women */}
    <div className="relative group">
      <Image
        src="\col-md-3.png"
        alt="Women"
        width={510}
        className="w-full h-full object-cover rounded-md"
      />
      <button className="absolute bottom-2 left-4 bg-white px-10 py-3 text-sm font-semibold group-hover:bg-gray-800 group-hover:text-white">
      WOMEN
      </button>
    </div>

    {/* Accessories & Kids */}
    <div className="flex flex-col gap-3">
      {/* Accessories */}
      <div className="relative group">
        <Image
          src="\card-item.png"
          alt="Accessories"
          width={400}
          className="w-full h-full object-cover rounded-md"

        />
        <button className="absolute bottom-5 left-0 px-6 py-2 bg-white  text-sm font-semibold group-hover:bg-gray-800 group-hover:text-white">

          ACCESSORIES
        </button>
      </div>

      {/* Kids */}
      <div className="relative group">
        <Image
          src="\media bg-cover.png"
          alt="Kids"
          className="w-full h-full object-cover rounded-md"
        />
        <button className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-semibold group-hover:bg-gray-800 group-hover:text-white">

          KIDS
        </button>
      </div>
    </div>
  </div>
</div>





<BestSeller />










  <div className="flex items-center mt-12 justify-center h-screen bg-[#23856D] space-x-0">
  <div className="w-1/2 p-4 text-justify">
    <h4 className="text-white w-151 h-30 text-sm font- case mt-4 tracking-wide">Summer 2020</h4>
    <h1 className="text-white text-5xl font-bold mt-6 leading-tight">
      Vita Classic
      Product
    </h1>
    <p className="text-white text-2xl mt-2">
      We know how large objects will act, We know how are you objects will act, We know
    </p>
    <div className="flex items-center mt-11">
      <span className="text-4xl text-white font-bold">$16.48</span>
      <button className="ml-4 px-10 py-3 bg-[#DE8080] text-white font-semibold hover:bg-green-600 transition-all">
        Add To Cart
      </button>
    </div>
  </div>


  
   <div className="w-1/2 p-4 text-center">
    <img
      src="/shop-hero-2-png-picture-1.png"
      alt="Fashion Model"
      className="max-w-sm mx-auto"
    />
  </div>
</div> 
   
<div className="flex items-center justify-between w-full px-8 py-16 bg-white">
  
  <div className="w-1/2">
    <img
      src="/pic2.png" 
      alt="Couple Image"
      className="rounded-lg shadow-md"
    />
  </div>

  
  <div className="w-1/2 pl-8">
    <p className="text-sm uppercase text-gray-500 tracking-widest">Summer 2020</p>
    <h1 className="text-3xl font-bold text-gray-800 mt-2">Part of the Neural </h1>
    <h1 className="text-3xl font-bold text-gray-800 mt-2">Universe </h1>
    <p className="text-gray-600 mt-4">
      We know how large objects will act, 
    </p>
    <p className="text-gray-600 mt-4">
      but things on a small scale. 
    </p>
  
    
    <div className="flex mt-6 space-x-4">
      <button className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
        Buy Now
      </button>
      <button className="px-6 py-2 text-green-500 border border-green-500 rounded-md hover:bg-green-100">
        Read More
      </button>
    </div>
  </div>
</div>


< FeaturesPosts />




 



    <footer className="bg-slate-100 text-gray-700 px-10 w-full h-full font-montserrat">
      <div className="container w-full  mx-auto px-20 py-12">
        {/* Top Section */}
        <div className="flex  w-9/12 justify-between items-center space-y-4 md:space-y-0  py-6 px-2">
          {/* Company Info (Bandage Logo on Left) */}
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>

          {/* Social Media Links (Centered) */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800">Follow Us</h3>
            <div className="flex space-x-6 mt-4 justify-center md:justify-start">
              <a href="#" className="text-[#23A6F0] hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-pink-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 w-full">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-800">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Licenses</a></li>
              <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-800">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
              <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
              <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
              <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-5">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lore ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland | All Rights Reserved
        </div>
       
      </div>
    </footer>
  


</div>
  </div>
  </div>


 );
};

export default Topline;
