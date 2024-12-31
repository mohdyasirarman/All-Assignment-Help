"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Expert {
  name: string;
  expertise: string;
  description: string;
  image?: string;
  orderFinished: number;
  orderInProgress: number;
  location: string;
  rating: string;
  about: string;
}

const defaultExpert: Expert = {
  name: "Default Expert",
  expertise: "No Expertise Provided",
  description: "No description available.",
  image: "/static/images/Profile_avatar_placeholder_large.png",
  orderFinished: 0,
  orderInProgress: 0,
  location: "No Where",
  rating: "5.0/5",
  about: "Who cares",
};

const ExpertCard: React.FC<{ expert?: Expert }> = ({ expert }) => {
  const expertData = expert || defaultExpert;

  return (
    <div className="bg-white rounded-xl p-4 flex flex-row justify-start items-center gap-10 w-[1100px] h-[300px] shadow-lg hover:shadow-xl">
      <div>
        <Image
          src={`${expertData.image || defaultExpert.image}`}
          alt={`${expertData.name} Profile`}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            {expertData.name}
          </h2>
          <div className="flex items-center mr-20">
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
            <p className="flex text-base text-gray-600 ml-2">
              {expertData.rating}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">{expertData.expertise}</p>
        <div className="flex justify-between items-center flex-row gap-10">
          <div className="flex justify-between items-center flex-row gap-10">
            <p className="flex justify-center items-center space-x-2 text-sm text-gray-600 mb-1">
              <Image
                width={15}
                height={15}
                src="/static/images/elements.svg"
                alt="tick"
              />
              <p>
                <b>{expertData.orderFinished}</b> Orders Finished
              </p>
            </p>
            <p className="flex justify-center items-center space-x-2 text-sm text-gray-600 mb-1">
              <Image
                width={15}
                height={15}
                src="/static/images/beaker.svg"
                alt="beaker"
              />
              <p>
                <b>{expertData.orderInProgress}</b> Order in Progress
              </p>
            </p>
            <p className="flex justify-center items-center space-x-2 text-sm text-gray-600 mb-1">
              <Image
                width={15}
                height={15}
                src="/static/images/location.svg"
                alt="beaker"
              />
              <p>{expertData.location}</p>
            </p>
          </div>
          <div className="flex w-2/5">
            <button className="bg-[#55C360] text-white w-2/6 px-4 py-2 rounded-3xl ml-auto mr-auto mt-auto hover:bg-[#4db557]">
              Hire Now
            </button>
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="text-sm text-gray-600 mt-2">{expertData.about}</p>
        </div>
      </div>
    </div>
  );
};

const ExpertGrid: React.FC<{ experts?: Expert[] }> = ({ experts }) => {
  const defaultExperts: Expert[] = Array.from({ length: 24 }, (_, i) => ({
    name: `Default Expert ${i + 1}`,
    expertise: "No Expertise Provided",
    description: "No description available.",
    image: "/static/images/Profile_avatar_placeholder_large.png",
    orderFinished: 0,
    orderInProgress: 0,
    location: "No Where",
    rating: "5.0/5",
    about: "Who cares",
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
        <h1 className="text-5xl font-poppins font-bold  mb-20 text-gray-800">
          Connect with Top Experts
        </h1>
      </div>
      <div
        className={`w-full grid grid-rows-4 sm:grid-rows-4 md:grid-rows-4 lg:grid-rows-4 gap-6 justify-center transition-opacity duration-300 ${
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
            currentPage === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
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
