'use client';

import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import publications from "../data/PublicationsList";

export default function PublicationsPage() {
    const dropdownOptions = [
        { value: 'Year', label: 'Year' },
        { value: 'Title', label: 'Title' },
      ];

      const [searchText, setSearchText] = useState("");
      const [filterOption, setFilterOption] = useState(dropdownOptions[0].value);
      const [filteredPublications, setFilteredPublications] = useState(publications);

      function filterPublications(searchText) {
      setFilteredPublications(publications.filter((publication) => {
        if (!searchText) { return true; }
            if (filterOption === 'Year') {
                if (publication.year.toString() === searchText) {
                    console.log(publication.year);
                    return true;
                } else {
                    return false;
                }
            } else if (filterOption === 'Title') {
            if (publication.title.toLowerCase().includes(searchText.toLowerCase()))
            {
                return true;
            } else {
                return false;
            }
      }}));
    }

    useEffect(() => {
        filterPublications(searchText);
        console.log(searchText);
    }, [searchText, filterOption]);

    return (
        <>
            <div id="Publications" className="flex flex-col justify-center items-center pt-6 pb-12 mx-8 px-8 md:px-12 lg:px-32 font-title">
                <div>
                    <h1 className="text-center mt-8 mb-16 text-2xl md:text-4xl">Our Publications</h1>
                    <Searchbar placeholder="Search..." options={dropdownOptions} setSearchText={setSearchText} setFilterOption={setFilterOption}/>
                    <div className="flex flex-col space-y-8 px-8 md:px-12 lg:px-24 justify-center mx-auto">
                        <h2 className="text-center text-primary font-semibold text-base">(For a full list, please go to DBLP or Google Scholar)</h2>
                        {filteredPublications.length!==0 ? filteredPublications.map((publication, index) => (
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