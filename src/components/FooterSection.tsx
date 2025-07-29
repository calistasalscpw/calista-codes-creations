import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "calistasalsa.cpw@gmail.com",
      href: "mailto:calistasalsa.cpw@gmail.com"
    },
    {
      icon: Phone,
      text: "+6281297801340",
      href: "tel:+6281297801340"
    },
    {
      icon: MapPin,
      text: "Bogor, Indonesia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/calistasalsabilacpw",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:calistasalsa.cpw@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  Calista Salsabila
                </h3>
                <p className="text-xl text-purple-300 mb-4">
                  Citra Putri Winanto
                </p>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Passionate Informatics fresh-graduate specializing in Machine Learning and UI/UX Design. 
                  Ready to contribute innovative solutions to your next project.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-smooth group"
                  >
                    <contact.icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-purple-500/20 transition-smooth hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="group-hover:text-purple-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-purple-300 transition-smooth hover:translate-x-2 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Let's Connect</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply connect with fellow tech enthusiasts.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:calistasalsa.cpw@gmail.com"
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-smooth"
                >
                  Get In Touch
                </a>
                <a
                  href="/calista-salsabila-cv.pdf"
                  download
                  className="block w-full text-center py-3 px-4 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/20 transition-smooth"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Calista Salsabila Citra Putri Winanto.</span>
                <span>Made with</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>for innovation</span>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm font-semibold hover:scale-105 transition-smooth group"
              >
                <span>Back to Top</span>
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;