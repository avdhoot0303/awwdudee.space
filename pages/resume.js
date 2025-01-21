import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import toast, { Toaster } from "react-hot-toast";
// Data
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, resume, showResume, showCursor } = data;

  useEffect(() => {
    setMounted(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  const handleDownload = () => {
    // Simulate downloading the file
    const link = document.createElement("a");
    link.href = "/files/Resume.pdf"; // Path to your resume file in the `public/files` folder
    link.download = "Resume_Avdhoot_Patil.pdf";
    link.click();

    // Show a toast notification
    toast.success("Resume downloaded successfully!");
  };

  if (!resume) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {showCursor && <Cursor />}
      <div className={`container mx-auto mb-10 ${showCursor && "cursor-none"}`}>
        <Header isBlog />
        <Toaster position="top-center" reverseOrder={false} />
        {mounted && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                theme === "dark" ? "bg-slate-800 text-gray-100" : "bg-gray-50 text-gray-900"
              } max-w-4xl p-10 rounded-lg shadow-md`}
            >
              <div className="mt-5">
                <Socials />
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{name}</h1>
                <Button
                  onClick={handleDownload}
                  type="primary"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Download Resume
                </Button>
                
              </div>
              
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <p className="text-sm mt-5">{resume.description}</p>

              <div className="mt-10">
                <h2 className="text-2xl font-bold">Education</h2>
                {resume.education.map((edu, index) => (
                  <div key={index} className="mt-5">
                    <h3 className="text-xl mt-5">📝{edu.universityName}</h3>
                    <p className="text-sm opacity-75">{edu.universityDate}</p>
                    <p className="text-sm mt-2"><b>Relevant Coursework:</b> <i>{edu.relevantCourseWork}</i></p>
                    <p className="text-sm mt-2">{edu.description}</p>

                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-bold">Experience</h2>
                {resume.experiences.map((experience, index) => (
                  <div key={index} className="mt-5">
                    <h3 className="text-xl mt-5">🚀{experience.position}</h3>
                    <p className="text-sm opacity-75">
                      {experience.company} | {experience.dates}
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      {experience.description?.map((item, idx) => (
                        <li key={idx} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-10">
              <h2 className="text-2xl font-bold">Skills</h2>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-5">
                {/* Languages */}
                {resume.skills.languages && (
                  <div className="flex flex-col">
                    <h4 className="text-md font-semibold mb-2">Languages</h4>
                    <ul className="list-disc ml-5">
                      {resume.skills.languages.map((lang, idx) => (
                        <li key={idx} className="mb-1">{lang.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Frameworks */}
                {resume.skills.frameworks && (
                  <div className="flex flex-col">
                    <h4 className="text-md font-semibold mb-2">Frameworks</h4>
                    <ul className="list-disc ml-5">
                      {resume.skills.frameworks.map((fw, idx) => (
                        <li key={idx} className="mb-1">{fw.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tools */}
                {resume.skills.tools && (
                  <div className="flex flex-col">
                    <h4 className="text-md font-semibold mb-2">Tools</h4>
                    <ul className="list-disc ml-5">
                      {resume.skills.tools.map((tool, idx) => (
                        <li key={idx} className="mb-1">{tool.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
              

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
