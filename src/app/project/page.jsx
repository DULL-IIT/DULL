'use client';

import { useEffect, useState } from "react";
import publications from "../data/PublicationsList";
import worklist from "../data/WorkList.json";

export default function ProjectPage() {
   

    return (
        <>
            <div id="Publications" className="flex flex-col justify-center items-center pt-6 pb-12 mx-8 px-8 md:px-12 lg:px-32 font-title">
                <div>
                    <h1 className="text-center mt-8 mb-16 text-2xl md:text-4xl">
                        Current works are showing here
                    </h1>
    
                    <div className="flex flex-col space-y-8 px-8 md:px-12 lg:px-24 justify-center mx-auto">
                        {worklist.map((work, index) => ( // Map through worklist array
                            <div key={index}>
                                <div className="flex flex-row space-x-10 mb-8">
                                    <div className="w-1/6">
                                        <h1 className="text-gray-600 font-light text-base md:text-xl">
                                            {work.Work_title}
                                        </h1>
                                    </div>
                                    <div className="w-5/6">
                                        <h1 className="font-bold text-lg md:text-xl">{work.domain}</h1>
                                        <h2 className="italic text-base md:text-lg">{work.contributors}</h2>
                                        <p>
                                            {work.Main_Idea} <b>[{work.year}]</b>
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
    
}