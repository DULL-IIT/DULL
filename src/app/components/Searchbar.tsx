'use client';

import React, { useState } from 'react';

const SearchBar = ({ placeholder, options, setSearchText, setFilterOption }: { placeholder: string, options: any[], setSearchText: (text: string) => void, setFilterOption: (option: string) => void }) => {
  const [value, setValue] = useState("");

  const handleSelectChange = (event: { target: { value: string; }; }) => {
    setFilterOption(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setValue(event.target.value);
  }

  return (
    <div className="relative flex justify-center mb-12">
      {/* Dropdown */}
      <div className="relative">
        <select
          className="appearance-none py-2 px-8 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleSelectChange}
        >
          {options.map((option, index) => (
            <option className="bg-white text-gray-800 rounded-sm shadow-none" key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
        </div>
      </div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleSearch(e)}
        className="w-52 md:w-96 py-2 px-4 border border-gray-300 focus:outline-none"
      />
      <button className="px-4 bg-primary text-white font-semibold rounded-r-md" onClick={() => setSearchText(value)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
