import { Award, Star, BookOpen, Globe, Trophy, CheckCircle } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Korean-ASEAN Academy Cohort",
      status: "Current",
      icon: Globe,
      gradient: "from-red-500 to-pink-500",
      type: "Fellowship"
    },
    {
      title: "Machine Learning Cohort at Bangkit Academy",
      status: "Completed",
      icon: Star,
      gradient: "from-blue-500 to-purple-500",
      type: "Specialization"
    },
    {
      title: "Indonesian International Student Mobility Awards (IISMA)",
      status: "Awardee",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500",
      type: "Scholarship"
    }
  ];

  const certifications = [
    {
      title: "Google IT Automation with Python",
      provider: "Coursera",
      category: "Automation",
      verified: true
    },
    {
      title: "TensorFlow: Advanced Techniques Specialization",
      provider: "Coursera", 
      category: "Machine Learning",
      verified: true
    },
    {
      title: "Mathematics for Machine Learning and Data Science Specialization",
      provider: "Coursera",
      category: "Mathematics",
      verified: true
    },
    {
      title: "Belajar Analisis Data dengan Python",
      provider: "Dicoding",
      category: "Data Analysis",
      verified: true
    },
    {
      title: "Build Basic Generative Adversarial Networks",
      provider: "Coursera",
      category: "Deep Learning",
      verified: true
    },
    {
      title: "TensorFlow Data and Deployment",
      provider: "Coursera",
      category: "MLOps",
      verified: true
    },
    {
      title: "Machine Learning Specialization",
      provider: "Coursera",
      category: "Machine Learning",
      verified: true
    },
    {
      title: "DeepLearning.ai TensorFlow Developer Professional Certificate",
      provider: "Coursera",
      category: "Professional",
      verified: true
    },
    {
      title: "Structuring Machine Learning Projects",
      provider: "Coursera",
      category: "Project Management",
      verified: true
    },
    {
      title: "Intro to Generative AI",
      provider: "Coursera",
      category: "AI",
      verified: true
    }
  ];

  const certificationCategories = [
    { name: "Machine Learning", count: 4, color: "blue" },
    { name: "Professional", count: 2, color: "purple" },
    { name: "Data Analysis", count: 2, color: "green" },
    { name: "AI", count: 2, color: "pink" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition of excellence and continuous learning in technology and design
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="card-hover bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-purple-100 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.gradient} mb-4`}>
                <achievement.icon size={32} className="text-white" />
              </div>
              
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-3">
                {achievement.type}
              </span>
              
              <h3 className="font-bold text-foreground mb-2 leading-tight">{achievement.title}</h3>
              
              <div className="flex items-center justify-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm text-green-600 font-semibold">{achievement.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificationCategories.map((category, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100"
            >
              <div className="text-3xl font-bold text-primary mb-1">{category.count}</div>
              <div className="text-sm text-muted-foreground">{category.name}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="text-purple-500" size={28} />
            Professional Certifications
          </h3>
          
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 transition-smooth group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {cert.category}
                  </span>
                  {cert.verified && (
                    <CheckCircle size={20} className="text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
            <div className="flex items-center gap-2">
              <Trophy size={20} />
              <span className="font-semibold">3 Major Achievements</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <Award size={20} />
              <span className="font-semibold">10 Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;