"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tooltip } from 'react-tooltip';
import { Roboto_Mono } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faKaggle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faKaggle, faLinkedin, faGithub, faFileAlt, faChevronLeft, faChevronRight);

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['300'] });

const projects = [
  {
    title: "JobTrail",
    subtitle: "Web Development",
    description: "Job Trail is a Chrome extension that automatically categorizes Gmail emails related to job applications based on their content",
    image: "/images/projects/jobtrail.png",
    link: "https://github.com/prxshetty/jobtrail",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Fonts"]
  },
  {
    title: "Depth Segmentation",
    subtitle: "Computer Vision",
    description: "Trying out Intel's MiDaS Model with greyscale and Upscaler for better results",
    image: "/images/projects/depth-seg.png",
    link: "https://github.com/prxshetty/midas-depthseg",
    technologies: ["MiDaS", "PyTorch", "Scikit-image", "CUDA"]
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
    description: "A machine learning project to build a large language model from scratch, inspired by Karpathy's nn.",
    image: "/images/projects/llm-scratch.jpg",
    link: "https://github.com/prxshetty/karpathy-nn",
    technologies: ["Python", "PyTorch", "Neural Networks", "Statistics"]
  },
  {
    title: "AutoMail AI",
    subtitle: "Natural Language Processing",
    description: "An AI-powered email automation system using NLP, DocTran, API.",
    image: "/images/projects/automail_ai.png",
    link: "https://github.com/prxshetty/automail-ai",
    technologies: ["Python", "NLP", "TensorFlow", "Flask", "OpenAI API","DocTran"]
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
  },
];

