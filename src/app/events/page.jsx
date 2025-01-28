import Image from "next/image"

export default function Events() {

    const images = [
       
      ];

    return (
        <div id="Events" className="flex flex-col justify-center items-center py-8 mx-8 lg:px-12 mb-12">
            <h1 className="text-center mt-8 mb-12 text-2xl md:text-4xl">Events and Moments</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                <div key={index} className='relative w-full h-64 overflow-hidden rounded-md'>
                    <Image
                        className="object-cover w-full h-full"
                        src={image.src}
                        alt="DULL Events and Moments"
                        height={700}
                        width={500}
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-transparent to-gray-800 opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                        <div className="flex h-full items-end justify-center">
                            <p className="text-white text-lg font-medium pb-8">{image.title}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}