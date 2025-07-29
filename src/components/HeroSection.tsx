import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Calista Salsabila
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              Citra Putri Winanto
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Informatics Student with a Passion for 
            <span className="font-semibold text-white"> Machine Learning</span> and 
            <span className="font-semibold text-white"> UI/UX Design</span>
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-purple-100">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>calistasalsa.cpw@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+6281297801340</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Bogor, Indonesia</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-10">
            <a
              href="https://www.linkedin.com/in/calistasalsabilacpw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:calistasalsa.cpw@gmail.com"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToProjects}
              className="btn-gradient flex items-center gap-2 justify-center"
            >
              <ExternalLink size={20} />
              View Projects
            </button>
            <a
              href="/cv-calista.pdf"
              download
              className="btn-outline flex items-center gap-2 justify-center text-white border-white hover:bg-white hover:text-purple-600"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-purple-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;