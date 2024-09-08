"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Dept Segmentation",
    subtitle: "Machine Learning",
    description: "A machine learning project for customer segmentation in retail.",
    image: "/images/projects/dept-segmentation.jpg",
    link: "https://github.com/prxshetty/dept-segmentation",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
  },
  {
    title: "Resume Chatbot",
    subtitle: "Natural Language Processing",
    description: "LLM Chatbot using Supabase for vectoreStore, OpenAI API for embeddings with adjusted chunk size and overlaps for Resumes.",
    image: "/images/projects/llm-chatbot.png",
    link: "https://github.com/prxshetty/resume-chatbot",
    technologies: ["Python", "OpenAI API", "Supabase", "LangChain"]
  },
  {
    title: "Large Language Model",
    subtitle: "Deep Learning",
    description: "A machine learning project to build a large language model from scratch, inspired by Karpathy&apos;s nn.",
    image: "/images/projects/llm-scratch.jpg",
    link: "https://github.com/prxshetty/karpathy-nn",
    technologies: ["Python", "PyTorch", "Neural Networks"]
  },
  {
    title: "AutoMail AI",
    subtitle: "Natural Language Processing",
    description: "An AI-powered email automation system using natural language processing.",
    image: "/images/projects/automail_ai.png",
    link: "https://github.com/prxshetty/automail-ai",
    technologies: ["Python", "NLP", "TensorFlow", "Flask"]
  },
  {
    title: "Image Enhancement with OpenCV DNN",
    subtitle: "Computer Vision",
    description: "Mini Python code for image super resolution using DNN in OpenCV, trying out LapSRN and EDSR.",
    image: "/images/projects/image_enhance.png",
    link: "https://github.com/prxshetty/Super-Resolution",
    technologies: ["Python", "OpenCV", "CUDA"]
  },
  {
    title: "NBA Influence Predictor",
    subtitle: "Data Analysis",
    description: "Python & R project predicting NBA player & team valuations based on various factors.",
    image: "/images/projects/nba_predictor.png",
    link: "https://github.com/prxshetty/NBAInfluencePredictor",
    technologies: ["Python", "R", "pandas", "statsmodels", "matplotlib"]
  },
  {
    title: "NYC Parks Eventful Mongoers",
    subtitle: "Web Development",
    description: "Web app that discovers NYC Parks events via text & map search using Python, Flask, Node.js, and MongoDB.",
    image: "/images/projects/nyc_parks.jpg",
    link: "https://github.com/prxshetty/mongo-project-eventfulmongoers",
    technologies: ["Python", "Flask", "Node.js", "MongoDB", "Mapbox"]
  }
];

const blogs = [
  {
    title: "Optimizing Data Processing with ORC, Parquet & Avro",
    description: "A comprehensive guide to efficient data storage formats.",
    link: "https://medium.com/@prxshetty/optimizing-data-processing-with-orc-parquet-avro-6814a35d81af",
    image: "/images/blogs/data_preprocess.webp"
  },
  {
    title: "AWS S3 Pre-Signed URLs Made Simple",
    description: "Allowing direct uploads to Amazon S3 buckets without using pre-signed URLs is a security risk and demonstrates a lack of experience in cloud storage best practices.",
    link: "https://medium.com/@prxshetty/aws-s3-pre-signed-urls-made-simple-01b3a87f357c",
    image: "/images/blogs/aws-s3.webp"
  },
  {
    title: "ReLU: A Short Overview on the Most Popular Activation Function",
    description: "Understanding the Rectified Linear Unit (ReLU) activation function.",
    link: "https://medium.com/@prxshetty/relu-a-short-overview-on-the-most-popular-activation-function-36d70af84808",
    image: "/images/blogs/relu_info.gif"
  }
];

const academics = [
  {
    degree: "Masters of Science, Data Science",
    institution: "Rochester Institute of Technology, NY",
    year: "2023 - Present",
    gpa: "3.93 (SEM 2)",
    link: "https://www.rit.edu/"
  },
  {
    degree: "Post Graduation Diploma, Data Science",
    institution: "Symbiosis Skills and Professional University, Pune",
    year: "2022 - 2023",
    gpa: "3.828",
    link: "https://sspu.ac.in/"
  },
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "K K Wagh Computer Science College, Nashik",
    year: "2019 - 2022",
    gpa: "3.736",
    link: "https://kkwagh.edu.in/"
  },
  {
    degree: "Higher Secondary, STEM",
    institution: "Matoshri College of Engineering & Research Centre, Nashik",
    year: "2017 - 2019",
    link: "https://engg.matoshri.edu.in/"
  },
  {
    degree: "High School, STEM",
    institution: "Podar International School, Nashik",
    year: "2007 - 2017",
    link: "https://www.podareducation.org/"
  }
];

