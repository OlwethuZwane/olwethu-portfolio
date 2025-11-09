import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "../assets/profile.jpeg";

export const AboutSection = () => {
  const contactDetails = [
    { icon: Mail, text: "olwethunonkanyiso054@gmail.com", href: "mailto:olwethunonkanyiso054@gmail.com" },
    { icon: Phone, text: "+27 72 845 4367", href: "tel:+27 72 845 4367" },
    { icon: MapPin, text: "Durban, KwaZulu-Natal, South Africa", href: "" },
    { icon: Linkedin, text: "Olwethu ZWANE", href: "https://www.linkedin.com/in/olwethunonkanyiso" },
  ];

  return (
    <section
      id="about"
      className="snap-section min-h-[calc(100vh-4rem)] flex items-center px-8 md:px-16 lg:px-24 pt-20"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Left - Name and Title */}
          <div className="space-y-4 animate-fade-in text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Olwethu Zwane 
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>

          {/* Top Right - Picture and Contact */}
          <div className="space-y-4 animate-fade-in text-center" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl p-4 space-y-4">
              <div className="w-48 h-48 mx-auto rounded-full glass overflow-hidden flex items-center justify-center border-4 border-primary/30">
                <img src={profilePic} alt="Profile Picture" className="w-full h-full object-cover" />
              </div>

              {/* Contact Details */}
              <div className="flex items-center justify-center gap-4">
                {contactDetails.map((detail, index) => (
                  <a
                    key={index}
                    href={detail.href}
                    className="relative group"
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <detail.icon className="h-5 w-5" />
                    </Button>
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-popover text-popover-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {detail.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom - Summary spanning full width */}
          <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Fullstack developer and ICT in IoT graduate with a passion for building smart, user-focused solutions that connect software and hardware. I thrive on solving real-world problems, whether it's crafting responsive web apps or integrating sensor data into intelligent systems. With a strong foundation in programming, automation, and data platforms, I bring both technical precision and a human-centered approach to every project I take on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
