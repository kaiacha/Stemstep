import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Sparkles } from "lucide-react";

// Quiz data from JSON spec
const quizData = {
  title: "STEM Fit Test",
  description:
    "Discover which STEM fields align best with your interests and strengths.",
  questions: [
    {
      id: 1,
      text: "What type of problems do you enjoy solving?",
      options: [
        {
          label: "Building or fixing things",
          map: ["Engineering", "Technology & Analytics", "Project Management"],
        },
        {
          label: "Working with data or numbers",
          map: ["Science", "Economics & Finance", "Business Studies"],
        },
        {
          label: "Designing creative solutions",
          map: [
            "Humanities & Arts",
            "Marketing & Communication",
            "Engineering",
          ],
        },
        {
          label: "Supporting or teaching others",
          map: ["Education", "Health & Nursing", "Law & Public Service"],
        },
      ],
    },
    {
      id: 2,
      text: "Which task sounds most exciting to you?",
      options: [
        {
          label: "Creating something new from scratch",
          map: ["Engineering", "Technology & Analytics", "Humanities & Arts"],
        },
        {
          label: "Analyzing trends to make better decisions",
          map: ["Economics & Finance", "Science", "Business"],
        },
        {
          label: "Communicating ideas through storytelling",
          map: [
            "Marketing & Communication",
            "Education",
            "Leadership & Management",
          ],
        },
        {
          label: "Leading a team or organizing a large project",
          map: ["Leadership & Management", "Project Management", "Business"],
        },
      ],
    },
    {
      id: 3,
      text: "What do you value most in your work or studies?",
      options: [
        {
          label: "Accuracy and logic",
          map: ["Science", "Technology & Analytics", "Economics & Finance"],
        },
        {
          label: "Creativity and freedom",
          map: ["Humanities & Arts", "Marketing & Communication", "Education"],
        },
        {
          label: "Collaboration and communication",
          map: ["Education", "Leadership & Management", "Law & Public Service"],
        },
        {
          label: "Helping people or making a difference",
          map: ["Health & Nursing", "Law & Public Service", "Education"],
        },
      ],
    },
    {
      id: 4,
      text: "Which environment do you learn best in?",
      options: [
        {
          label: "Hands-on, experimental settings",
          map: ["Engineering", "Science", "Technology & Analytics"],
        },
        {
          label: "Structured, data-driven settings",
          map: [
            "Economics & Finance",
            "Business Studies",
            "Project Management",
          ],
        },
        {
          label: "Open-ended creative projects",
          map: ["Humanities & Arts", "Marketing & Communication", "Education"],
        },
        {
          label: "People-centered, team-based settings",
          map: [
            "Health & Nursing",
            "Leadership & Management",
            "Law & Public Service",
          ],
        },
      ],
    },
    {
      id: 5,
      text: "What skill do you feel most confident in?",
      options: [
        {
          label: "Working with tools or technology",
          map: ["Engineering", "Technology & Analytics", "Project Management"],
        },
        {
          label: "Analyzing and understanding information",
          map: ["Science", "Economics & Finance", "Business"],
        },
        {
          label: "Expressing ideas clearly and creatively",
          map: ["Marketing & Communication", "Humanities & Arts", "Education"],
        },
        {
          label: "Managing goals, time, or people",
          map: [
            "Leadership & Management",
            "Business Studies",
            "Supply Chain & Global Logistics",
          ],
        },
      ],
    },
    {
      id: 6,
      text: "When facing a challenge, what's your first instinct?",
      options: [
        {
          label: "Test or prototype something new",
          map: ["Engineering", "Science", "Technology & Analytics"],
        },
        {
          label: "Gather and analyze information",
          map: ["Economics & Finance", "Science", "Business"],
        },
        {
          label: "Brainstorm creative approaches",
          map: ["Humanities & Arts", "Marketing & Communication", "Education"],
        },
        {
          label: "Ask for input or feedback from others",
          map: [
            "Leadership & Management",
            "Health & Nursing",
            "Law & Public Service",
          ],
        },
      ],
    },
    {
      id: 7,
      text: "What kind of result motivates you most?",
      options: [
        {
          label: "Building or improving something useful",
          map: ["Engineering", "Technology & Analytics", "Project Management"],
        },
        {
          label: "Discovering answers or insights",
          map: ["Science", "Economics & Finance", "Business Studies"],
        },
        {
          label: "Inspiring or educating others",
          map: ["Education", "Humanities & Arts", "Marketing & Communication"],
        },
        {
          label: "Making people's lives better",
          map: [
            "Health & Nursing",
            "Law & Public Service",
            "Leadership & Management",
          ],
        },
      ],
    },
  ],
  resultBlurbs: {
    Business:
      "You like turning ideas into value and spotting opportunities in the real world.",
    Education: "You enjoy helping people learn and communicating clearly.",
    Engineering:
      "You're a builder and problem-solver who likes making things work.",
    "Health & Nursing":
      "You're motivated by care, precision, and improving people's lives.",
    "Humanities & Arts":
      "You express ideas creatively and see multiple perspectives.",
    "Law & Public Service": "You value fairness, policy, and community impact.",
    Science:
      "You're curious, evidence-driven, and love discovering how things work.",
    "Business Studies":
      "You like markets, organizations, and how companies run.",
    "Economics & Finance":
      "You enjoy data, trade-offs, and smart decisions with numbers.",
    "Leadership & Management":
      "You like organizing people and moving projects forward.",
    "Marketing & Communication":
      "You tell stories, understand audiences, and shape messages.",
    "Project Management": "You plan, prioritize, and deliver results on time.",
    "Technology & Analytics":
      "You enjoy tools, data, and building with code or systems.",
    "Supply Chain & Global Logistics":
      "You think in flows and like making operations efficient.",
  },
  output: { topMatches: 3 },
};

const SelfAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  const navigate = useNavigate();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleAnswer = (option) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: option,
    };
    setAnswers(newAnswers);

    if (currentQuestion < quizData.questions.length - 1) {
      setTimeout(
        () => {
          setCurrentQuestion(currentQuestion + 1);
        },
        prefersReducedMotion ? 0 : 200
      );
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (allAnswers) => {
    const categoryScores = {};

    // Count scores for each category
    Object.values(allAnswers).forEach((option) => {
      option.map.forEach((category) => {
        categoryScores[category] = (categoryScores[category] || 0) + 1;
      });
    });

    // Sort by score, then alphabetically for ties
    const sortedCategories = Object.entries(categoryScores)
      .sort(([catA, scoreA], [catB, scoreB]) => {
        if (scoreB !== scoreA) return scoreB - scoreA;
        return catA.localeCompare(catB);
      })
      .slice(0, quizData.output.topMatches)
      .map(([category]) => category);

    setResults(sortedCategories);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  // Results View
  if (results) {
    return (
      <div className="bg-background min-h-screen pt-20 pb-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 p-2 overflow-visible">
          <div className="bg-surface rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 relative overflow-visible">
            {/* Back to Explore Button - Top Left */}
            <button
              onClick={() => navigate("/explore")}
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Back to Explore"
            >
              <ArrowLeft className="h-3 w-3" />
              <span className="text-sm">Back to Explore</span>
            </button>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h1
                className="font-bold text-text mb-3"
                style={{ fontSize: "2.0rem" }}
              >
                Your STEM Fit Results
              </h1>
              <p className="text-base text-text-muted max-w-xl mx-auto">
                Based on your answers, here are the fields that best match your
                interests and strengths:
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {results.map((category, index) => (
                <div
                  key={category}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-base ${
                        index === 0
                          ? "bg-yellow-100 text-yellow-800"
                          : index === 1
                          ? "bg-gray-100 text-gray-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-text mb-2">
                        {category}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed mb-4">
                        {quizData.resultBlurbs[category]}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                        <button
                          onClick={() =>
                            navigate(
                              `/explore?query=${encodeURIComponent(category)}`
                            )
                          }
                          className="px-5 py-2 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          Explore Careers
                        </button>
                        <button
                          onClick={() =>
                            navigate(
                              `/explore?type=activity&area=${encodeURIComponent(
                                category
                              )}`
                            )
                          }
                          className="px-5 py-2 rounded-lg text-sm font-medium text-primary bg-white border-2 border-primary hover:bg-primary/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          Try Activities
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 border-t border-gray-100">
              <button
                onClick={handleRestart}
                className="px-5 py-2 rounded-lg text-sm font-medium text-primary bg-white border-2 border-primary hover:bg-primary/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Retake the Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz View
  const currentQ = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <div className="bg-background min-h-screen pt-20 pb-10">
      <div className="max-w-xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80 p-2 overflow-visible">
        <div className="bg-surface rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 relative overflow-visible">
          {/* Back to Explore Button - Top Left */}
          <button
            onClick={() => navigate("/explore")}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Back to Explore"
          >
            <ArrowLeft className="h-3 w-3" />
            <span className="text-sm">Back to Explore</span>
          </button>
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h1
              className="font-bold text-text mb-2"
              style={{ fontSize: "2.0rem" }}
            >
              {quizData.title}
            </h1>
            <p className="text-sm text-text-muted">{quizData.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-text-muted mb-2">
              <span>
                Question {currentQuestion + 1} of {quizData.questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all"
                style={{
                  width: `${progress}%`,
                  transitionDuration: prefersReducedMotion ? "0ms" : "300ms",
                }}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={`Progress: ${Math.round(progress)}%`}
              ></div>
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl md:text-xl font-bold text-text mb-6">
            {currentQ.text}
          </h2>

          {/* Options */}
          <div
            className="space-y-3 mb-6"
            role="radiogroup"
            aria-label="Answer options"
          >
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white"
                aria-label={`Select: ${option.label}`}
              >
                <span className="text-sm md:text-base text-text font-medium">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-text bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Previous question"
            >
              <ArrowLeft className="h-3 w-3" />
              Previous
            </button>
            <div
              className="text-xs text-text-muted"
              aria-label={`Question ${currentQuestion + 1} of ${
                quizData.questions.length
              }`}
            >
              {currentQuestion + 1} / {quizData.questions.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
