"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Expert {
  name: string;
  qualification: string;
  description: string;
  image: string;
}

const ExpertCard: React.FC<{ expert?: Expert }> = ({ expert }) => {
  const defaultExpert: Expert = {
    name: "Default Expert",
    qualification: "No Qualification Provided",
    description: "No description available.",
    image: "/static/images/default-image.svg",
  };

  const expertData = expert || defaultExpert;

  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col w-[280px] h-[380px] shadow-lg hover:shadow-xl">
      <Image
        src={expertData.image}
        alt={`${expertData.name} Profile`}
        width={280}
        height={180}
        className=" mb-4 rounded-lg"
      />
      <h2 className="text-lg font-semibold text-gray-800 mt-4">{expertData.name}</h2>
      <p className="text-sm text-gray-600 mt-2">{expertData.qualification}</p>
      <div className="flex mt-2">
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src="/static/images/star.svg"
            alt="Rating"
            width={16}
            height={16}
            className="mr-1"
          />
        ))}
      </div>
      <button className="bg-[#55C360] text-white w-1/2 px-4 py-2 rounded-full ml-auto mr-auto mt-auto hover:bg-[#4db557]">
        Hire Now
      </button>
    </div>
  );
};

const ExpertGrid: React.FC<{ experts?: Expert[] }> = ({ experts }) => {
  const defaultExperts: Expert[] = Array.from({ length: 24 }, (_, i) => ({
    name: `Default Expert ${i + 1}`,
    qualification: "No Qualification Provided",
    description: "No description available.",
    image: "/static/images/default-image.svg",
  }));

  const expertList = experts && experts.length > 0 ? experts : defaultExperts;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12; 
  const totalPages = Math.ceil(expertList.length / itemsPerPage);

  const [isPageChanging, setIsPageChanging] = useState(false); 

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsPageChanging(true);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setIsPageChanging(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedExperts = expertList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  
  React.useEffect(() => {
    if (isPageChanging) {
      setTimeout(() => setIsPageChanging(false), 300);
    }
  }, [isPageChanging]);

  return (
    <div className="bg-white px-32 py-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-poppins font-bold  mb-20 text-gray-800">Connect with Top Experts</h1>
      </div>
      <div
        className={`grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-center transition-opacity duration-300 ${
          isPageChanging ? "opacity-0" : "opacity-100"
        }`}
      >
        {paginatedExperts.map((expert, index) => (
          <ExpertCard key={index} expert={expert} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          className={`w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-2 ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 0}
        >
          <Image
            src="/static/images/arrow1.svg"
            alt="Previous"
            width={56}
            height={56}
          />
        </button>
        <button
          onClick={handleNextPage}
          className={`w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-2 ${
            currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages - 1}
        >
          <Image
            src="/static/images/arrow2.svg"
            alt="Next"
            width={56}
            height={56}
          />
        </button>
      </div>
    </div>
  );
};

export default ExpertGrid;
