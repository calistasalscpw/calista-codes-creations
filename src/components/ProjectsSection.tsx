import { Github, ExternalLink, Calendar, User, Zap, Brain, Palette, Code2 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Academic Service Chatbot Prototypes",
      role: "Machine Learning Developer",
      period: "March 2025 - June 2025",
      description: "Engineered an advanced NLP pipeline using LSTM networks, performed comprehensive data augmentation, and developed a responsive Flask web interface for academic service automation.",
      technologies: ["LSTM", "NLP", "Python", "Flask", "Data Augmentation"],
      icon: Brain,
      gradient: "from-purple-500 to-blue-500",
      category: "Machine Learning"
    },
    {
      title: "Selena - Seller Financial Tracking App",
      role: "Machine Learning Cohort in Bangkit Academy",
      period: "Nov 2024 - Dec 2024",
      description: "Conducted extensive exploratory data analysis and built a sophisticated anomaly detection model using Autoencoder architecture. Collaborated closely with cloud computing team for seamless integration.",
      technologies: ["Autoencoder", "Python", "Cloud Computing", "Data Analysis", "TensorFlow"],
      githubUrl: "https://github.com/itsmaul/Selena-App",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      category: "Machine Learning"
    },
    {
      title: "Masakuy - Recipe Website",
      role: "Full Stack Developer",
      period: "March 2024 - May 2024",
      description: "Led the complete project lifecycle from initial UI/UX design in Figma to full-stack development implementation using modern web technologies and database management.",
      technologies: ["Figma", "HTML", "CSS", "PHP", "MySQL", "Full Stack"],
      githubUrl: "https://github.com/calistasalscpw/Web-Resep-Makanan",
      icon: Code2,
      gradient: "from-green-500 to-teal-500",
      category: "Full Stack"
    },
    {
      title: "Health Monitoring Application",
      role: "UI/UX Designer",
      period: "March 2022 - May 2022",
      description: "Led the comprehensive end-to-end design process, creating detailed user personas, user journey maps, wireframes, and high-fidelity interactive prototypes in Figma.",
      technologies: ["Figma", "UI/UX Design", "User Research", "Prototyping", "User Testing"],
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      category: "UI/UX Design"
    }
  ];

  const roleIcons = {
    "Machine Learning Developer": Brain,
    "Machine Learning Cohort in Bangkit Academy": Brain,
    "Full Stack Developer": Code2,
    "UI/UX Designer": Palette
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across Machine Learning, Full Stack Development, and UI/UX Design
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card-hover bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Project Icon & Category */}
                <div className="lg:col-span-1">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${project.gradient} mb-4`}>
                    <project.icon size={32} className="text-white" />
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User size={16} />
                      <span className="text-sm">{project.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-smooth"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                    {/* <button className="flex items-center gap-2 px-4 py-2 border border-purple-300 text-purple-600 rounded-lg hover:bg-purple-50 transition-smooth">
                      <ExternalLink size={16} />
                      Learn More
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;