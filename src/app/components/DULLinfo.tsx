import publications from "../data/PublicationsList.json";
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
        <>
        <div id="Research" className="flex flex-col justify-center items-center pt-6 pb-12 mx-8 lg:px-12">
            {/* <h1 className="text-center mt-8 mb-6 text-2xl md:text-4xl">Our Research</h1> */}
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
         <div id="Publications" className="flex flex-col justify-center items-center pt-6 pb-12 mx-8 px-8 md:px-12 lg:px-32 font-title">
         <div>
             <h1 className="text-center mt-8 mb-16 text-2xl md:text-4xl">Our Publications</h1>

             <div className="flex flex-col space-y-8 px-8 md:px-12 lg:px-24 justify-center mx-auto">
                 {publications.length!==0 ? publications.slice(0,3).map((publication, index) => (
                     <div key={index}>
                         <div  className="flex flex-row space-x-10 mb-8">
                         <div className="w-1/6">
                             <h1 className="text-gray-600 font-light text-base md:text-xl">{publication.type}</h1>
                         </div>
                         <div className="w-5/6">
                             <h1 className="font-bold text-lg md:text-xl">{publication.title}</h1>
                             <h2 className="italic text-base md:text-lg">{publication.authors}</h2>
                             <p>{publication.booktitle} <b>[{publication.year}]</b></p>
                             <div className="flex flex-row space-x-1 mt-4 text-primary">
                                 <span>View</span>
                             { publication.pdf? <a href={publication.pdf} target="_blank"><b>Paper PDF</b></a> : null} 
                             { publication.pdf && publication.doi ? <div>|</div> : null} 
                             { publication.doi ? <a href={publication.doi} target="_blank"><b>DOI</b></a> : null}
                             { publication.doi && publication.url ? <div>|</div> : null} 
                             { publication.url ? <a href={publication.url} target="_blank"><b>URL</b></a> : null}
                             </div>
                         </div>
                     </div>
                     <hr />
                 </div>
             )) : <h1 className="text-2xl text-center">No publications found</h1>}
             </div>
         </div>
     </div>
     </>
    )
}