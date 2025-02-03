import Image from "next/image";

const Section = () => {
  return (
    <div className="mx-auto px-4 font-Montserrat max-w-7xl">


      {/* Main Content Section */}
      <div className="flex  top-0  flex-col lg:flex-row gap-8 mt-4"> {/* Added mt-4 */}
        {/* Left Section - Image Slider */}
        <div className="flex-1 lg:max-w-[600px]">
          <div className="relative">
            <Image
              src={"/carousel-item.png"}
              alt="Product Image"
              className="rounded-lg"
              width={600}
              height={400}
            />
            {/* Arrows */}
            <button className="absolute top-1/2 left-2 -translate-y-1/2 p-2">
              <Image src={'/arrowleft.png'} alt="arrow 1" width={23} height={47} />
            </button>
            <button className="absolute top-1/2 right-2 -translate-y-1/2 p-2">
              <Image src={'/arrowright.png'} alt="arrow 2" width={23} height={47} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            <Image
              src={'/carouselCaptions.png'}
              alt="Thumbnail 1"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
            <Image
              src={'/single-product-1-thumb-2.jpg'}
              alt="Thumbnail 2"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 lg:max-w-[600px]">
          <h1 className="text-2xl font-semibold text-gray-800">Floating Phone</h1>
          
          {/* Rating Section */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <Image key={i} src="/Vector (6).png" alt="star" width={24} height={24} />
              ))}
              <Image src="/Vector (7).png" alt="half-star" width={24} height={24} />
            </div>
            <p className="text-sm text-gray-500">(10 Reviews)</p>
          </div>

          {/* Price & Stock */}
          <p className="text-xl font-semibold text-black mt-4">$1,139.33</p>
          <p className="text-sm text-gray-500 mt-2">
            Availability: <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          {/* Description - Fixed Line Breaks */}
          <p className="text-gray-700 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.<br/> 
            RELIT official consequent door ENIM RELIT Mollie.<br/>
            Excitation venial consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
            <div className="flex gap-2 mt-2">
              {['blue','green','orange','pink'].map((color) => (
                <span
                  key={color}
                  className={`w-6 h-6 rounded-full cursor-pointer bg-${color}-500 border border-gray-300`}
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
              Select Options
            </button>
            <div className="flex gap-4">
              <Image src="/Vector (3).png" alt="heart" width={15} height={11} />
              <Image src="/Vector (4).png" alt="favorite" width={15} height={11} />
              <Image src="/Vector (5).png" alt="eye" width={15} height={11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;