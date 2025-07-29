import { GraduationCap, Award, MapPin, Calendar, Star, Globe } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Universitas Singaperbangsa Karawang",
      degree: "Informatics, Computer Science",
      gpa: "3.99/4.00",
      period: "September 2021 - June 2025",
      location: "Indonesia",
      achievements: [
        "Awarded the Indonesian International Student Mobility Awards (IISMA) 2023 scholarship",
        "Led a UI/UX Design project for an HCI course and achieved the maximum score"
      ],
      gradient: "from-purple-500 to-blue-500",
      icon: GraduationCap
    },
    {
      institution: "University of Padua",
      degree: "IISMA Exchange Program, Computer Science",
      gpa: null,
      period: "September 2023 - February 2024",
      location: "Italy",
      achievements: [
        "Enhanced adaptability and critical thinking in an international academic setting",
        "Gained experience with new software tools in a Linux environment (IDA, Docker)",
        "Demonstrated strong time management skills"
      ],
      gradient: "from-blue-500 to-cyan-500",
      icon: Globe
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence with international exposure and outstanding achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`card-hover bg-white p-8 rounded-2xl border border-purple-100 animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid lg:grid-cols-4 gap-8 items-start">
                {/* Institution Icon */}
                <div className="lg:col-span-1">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${edu.gradient} mb-4`}>
                    <edu.icon size={32} className="text-white" />
                  </div>
                  
                  {/* Period & Location */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-2 text-purple-600">
                        <Star size={16} />
                        <span className="text-sm font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Education Details */}
                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{edu.institution}</h3>
                    <p className="text-lg text-purple-600 font-semibold">{edu.degree}</p>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Award size={18} className="text-purple-500" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Recognition */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
            <Award size={20} />
            <span className="font-semibold">IISMA Scholarship Recipient 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;