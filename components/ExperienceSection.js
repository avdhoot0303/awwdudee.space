import React from "react";
import data from "../data/portfolio.json";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  
  {
    company: "State University of New York at Stony Brook",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Stony_Brook_University_seal.svg/800px-Stony_Brook_University_seal.svg.png",
    location: "Stony Brook, NY, USA",
    roles: [
      {
        title: "Senior Research Assistant @ SUNY Research Foundation",
        type: "Part Time",
        duration: "May 2024 - Present",
        description:
          "Developed scalable data pipelines in PySpark to process over 6 million COVID patient records, reducing processing time by 40% for the Long COVID project.  Collaborated with cross-functional teams to define requirements for data analysis and statistical computations, driving insights into healthcare trends. Contributed to two high-impact research queries by leveraging distributed computing environments and advanced statistical techniques.",
        skills: ["Python", "SQL", "PySpark", "Palantir", "N3C"],
      },
      {
        title: "Masters of Science in Data Science",
        type: "Full Time",
        duration: "Aug 2023 - Present",
        description:
          "Relevant coursework: Statistical Learning, Statistical computing, Intro to Probability, Big data analysis, Big Data systems, Smart Energy, Data Analysis (R), Data Management",
        skills: ["Python", "SQL", "PySpark", "R", "React", "Hadoop", "Parallel computing and processing"],
      },
      
      
    ],
  },
  {
    company: "NeoSOFT Tech",
    logo: "https://res.cloudinary.com/gurucom/image/upload/w_96,h_96,f_auto,dpr_2/v1616477943/pimg/FreelancerFiles/0/580/580404/z2asmbt0hmhlfvz3itev.jpg",
    location: "Mumbai, Maharashtra, India",
    roles: [
      {
        title: "Senior Software Engineer",
        type: "Full-time",
        duration: "May 2022 - Jun 2023",
        description:
          "Develop and deliver employee training programs on GCP, IT infrastructure, DevOps, and related technologies. Provide ongoing support and mentorship to help employees develop their skills. Implement machine learning solutions using MLOps best practices. Develop workflows for model training, testing, and deployment, and use tools like TensorFlow or PyTorch.",
        skills: ["Data Science", "MLOps", "Mentorship", "NLP"],
      },
      
      {
        title: "Software Engineer",
        type: "Full-time",
        duration: "Nov 2021 - May 2022",
        description:
          "Design and implement cloud solutions using GCP services like Compute Engine, Cloud Storage, and BigQuery. Develop strategies for cost optimization and security.",
        skills: ["CI/CD", "Google Cloud Platform", "Scalability", "Kubernetes", "Cloud Native Applications"],
      },
      {
        title: "Trainee Software Engineer",
        type: "Full-time",
        duration: "June 2021 - Nov 2021",
        description:
          "Designed distributed systems to handle large data volumes and ensure reliability.",
        skills: ["CI/CD", "Linux", "Scalability"],
      },
      
    ],
  },
  {
    company: "Tech Mahindra",
    logo: "https://i.scdn.co/image/ab67656300005f1f7f9bfbaf97d415fa9d1a9656",
    location: "Mumbai, Maharashtra, India",
    roles: [
      {
        title: "Software Engineer Intern",
        type: "Internship",
        duration: "Aug 2022 - Jun 2023",
        description:
          "Played a key role in software development project, encompassing the design and implementation of backend system utilizing Java, SQL, PL/SQL, Hibernate, MVC, Spring Boot, and Microservices. Additionally, spearheaded the creation of a comprehensive database for a banking application through meticulous PL/SQL scripting.",
        skills: ["Java", "Microservices", "PL/SQL", "Spring Boot"],
      },
      
    ],
    
  },
  {
    company: "Xavier Institute of Engineering (University of Mumbai)",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/Logo_of_Xavier_Institute_Of_Engineering.jpg",
    location: "Mumbai, MH, IN",
    roles: [
      {
        title: "Bachelors of Engineering in Information Technology",
        type: "Full Time",
        duration: "Jul 2018 - Jun 2021",
        description:
          "Relevant Courses: ",
        skills: ["Python", "SQL", "PySpark", "Palantir", "N3C"],
      },
      
    ],
  },
  
];

const ExperienceSection = () => {
  return (
    <section className="py-10">
      {/* <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Experience
      </h2> */}
      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            logo={experience.logo}
            location={experience.location}
            roles={experience.roles}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
