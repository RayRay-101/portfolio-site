import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import food from "../assets/food.jpeg"
import food1 from "../assets/food1.jpeg"
import chatapp from "../assets/chatapp.jpeg"
import chatapp1 from "../assets/chatapp1.jpeg"

// Mock data to simulate API responses
const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "Online Chat Platform",
    category: "Web",
    description: "This real-time chat application is web-based with media sharing, emoji integration and efficient backend. A fully responsive real-time chat application using the MERN stack, enabling seamless communication.",
    imageUrl:<img src={chatapp} alt="Chat Application" />,
    tags: ["NodeJS", "ReactJS", "Backend", "Database", "MERN"]
  },
  
  // {
  //   id: 2,
  //   title: "D-Blinks Food Delivery",
  //   category: "Web",
  //   description: "A food delivery app that connects individuals to best restaurants and eateries nearby. Food is also delivered with a blink of an eye",
  //   imageUrl: <img src={food} alt="food delivery" />,
  //   tags: ["Backend", "HTML", "CSS", "MongoDB"]
  // }
];

const PROJECT_DETAIL = 
{
  id: 1,
  title: "Online Chat Platform",
  category: "Web Development",
  client: "Final Year Inc.",
  completionDate: "July 2024",
  description: "This chat application is a modern, real-time messaging platform built with ReactJS, ExpressJS, NodeJS, Socket.IO, and MongoDB Atlas.",
  longDescription: ` It features instant messaging, contact management, and image handling with MongoDB's GridFS. The app provides seamless communication with live message updates, efficient image storage and retrieval, and a user-friendly interface. The frontend is deployed on Vercel, while the backend is hosted on Render, ensuring scalability and reliable performance.
  
  
  We implemented a modular architecture using React for the frontend and Web-sockets(socket-io) for real-time data synchronization. `,
  imageUrl: <img src={chatapp} loading="lazy" fetchpriority="high" alt="Chat Application" />,
  // gallery: [
  //   "/api/placeholder/800/500",
  //   "/api/placeholder/800/500"
  // ],
  technologies: ["React", "Redux", "MongoDB", "Node.js", "Express", "Material UI"],
  features: [
    "Instant Messaging: Real-time chat with live message updates",
    "Contact Management: Easily manage and update contacts with the latest message display",
    "Image Handling: Upload, retrieve, and display images using MongoDB GridFS",
    "Emoji Picker: Add emojis to your messages with an integrated emoji picker",
    "Cross-Platform: Seamless usage across devices —desktop, and tablet"
  ],
  demoLink: "https://chat-app-plum-nu.vercel.app/",
  githubLink: "https://github.com/RayRay-101/Chat-app",
  testimonial: {
    quote: "The realtime communication helped our business partners to achieve smooth interactive communication.",
    author: "Kwame Smith",
    position: "CEO at Final Year Inc."
  },

  // id: 2,
  // title: "D-BLINKS Food Delivery",
  // category: "Web Development",
  // client: "School Project",
  // completionDate: "September 2024",
  // description: "Developed a food delivery app in a group project as the team leader, integrating key features like restaurant selection, order tracking, and real-time delivery updates.",
  
  // imageUrl: <img src={food} loading="lazy" fetchpriority="high" alt="Chat Application" />,
  // // gallery: [
  // //   "/api/placeholder/800/500",
  // //   "/api/placeholder/800/500"
  // // ],
  // technologies: ["React", "Redux", "Javascript", "Node.js", "Express", "MongoDB"],
  // features: [
  //   "Instant Messaging: Real-time chat with live message updates",
  //   "Contact Management: Easily manage and update contacts with the latest message display",
  //   "Image Handling: Upload, retrieve, and display images using MongoDB GridFS",
  //   "Emoji Picker: Add emojis to your messages with an integrated emoji picker",
  //   "Cross-Platform: Seamless usage across devices —desktop, and tablet"
  // ],
  // demoLink: "#",
  // githubLink: "#",
  // testimonial: {
  //   quote: "The realtime communication helped our business partners to achieve smooth interactive communication.",
  //   author: "Kwame Smith",
  //   position: "Team Lead"
  // }
};

const CATEGORIES = ['All', 'Web', 'UI/UX'];

// ProjectCard Component
const ProjectCard = ({ project, onProjectSelect }) => (
  <div 
    className="project-card"
    onClick={() => onProjectSelect(project.id)}
  >
    <div className="project-image-container">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-overlay">
        <button className="view-project-btn">View Project</button>
      </div>
    </div>
    <div className="project-info">
      <h3>{project.title}</h3>
      <p className="project-category">{project.category}</p>
      <p className="project-description">{project.description}</p>
    </div>
    <div className="project-tags">
      {project.tags.map((tag, idx) => (
        <span key={idx} className="project-tag">{tag}</span>
      ))}
    </div>
  </div>
);

