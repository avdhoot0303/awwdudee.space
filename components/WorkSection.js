import WorkCard from "../components/WorkCard/index";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const projects = [
  {
    id: 1,
    img: "https://cdn-blog.scalablepath.com/uploads/2024/06/Huggingface-ai.png",
    title: "Scalable phishing detection system with Deep learning",
    subtitle: "Scalable Big Data System",
    players: [
      { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
      { image: "https://icon.icepanel.io/Technology/svg/Redis.svg" },
      { image: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
      { image: "https://icon.icepanel.io/Technology/svg/FastAPI.svg"},
      { image: "https://datascientest.com/en/files/2023/09/illu_apache_kafka_blog-137.png"},
      { image: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"},
      { image: "https://icon.icepanel.io/Technology/svg/Google-Cloud.svg"},
      { image: "https://icon.icepanel.io/Technology/svg/Apache-Spark.svg"},
      { image: "https://icon.icepanel.io/Technology/svg/RabbitMQ.svg"}
    ],
    actionLabel: "Open Link",
    category: ["Data Science, Backend"],
    githubLink: "https://github.com/avdhoot0303/phishDefender"

  },
  {
    id: 4,
    img: "https://miro.medium.com/v2/resize:fit:1400/1*6PqpABVraHXPGCpTDzqdIg.png",
    title: "REIA - Renewable Energy Integration Assistant",
    subtitle: "RAG based LLM Chatbot",
    players: [
      { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
      { image: "https://api.nuget.org/v3-flatcontainer/langchain.core/0.14.1-dev.11/icon" },
      { image: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" },
      { image: "https://icon.icepanel.io/Technology/svg/FastAPI.svg"},
      { image: "https://icon.icepanel.io/Technology/svg/React.svg" },
      { image: "https://d2r9phh2n9g4lt.cloudfront.net/website/product-images/FAISS.png"}
      
    ],
    actionLabel: "Open Link",
    category: ["Data Science"],
    githubLink: "https://github.com/avdhoot0303/REIA-langchain-RAG-chatbot"


  },
  {
    id: 6,
    img: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2023-12/6705c010-0aea-469e-af9e-dd1690d37203.jpg",
    title: "LLM Safety Plugin for Chatbot Applications",
    subtitle: "LLM anti-jailbreak plugin",
    players: [
      { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
      { image: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" },
      { image: "https://icon.icepanel.io/Technology/svg/FastAPI.svg" },
      { image: "https://icon.icepanel.io/Technology/svg/React.svg"}
    ],
    actionLabel: "Open Link",
    category: ["LLM"],
    githubLink: "https://github.com/avdhoot0303/chatbot-jailbreak-plugin"


  },
  {
    id: 2,
    img: "https://miro.medium.com/v2/resize:fit:1400/0*QGUYjCiBuJs53qIf.png",
    title: "Malware Detection Using CNN  ",
    subtitle: "Neural Networks + ML ",
    players: [
        { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
        { image: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg"},
        { image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"},
         { image: "https://icon.icepanel.io/Technology/svg/FastAPI.svg"},
         { image: "https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png"},
         { image: "https://icon.icepanel.io/Technology/svg/Streamlit.svg"},
         { image: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
         { image: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg"}
       
    ],
    actionLabel: "Open Link",
    category: ["Machine Learning"],
    githubLink: "https://github.com/avdhoot0303/Malware-detection-of-PE-files"


  },
  {
    id: 3,
    img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_q2gl35Q00Q/v2/-1x-1.webp",
    title: "Forecasting Hourly Charging Demand for EVs",
    subtitle: "Demand Forecasting",
    players: [
        { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_q6kVLI7gOc3eO6gvOf4IbzutGns_p75L9wsNX4RIgb-DQ6ZDV43cJUZRNQAM5T3jpM&usqp=CAU" },
        { image: "https://icon.icepanel.io/Technology/svg/NumPy.svg" },
        { image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"},
        { image: "https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png"}

    ],
    actionLabel: "Open Link",
    category: ["Machine Learning"],
    githubLink: "https://www.kaggle.com/competitions/ams-559-ev-charging-forecasting"


  },

  
  {
    id: 5,
    img: "https://s3.tradingview.com/b/bacXsRFN_mid.png",
    title: "Optiver - Trading at the Close",
    subtitle: "Predict US stocks closing movements",
    players: [
      { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
      { image: "https://icon.icepanel.io/Technology/svg/NumPy.svg" },
      { image: "https://icon.icepanel.io/Technology/png-shadow-512/Pandas.png" },
      { image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"},
      { image: "https://icon.icepanel.io/Technology/svg/Kaggle.svg"}
    ],
    actionLabel: "Open Link",
    category: ["Data Science"],
    githubLink: "https://www.kaggle.com/code/awwdudee/baseline-submission"


  },
  
  {
    id: 7,
    img: "https://blog.ml.cmu.edu/wp-content/uploads/2022/09/fimage-970x555.png",
    title: "Productivity Recommender System for University students",
    subtitle: "Content Based filtering",
    players: [
        { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_q6kVLI7gOc3eO6gvOf4IbzutGns_p75L9wsNX4RIgb-DQ6ZDV43cJUZRNQAM5T3jpM&usqp=CAU" },
        { image: "https://icon.icepanel.io/Technology/svg/NumPy.svg" },
        { image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"},
        { image: "https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png"}
    ],
    actionLabel: "Open Link",
    category: ["Data Science"],
    githubLink: "https://github.com/avdhoot0303/productivity-recommendation-system-for-students"


  },
  {
    id: 8,
    img: "https://miro.medium.com/v2/resize:fit:760/1*R239C4L_JF4smKC_vwuprw.png",
    title: "Spotify Music Metadata Analysis",
    subtitle: "Defining the features of a genre",
    players: [
        { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_q6kVLI7gOc3eO6gvOf4IbzutGns_p75L9wsNX4RIgb-DQ6ZDV43cJUZRNQAM5T3jpM&usqp=CAU" },
        { image: "https://icon.icepanel.io/Technology/svg/NumPy.svg" },
        { image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"},
        { image: "https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png"}

    ],
    actionLabel: "Open Link",
    category: ["Machine Learning, Data Science"],
    githubLink: "https://github.com/avdhoot0303/spotify-music-data-analysis"


  },
  {
    id: 9,
    img: "https://rmi.org/wp-content/uploads/2019/09/Screen-Shot-2019-09-03-at-4.41.54-PM.png",
    title: "Weather-Driven EV Charging Optimization",
    subtitle: "Exploratory Data Analysis",
    players: [
        { image: "https://icon.icepanel.io/Technology/svg/Python.svg" },
        { image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"},
        { image: "https://icon.icepanel.io/Technology/svg/Kaggle.svg"},
        { image: "https://icon.icepanel.io/Technology/svg/NumPy.svg" },


    ],
    actionLabel: "Open Link",
    category: ["Data Science"],
    githubLink: ""


  },
  
];

const categories = ["All", "Machine Learning", "Data Science", "DevOps", "Backend"]; // Define categories

const WorkSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6); // Number of projects to display initially
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3); // Load more projects
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) =>
        project.category?.includes(selectedCategory)
      );

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Filters Section */}
      <div className="flex gap-4 justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full ${
              selectedCategory === category
                ? "bg-yellow-500 text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Section with Animation */}
      <div className="grid grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.2,
                delay: index * 0.1,
              }}
            >
              <WorkCard
                key={project.id}
                img={project.img}
                title={project.title}
                subtitle={project.subtitle}
                players={project.players}
                actionLabel={project.actionLabel}
                githubLink={project.githubLink}
                onClick={() => window.open("#", "_blank")}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition-all"
            onClick={handleLoadMore}
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default WorkSection;