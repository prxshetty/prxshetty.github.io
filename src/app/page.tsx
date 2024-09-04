import Image from "next/image";
import Link from "next/link";

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
    description: "A machine learning project to build a large language model from scratch, inspired by Karpathy's nn.",
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
    image: "/images/projects/nba-predictor.jpg",
    link: "https://github.com/prxshetty/NBAInfluencePredictor",
    technologies: ["Python", "R", "pandas", "statsmodels", "matplotlib"]
  },
  {
    title: "NYC Parks Eventful Mongoers",
    subtitle: "Web Development",
    description: "Web app that discovers NYC Parks events via text & map search using Python, Flask, Node.js, and MongoDB.",
    image: "/images/projects/nyc-parks.jpg",
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
    title: "Data Science Intern",
    company: "Tata Consultancy Services",
    duration: "May 2023 - Aug 2023",
    description: "Developed ML models for predictive maintenance in manufacturing. Implemented data pipelines and visualization dashboards.",
    skills: ["Python", "TensorFlow", "Spark", "Tableau"]
  },
  {
    title: "Machine Learning Intern",
    company: "Persistent Systems",
    duration: "Jan 2023 - Apr 2023",
    description: "Worked on NLP projects, including sentiment analysis and text classification. Improved model accuracy by 15%.",
    skills: ["Python", "NLTK", "Scikit-learn", "Keras"]
  },
  {
    title: "Data Analyst Intern",
    company: "Infosys",
    duration: "Jun 2022 - Aug 2022",
    description: "Analyzed large datasets to identify trends and patterns. Created reports and visualizations for stakeholders.",
    skills: ["SQL", "Excel", "Power BI", "R"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-3 overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt="Pranam Prakash Shetty"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-bold mb-1">Pranam Prakash Shetty</h1>
          <p className="text-lg font-semibold text-gray-700 mb-1">Student at RIT</p>
          <p className="text-gray-600 mb-2 text-sm">
            <i className="fas fa-map-marker-alt mr-2"></i>Rochester, NY
          </p>
          <div className="flex justify-center space-x-3 mb-3">
            <a href="https://twitter.com/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.kaggle.com/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
              <i className="fab fa-kaggle text-xl"></i>
            </a>
            <a href="mailto:prxshetty@gmail.com" className="text-gray-700 hover:text-red-500">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://github.com/prxshetty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-3">
            Passionate data science student with experience in machine learning, deep learning, and data analysis. 
            Currently pursuing a Master's degree in Data Science at RIT, focusing on cutting-edge AI technologies and their practical applications.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Python", "SQL", "JavaScript", "Node.js", "Docker"].map((skill) => (
              <span key={skill} className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </header>

        <div className="bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-md p-6">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-left">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-blue-800 text-sm font-semibold mb-1">{project.subtitle}</p>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                        <i className="fab fa-github text-xl"></i>
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-left">Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                      <p className="text-gray-600 text-sm">{blog.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-left">Academic Journey & Experience</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
              {[...academics, ...experiences].sort((a, b) => {
                const getDate = (item: any) => new Date(item.year?.split(' - ')[1] || item.duration?.split(' - ')[1] || '');
                return getDate(b).getTime() - getDate(a).getTime();
              }).map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5 h-5 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10`}></div>
                  <div className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    {'degree' in item ? (
                      <>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          <h3 className="font-bold text-lg">{item.degree}</h3>
                          <p className="text-gray-600">{item.institution}</p>
                        </a>
                        <p className="text-gray-500">{item.year}</p>
                        {item.gpa && <p className="text-gray-500">GPA: {item.gpa}</p>}
                      </>
                    ) : (
                      <>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.company}</p>
                        <p className="text-gray-500">{item.duration}</p>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <footer className="text-center py-4 text-sm text-gray-500">
        © 2024 Pranam Prakash Shetty. All rights reserved.
      </footer>
    </div>
  );
}
