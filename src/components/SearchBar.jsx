import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChip, setSelectedChip] = useState(null);
  const navigate = useNavigate();

  const popularChips = [
    "Engineer",
    "Business",
    "Education",
    "Science",
    "Math",
    "English",
    "History",
    "Coding",
    "Healthcare",
    "Data",
    "Design",
    "Environment",
    "Agriculture",
  ];

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/explore?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleChipClick = (chip) => {
    setSearchQuery(chip);
    setSelectedChip(chip);
    handleSearch(chip);
  };

  const handleKeyDown = (e, chip) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleChipClick(chip);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Search Input */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search majors, skills, or resources…"
            className="w-full px-6 py-2.5 md:py-3 pr-16 text-base md:text-md border-2 border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm hover:shadow-md"
            aria-label="Search majors, skills, or resources"
          />
          <button
            type="submit"
            className="absolute right-2 p-1 rounded-full"
            style={{ background: "transparent" }}
            aria-label="Search"
          >
            <Search className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </form>

      {/* Popular Chips */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {popularChips.map((chip) => (
          <button
            key={chip}
            onClick={() => handleChipClick(chip)}
            onKeyDown={(e) => handleKeyDown(e, chip)}
            aria-pressed={selectedChip === chip}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm lg:text-base font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              selectedChip === chip
                ? "bg-primary text-white shadow-md scale-105"
                : "bg-white border border-gray-200 hover:border-primary hover:bg-primary hover:shadow-sm"
            }`}
            style={
              selectedChip === chip
                ? {}
                : {
                    backgroundColor: "white",
                    color: "#0f172a",
                  }
            }
            onMouseEnter={(e) => {
              if (selectedChip !== chip) {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.backgroundColor = "#4f46e5";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedChip !== chip) {
                e.currentTarget.style.color = "#0f172a";
                e.currentTarget.style.backgroundColor = "white";
              }
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
