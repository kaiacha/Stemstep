import React from "react";
import {
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Linkedin,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

// Team members data
const teamMembers = [
  {
    name: "Zane Reynolds",
    role: "Team Leader",
    contributions:
      "Concept development, IRB submission, theoretical framework alignment.",
    linkedin: null,
    portfolio: null,
  },
  {
    name: "Mikyo Kaia Cha",
    role: "UX / UI Designer, Researcher",
    contributions:
      "Designed the user interface and information architecture, conducted interviews and coding analysis.",
    linkedin: null,
    portfolio: null,
  },
  {
    name: "Rashmi Neelawathura",
    role: "Research Analyst",
    contributions:
      "Research, conducted professor interview and coding analysis.",
    linkedin: null,
    portfolio: null,
  },
  {
    name: "Foysal Ahmed",
    role: "Developer / Technical Design",
    contributions:
      "Research, conducted Undergrads interviews and coding analysis.",
    linkedin: null,
    portfolio: null,
  },
  {
    name: "Jeremiah Brandon",
    role: "Research Coordinator",
    contributions:
      "Research, conducted highschool counsler interviews and coding analysis.",
    linkedin: null,
    portfolio: null,
  },
];

const About = () => {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-bold mb-6" style={{ fontSize: "2.4rem" }}>
            Bridging the STEM Opportunity Gap
          </h1>
          <p className="text-xl text-text-muted">
            Designing an Accessible Career Exploration Platform for
            Under-Resourced High Schools
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-text mb-4 flex items-center gap-2">
              <BookOpen className="text-primary w-6 h-6" />
              The Challenge
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Many under-resourced high schools in the United States lack the
              funding, infrastructure, and qualified teachers to provide
              rigorous STEM opportunities. Students from lower-income and
              historically underserved communities often miss the chance to
              develop STEM interest or confidence, limiting their career
              awareness and postsecondary roadmaps.
            </p>
            <p className="text-text-muted leading-relaxed">
              Fewer than half of high schools serving predominantly Black and
              Latino populations offer physics, and about one-quarter lack
              Algebra II or chemistry. This results in uneven learning
              opportunities across socioeconomic and racial groups.
            </p>
          </div>
        </section>

        {/* The Solution / Learning Engineering */}
        <section className="mb-16">
          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-text mb-4 flex items-center gap-2">
              <Lightbulb className="text-secondary w-6 h-6" />
              Our Approach: Learning Engineering
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We use a systematic, data-informed framework called{" "}
              <strong>Learning Engineering (LE)</strong> to address these
              inequities. LE integrates human-centered design, learning science,
              and analytics to create interventions responsive to student needs.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <span className="text-text-muted">
                  <strong>Vicarious Learning:</strong> Videos, alumni stories,
                  and simulations to build confidence.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-secondary/10 p-1 rounded-full">
                  <Target className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-text-muted">
                  <strong>Self-Assessment:</strong> Tools to help students
                  identify confidence in different STEM skills.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-accent/10 p-1 rounded-full">
                  <Target className="w-4 h-4 text-accent" />
                </div>
                <span className="text-text-muted">
                  <strong>Career Roadmaps:</strong> Clear visualization of
                  outcomes, salaries, and required skills.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Target Users */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                <Users className="text-accent w-5 h-5" />
                Who We Serve
              </h3>
              <ul className="list-disc list-inside text-text-muted space-y-2">
                <li>High school students from low-resource schools</li>
                <li>School counselors and educators</li>
                <li>First-generation college students</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">Our Goal</h3>
              <p className="leading-relaxed opacity-90">
                To build a prototype website that helps under-resourced high
                school students explore STEM majors and career roadmaps in an
                engaging, accessible, and equitable way.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          {/* Short border line */}
          <div className="flex justify-center mb-32 mt-8">
            <div className=" w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-3">
              About the Team
            </h2>
            <p className="text-lg text-text-muted mb-2">
              ASU HSE 543 – Learning Engineering Project
            </p>
            <p className="text-text-muted max-w-3xl mx-auto leading-relaxed">
              This project was developed as part of the HSE 543: Learning
              Engineering course at Arizona State University. Our goal was to
              design a research-based prototype that makes STEM career
              exploration more accessible for students from under-resourced high
              schools.
            </p>
          </div>

          {/* Team Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col"
                >
                  {/* Avatar/Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-xl font-bold text-text text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary text-center mb-4">
                    {member.role}
                  </p>

                  {/* Contributions */}
                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
                    {member.contributions}
                  </p>

                  {/* Links */}
                  {(member.linkedin || member.portfolio) && (
                    <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-hover transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-hover transition-colors"
                          aria-label={`${member.name}'s Portfolio`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-surface/50 rounded-2xl p-8 text-center border border-gray-100">
            <p className="text-text-muted leading-relaxed">
              We thank <strong className="text-text">Dr. Scotty Craig</strong>{" "}
              for his guidance throughout the course and for supporting our
              iterative design and analysis process.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
