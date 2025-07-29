import { Brain, Code2, Palette, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Passionate about developing intelligent systems and NLP solutions"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building complete web applications from design to deployment"
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "Exchange program alumni with global perspective"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year <span className="font-semibold text-primary">Informatics student</span> at 
              Universitas Singaperbangsa Karawang with a deep passion for technology, 
              particularly in <span className="font-semibold text-primary">Machine Learning</span> and 
              <span className="font-semibold text-primary"> UI/UX Design</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey includes a transformative <span className="font-semibold text-primary">
              one-semester exchange program</span> that significantly enhanced my problem-solving abilities, 
              critical thinking skills, and adaptability in diverse environments.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm proficient in industry-standard tools including <span className="font-semibold text-primary">
              Figma</span>, <span className="font-semibold text-primary">VS Code</span>, and 
              <span className="font-semibold text-primary"> Google Collaboratory</span>, 
              enabling me to seamlessly bridge the gap between design and development.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solving", "Critical Thinking", "Adaptability", "Innovation"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-hover bg-white p-6 rounded-xl border border-purple-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;