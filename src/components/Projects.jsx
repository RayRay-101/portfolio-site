import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

// Mock data to simulate API responses
const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "Tech Startup Branding",
    category: "Branding",
    description: "Complete brand identity design for an AI startup including logo, colors, and guidelines.",
    imageUrl: "/api/placeholder/600/400",
    tags: ["Adobe Illustrator", "Photoshop", "Brand Strategy"]
  },
  
  {
    id: 2,
    title: "Educational Platform",
    category: "Web",
    description: "Online learning platform with interactive courses and progress tracking.",
    imageUrl: "/api/placeholder/600/400",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"]
  }
];

const PROJECT_DETAIL = {
  id: 1,
  title: "E-commerce Dashboard",
  category: "Web Development",
  client: "RetailTech Inc.",
  completionDate: "August 2024",
  description: "A comprehensive dashboard solution for e-commerce businesses to track sales, inventory, customer behaviors, and marketing campaign performance in real-time.",
  longDescription: `This project involved creating a sophisticated analytics dashboard for e-commerce businesses that needed better insights into their operations. The dashboard provides real-time data visualization and reporting tools that help businesses make informed decisions.

  The main challenges included processing large volumes of data efficiently, creating intuitive visualizations that communicate complex metrics clearly, and ensuring the entire system updates in real-time without performance issues.
  
  We implemented a modular architecture using React for the frontend and Firebase for real-time data synchronization. Chart.js was used to create interactive and responsive charts that adjust based on the user's device screen size.`,
  imageUrl: "/api/placeholder/1200/600",
  gallery: [
    "/api/placeholder/800/500",
    "/api/placeholder/800/500",
    "/api/placeholder/800/500",
    "/api/placeholder/800/500"
  ],
  technologies: ["React", "Redux", "Chart.js", "Firebase", "Node.js", "Express", "Material UI"],
  features: [
    "Real-time sales monitoring dashboard",
    "Inventory management system",
    "Customer behavior analytics",
    "Marketing campaign performance tracking",
    "Customizable reporting tools",
    "Mobile-responsive design"
  ],
  demoLink: "https://example.com/demo",
  githubLink: "https://github.com/example/project",
  testimonial: {
    quote: "The dashboard transformed how we operate our online store. We can now make data-driven decisions much faster than before.",
    author: "Jane Smith",
    position: "CTO at RetailTech Inc."
  }
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
          <h2>Our Projects</h2>
          <p>Explore our latest work and creative solutions</p>
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

const ProjectGallery = ({ gallery }) => (
  <div className="project-gallery">
    <h2>Project Gallery</h2>
    <div className="gallery-grid">
      {gallery.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Project view ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

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
            
            <ProjectGallery gallery={project.gallery} />
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