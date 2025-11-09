import React, { useState } from "react";
import android from "../assets/android.png";
import azure from "../assets/azure.png";
import csharp from "../assets/c-sharp.png";
import css from "../assets/css.svg";
import cpp from "../assets/cpp.png";
import express from "../assets/express.svg";
import git from "../assets/git.png";
import html from "../assets/html-5.svg";
import js from "../assets/javascript.svg";
import mongo from "../assets/mongodb.svg";
import node from "../assets/node.png";
import python from "../assets/python.png";
import react from "../assets/react.svg";
import sql from "../assets/sql-server.svg";
import mysql from "../assets/mysql.svg";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.svg";
import vscode from "../assets/vscode.png";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    icons: [html, css, js, react, typescript, tailwind],
  },
  {
    title: "Backend",
    // note: keep icons aligned with skills (Express uses node icon here)
    skills: [
      "Node.js",
      "Express",
      "Python",
      "C# (.NET)",
      "C/C++",
      "Microsoft SQL Server",
      "MySQL",
      "MongoDB",
    ],
    icons: [node, express, python, csharp, cpp, sql, mysql, mongo],
  },
  {
    title: "Tools & Platforms",
    skills: ["Microsoft Azure", "Git/GitHub", "Visual Studio Code"],
    icons: [azure, git, vscode],
  },
];

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>(skillCategories[0].title);

  return (
    <section
      id="skills"
      className="snap-section min-h-[calc(100vh-4rem)] flex items-center pt-20"
    >
      <div className="w-full px-0">
        <div className="mx-0 px-8 md:px-16 lg:px-24 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>

          {/* Filters (no "All" button) */}
          <div className="flex gap-3 mb-8">
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveFilter(cat.title)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeFilter === cat.title ? "bg-primary text-white" : "glass-hover text-foreground/80"}`}
                aria-pressed={activeFilter === cat.title}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="w-full">
            {skillCategories
              .filter((c) => c.title === activeFilter) // only show selected category (no "All")
              .map((category, index) => (
                <div
                  key={index}
                  className="rounded-xl py-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, i) => {
                      const iconSrc = category.icons[i];
                      const isNegative = category.title === "Backend" && (i === 1 || i === 5);
                      return (
                        <div
                          key={i}
                          className="glass-hover w-32 aspect-ratio flex flex-col items-center justify-center aspect-square p-3 rounded-lg text-center text-foreground/80 hover:text-primary transition-all flex flex-col items-center gap-2"
                        >
                          {iconSrc ? (
                            <img
                              src={iconSrc}
                              alt={`${skill} icon`}
                              className={`w-16 h-16 object-contain ${isNegative ? 'invert' : ''}`}
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-md bg-foreground/10" />
                          )}
                          <span className="text-sm">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}