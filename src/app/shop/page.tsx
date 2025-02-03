import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import ProductImage from "../../components/product-image";



const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});


const Shop = () => {
  return (
    
      <div className="w-full min-h-screen flex flex-col">
      {/* Topline */}
      <div
        className={`w-full h-[58px] bg-[#23856D] flex justify-between items-center px-4 ${montserrat.className}`}
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
          <Link href="/" className="text-sm font-bold">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-bold flex items-center gap-1">
            Shop <RiArrowDropDownLine className="text-lg" />
          </Link>
          <Link href="/about" className="text-sm font-bold">
            About
          </Link>
          <Link href="/team" className="text-sm font-bold">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-bold">
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

      <div className=" ">
       <div className="max-w-[1050px] m-auto">
       <div className="flex justify-between ml-16 items-center">
  <h2 className="font-Montserrat absolute top-28 left-4 text-5xl font-bold text-[24px] text-[#252B42]">
    Shop
  </h2>

  <div className="flex absolute top-28 right-8 items-center gap-[15px]">
  <button className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
    Home
  </button>
  <button className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
    Shop
  </button>
 </div>
</div>

<div className="flex grid-cols-1 sm:grid-cols-3 w-full justify-center mt-28  gap-[15px]">
  <Image src="/22.png" width={205} height={223} alt="arrow" />
  <Image src="/23.jpg" width={205} height={223} alt="arrow" />
  <Image src="/24.png" width={205} height={223} alt="arrow" />
  <Image src="/25.png" width={205} height={223} alt="arrow" />
  <Image src="/26.png" width={205} height={223} alt="arrow" />
</div>
 </div>         
</div> 



 <div>
 <div className="md:h-[98px] max-w-[1050px] mx-auto">
      <div className="md:h-[98px] py-[24px] flex flex-col sm:flex-row justify-center sm:justify-between gap-[15px] sm:gap-[80px]">
        {/* Text for showing results */}
        <div className="flex  sm:justify-start text-center sm:text-left">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Showing all 12 results
          </div>
        </div>

        {/* Views section */}
        <div className="flex justify-center gap-[15px] sm:justify-start">
          <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373] md:mt-3">
            Views:
          </h6>
          <Image src="/Frame.png" alt="frame" width={108} height={50} />
        </div>

        {/* Buttons section */}
        <div className="flex justify-center gap-[15px] sm:justify-start mt-[10px] sm:mt-0">
          <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center">
            <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
              Popularity
            </p>
          </button>
          <button className="w-[94px] h-[50px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
              Filter
            </h6>
          </button>
        </div>
      </div>
</div>      
      
      
  

        <div>
      {/* COMPANIES SECTION */}
      <section className="bg-gray-100 py-20 flex justify-center overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
          {/* Heading Section */}
          {/* You can add a heading here, but I see it's commented out. */}

          {/* Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="flex justify-center">
              <Image
                src="/hooli.png"
                alt="Client 1 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/lyft.png"
                alt="Client 2 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-3.png"
                alt="Client 3 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-4 (1).png"
                alt="Client 4 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/col-md-2.png"
                alt="Client 5 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-6.png"
                alt="Client 6 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
          </div>
        </div>
      </section>
    </div>


    {/* FOOTER */}
    <footer className="bg-white w-full mt-auto">

<section className="w-full sm:w-[73%] m-auto bg-[#ffffff] pt-8 sm:pt-16">
    <div className="w-[94%] flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-wider">Bandage</h1>
        </div>
        <div className="flex gap-5">
            <Image src={'/fb.png'} alt="fb" className="w-6 h-6 " width={24} height={24} />
            <Image src={'/insta.png'} alt="fb" className="w-6 h-6 " width={24} height={24} />
            <Image src={'/twitter.png'} alt="fb" className="w-6 h-6 " width={24} height={24} />
        </div>
    </div>

    <div className="border-t border-[#e6e6e6]" />
    <div className="bg-white mt-3 sm:mt-0 py-24">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-7">

            <div>
                <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
                <nav className="flex flex-col gap-4 mt-5">
                    <Link href="/about" className="text-[#727272] text-sm font-bold">About Us</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Carrier</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Blog</Link>
                </nav>
            </div>

            <div>
                <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
                <nav className="flex flex-col gap-4 mt-5">
                    <Link href="#" className="text-[#727272] text-sm font-bold">Terms of Service</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Cookies</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Refund Policy</Link>
                </nav>
            </div>

            <div>
                <h2 className="text-[#252b42] text-base font-bold">Features</h2>
                <nav className="flex flex-col gap-4 mt-5">
                    <Link href="#" className="text-[#727272] text-sm font-bold">Business Marketing</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">User Analytics</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Live Chat</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</Link>
                </nav>
            </div>

            <div>
                <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
                <nav className="flex flex-col gap-4 mt-5">
                    <Link href="#" className="text-[#727272] text-sm font-bold">IOS & Android</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">Customers</Link>
                    <Link href="#" className="text-[#727272] text-sm font-bold">API</Link>
                </nav>
            </div>

            <div className="col-span-2">
                <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
                <div className="mt-5">
                    <div className=" mb-4 flex">
                        <input
                            type="email"
                            className="w-[65%] p-2 xl:py-4  xl:pl-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-base font-normal outline-none"
                            placeholder="Your Email"
                        />
                        <button className=" p-2 px-2 xl:py-4  xl:pl-4 xl:px-6 rounded-md  bg-[#23a6f0] text-white text-sm font-normal ">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-[#727272] text-xs tracking-widest">Lore imp sum dolor Amit</p>
                </div>
            </div>
        </div>
    </div>


    <section className="bg-[#FAFAFA] py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <p className="text-[#727272] text-sm font-bold tracking-widest">Made with love by Finland. All rights reserved.</p>

        </div>
    </section>
 </section>
</footer>    
</div>



<ProductImage />


  </div>
   
   
 


 
 
  
        
         

  );

};

export default Shop;