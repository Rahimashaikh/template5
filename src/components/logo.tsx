import Image from 'next/image'



const Logo = () => {
    return ( 

<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-7 gap-8">
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

        );
}

export default Logo;