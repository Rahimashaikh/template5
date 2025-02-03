import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Section from "@/components/section";
import Footer from "@/components/footer";


const montserrat = Montserrat({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const Products = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        {/* Topline */}
        <div className={`w-full h-[58px] bg-[#23856D] flex justify-between items-center px-4 ${montserrat.className}`}>
         <div className="flex gap-4 text-white">
            <a href="tel:(225) 555-0118" className="flex items-center gap-2">
              <LuPhone />
              <h6 className="text-sm font-bold">(225) 555-0118</h6>
            </a>
            <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2">
              <TfiEmail />
              <h6 className="text-sm font-bold">michelle.rivera@example.com</h6>
            </a>
          </div>
          <div className="text-white">
            <h6 className="text-sm font-bold">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="flex items-center gap-4 text-white">
            <h6 className="text-sm font-bold">Follow Us:</h6>
            <div className="flex gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className={`w-full h-[58px] bg-white flex justify-between items-center px-4 shadow-md ${montserrat.className}`}>
          <div className="text-2xl font-bold">Bandage</div>
          <div className="flex gap-6">
            <Link href="/" className="text-sm font-bold">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-bold flex items-center gap-1">
              Shop <RiArrowDropDownLine className="text-lg" />
            </Link>
            <Link href="/" className="text-sm font-bold">
              About
            </Link>
            <Link href="/products" className="text-sm font-bold">
              Products
            </Link>
            <Link href="/" className="text-sm font-bold">
              Blog
            </Link>
            <Link href="/" className="text-sm font-bold">
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


        {/* Header Section (Breadcrumbs) */}
        <div className="w-full mt-4">
          <div className="max-w-[1050px] mx-auto px-4">
            <div className="flex items-center gap-[15px]">
              <Link href="/" className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </Link>
              <Image src="/arrowright.png" alt="arrow" width={9} height={16} />
              <span className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full mt-4">
          <Section />
        </div>

        {/* Product Details Section */}
        <div className="relative w-full px-4 sm:px-8 py-12 inline">
          <div className="flex justify-around sm:justify-center gap-8 mb-4 sm:mb-8">
            <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] underline">
              Description
            </span>
            <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
              Additional Information
            </span>
            <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] flex items-center">
              Reviews
              <h1 className="text-sm leading-[24px] text-[#23856D] ml-2">(0)</h1>
            </span>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row items-center max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] gap-6 m-auto">
              {/* Left Panel */}
              <div className="sm:w-1/3 bg-white flex justify-center gap-0 lg:justify-start">
                <div className="text-center lg:text-left">
                  <div className="bg-white flex items-center right-32 justify-center shadow-md lg:w-[400px] lg:h-[450px]">
                    <Image
                      src={"/unsplash_QANOF9iJlFs (1).png"}
                      alt="Interior Design"
                      width={500}
                      height={400}
                      className="object-cover right-48 lg:w-full lg:h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="sm:w-2/3 px-6 flex flex-col sm:flex-row gap-8 lg:gap-12">
                {/* Section 1 */}
                <div className="lg:w-1/2">
                  <h1 className="text-2xl lg:text-3xl font-bold mb-3">The quick fox jumps over</h1>
                  <p className="text-gray-700 text-sm lg:text-base">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    RELIT official consequent door ENIM RELIT Mollie.
                  </p>
                  <p className="text-gray-700 text-sm lg:text-base">
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>

                        {/* Section 2 & 3 */}
                        <div className="lg:w-1/2 space-y-4">
                            <div>
                                <h2 className="text-xl lg:text-2xl font-semibold">The quick fox jumps over</h2>
                                <ul className="text-gray-700 space-y-2 text-sm lg:text-base">
                                    <li className="flex items-center">
                                        <span className="mr-2">➤</span> The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">➤</span> The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">➤</span> The quick fox jumps over the lazy dog
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl lg:text-2xl font-semibold">The quick fox jumps over</h2>
                                <ul className="text-gray-700 space-y-2 text-sm lg:text-base">
                                    <li className="flex items-center">
                                        <span className="mr-2">➤</span> The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">➤</span> The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">➤</span> The quick fox jumps over the lazy dog
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                {/*best selles section*/}
                <div className="w-full flex justify-center bg-white py-10 lg:pt-10 pb-20">
                    <div className="w-full max-w-[1300px] flex flex-col gap-20 mt-12 sm:mt-8 md:ml-12 sm:px-4 lg:px-10">
                        <div className="flex flex-col items-center gap-2">
                            <h3 className="font-Montserrat sm:text-start font-bold text-2xl md:text-[24px] text-center sm:w-full tracking-tight text-[#252B42]">
                                BESTSELLER PRODUCTS
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-24 gap-4">
                            {[
                                "/pink1 (2).png",
                                "/pink2.png",
                                "/pink3.png",
                                "/pink4.png",
                                "/pink5 (1).png",
                                "/pink4.png",
                                "/pink1 (2).png",
                                "/pink2.png",
                            ].map((pic, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-[#F9F9F9] rounded-lg shadow-md transition-all duration-300 hover:scale-105"
                                >
                                    <div className="w-full h-auto">
                                        <Image
                                            src={pic}
                                            alt={`picture${index + 1}`}
                                            className="rounded-md object-cover w-full"
                                            width={239}
                                            height={427} />
                                    </div>
                                    <div className="w-full h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
                                        <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
                                            Graphic Design
                                        </h5>
                                        <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
                                            English Department
                                        </p>
                                        <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
                                            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
                                                $16.48
                                            </h5>
                                            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                                                $6.48
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Logo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <div className="flex justify-center">
                        <Image
                            src="/hooli.png"
                            alt="Client 1 Logo"
                            className="h-12 w-auto"
                            width={105}
                            height={48} />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/lyft.png"
                            alt="Client 2 Logo"
                            className="h-12 w-auto"
                            width={105}
                            height={48} />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/fa-brands-3.png"
                            alt="Client 3 Logo"
                            className="h-12 w-auto"
                            width={105}
                            height={48} />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/fa-brands-4 (1).png"
                            alt="Client 4 Logo"
                            className="h-12 w-auto"
                            width={105}
                            height={48} />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/col-md-2.png"
                            alt="Client 5 Logo"
                            className="h-12 w-auto"
                            width={105}
                            height={48} />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/fa-brands-6.png"
                            alt="Client 6 Logo"
                            className="h-12 w-auto"
                            width={105}
                            height={48} />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Products;