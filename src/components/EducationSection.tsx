import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Infomartion and Communication Technology in Internet of Things",
    institution: "Durban University of Technology",
    period: "2023 - 2025",
    description: "Focuses on design, develop, and manage smart, connected systems using Internet of Things technologies across industries, and network security.",
  },
];

const certifications = [
  "Introduction to Internet of Things, issued by Cisco Networking Academy",
  "AI Fundamentals, issued by Microsoft and Durban University of Technology"
];

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="snap-section min-h-[calc(100vh-4rem)] flex items-center pt-20"
    >
      <div className="w-full px-0">
        <div className="mx-0 px-8 md:px-16 lg:px-24 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="space-y-8">
            {/* Education */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 glass-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {edu.period}
                      </p>
                      <p className="text-foreground/70">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Certifications
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg glass-hover text-foreground/80 hover:text-primary transition-all"
                  >
                    • {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
