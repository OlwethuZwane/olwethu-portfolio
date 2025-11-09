import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import smart_lighting from "../assets/smart-lighting.png";
import pred_analysis from "../assets/pred-analysis.png";
import iot_flood from "../assets/smart-flood.png";
import secureIoT from "../assets/secure-iot.jpg";

const projects = [
  {
    title: "Smart Flood Monitoring System",
    description: "IoT-based flood detection and alert system using real-time sensors and data analytics to provide early warnings to communities.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL", "Python", "Arduino"],
    img: iot_flood,
    codeUrl: { href: "https://github.com/OlwethuZwane/smart-flood-manangment-system", show: true },
    demoUrl: { href: "#", show: false },
  },
  {
    title: "Smart and Energy-Efficient Lighting System",
    description: "Collaborative project to develop an IoT-based smart lighting system that optimizes energy consumption in residential and commercial buildings.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "ESP8266", "C++"],
    img: smart_lighting,
    codeUrl: { href: "https://github.com/sbonelosth/group7-client", show: true },
    demoUrl: { href: "#", show: false },
  },
  {
    title: "Secure IoT Data Pipeline Framework",
    description: "A framework for secure data transmission in IoT networks, ensuring data integrity and confidentiality using encryption and authentication mechanisms.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    img: secureIoT,
    codeUrl: { href: "#", show: false },
    demoUrl: { href: "https://drive.google.com/file/d/1kuVLx-qHyN8Oyzt9yDCxuxFBK5RvnhrS/view?usp=sharing", show: true },
  },
  {
    title: "IoT Predictive Maintenance in Air Compressors",
    description: "Data analysis and machine learning model to predict maintenance needs for air compressors based on sensor data, reducing downtime and costs.",
    tech: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    img: pred_analysis,
    codeUrl: { href: "#", show: false },
    demoUrl: { href: "#", show: false },
  }
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="snap-section min-h-[calc(100vh-4rem)] flex items-center pt-20"
    >
      <div className="w-full px-0">
        <div className="mx-0 px-8 md:px-16 lg:px-24 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 glass-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 rounded-lg glass mb-4 flex items-center justify-center">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full glass text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.demoUrl.show && <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <a href={project.demoUrl.href} target="_blank" rel="noopener noreferrer">Demo</a>
                  </Button>}
                  {project.codeUrl.show && <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    <a href={project.codeUrl.href} target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
