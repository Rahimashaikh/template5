import Image from "next/image";



const AboutContent = () => {
    return ( 




      <div className="relative h-screen w-screen"> {/* Full-screen height and width */}
      <Image
        src="/background.png" // Replace with your PNG image path
        alt="Shopping Girl"
        layout="fill" // Makes the image fill the parent container
        objectFit="cover" // Ensures the image covers the entire area
        quality={100} // Optional: Adjust image quality
      />

      <div className="absolute inset-0 flex items-center justify-center"> {/* Center content */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-16 text-black"> {/* Text on the left, white color */}
            <h2 className="text-5xl font-bold mb-4 leading-tight"> {/* Increased heading size */}
              About Us
            </h2>
            <p className="text-lg leading-relaxed mb-6"> {/* Increased text size */}
              We know how large objects will act, but things on a small scale just do not act that way.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg"> {/* Larger button */}
              Get Quote Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0"> {/* Empty div for spacing on the right */}
            {/* You can optionally add content here if needed */}
          </div>
        </div>
      </div>
</div>

    )
}

export default AboutContent;