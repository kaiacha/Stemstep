import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityModule from "../components/ActivityModule";
import AssessmentModal from "../components/AssessmentModal";
import { Sparkles } from "lucide-react";

const Activities = () => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const navigate = useNavigate();

  const activities = [
    {
      title: "Build a Virtual Bridge",
      description:
        "Learn about structural engineering by designing a bridge that can support heavy loads. Test your design in a physics simulation.",
      duration: "15 Min",
      difficulty: "Beginner",
    },
    {
      title: "Code Your First Website",
      description:
        "Learn the basics of HTML and CSS by building a simple personal profile page. See your changes instantly.",
      duration: "30 Min",
      difficulty: "Intermediate",
    },
    {
      title: "Diagnose a Patient",
      description:
        "Step into the shoes of a doctor. Analyze symptoms, review test results, and make a diagnosis for a virtual patient.",
      duration: "20 Min",
      difficulty: "Intermediate",
    },
    {
      title: "Solar System Explorer",
      description:
        "Navigate through the solar system and learn about different planets. Calculate travel times and fuel requirements.",
      duration: "25 Min",
      difficulty: "Beginner",
    },
    {
      title: "Eco-City Planner",
      description:
        "Design a sustainable city. Balance energy needs, waste management, and green spaces to create a thriving community.",
      duration: "40 Min",
      difficulty: "Advanced",
    },
    {
      title: "Robot Logic Puzzle",
      description:
        "Program a virtual robot to navigate a maze using logic blocks. Learn the fundamentals of algorithms and loops.",
      duration: "15 Min",
      difficulty: "Beginner",
    },
  ];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">
            Try-It Activities
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Experience STEM careers firsthand with these interactive
            mini-modules.
          </p>

          <button
            onClick={() => navigate("/explore/self-assessment")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-[#646cff] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Not sure where to start? Take the Self-Assessment!
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityModule key={index} {...activity} />
          ))}
        </div>
      </div>

      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
      />
    </div>
  );
};

export default Activities;