// FilterTabs Component
const FilterTabs = ({ activeFilter, categories, onFilterChange }) => (
  <div className="filter-tabs">
    {categories.map((category, index) => (
      <button
        key={index}
        className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
        onClick={() => onFilterChange(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

// ProjectSection Component
const ProjectSection = ({ onProjectSelect }) => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
    // Simulate API call with timeout
    const fetchProjects = async () => {
      try {
        // In a real app, this would be replaced with an actual API call
        setTimeout(() => setProjects(DUMMY_PROJECTS), 300);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    
    fetchProjects();
  }, []);
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section className="project-section">
      <div className="container">
        <div className="section-header">
          {/* <h2>Our Projects</h2> */}
          <p>Explore my latest work and creative solutions</p>
        </div>
        
        <FilterTabs 
          activeFilter={filter} 
          categories={CATEGORIES} 
          onFilterChange={setFilter} 
        />
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onProjectSelect={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Details Components
const ProjectDetailHeader = ({ project, onBackClick }) => (
  <>
    <div className="hero-section">
      <img src={project.imageUrl} alt={project.title} className="hero-image" />
      <div className="overlay">
        <div className="container">
          <h1>{project.title}</h1>
          <p className="project-category-label">{project.category}</p>
        </div>
      </div>
    </div>
    
    <div className="container">
      <div className="back-button" onClick={onBackClick}>
        <span className="arrow-left">←</span>
        <span>Back to Projects</span>
      </div>
    </div>
  </>
);

const ProjectOverview = ({ description, longDescription }) => (
  <div className="project-overview">
    <h2>Project Overview</h2>
    <p>{description}</p>
    <div 
      className="content-block" 
      dangerouslySetInnerHTML={{ 
        __html: longDescription.replace(/\n/g, '<br/>') 
      }}
    />
  </div>
);

// const ProjectGallery = ({ gallery }) => (
//   <div className="project-gallery">
//     <h2>Project Gallery</h2>
//     <div className="gallery-grid">
//       {gallery.map((image, index) => (
//         <div key={index} className="gallery-item">
//           <img src={image} alt={`Project view ${index + 1}`} />
//         </div>
//       ))}
//     </div>
//   </div>
// );

const ProjectFeatures = ({ features }) => (
  <div className="project-features">
    <h2>Key Features</h2>
    <ul className="features-list">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const Testimonial = ({ testimonial }) => (
  <div className="testimonial">
    <div className="quote-mark">"</div>
    <p className="quote-text">{testimonial.quote}</p>
    <div className="testimonial-author">
      <p className="author-name">{testimonial.author}</p>
      <p className="author-position">{testimonial.position}</p>
    </div>
  </div>
);

const ProjectSidebar = ({ project }) => (
  <div className="project-sidebar">
    <div className="sidebar-card">
      <h3>Project Details</h3>
      
      <div className="detail-item">
        <span className="detail-label">Client:</span>
        <span className="detail-value">{project.client}</span>
      </div>
      
      <div className="detail-item">
        <span className="detail-label">Completed:</span>
        <span className="detail-value">{project.completionDate}</span>
      </div>
      
      <div className="detail-item">
        <span className="detail-label">Category:</span>
        <span className="detail-value">{project.category}</span>
      </div>
      
      <div className="buttons-container">
        {project.demoLink && (
          <a 
            href={project.demoLink} 
            className="demo-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">↗</span>
            <span>Live Demo</span>
          </a>
        )}
        
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            className="github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">⌂</span>
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
    
    <div className="sidebar-card">
      <h3>Technologies</h3>
      <div className="technologies-container">
        {project.technologies.map((tech, index) => (
          <span key={index} className="technology-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Loading and Error Components
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading project details...</p>
  </div>
);

const ErrorMessage = () => (
  <div className="error-message">Project not found</div>
);

// ProjectDetailPage Component
const ProjectDetailPage = ({ projectId, onBackClick }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch project details
    const fetchProjectDetails = async () => {
      try {
        // In a real app, this would fetch specific project data using projectId
        setTimeout(() => {
          // Here we're just using the same mock data for simplicity
          setProject({...PROJECT_DETAIL, id: projectId});
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching project details:", error);
        setLoading(false);
      }
    };
    
    fetchProjectDetails();
  }, [projectId]);
  
  if (loading) return <LoadingSpinner />;
  if (!project) return <ErrorMessage />;
  
  return (
    <div className="project-detail-page">
      <ProjectDetailHeader project={project} onBackClick={onBackClick} />
      
      <div className="container">
        <div className="project-content">
          <div className="main-content">
            <ProjectOverview 
              description={project.description} 
              longDescription={project.longDescription} 
            />
            
            {/* <ProjectGallery gallery={project.gallery} /> */}
            <ProjectFeatures features={project.features} />
            
            {project.testimonial && <Testimonial testimonial={project.testimonial} />}
          </div>
          
          <ProjectSidebar project={project} />
        </div>
      </div>
    </div>
  );
};

// Main App Component to handle routing between sections
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    window.scrollTo(0, 0);
  };
  
  const handleBackClick = () => {
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="project-app">
      {selectedProject ? (
        <ProjectDetailPage 
          projectId={selectedProject} 
          onBackClick={handleBackClick} 
        />
      ) : (
        <ProjectSection onProjectSelect={handleProjectSelect} />
      )}
    </div>
  );
};

export default Projects;