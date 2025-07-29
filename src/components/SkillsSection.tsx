import { Code2, Database, Wrench, Palette, Brain, MessageSquare, Globe, Clock } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Python", "C++", "Java", "JavaScript", "PHP"],
      level: 90
    },
    {
      category: "Frameworks & Libraries",
      icon: Wrench,
      gradient: "from-green-500 to-teal-500",
      skills: ["React", "Node.js", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas"],
      level: 85
    },
    {
      category: "Developer Tools",
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500",
      skills: ["Visual Studio Code", "Git", "Docker (basic)", "Google Colab", "Jupyter Notebook"],
      level: 88
    },
    {
      category: "Design & Prototyping",
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      skills: ["Figma", "Miro", "UI/UX Design", "Prototyping"],
      level: 92
    },
    {
      category: "Databases",
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      skills: ["MySQL", "Database Design", "Data Modeling"],
      level: 80
    },
    {
      category: "Machine Learning",
      icon: Brain,
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Data Analysis", "NLP", "Deep Learning", "Computer Vision"],
      level: 87
    }
  ];

  const softSkills = [
    { skill: "Communication", level: 95, icon: MessageSquare },
    { skill: "Problem-Solving", level: 93, icon: Brain },
    { skill: "Critical Thinking", level: 90, icon: Brain },
    { skill: "Adaptation", level: 92, icon: Globe },
    { skill: "Time Management", level: 88, icon: Clock },
    { skill: "Project Management", level: 85, icon: Wrench }
  ];

  const languages = [
    { language: "Indonesian", level: "Native", proficiency: 100 },
    { language: "English", level: "TOEFL ITP: 610", proficiency: 85 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning technical development and creative design
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-hover bg-white p-6 rounded-xl border border-purple-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-foreground">{category.category}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-block mr-2 mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-semibold text-primary">{category.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${category.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <div className="bg-white p-8 rounded-xl border border-purple-100">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <MessageSquare className="text-purple-500" size={28} />
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon size={16} className="text-purple-500" />
                      <span className="font-medium text-foreground">{item.skill}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%`, animationDelay: `${index * 0.1}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white p-8 rounded-xl border border-purple-100">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Globe className="text-blue-500" size={28} />
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground text-lg">{lang.language}</span>
                    <span className="text-sm text-purple-600 font-medium">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.proficiency}%`, animationDelay: `${index * 0.2}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-blue-600">TOEFL ITP Score: 610</span> - 
                Demonstrates strong English proficiency for international academic and professional environments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;