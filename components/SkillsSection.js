import React from "react";

const SkillsSection = () => {
  // Hardcoded skills data
  const skills = [
    {
      title: "Languages",
      items: [
        { name: "Python", icon: "https://icon.icepanel.io/Technology/svg/Python.svg" },
        { name: "Go", icon: "https://icon.icepanel.io/Technology/svg/Go.svg" },
        { name: "JavaScript", icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
        { name: "Java", icon: "https://icon.icepanel.io/Technology/svg/Java.svg" },
        { name: "R", icon: "https://icon.icepanel.io/Technology/svg/R-.svg" },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "Pytorch", icon: "https://icon.icepanel.io/Technology/svg/PyTorch.svg" },
        { name: "Tensorflow", icon: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg" },
        { name: "Apache Spark", icon: "https://icon.icepanel.io/Technology/svg/Apache-Spark.svg" },
        { name: "SciKit Learn", icon: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg" },
        { name: "FastAPI", icon: "https://icon.icepanel.io/Technology/svg/FastAPI.svg" },
        { name: "React", icon: "https://icon.icepanel.io/Technology/svg/React.svg" },
      ],
    },
    {
      title: "Tools and Platforms",
      items: [
        { name: "AWS", icon: "https://icon.icepanel.io/Technology/svg/AWS.svg" },
        { name: "GCP", icon: "https://icon.icepanel.io/Technology/svg/Google-Cloud.svg" },
        { name: "Numpy", icon: "https://icon.icepanel.io/Technology/svg/NumPy.svg" },
        { name: "Pandas", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Pandas.png" },
        { name: "Kafka", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Apache-Kafka.png" },
        { name: "R Studio", icon: "https://icon.icepanel.io/Technology/svg/RStudio.svg" },
      ],
    },
    {
      title: "DevOps and MLOps",
      items: [
        { name: "Terraform", icon: "https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg" },
        { name: "Kubernetes", icon: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg" },
        { name: "GitLabCI", icon: "https://icon.icepanel.io/Technology/svg/GitLab.svg" },
        { name: "Sagemaker", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99FwgHxO3_rmNyLK6ytzNYVxlrynqrLn5Ow&s" },
        { name: "Langchain", icon: "https://irislogic.com/wp-content/uploads/2024/04/Digital-Transformation-1.png" },
        { name: "Kubeflow", icon: "https://user-images.githubusercontent.com/5319646/37641015-10cb00f6-2c53-11e8-9195-65f2dbc60955.jpg" },
      ],
    },
  ];

  const renderSkillCategory = (title, skillsList) => (
    <div className="rounded-xl border shadow-lg p-6 bg-gray-100 dark:bg-slate-800">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              title={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills">
        {/* <h2 className="text-3xl font-extrabold text-center text-gray-900 darkMode:text-white mb-12">
          Skills
        </h2> */}
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) =>
            renderSkillCategory(category.title, category.items)
          )}
        </div>
    </section>
  );
};

export default SkillsSection;