const blogs = [
  {
    title: "Want to Master Open-Source LLMs in 2025? Start with DeepSeek V3",
    description: "Meet DeepSeek V3 — the AI powerhouse that's turning heads in Silicon Valley with its jaw-dropping 671B parameters (but here's the twist…",
    link: "https://medium.com/@prxshetty/want-to-master-open-source-llms-in-2025-start-with-deepseek-v3-f485d45a6387",
    image: "/images/blogs/deepseek.webp",
    date: "Jan 5, 2025",
  },
  {
    title: "AI Benchmarks: Are we measuring the right thing?",
    description: "What if the yardstick we're using to measure these achievements is flawed? What if the very way we test AI is skewing our perception of its…",
    link: "https://medium.com/@prxshetty/ai-benchmarks-are-we-measuring-the-right-thing-1b601fcc0e4e",
    image: "/images/blogs/benchmark.webp",
    date: "Jan 1, 2025",
  },
  {
    title: "Forget SQL Headaches: Learn How to Convert schemas to a Graph Database Today",
    description: "Transitioning from a relational database model to a graph database can feel like navigating uncharted territory, especially if you're…",
    link: "https://medium.com/@prxshetty/forget-sql-headaches-learn-how-to-convert-schemas-to-a-graph-database-today-b78c144716ec",
    image: "/images/blogs/graphql.webp",
    date: "Dec 4, 2024",
  },
  {
    title: "Claude can now use computers….",
    description: "What if your AI assistant could navigate a computer just like you do? With Anthropic's latest update, Claude 3.5 Sonnet can now interact…",
    link: "https://medium.com/@prxshetty/claude-can-now-use-computers-9b056d1e0e8b",
    image: "/images/blogs/computeruse.png",
    date: "Dec 3, 2024",
  },
  {
    title: "Survey of Activation Functions and Initialization Methods",
    description: "Start of a series where I summarize research papers in a way that's quick and easy to digest.",
    link: "https://medium.com/@prxshetty/paper-analysis-01-a-survey-on-activation-functions-and-their-relation-with-xavier-and-he-normal-01a64dff5c16",
    image: "/images/blogs/research-01.png",
    date: "Sep 9, 2024",
  },  
  {
    title: "AWS S3 Pre-Signed URLs Made Simple",
    description: "Allowing direct uploads to Amazon S3 buckets without using pre-signed URLs is a security risk and demonstrates a lack of experience in cloud storage best practices.",
    link: "https://medium.com/@prxshetty/aws-s3-pre-signed-urls-made-simple-01b3a87f357c",
    image: "/images/blogs/aws-s3.webp",
    date: "Apr 12, 2024",
  },
  {
    title: "Optimizing Data Processing with ORC, Parquet & Avro",
    description: "A comprehensive guide to efficient data storage formats.",
    link: "https://medium.com/@prxshetty/optimizing-data-processing-with-orc-parquet-avro-6814a35d81af",
    image: "/images/blogs/data_preprocess.webp",
    date: "Mar 16, 2024",
  },
  {
    title: "ReLU: A Short Overview on the Most Popular Activation Function",
    description: "Understanding the Rectified Linear Unit (ReLU) activation function.",
    link: "https://medium.com/@prxshetty/relu-a-short-overview-on-the-most-popular-activation-function-36d70af84808",
    image: "/images/blogs/relu_info.gif",
    date: "Apr 5, 2024",
  },
  {
    title: "Sora vs. Midjourney — The AI Struggle for Dominance",
    description: "Beyond unbelievable, what bothered me a bit about the OpenAI's Sora is that the quality of the video images is impressively superior to those generated by DALL-E.",
    link: "https://medium.com/@prxshetty/sora-vs-midjourney-the-ai-struggle-for-dominance-4a11744db7a6",
      image: "/images/blogs/sora.webp",
    date: "Feb 25, 2024",
  },
  {
    title: "OpenAI introduces Sora, its text-to-video AI model",
    description: "So, what's the deal with Sora? Well, imagine a world where you could simply type in a few words, hit enter, and voila! A stunning, photorealistic video pops out on your screen, bringing your imagination to life.",
    link: "https://medium.com/@prxshetty/openai-introduces-sora-its-text-to-video-ai-model-db0e0fd24462",
    image: "/images/blogs/sora.gif",
    date: "Feb 16, 2024",
  },
  {
    title: "I asked Questions to Goody-2, the World's 'Most Responsible' AI Chatbot",
    description: "AI safety is taken to the next level by a new chatbot named Goody-2. It declines all requests and explains why, along with the harm and ethical dilemmas, it might cause.",
    link: "https://medium.com/@prxshetty/i-asked-questions-to-goody-2-the-worlds-most-responsible-ai-chatbot-c26b715b7843",
    image: "/images/blogs/goody.webp",
    date: "Feb 13, 2024",
  }
];
const courses = [
  {
    title: "LLMs as Operating Systems: Agent Memory",
    platform: "DeepLearning.AI",
    instructor: "Letta",
    dateCompleted: "Jan 2025",
    description: "Build systems with MemGPT agents that can autonomously manage their memory.",
    image: "/images/courses/letta.png",
    link: "https://learn.deeplearning.ai/accomplishments/77059cac-a3c4-4a57-b637-b0512374407f",
    skills: ["Agents", "LLMOps", "Prompt Engineering", "RAG"]
  },
  {
    title: "How Diffusion Models Work",
    platform: "DeepLearning.AI",
    instructor: "Sharon Zhou",
    dateCompleted: "October 2024",
    description: "Learn and build diffusion models from the ground up, implement algorithms to speed up sampling.",
    image: "/images/courses/diffusion.png",
    link: "https://learn.deeplearning.ai/accomplishments/8b950f83-9126-449e-8e2c-90fa8d6dc3c5",
    skills: ["Diffusion Models", "GenAI Applications", "Deep Learning", "Generative Models"]
  },
  {
    title: "Introducing Multimodal Llama 3.2!",
    platform: "DeepLearning.AI",
    instructor: "Amit Sangani",
    dateCompleted: "October 2024",
    description: "Introducing new Llama 3.2 models to build AI applications with multimodality",
    image: "/images/courses/llama32.png",
    link: "https://learn.deeplearning.ai/accomplishments/751c6273-d073-4c78-804f-8834f04e8861",
    skills: ["Agents", "Chatbots", "Computer Vision", "Fine-tuning","Prompt Engineering"]
  },
  {
    title: "Retrieval Optimization: Tokenization to Vector Quantization!",
    platform: "DeepLearning.AI",
    instructor: "Qdrant",
    dateCompleted: "September 2024",
    description: "Build faster and more relevant vector search for your LLM applications",
    image: "/images/courses/qdrant.png",
    link: "https://learn.deeplearning.ai/accomplishments/e295027b-6b96-4911-b87a-5e2cef36c948",
    skills: ["AI Frameworks", "Agents", "RAGS", "Generative Models"]
  },
  {
    title: "Multi AI Agent Systems with crewAI!",
    platform: "DeepLearning.AI",
    instructor: "Joao Moura",
    dateCompleted: "September 2024",
    description: "Automated workflows with multi-AI agent systems. Designing and prompting a team of AI agents through natural language.",
    image: "/images/courses/crewai.png",
    link: "https://learn.deeplearning.ai/accomplishments/fc503da9-1377-435f-a42b-1e5c47ddaa6a?usp=sharing",
    skills: ["AI Frameworks", "Agents", "RAGS", "Task Automation"]
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    platform: "Oracle",
    instructor: "Oracle Cloud Infrastructure",
    dateCompleted: "July 2024",
    description: "strong understanding of the Large Language Models (LLMs) and are skilled at using OCI Generative AI Service.",
    image: "/images/courses/oracle.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5C2C44615B73F678DF85E44418348C3535ABCE032C9F7E82F196472434C80BCB",
    skills: ["LLMS", "OCI Generative AI Services", "RAGS"]
  }
];

