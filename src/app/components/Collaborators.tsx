import Image from "next/image"

export default function Collaborators() {
    return (
        <div className="mb-12">
            <h1 className="text-center mt-24 text-2xl md:text-4xl">Our Collaborators</h1>
            <div className="mx-16 md:mx-24 lg:mx-36 font-body text-md md:text-xl my-12 text-center">
            We are grateful to IIT, University of Dhaka, CARS for collaboration. <br />
            </div>
        
            
                <div className="flex flex-col">
                    <h2 className="text-center mt-4 mb-8 text-lg md:text-2xl text-primary font-bold">Institutions</h2>
                    <div className="flex flex-wrap space-x-8 items-center justify-center">
                        <Image src="/logos/DU.png" className="h-12 md:h-16 w-auto mb-4" alt="Dhaka University" width={120} height={70} />
                        <Image src="/logos/BUBT.png" className="h-12 md:h-16 w-auto mb-4" alt="BUBT" width={100} height={70} />
                        <Image src="/logos/ULAB.png" className="h-12 md:h-16 w-auto mb-4" alt="ULAB" width={100} height={70} />
                    </div>
                </div>
             
        </div>
        
        
    )
}