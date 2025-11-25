import React from "react";
import RoadmapMap from "../components/RoadmapMap";

const Roadmaps = () => {
  const softwarePath = [
    {
      title: "High School",
      description:
        "Focus on Math, Computer Science electives, and join a coding club.",
      duration: "4 Years",
      completed: true,
    },
    {
      title: "Community College / Bootcamp",
      description: "Associate Degree in CS or intensive coding bootcamp.",
      duration: "2 Years / 6 Months",
      completed: false,
    },
    {
      title: "University Transfer (Optional)",
      description:
        "Transfer to a 4-year university for a Bachelor's in Computer Science.",
      duration: "2 Years",
      completed: false,
    },
    {
      title: "Internship",
      description: "Gain real-world experience at a tech company.",
      duration: "Summer",
      completed: false,
    },
    {
      title: "Junior Developer",
      description: "Start your career as a software developer.",
      duration: "Entry Level",
      completed: false,
    },
  ];

  const engineeringPath = [
    {
      title: "High School",
      description: "Take Physics, Calculus, and Engineering electives.",
      duration: "4 Years",
      completed: true,
    },
    {
      title: "University (Bachelor's)",
      description:
        "Bachelor of Science in Mechanical or Electrical Engineering.",
      duration: "4 Years",
      completed: false,
    },
    {
      title: "FE Exam",
      description: "Pass the Fundamentals of Engineering exam.",
      duration: "Exam",
      completed: false,
    },
    {
      title: "Engineer in Training (EIT)",
      description: "Work under a Professional Engineer.",
      duration: "4 Years",
      completed: false,
    },
    {
      title: "Professional Engineer (PE)",
      description: "Obtain licensure to work independently.",
      duration: "Career Milestone",
      completed: false,
    },
  ];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">STEM Roadmaps</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Visualize your journey from where you are now to where you want to
            be.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RoadmapMap
            title="Software Development Roadmap"
            steps={softwarePath}
          />
          <RoadmapMap title="Engineering Roadmap" steps={engineeringPath} />
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
