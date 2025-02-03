import React from 'react'
import Image from 'next/image'

const TeamMember = () => {
  return (
    <div>
        

      <div>
      {/* Team Section */}
      <section className="relative bg-white py-16">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4">
        {/* Heading */}
        <div className="text-center max-w-lg">
          <h2 className="text-4xl font-bold text-[#252B42]">
            Meet Our Team
          </h2>
          
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/member1.png"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
              </h6>
              {/* Social Media links */}
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/member2.png"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/member3.png"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/member4.jpg"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/member5.png"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/member6.png"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
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
                src={"/member7.png"}
                alt="Team Member 2"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">
              Username
              </h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
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
                src={"/member8.png"}
                alt="Team Member 2"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">
              Username
              </h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
   

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/member9.jpg"}
                alt="Team Member 3"
                className="object-cover w-full h-full"
                width={315}
                height={230}
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">
              Username
              </h5>
              <h6 className="text-sm font-semibold text-[#737373]">
              Profession
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
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/twitter.png"}
                  alt="Twitter"
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
    </div>
  )
}

export default TeamMember 