const experiences = [
  {
    title: "ML Engineer Intern",
    company: "Marva.ai",
    duration: "June 2023 - Aug 2023",
    description: "Improved stock prediction and buy/sell signal reliability using AI/ML models, Ichimoku Cloud strategies, and NLP sentiment analysis.",
    skills: ["LSTM", "FinBERT", "TensorFlow", "AWS Sagemaker", "Docker", "Jenkins", "JIRA"]
  },
  {
    title: "ML Research Intern",
    company: "Knowledge Solutions India",
    duration: "Sept 2021 - Nov 2021",
    description: "Developed and optimized ML pipelines for insurance claims prediction, improving data quality, reducing errors, and enhancing processing speed.",
    skills: ["PySpark", "PowerBI", "XGBoost", "Random Forest", "SQL"]
  },
  {
    title: "Sales Intern",
    company: "Laugh Out Loud Ventures Pvt Ltd",
    duration: "Feb 2020 - March 2020",
    description: "Led sales strategies and digital marketing campaigns during the pandemic, increasing education course sales.",
    skills: ["Google Analytics", "CRM software", "Google Ads", "Facebook Ads", "SEO tools", "Email software"]
  }
];

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [blogIndex, setBlogIndex] = useState(0);

  const nextProjects = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % (projects.length - 2));
  };

  const prevProjects = () => {
    setProjectIndex((prevIndex) => (prevIndex - 1 + projects.length - 2) % (projects.length - 2));
  };

  const nextBlogs = () => {
    setBlogIndex((prevIndex) => (prevIndex + 1) % (blogs.length - 2));
  };

  const prevBlogs = () => {
    setBlogIndex((prevIndex) => (prevIndex - 1 + blogs.length - 2) % (blogs.length - 2));
  };

  useEffect(() => {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
      projectsContainer.style.transition = 'transform 0.5s ease-in-out';
      projectsContainer.style.transform = `translateX(-${projectIndex * 33.33}%)`;
    }
  }, [projectIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Thin strip at the top */}
      <div className="h-1 bg-[#592be2] w-full"></div>
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 pl-8">
          <div className="sticky top-8">
            <div className="w-32 h-32 mx-auto mb-3 overflow-hidden rounded-full">
              <Image
                src="/images/profile.jpg"
                alt="Pranam Prakash Shetty"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-2xl font-bold mb-1 text-center">Pranam Prakash Shetty</h1>
            <p className="text-lg font-semibold text-gray-700 mb-1 text-center">Student at RIT</p>
            <p className="text-gray-600 mb-2 text-sm text-center">
              <i className="fas fa-map-marker-alt mr-2"></i>Rochester, NY
            </p>
            <div className="flex justify-center space-x-3 mb-3">
              <a href="https://twitter.com/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#592be2]">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.kaggle.com/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#592be2]">
                <i className="fab fa-kaggle text-xl"></i>
              </a>
              <a href="mailto:prxshetty@gmail.com" className="text-gray-700 hover:text-[#592be2]">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#592be2]">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#592be2]">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
            <div className="text-center mb-6">
              <a 
                href="/docs/PranamShettyF_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#592be2] hover:text-[#4a24b8] font-semibold text-sm inline-flex items-center"
              >
                <i className="far fa-file-alt mr-2"></i> Resume
              </a>
            </div>
            <h3 className="font-semibold mb-2 text-center">About</h3>
            <p className="text-sm text-gray-600 mb-6 px-4">
              I'm a Data science graduate at RIT. I love neural architectures. 
              When I'm not coding, you'll find me enjoying coffee and chess.
              Whether you have a project in mind or just want to chat about the latest in tech, feel free to reach out.
            </p>
            <h3 className="font-semibold mb-2 text-center">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center px-4">
              {["Python", "SQL", "JavaScript", "Node.js", "Docker"].map((skill) => (
                <span key={skill} className="bg-[#592be2]/10 text-[#592be2] px-3 py-1 rounded-full text-xs font-normal">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="w-3/4 pl-8 pr-8 bg-white">
          <div className="rounded-lg p-6">
            <section className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-left">Projects</h2>
                {projects.length > 3 && (
                  <div className="flex space-x-2">
                    <button onClick={prevProjects} className="text-[#592be2] hover:text-[#4a24b8]">
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={nextProjects} className="text-[#592be2] hover:text-[#4a24b8]">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                )}
              </div>
              <div className="overflow-hidden">
                <div id="projects-container" className="flex transition-transform duration-500 ease-in-out" style={{width: `${projects.length * 33.33}%`}}>
                  {projects.map((project, index) => (
                    <div key={index} className="w-1/3 px-3">
                      <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="p-4 flex-grow flex flex-col">
                          <p className="text-[#592be2] text-sm font-semibold mb-1">{project.subtitle}</p>
                          <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-[#592be2]/10 text-[#592be2] px-2 py-1 rounded-full text-xs font-normal">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-600 text-sm mb-3 flex-grow">{project.description}</p>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#592be2] hover:text-[#4a24b8] mt-auto inline-flex items-center">
                            Read more <span className="ml-1">&#8594;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-left">Blog Posts</h2>
                {blogs.length > 3 && (
                  <div className="flex space-x-2">
                    <button onClick={prevBlogs} className="text-[#592be2] hover:text-[#4a24b8]">
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={nextBlogs} className="text-[#592be2] hover:text-[#4a24b8]">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.slice(blogIndex, blogIndex + 3).map((blog, index) => (
                  <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm flex-grow">{blog.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-left">Academic Journey</h2>
              <div className="space-y-4">
                {academics.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-lg text-[#592be2]">{item.degree}</h3>
                    <p className="text-gray-700">{item.institution}</p>
                    <p className="text-gray-600 text-sm">{item.year}</p>
                    {item.gpa && <p className="text-gray-600 text-sm">GPA: {item.gpa}</p>}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-left">Experience</h2>
              <div className="space-y-4">
                {experiences.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-lg text-[#592be2]">{item.title}</h3>
                    <p className="text-gray-700">{item.company}</p>
                    <p className="text-gray-600 text-sm">{item.duration}</p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-[#592be2]/10 text-[#592be2] px-2 py-1 rounded-full text-xs font-normal">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
