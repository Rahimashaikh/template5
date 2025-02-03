import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';



const montserrat = Montserrat({
    weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  });
  
  const products = [
    { id: 1, src: "products 1.png", alt: "Women", title: "Graphic Design", description: "Elegant and chic clothing for women." },
    { id: 2, src: "products 2.png", alt: "Men", title: "Graphic Design", description: "Stylish and trendy clothing for men." },
    { id: 3, src: "products 3.png", alt: "Kids", title: "Graphic Design", description: "Comfortable and stylish shoes." },
    { id: 4, src: "products 4.png", alt: "Accessories", title: "Graphic Design", description: "Stylish and trendy outfit." },
    { id: 5, src: "products 5.png", alt: "Men", title: "Graphic Design", description: "Classic and warm coat." },
    { id: 6, src: "products 6.png", alt: "Women", title: "Graphic Design", description: "Elegant and chic top." },
    { id: 7, src: "products 7.png", alt: "Accessories", title: "Graphic Design", description: "Enhance your look with cool jacket." },
    { id: 8, src: "products 8.png", alt: "Kids", title: "Graphic Design", description: "Bright and vibrant outfits for kids." },
    { id: 9, src: "products 9.png", alt: "Kids", title: "Graphic Design", description: "Bright and vibrant outfits for kids." },
    { id: 10, src:"products 10.png", alt: "Kids", title: "Graphic Design", description: "Bright and vibrant outfits for kids." },
    { id: 11, src:"products 11.png", alt: "Kids", title: "Graphic Design", description: "Bright and vibrant outfits for kids." },
    { id: 12, src:"products 12.png", alt: "Kids", title: "Graphic Design", description: "Bright and vibrant outfits for kids." },

];
  
  export const productImage = () => {
    return (
      <div className="w-full bg-[#FAFAFA] py-12 px-6">
        {/* BESTSELLER PRODUCTS */}
        <div className={`text-center mb-8 ${montserrat.className}`}>
          <p className="font-Montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
            Featured Products
          </p>
          <h3 className="text-[#252B42] font-Montserrat text-2xl font-bold leading-8 tracking-[0.1px]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/bestseller/${product.id}`} passHref>
              <div className="relative group overflow-hidden rounded-lg cursor-pointer border border-gray-200 shadow-sm hover:shadow-md">
                {/* Product Image */}
                <img
                  src={product.src}
                  alt={product.alt}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
  
                {/* Product Details */}
                <div className="p-4 flex flex-col items-center">
                  <h5 className="font-Montserrat font-bold text-lg text-[#252B42] text-center">
                    {product.title}
                  </h5>
                  <div className="flex justify-center gap-3 mt-2">
                    <h5 className="font-Montserrat font-bold text-sm text-[#BDBDBD] line-through">
                      $16.48
                    </h5>
                    <h5 className="font-Montserrat font-bold text-sm text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
  
                  {/* Color Options */}
                  <div className="flex items-center gap-2 mt-4">
                    <span className="h-5 w-5 rounded-full bg-blue-500 border border-gray-300"></span>
                    <span className="h-5 w-5 rounded-full bg-green-500 border border-gray-300"></span>
                    <span className="h-5 w-5 rounded-full bg-orange-500 border border-gray-300"></span>
                    <span className="h-5 w-5 rounded-full bg-black border border-gray-300"></span>
                  </div>
                </div>
              </div>
              </Link>
            ))}
    </div>
          {/* Pagination Button */}
          <div className="w-full flex justify-center mt-[40px]">
  <div className="w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] border-[#BDBDBD] shadow-md flex items-center justify-center space-x-2">
    <div className="bg-[#F3F3F3] text-[#737373] font-extrabold py-6 px-8 border border-[#d5d5d5] rounded-l-md cursor-pointer">
      First
    </div>
    <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
      1
    </div>
    <div className="bg-[#1D4ED8] text-white py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
      2
    </div>
    <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
      3
    </div>
    <div className="bg-white text-[#1D4ED8] py-6 px-8 border border-[#d5d5d5] rounded-r-md shadow-md cursor-pointer">
      Next
    </div>
  </div>
</div>

        
              
          
        </div>
    );
  };

export default productImage;