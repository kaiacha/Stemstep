import React, { useState, useMemo } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Home,
  Wrench,
  BookOpen,
  Map,
  Users,
  ArrowLeft,
  Video,
  Briefcase,
} from "lucide-react";
import VideoCard from "../components/VideoCard";
import CareerCard from "../components/CareerCard";
import majorsData from "../data/majors.json";
import careersData from "../data/careers.json";

const CareerDetail = () => {
  const { careerId, majorId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  // Determine if this is a major or career based on route
  const isMajor = location.pathname.includes("/major/");
  const itemId = majorId || careerId;

  // Get data based on type
  const item = useMemo(() => {
    if (isMajor) {
      return majorsData.find((m) => m.id === itemId) || majorsData[0];
    } else {
      return careersData.find((c) => c.id === itemId) || careersData[0];
    }
  }, [isMajor, itemId]);

  // Define tabs based on type
  const tabs = isMajor
    ? [
        { id: "overview", label: "Overview", icon: BookOpen },
        { id: "competencies", label: "Required Competencies", icon: Wrench },
        { id: "learning-path", label: "Learning Path / Roadmap", icon: Map },
        { id: "top-careers", label: "Top Careers", icon: Briefcase },
        { id: "related", label: "Related Majors", icon: Users },
      ]
    : [
        { id: "what-they-do", label: "What They Do", icon: BookOpen },
        { id: "required-skills", label: "Required Skills", icon: Wrench },
        { id: "common-majors", label: "Common Majors", icon: Users },
        { id: "real-voice", label: "Real Voice", icon: Video },
        { id: "related", label: "Related Careers", icon: Briefcase },
      ];

  // Breadcrumb paths
  const breadcrumbPath = isMajor
    ? ["Home", "STEM Majors", item.discipline, item.title]
    : ["Home", "STEM Careers", item.field, item.title];

  return (
    <div className="bg-background min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center text-sm text-text-muted flex-wrap">
          <Link
            to="/"
            className="hover:text-primary transition-colors flex items-center"
          >
            <Home className="h-4 w-4 mr-1" />
            {breadcrumbPath[0]}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/explore" className="hover:text-primary transition-colors">
            {breadcrumbPath[1]}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-text-muted">{breadcrumbPath[2]}</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-text font-medium">{breadcrumbPath[3]}</span>
        </nav>

        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">
                  {item.title}
                </h1>
                <p className="text-lg md:text-xl text-text-muted">
                  {item.tagline}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/explore/self-assessment")}
              className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-text font-medium hover:bg-gray-50 hover:border-primary hover:text-primary transition-all duration-200 transform hover:scale-105 hover:shadow-md whitespace-nowrap"
            >
              Try Career Fit Test Again
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-text-muted hover:text-text hover:border-gray-300"
                  }`}
                >
                  <TabIcon className="h-4 w-4 md:h-5 md:w-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {/* MAJOR TABS */}
          {isMajor && (
            <>
              {activeTab === "overview" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Overview
                  </h2>
                  <p className="text-base md:text-lg text-text-muted leading-relaxed whitespace-pre-line">
                    {item.overview}
                  </p>
                </div>
              )}

              {activeTab === "competencies" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Required Competencies
                  </h2>
                  <ul className="space-y-4">
                    {item.requiredCompetencies.map((competency, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-base md:text-lg text-text-muted flex-1">
                          {competency}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "learning-path" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-8">
                    Learning Path / Roadmap
                  </h2>
                  <div className="space-y-8">
                    {item.learningPath.map((stage, index) => (
                      <div
                        key={index}
                        className="relative pl-8 border-l-2 border-primary/20"
                      >
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                        <h3 className="text-xl md:text-2xl font-semibold text-text mb-4">
                          {stage.level}
                        </h3>
                        <ul className="space-y-3">
                          {stage.steps.map((step, stepIndex) => (
                            <li
                              key={stepIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                              <p className="text-base md:text-lg text-text-muted">
                                {step}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "top-careers" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Top Careers
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {item.topCareers.map((career) => (
                      <div
                        key={career.id}
                        onClick={() => navigate(`/career/${career.id}`)}
                        className="cursor-pointer"
                      >
                        <CareerCard
                          title={career.title}
                          description={career.description}
                          area={item.discipline}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "related" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Related Majors
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {item.relatedMajors.map((major) => (
                      <button
                        key={major.id}
                        onClick={() => navigate(`/major/${major.id}`)}
                        className="px-6 py-3 rounded-lg text-base font-medium text-primary bg-white border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
                      >
                        {major.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* CAREER TABS */}
          {!isMajor && (
            <>
              {activeTab === "what-they-do" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    What They Do
                  </h2>
                  <p className="text-base md:text-lg text-text-muted leading-relaxed whitespace-pre-line">
                    {item.whatTheyDo}
                  </p>
                </div>
              )}

              {activeTab === "required-skills" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Required Skills
                  </h2>
                  <ul className="space-y-4">
                    {item.requiredSkills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-base md:text-lg text-text-muted flex-1">
                          {skill}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "common-majors" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Common Majors
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {item.commonMajors.map((major) => (
                      <button
                        key={major.id}
                        onClick={() => navigate(`/major/${major.id}`)}
                        className="px-6 py-3 rounded-lg text-base font-medium text-primary bg-white border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
                      >
                        {major.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "real-voice" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Real Voice: Interviews & Alumni Stories
                  </h2>
                  <p className="text-base md:text-lg text-text-muted mb-8">
                    Hear directly from professionals in this field as they share
                    their experiences, career journeys, and advice for students
                    interested in pursuing this path.
                  </p>
                  {item.videos && item.videos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.videos.map((video, index) => (
                        <VideoCard
                          key={index}
                          title={video.title}
                          name={video.name}
                          role={video.role}
                          company={video.company}
                          videoId={video.videoId}
                          thumbnail={video.thumbnail}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-text-muted">
                        Video interviews coming soon. Check back later to hear
                        from professionals in this field.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "related" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Related Careers
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {item.relatedCareers.map((relatedCareer) => (
                      <div
                        key={relatedCareer.id}
                        onClick={() => navigate(`/career/${relatedCareer.id}`)}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 hover:border-primary"
                      >
                        <h3 className="text-xl font-semibold text-text mb-2">
                          {relatedCareer.title}
                        </h3>
                        <p className="text-text-muted mb-3">
                          {relatedCareer.description}
                        </p>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {item.field}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/explore")}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Explore {isMajor ? "Majors" : "Careers"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
