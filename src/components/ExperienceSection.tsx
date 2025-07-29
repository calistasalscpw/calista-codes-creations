import { Briefcase, Calendar, TrendingUp, Users, Palette, MessageSquare } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      organization: "Google Developer Student Club Chapter Unsika",
      role: "Media and Creative Staff",
      period: "August 2022 - August 2023",
      type: "Organizational Experience",
      contributions: [
        "Designed merchandise stickers that became popular among students",
        "Created over 25 engaging publications for social media platforms",
        "Enhanced brand visibility and student engagement through creative design"
      ],
      icon: Palette,
      gradient: "from-red-500 to-pink-500",
      stats: "25+ Publications"
    },
    {
      organization: "Himpunan Mahasiswa Teknik Informatika",
      role: "Member of Information and Communication Division",
      period: "December 2021 - November 2022",
      type: "Volunteering",
      contributions: [
        "Enhanced Instagram interaction through biweekly interactive quizzes",
        "Increased Instagram profile visits by up to 242% through strategic content creation",
        "Provided over 50 high-quality visual publications for various organizational programs"
      ],
      icon: TrendingUp,
      gradient: "from-blue-500 to-purple-500",
      stats: "242% Growth"
    }
  ];

  const impactMetrics = [
    { value: "75+", label: "Visual Publications", icon: Palette },
    { value: "242%", label: "Instagram Growth", icon: TrendingUp },
    { value: "2+", label: "Organizations", icon: Users },
    { value: "25+", label: "Social Media Posts", icon: MessageSquare }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Organizational Experience & Volunteering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leadership and creative contributions that made a measurable impact
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <metric.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`card-hover bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 animate-slide-in-right`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid lg:grid-cols-4 gap-8 items-start">
                {/* Organization Icon & Stats */}
                <div className="lg:col-span-1">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${exp.gradient} mb-4`}>
                    <exp.icon size={32} className="text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-purple-100">
                      <div className="text-2xl font-bold text-primary">{exp.stats}</div>
                      <div className="text-xs text-muted-foreground">Key Impact</div>
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.organization}</h3>
                    <p className="text-lg text-purple-600 font-semibold">{exp.role}</p>
                  </div>

                  {/* Key Contributions */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Briefcase size={18} className="text-purple-500" />
                      Key Contributions
                    </h4>
                    <div className="grid gap-3">
                      {exp.contributions.map((contribution, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{contribution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
            <Users size={20} />
            <span className="font-semibold">Ready to make an impact in your organization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;