const academics = [
  {
    degree: "Masters of Science, Data Science",
    institution: "Rochester Institute of Technology, NY",
    year: "2023 - 2025",
    gpa: "3.85 (SEM 4)",
    link: "https://www.rit.edu/",
    comment: "After completing my Masters, I would have developed a strong foundation in data science principles, software engineering, database design, and advanced analytics."
  },
  {
    degree: "Post Graduation Diploma, Data Science",
    institution: "Symbiosis Skills and Professional University, Pune",
    year: "2022 - 2023",
    gpa: "3.828",
    link: "https://sspu.ac.in/",
    comment: "This Diploma/Associate degree specialized in statistical modeling, vector mathematics, AI Ethics and predictive analytics."
  },
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "K K Wagh Computer Science College, Nashik",
    year: "2019 - 2022",
    gpa: "3.736",
    link: "https://kkwagh.edu.in/",
    comment: "Built a strong foundation in programming and algorithms with my very first programming course in C++. Taught DSA, Probability Statistics, Java, Web Development, DBMS, Operating Systems, Computer Networks, Software Engineering, etc."
  },
  {
    degree: "Higher Secondary, STEM",
    institution: "Matoshri College of Engineering & Research Centre, Nashik",
    year: "2017 - 2019",
    link: "https://engg.matoshri.edu.in/",
    comment: "Developed a passion for mathematics and physics."
  },
  {
    degree: "High School, STEM",
    institution: "Podar International School, Nashik",
    year: "2007 - 2017",
    link: "https://www.podareducation.org/",
    comment: "Cultivated curiosity and critical thinking skills."
  }
];

