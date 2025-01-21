import React from "react";

const EducationCard = ({ logo, name, date, description }) => {
  return (
    <div className="rounded-lg shadow-md p-6 flex items-center space-x-4 bg-gray-100 dark:bg-black">
      {/* Logo */}
      <div className="w-16 h-16 flex-shrink-0">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-full h-full object-cover rounded-full shadow-md"
        />
      </div>
      {/* Details */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-2">
          {date}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
