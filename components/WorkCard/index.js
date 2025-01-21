import React, { useState } from "react";

const WorkCard = ({ img, title, subtitle, players, actionLabel, githubLink }) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleButtonClick = () => {
    if (githubLink) {
      window.open(githubLink, "_blank"); // Opens the link in a new tab
    }
  };

  return (
    <div
      className="relative bg-black/90 hover:bg-black/90 rounded-xl overflow-hidden shadow-lg transition-all ease-out duration-300 cursor-pointer"
    >
      {/* Background Image */}
      <div className="relative h-60 lg:h-72 w-full">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white leading-tight">
          {title}
        </h3>
        {/* Subtitle */}
        <p className="text-sm text-gray-300 mt-1">{subtitle}</p>

        {/* Players and Action */}
        <div className="flex justify-between items-center mt-4">
          {/* Players */}
          <div className="flex space-x-1">
            {players?.map((player, index) => (
              <img
                key={index}
                src={player.image}
                alt={`Player ${index + 1}`}
                className="w-6 h-6 rounded-full border-2 border-gray-800"
              />
            ))}
          </div>
          {/* Button with Popover */}
          <div
            className="relative"
            onMouseEnter={() => !githubLink && setIsPopoverVisible(true)}
            onMouseLeave={() => setIsPopoverVisible(false)}
          >
            <button
              className={`text-sm px-3 py-1 rounded-full transition-all duration-200 ${
                githubLink
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-gray-500 text-white cursor-not-allowed"
              }`}
              onClick={handleButtonClick}
              disabled={!githubLink} // Disable button if no link is provided
            >
              {actionLabel}
            </button>
            {/* Popover */}
            {!githubLink && isPopoverVisible && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg px-2 py-1 shadow-lg">
                No GitHub link available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
