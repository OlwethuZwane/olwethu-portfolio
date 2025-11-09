import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import backgroundImage from "@/assets/tech-background.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content with Snap Scrolling */}
      <main className="snap-container relative z-10 pt-16">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <footer className="relative z-10 mt-12 border-t border-background/30 bg-background/40">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-foreground/80">
          <div>© {new Date().getFullYear()} • All rights reserved.</div>
          <nav className="flex gap-4">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
