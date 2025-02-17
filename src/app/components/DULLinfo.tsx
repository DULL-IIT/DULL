export default function DULLinfo() {
    const domains = [
        
        " Bengali National Language Generation", 
        " Bengali Hybrid Text summarization", 
        "Adaptation of LLMs for Bengali Use",
        " Bengali Text Validation",
         "Bengali Text Classification", 
         "Bengali Document Archiving"
    ];
    return (
        <div id="Research" className="flex flex-col justify-center items-center pt-6 pb-12 mx-8 lg:px-12">
            <h1 className="text-center mt-8 mb-6 text-2xl md:text-4xl">Our Research</h1>
            <div className="flex flex-row items-start mt-8 mx-8 md:mx-12">
                <div className="w-3/5 px-8 md:px-10">
                    <p className="text-gray-700 font-body text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                    Our research group envisions a future where cutting-edge advancements in Natural Language Processing (NLP) and Computational Life Sciences bridge the gap between technology and underserved communities. We aim to empower low-resource languages, particularly Bengali, by developing innovative NLP tools that preserve linguistic heritage, enhance communication, and democratize access to information.

Simultaneously, we aspire to revolutionize Computational Life Sciences by integrating AI-driven solutions for bioinformatics challenges, fostering breakthroughs in healthcare, genomics, and personalized medicine. Guided by the principles of inclusivity, sustainability, and interdisciplinary collaboration, our vision is to create impactful technologies that drive scientific progress and improve lives globally.
                    </p>
                    
                </div>
                <div className="w-2/5">
                    <ul className="text-white font-title text-base text-left px-8 py-6 space-y-2 bg-primary rounded-md">
                        <h1 className="text-white text-center text-2xl mb-4">Research Domains</h1>
                        {domains.map((domain, index) => (
                            <li key={index}>• {domain}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}