import React from "react";

const ExperienceCard = ({ company, logo, location, roles }) => {
  return (
    <div >
      {/* Vertical Line for Timeline */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

      {/* Company Section */}
      <div className="relative w-88 pl-16 pb-10">
        {/* Timeline Dot */}
        <div className="absolute left-4 top-4 w-4 h-4 bg-red-400 dark:bg-slate-600 rounded-full z-10 border-2 border-white dark:border-gray-800"></div>

        {/* Company Details */}
        <div className="bg-gray-100 dark:bg-slate-900 rounded-xl shadow-lg p-7">
          <div className="flex items-start space-x-4">
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-12 h-12 rounded-full shadow-md"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {company}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {location}
              </p>
            </div>
          </div>

          {/* Roles */}
          <div className="mt-6 space-y-6">
            {roles.map((role, index) => (
              <div key={index}>
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                  {role.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {role.type} &middot; {role.duration}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {role.description}
                </p>
                {role.skills && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Skills:{" "}
                    <span className="font-medium">{role.skills.join(", ")}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
