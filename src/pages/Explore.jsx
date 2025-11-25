import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import CareerCard from "../components/CareerCard";
import majorsData from "../data/majors.json";
import careersData from "../data/careers.json";

const Explore = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState(null);
  const [mode, setMode] = useState("majors"); // "majors" or "careers"
  const navigate = useNavigate();

  // Initialize search term from URL query parameter
  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  const areasOfInterest = [
    "Business",
    "Education",
    "Engineering",
    "Health & Nursing",
    "Humanities & Arts",
    "Law & Public Service",
    "Science",
    "Business Studies",
    "Economics & Finance",
    "Leadership & Management",
    "Marketing & Communication",
    "Project Management",
    "Technology & Analytics",
    "Supply Chain & Global Logistics",
  ];

  // Get data based on mode
  const allItems = mode === "majors" ? majorsData : careersData;

  // Transform data to common format for display
  const transformedItems = allItems.map((item) => ({
    id: item.id,
    title: item.title,
    area: item.discipline || item.field,
    description: item.description || item.tagline,
    tagline: item.tagline,
  }));

  // Filter items based on search and selected area
  const filteredItems = transformedItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesArea = !selectedArea || item.area === selectedArea;

    return matchesSearch && matchesArea;
  });

  const handleAreaClick = (area) => {
    if (selectedArea === area) {
      setSelectedArea(null);
    } else {
      setSelectedArea(area);
    }
  };

  const handleItemClick = (itemId) => {
    if (mode === "majors") {
      navigate(`/major/${itemId}`);
    } else {
      navigate(`/career/${itemId}`);
    }
  };

  return (
    <div className="bg-background min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-20 text-center">
            Explore STEM
          </h1>
        </div>

        {/* Search Bar and Toggle */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto">
            {/* Search Bar - Left */}
            <div className="relative flex-1 w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 md:py-5 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base shadow-sm transition-all"
                placeholder={`Search ${
                  mode === "majors" ? "majors" : "careers"
                }, skills, or topics…`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Mode Toggle - Right */}
            <div className="inline-flex bg-white rounded-full p-1 border border-gray-200 shadow-sm flex-shrink-0">
              <button
                onClick={() => setMode("majors")}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  mode === "majors"
                    ? "shadow-sm"
                    : "text-text-muted hover:text-text"
                }`}
                style={{
                  borderRadius: "9999px",
                  ...(mode === "majors"
                    ? { backgroundColor: "#646cff", color: "white" }
                    : {}),
                }}
              >
                Majors
              </button>
              <button
                onClick={() => setMode("careers")}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  mode === "careers"
                    ? "shadow-sm"
                    : "text-text-muted hover:text-text"
                }`}
                style={{
                  borderRadius: "9999px",
                  ...(mode === "careers"
                    ? { backgroundColor: "#646cff", color: "white" }
                    : {}),
                }}
              >
                Careers
              </button>
            </div>
          </div>
        </div>

        {/* Areas of Interest Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 text-center md:text-left">
            Areas of Interest
          </h2>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {areasOfInterest.map((area) => (
              <button
                key={area}
                onClick={() => handleAreaClick(area)}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md ${
                  selectedArea === area
                    ? "shadow-md scale-105"
                    : "bg-white text-text border border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5"
                }`}
                style={
                  selectedArea === area
                    ? { backgroundColor: "#646cff", color: "white" }
                    : {}
                }
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredItems.length > 0 ? (
          <div>
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-text">
                {selectedArea
                  ? `${selectedArea} ${
                      mode === "majors" ? "Majors" : "Careers"
                    }`
                  : `All STEM ${mode === "majors" ? "Majors" : "Careers"}`}
                <span className="text-text-muted font-normal ml-2">
                  ({filteredItems.length})
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="cursor-pointer"
                >
                  <CareerCard {...item} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-text-muted mb-4">
              No {mode === "majors" ? "majors" : "careers"} found matching your
              criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedArea(null);
              }}
              className="text-primary font-medium hover:text-primary-hover transition-colors underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