const experiences = [
  {
    title: "ML Engineer Intern",
    company: "Marva.ai",
    duration: "June 2023 - Aug 2023",
    description: "Pranam worked on financial stock prediction models, improving the accuracy of buy/sell signals using Ichimoku Cloud strategies and LSTM models. He applied NLP techniques with FinBERT for sentiment analysis, achieving a 15% increase in stock prediction accuracy. He also created real-time data visualizations using Plotly and Dash.",
    skills: ["LSTM", "FinBERT", "TensorFlow", "AWS Sagemaker", "Docker", "Jenkins", "JIRA"]
  },
  {
    title: "ML Research Intern",
    company: "Knowledge Solutions India",
    duration: "Sept 2021 - Nov 2021",
    description: "He developed an ML pipeline for insurance claim cost prediction, using regression models like XGBoost and Random Forest. Pranam optimized data processing with PySpark, reducing the processing time by 40%, and created dashboards in PowerBI for model visualization.",
    skills: ["PySpark", "PowerBI", "XGBoost", "Random Forest", "SQL"]
  },
  {
    title: "Sales Intern",
    company: "Laugh Out Loud Ventures Pvt Ltd",
    duration: "Feb 2020 - March 2020",
    description: "He led a sales team and shifted strategies to digital advertising during the pandemic, driving increased sales of educational courses through Google and Facebook Ads.",
    skills: ["Google Analytics", "CRM software", "Google Ads", "Facebook Ads", "SEO tools", "Email software"]
  }
];
const reviews = [
  {
    name: "Gurvansh Singh",
    role: "Senior Technology Mentor @ Athena Education, managed Pranam directly",
    review: "Pranam, KSI's Research intern, exceeded expectations with his skills in machine learning and data analysis on an insurance cost prediction project. His technical skills, work ethic, and adaptability made him a valuable asset to the team, and he has potential for success in any data-driven role.",
    avatar: "/images/review/gs.jpeg",
    linkedin: "https://www.linkedin.com/in/gurvansh-singh-6a0991112/" 
  },
  {
    name: "Ritesh Deshmukh",
    role: "Indira School of Business Studies, PGDM,  lead by Pranam directly",
    review: "Working with Pranam was a pleasure. His deep understanding of mysql and frontend technologies for our final project was impressive.",
    avatar: "/images/review/rd.jpeg",
    linkedin: "https://www.linkedin.com/in/ritesh-deshmukh-aa63321a7/"
  },
  {
    name: "Sudharshan Mahabal",
    role: "AI Solutions Leader, Ex-Silicon Valley, managed Pranam directly",
    review: "I highly recommend Pranam, a talented intern who demonstrated exceptional expertise in machine learning, model building, and MLOps deployment during his tenure at Marva.ai. His strong work ethic, knowledge of financial markets, and proficiency in ML and MLOps make him a valuable asset to any team.",
    avatar: "/images/review/sm.jpeg",
    linkedin: "https://www.linkedin.com/in/sudarshan-mahabal/" 
  }
];

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [blogIndex, setBlogIndex] = useState(0);
  const [reviewOffset, setReviewOffset] = useState(0);
  const [academicIndex, setAcademicIndex] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewOffset((prevOffset) => {
        const newOffset = prevOffset + 0.025;
        return newOffset >= reviews.length * 100 ? 0 : newOffset;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const nextProjects = () => {
    setProjectIndex((prevIndex) => Math.min(prevIndex + 1, projects.length - 3));
  };

  const prevProjects = () => {
    setProjectIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextBlogs = () => {
    setBlogIndex((prevIndex) => Math.min(prevIndex + 1, blogs.length - 3));
  };

  const prevBlogs = () => {
    setBlogIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextAcademic = () => {
    setAcademicIndex((prevIndex) => Math.min(prevIndex + 1, academics.length - 1));
  };

  const prevAcademic = () => {
    setAcademicIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextExperience = () => {
    setExperienceIndex((prevIndex) => Math.min(prevIndex + 1, experiences.length - 1));
  };

  const prevExperience = () => {
    setExperienceIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextCourses = () => {
    setCourseIndex((prevIndex) => Math.min(prevIndex + 1, courses.length - 3));
  };

  const prevCourses = () => {
    setCourseIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="min-h-screen bg-white bg-grid">
      <div className="h-1 bg-[#592be2] w-full"></div>
      
      <div className="flex flex-col lg:flex-row relative">
        <aside className="w-full lg:w-1/4 bg-gray-100/95 p-4 lg:pl-8 lg:pr-4 z-10 relative backdrop-blur-sm">
          <div className="lg:sticky lg:top-8">
            <div className="w-24 h-24 lg:w-32 lg:h-32 mb-3 overflow-hidden rounded-full mx-auto lg:mx-0">
              <Image
                src="/images/profile.jpg"
                alt="Pranam Prakash Shetty"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-xl lg:text-2xl font-semibold mb-1">Pranam Prakash Shetty</h1>
              <p className="text-md text-gray-700 mb-1">Student at RIT</p>
              <p className="text-gray-600 mb-4 text-sm">
                <i className="fas fa-map-marker-alt mr-1"></i>Rochester, NY
              </p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-3 mb-3 items-center">
              <a href="https://twitter.com/prxshetty" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-700 hover:text-[#592be2] transition-colors duration-200">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a href="https://www.kaggle.com/prxshetty" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-700 hover:text-[#592be2] transition-colors duration-200">
                <FontAwesomeIcon icon={faKaggle} className="text-xl" />
              </a>
              <a href="https://linkedin.com/in/prxshetty" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-700 hover:text-[#592be2] transition-colors duration-200">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a href="https://github.com/prxshetty" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-700 hover:text-[#592be2] transition-colors duration-200">
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a href="/docs/Pranam_ResumeF.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-700 hover:text-[#592be2] transition-colors duration-200"
                 aria-label="View Resume">
                <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
              </a>
              <a href="mailto:prxshetty@gmail.com" 
                 className="text-gray-700 border border-gray-700 px-3 py-1 rounded-full text-sm transition-colors duration-300 hover:border-[#592be2]">
                Email me
              </a>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-gray-600 mb-6">
                I'm a Data science graduate at RIT. I love neural architectures. 
                When I'm not coding, you'll find me enjoying coffee and chess.
                Whether you have a project in mind or just want to chat about the latest in tech, feel free to reach out.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-center lg:text-left">Skills</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {["Python", "SQL", "Deep Learning", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Data Visualization", "Git", "NLP", "Computer Vision", "GANs", "LLMs", "BERT", "GPT", "Transformers", "Hugging Face", "Reinforcement Learning"].map((skill) => (
                  <span key={skill} 
                        className="bg-[#592be2]/10 text-[#592be2] px-3 py-1 rounded-full text-xs font-normal">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full lg:w-3/4 p-4 lg:pl-8 lg:pr-8 bg-white/95 overflow-hidden backdrop-blur-sm">
          <div className="rounded-lg p-2 lg:p-6">
            <section className="mb-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${robotoMono.className} section-title`}>Projects</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevProjects} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${projectIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={projectIndex === 0}
                  >
                    <FontAwesomeIcon icon="chevron-left" className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextProjects} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${projectIndex === projects.length - 3 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={projectIndex === projects.length - 3}
                  >
                    <FontAwesomeIcon icon="chevron-right" className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="section-container flex flex-col lg:flex-row transition-all duration-300 ease-in-out" 
                   style={{ transform: `translateX(-${projectIndex * (isLargeScreen ? 33.33 : 100)}%)` }}>
                {projects.map((project, index) => (
                  <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-2 lg:px-3 mb-4 lg:mb-0">
                    <div className="content-tile h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading={index < 3 ? "eager" : "lazy"}
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                      />
                      <div className="p-6">
                        <p className="text-[#592be2] text-sm font-semibold mb-1">{project.subtitle}</p>
                        <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-[#592be2]/10 text-[#592be2] px-2 py-1 rounded-full text-xs font-normal">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#592be2] hover:text-[#4a24b8] inline-flex items-center text-sm font-medium"
                        >
                          View Project <span className="ml-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${robotoMono.className} section-title`}>Blog Posts</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevBlogs} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${blogIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={blogIndex === 0}
                  >
                    <FontAwesomeIcon icon="chevron-left" className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextBlogs} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${blogIndex === blogs.length - 3 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={blogIndex === blogs.length - 3}
                  >
                    <FontAwesomeIcon icon="chevron-right" className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="section-container flex transition-all duration-300 ease-in-out" style={{ transform: `translateX(-${blogIndex * 33.33}%)` }}>
                {blogs.map((blog, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-3">
                    <div className="content-tile h-full">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading={index < 3 ? "eager" : "lazy"}
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                      />
                      <div className="p-4 flex-grow flex flex-col">
                        <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                        <h3 className="font-medium text-lg mb-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm flex-grow">{blog.description}</p>
                        <a 
                          href={blog.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#592be2] hover:text-[#4a24b8] inline-flex items-center text-sm font-medium mt-4"
                        >
                          Read More <span className="ml-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${robotoMono.className} section-title`}>Courses</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevCourses} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${courseIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={courseIndex === 0}
                  >
                    <FontAwesomeIcon icon="chevron-left" className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextCourses} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${courseIndex === courses.length - 3 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={courseIndex === courses.length - 3}
                  >
                    <FontAwesomeIcon icon="chevron-right" className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="section-container flex transition-all duration-300 ease-in-out" style={{ transform: `translateX(-${courseIndex * 33.33}%)` }}>
                {courses.map((course, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-3">
                    <div className="content-tile h-full">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading={index < 3 ? "eager" : "lazy"}
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                      />
                      <div className="p-4 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-[#592be2] text-sm font-semibold">{course.platform}</p>
                          <p className="text-gray-500 text-sm">{course.dateCompleted}</p>
                        </div>
                        <h3 className="font-medium text-lg mb-2">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">Instructor: {course.instructor}</p>
                        <p className="text-gray-600 text-sm mb-3 flex-grow">{course.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-[#592be2]/10 text-[#592be2] px-2 py-1 rounded-full text-xs font-normal">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={course.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#592be2] hover:text-[#4a24b8] inline-flex items-center text-sm font-medium mt-4"
                        >
                          View Certificate <span className="ml-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${robotoMono.className} section-title`}>Academic Journey</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevAcademic} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${academicIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={academicIndex === 0}
                  >
                    <FontAwesomeIcon icon="chevron-left" className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextAcademic} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${academicIndex === academics.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={academicIndex === academics.length - 1}
                  >
                    <FontAwesomeIcon icon="chevron-right" className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="section-container flex transition-all duration-300 ease-in-out" style={{ transform: `translateX(-${academicIndex * 100}%)` }}>
                {academics.map((academic, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="content-tile p-6">
                      <p className="text-gray-600 text-sm mb-2">{academic.year}</p>
                      <h3 className="font-medium text-lg text-black">{academic.degree}</h3>
                      <p className="text-gray-700">{academic.institution}</p>
                      {academic.gpa && <p className="text-gray-600 text-sm">GPA: {academic.gpa}</p>}
                      <p className="text-gray-600 text-sm mt-2 italic">{academic.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${robotoMono.className} section-title`}>Experience</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevExperience} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${experienceIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={experienceIndex === 0}
                  >
                    <FontAwesomeIcon icon="chevron-left" className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextExperience} 
                    className={`text-[#592be2] hover:text-[#4a24b8] transition-opacity duration-300 ${experienceIndex === experiences.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={experienceIndex === experiences.length - 1}
                  >
                    <FontAwesomeIcon icon="chevron-right" className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="section-container flex transition-all duration-300 ease-in-out" style={{ transform: `translateX(-${experienceIndex * 100}%)` }}>
                {experiences.map((experience, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="content-tile p-6">
                      <p className="text-gray-600 text-sm mb-2">{experience.duration}</p>
                      <h3 className="font-medium text-lg text-black">{experience.title}</h3>
                      <p className="text-gray-700">{experience.company}</p>
                      <p className="text-gray-600 mt-2 italic">{experience.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-normal">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${robotoMono.className} section-title`}>What People Say</h2>
                <div className="flex items-center space-x-2">
                  <i 
                    className="fas fa-info-circle text-[#592be2] cursor-pointer" 
                    data-tooltip-id="review-info"
                    data-tooltip-content="These reviews are summarized from LinkedIn recommendations using a locally run Llama 3.1 8B model."
                  ></i>
                  <Tooltip id="review-info" />
                </div>
              </div>
              <div className="overflow-hidden">
                <div 
                  id="reviews-container" 
                  className="section-container flex transition-transform duration-500 ease-in-out" 
                  style={{
                    width: `${reviews.length * 100}%`,
                    transform: `translateX(-${reviewOffset}%)`,
                    transition: 'transform 0.05s linear'
                  }}
                >
                  {[...reviews, ...reviews].map((review, index) => (
                    <div key={index} className="w-1/2 px-3">
                      <div className="content-tile h-full">
                        <div className="p-6 relative">
                          <a 
                            href={review.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="absolute top-2 right-2 text-[#0077B5] hover:text-[#00669c] transition-colors duration-300"
                            aria-label={`LinkedIn profile of ${review.name}`}
                          >
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                          </a>
                          <div className="flex items-center mb-4">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              width={48}
                              height={48}
                              className="rounded-full mr-4"
                            />
                            <div>
                              <h3 className="font-medium text-lg">{review.name}</h3>
                              <p className="text-sm text-gray-600">{review.role}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 italic">&ldquo;{review.review}&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
