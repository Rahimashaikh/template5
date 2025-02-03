import AboutParagraph from "@/components/about-paragrpgh";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google';
import AboutContent from "@/components/about-content";
import Footer from "@/components/footer";


const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});


const About = () => {
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


 <div><div>
    <AboutContent/>
    <AboutParagraph />
    </div></div>

  

    <div>
      {/* Team Section */}
      <section className="relative bg-white py-16">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4">
        {/* Heading */}
        <div className="text-center max-w-lg">
          <h2 className="text-4xl font-bold text-[#252B42]">
            Meet Our Team
          </h2>
          <p className="text-base text-[#737373] mt-4">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/team-1-user-1.jpg"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">John Doe</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
                Software Engineer
              </h6>
              {/* Social Media */}
              <div className="flex justify-center gap-4 mt-4">
                <Image
                  src={"/fb.png"}
                  alt="Facebook"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/insta.png"}
                  alt="insta"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/team-1-user-3.jpg"}
                alt="Team Member 2"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">
                Jane Smith
              </h5>
              <h6 className="text-sm font-semibold text-[#737373]">
                Marketing Head
              </h6>
              <div className="flex justify-center gap-4 mt-4">
                <Image
                  src={"/fb.png"}
                  alt="Facebook"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/insta.png"}
                  alt="Insta"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
   

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/team-1-user-2.jpg"}
                alt="Team Member 3"
                className="object-cover w-full h-full"
                width={315}
                height={230}
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">
                Emily Rose
              </h5>
              <h6 className="text-sm font-semibold text-[#737373]">
                UI/UX Designer
              </h6>
              <div className="flex justify-center gap-4 mt-4">
                <Image
                  src={"/fb.png"}
                  alt="Facebook"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/insta.png"}
                  alt="Insta"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>

<div>
      {/* COMPANIES SECTION */}
      <section className="bg-gray-100 py-20 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Big<br className="sm:hidden" /> Companies<br className="sm:hidden" /> Are Here
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
              Problems trying to resolve the conflict<br className="sm:hidden" /> between the two major
              realms of Classical <br className="sm:hidden" /> physics: Newtonian mechanics
            </p>
          </div>
          
          {/* Companies */}
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
</section>
</div>

 <section className="relative w-full h-auto sm:h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
      <div className="w-full sm:w-1/2 h-full bg-[#2A7CC7] px-4 sm:px-8 md:px-[50px] py-8 sm:py-16 flex flex-col justify-center items-center">
        <div className="w-full sm:w-[438px] flex flex-col items-center text-center sm:text-left sm:items-start gap-[24px]">
          <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-[50px] tracking-[0.2px]">
            Now Lets grow Yours
          </h2>
          <p className="text-white text-sm font-semibold sm:text-base lg:text-sm text-[12px] lg:w-auto w-full sm:w-[350px] leading-[20px] tracking-[0.2px]">
            The gradual accumulation of<br className=" sm:hidden"/> information about atomic and<br className=" sm:hidden"/> small-scale behavior during the<br className=" sm:hidden"/> first quarter of the 20th.
          </p>
          <button className=" w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
            <span className="text-white text-sm font-bold">Button</span>
          </button>
        </div>
      </div>
      <div className=" sm:w-1/2 h-full relative object-cover mt-8 px-40 sm:mt-0">
        <Image
          src="/unsplash_vjMgqUkS8q8.png"
          alt="girl"
          className="absolute w-full h-auto sm:w-[590px] sm:h-[640px] left-0 sm:left-[85px] inset-0 object-cover hidden sm:block"
          width={1000}
          height={1000}
        />
      </div>
    </section>




  <Footer />






</div>

  );
}

export default About;