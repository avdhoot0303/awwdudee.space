import React from "react";
import data from "../data/portfolio.json";
import EducationCard from "./EducationCard";

const EducationSection = () => {
  return (
    <section id="education" >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {data.resume.education.map((edu) => (
            <EducationCard
              key={edu.id}
              logo={edu.universityLogo}
              name={edu.universityName}
              date={edu.universityDate}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
