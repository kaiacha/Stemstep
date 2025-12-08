import React, { useState } from "react";
import { GraduationCap, MapPin, TrendingUp } from "lucide-react";

const majors = [
  "Computer Science",
  "Engineering",
  "Data Science",
  "Biomedical Engineering",
  "Mechanical Engineering",
  "Environmental Science",
  "Nursing",
  "Finance",
];

const schoolRankings = {
  "Computer Science": [
    {
      rank: 1,
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      score: 98.5,
    },
    {
      rank: 2,
      name: "Stanford University",
      location: "Stanford, CA",
      score: 97.8,
    },
    {
      rank: 3,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      score: 96.2,
    },
    {
      rank: 4,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      score: 95.5,
    },
    {
      rank: 5,
      name: "California Institute of Technology",
      location: "Pasadena, CA",
      score: 94.8,
    },
    {
      rank: 6,
      name: "Princeton University",
      location: "Princeton, NJ",
      score: 94.2,
    },
    {
      rank: 7,
      name: "Harvard University",
      location: "Cambridge, MA",
      score: 93.8,
    },
    {
      rank: 8,
      name: "Cornell University",
      location: "Ithaca, NY",
      score: 93.4,
    },
    {
      rank: 9,
      name: "University of Washington",
      location: "Seattle, WA",
      score: 93.0,
    },
    {
      rank: 10,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      score: 92.6,
    },
    {
      rank: 11,
      name: "University of Illinois Urbana-Champaign",
      location: "Champaign, IL",
      score: 92.2,
    },
    {
      rank: 12,
      name: "Columbia University",
      location: "New York, NY",
      score: 91.8,
    },
    {
      rank: 13,
      name: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      score: 91.4,
    },
    {
      rank: 14,
      name: "Yale University",
      location: "New Haven, CT",
      score: 91.0,
    },
    {
      rank: 15,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 90.6,
    },
    {
      rank: 16,
      name: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      score: 90.2,
    },
    {
      rank: 17,
      name: "University of California, San Diego",
      location: "San Diego, CA",
      score: 89.8,
    },
    {
      rank: 18,
      name: "University of Wisconsin-Madison",
      location: "Madison, WI",
      score: 89.4,
    },
    {
      rank: 19,
      name: "Rice University",
      location: "Houston, TX",
      score: 89.0,
    },
    {
      rank: 20,
      name: "University of Maryland",
      location: "College Park, MD",
      score: 88.6,
    },
  ],
  Engineering: [
    {
      rank: 1,
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      score: 98.2,
    },
    {
      rank: 2,
      name: "Stanford University",
      location: "Stanford, CA",
      score: 97.5,
    },
    {
      rank: 3,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      score: 96.8,
    },
    {
      rank: 4,
      name: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      score: 95.3,
    },
    {
      rank: 5,
      name: "California Institute of Technology",
      location: "Pasadena, CA",
      score: 94.6,
    },
    {
      rank: 6,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 94.0,
    },
    {
      rank: 7,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      score: 93.4,
    },
    {
      rank: 8,
      name: "Purdue University",
      location: "West Lafayette, IN",
      score: 92.8,
    },
    {
      rank: 9,
      name: "University of Illinois Urbana-Champaign",
      location: "Champaign, IL",
      score: 92.2,
    },
    {
      rank: 10,
      name: "Cornell University",
      location: "Ithaca, NY",
      score: 91.6,
    },
    {
      rank: 11,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      score: 91.0,
    },
    {
      rank: 12,
      name: "Princeton University",
      location: "Princeton, NJ",
      score: 90.4,
    },
    {
      rank: 13,
      name: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      score: 89.8,
    },
    {
      rank: 14,
      name: "Northwestern University",
      location: "Evanston, IL",
      score: 89.2,
    },
    {
      rank: 15,
      name: "University of Southern California",
      location: "Los Angeles, CA",
      score: 88.6,
    },
    {
      rank: 16,
      name: "Johns Hopkins University",
      location: "Baltimore, MD",
      score: 88.0,
    },
    {
      rank: 17,
      name: "Rice University",
      location: "Houston, TX",
      score: 87.4,
    },
    {
      rank: 18,
      name: "University of Washington",
      location: "Seattle, WA",
      score: 86.8,
    },
    {
      rank: 19,
      name: "Virginia Tech",
      location: "Blacksburg, VA",
      score: 86.2,
    },
    {
      rank: 20,
      name: "Pennsylvania State University",
      location: "University Park, PA",
      score: 85.6,
    },
  ],
  "Data Science": [
    {
      rank: 1,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      score: 97.9,
    },
    {
      rank: 2,
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      score: 97.2,
    },
    {
      rank: 3,
      name: "Stanford University",
      location: "Stanford, CA",
      score: 96.5,
    },
    {
      rank: 4,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      score: 95.8,
    },
    {
      rank: 5,
      name: "University of Washington",
      location: "Seattle, WA",
      score: 94.9,
    },
    {
      rank: 6,
      name: "New York University",
      location: "New York, NY",
      score: 94.3,
    },
    {
      rank: 7,
      name: "University of Chicago",
      location: "Chicago, IL",
      score: 93.7,
    },
    {
      rank: 8,
      name: "Columbia University",
      location: "New York, NY",
      score: 93.1,
    },
    {
      rank: 9,
      name: "University of California, San Diego",
      location: "San Diego, CA",
      score: 92.5,
    },
    {
      rank: 10,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 91.9,
    },
    {
      rank: 11,
      name: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      score: 91.3,
    },
    {
      rank: 12,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      score: 90.7,
    },
    {
      rank: 13,
      name: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      score: 90.1,
    },
    {
      rank: 14,
      name: "Northwestern University",
      location: "Evanston, IL",
      score: 89.5,
    },
    {
      rank: 15,
      name: "University of Illinois Urbana-Champaign",
      location: "Champaign, IL",
      score: 88.9,
    },
    {
      rank: 16,
      name: "Duke University",
      location: "Durham, NC",
      score: 88.3,
    },
    {
      rank: 17,
      name: "University of Wisconsin-Madison",
      location: "Madison, WI",
      score: 87.7,
    },
    {
      rank: 18,
      name: "University of Maryland",
      location: "College Park, MD",
      score: 87.1,
    },
    {
      rank: 19,
      name: "University of Pennsylvania",
      location: "Philadelphia, PA",
      score: 86.5,
    },
    {
      rank: 20,
      name: "University of North Carolina",
      location: "Chapel Hill, NC",
      score: 85.9,
    },
  ],
  "Biomedical Engineering": [
    {
      rank: 1,
      name: "Johns Hopkins University",
      location: "Baltimore, MD",
      score: 98.1,
    },
    {
      rank: 2,
      name: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      score: 97.4,
    },
    {
      rank: 3,
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      score: 96.7,
    },
    {
      rank: 4,
      name: "Duke University",
      location: "Durham, NC",
      score: 95.9,
    },
    {
      rank: 5,
      name: "University of California, San Diego",
      location: "San Diego, CA",
      score: 95.2,
    },
    {
      rank: 6,
      name: "Stanford University",
      location: "Stanford, CA",
      score: 94.6,
    },
    {
      rank: 7,
      name: "University of Pennsylvania",
      location: "Philadelphia, PA",
      score: 94.0,
    },
    {
      rank: 8,
      name: "Rice University",
      location: "Houston, TX",
      score: 93.4,
    },
    {
      rank: 9,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 92.8,
    },
    {
      rank: 10,
      name: "Case Western Reserve University",
      location: "Cleveland, OH",
      score: 92.2,
    },
    {
      rank: 11,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      score: 91.6,
    },
    {
      rank: 12,
      name: "Northwestern University",
      location: "Evanston, IL",
      score: 91.0,
    },
    {
      rank: 13,
      name: "Boston University",
      location: "Boston, MA",
      score: 90.4,
    },
    {
      rank: 14,
      name: "University of Washington",
      location: "Seattle, WA",
      score: 89.8,
    },
    {
      rank: 15,
      name: "University of Virginia",
      location: "Charlottesville, VA",
      score: 89.2,
    },
    {
      rank: 16,
      name: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      score: 88.6,
    },
    {
      rank: 17,
      name: "Vanderbilt University",
      location: "Nashville, TN",
      score: 88.0,
    },
    {
      rank: 18,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      score: 87.4,
    },
    {
      rank: 19,
      name: "University of Pittsburgh",
      location: "Pittsburgh, PA",
      score: 86.8,
    },
    {
      rank: 20,
      name: "University of Minnesota",
      location: "Minneapolis, MN",
      score: 86.2,
    },
  ],
  "Mechanical Engineering": [
    {
      rank: 1,
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      score: 98.0,
    },
    {
      rank: 2,
      name: "Stanford University",
      location: "Stanford, CA",
      score: 97.3,
    },
    {
      rank: 3,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      score: 96.6,
    },
    {
      rank: 4,
      name: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      score: 95.8,
    },
    {
      rank: 5,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 95.1,
    },
    {
      rank: 6,
      name: "California Institute of Technology",
      location: "Pasadena, CA",
      score: 94.5,
    },
    {
      rank: 7,
      name: "University of Illinois Urbana-Champaign",
      location: "Champaign, IL",
      score: 93.9,
    },
    {
      rank: 8,
      name: "Purdue University",
      location: "West Lafayette, IN",
      score: 93.3,
    },
    {
      rank: 9,
      name: "Cornell University",
      location: "Ithaca, NY",
      score: 92.7,
    },
    {
      rank: 10,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      score: 92.1,
    },
    {
      rank: 11,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      score: 91.5,
    },
    {
      rank: 12,
      name: "Princeton University",
      location: "Princeton, NJ",
      score: 90.9,
    },
    {
      rank: 13,
      name: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      score: 90.3,
    },
    {
      rank: 14,
      name: "University of Wisconsin-Madison",
      location: "Madison, WI",
      score: 89.7,
    },
    {
      rank: 15,
      name: "Virginia Tech",
      location: "Blacksburg, VA",
      score: 89.1,
    },
    {
      rank: 16,
      name: "Pennsylvania State University",
      location: "University Park, PA",
      score: 88.5,
    },
    {
      rank: 17,
      name: "University of Southern California",
      location: "Los Angeles, CA",
      score: 87.9,
    },
    {
      rank: 18,
      name: "Ohio State University",
      location: "Columbus, OH",
      score: 87.3,
    },
    {
      rank: 19,
      name: "Texas A&M University",
      location: "College Station, TX",
      score: 86.7,
    },
    {
      rank: 20,
      name: "University of Maryland",
      location: "College Park, MD",
      score: 86.1,
    },
  ],
  "Environmental Science": [
    {
      rank: 1,
      name: "Stanford University",
      location: "Stanford, CA",
      score: 97.7,
    },
    {
      rank: 2,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      score: 97.0,
    },
    {
      rank: 3,
      name: "Yale University",
      location: "New Haven, CT",
      score: 96.3,
    },
    {
      rank: 4,
      name: "University of Washington",
      location: "Seattle, WA",
      score: 95.6,
    },
    {
      rank: 5,
      name: "Duke University",
      location: "Durham, NC",
      score: 94.9,
    },
    {
      rank: 6,
      name: "University of California, Santa Barbara",
      location: "Santa Barbara, CA",
      score: 94.3,
    },
    {
      rank: 7,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 93.7,
    },
    {
      rank: 8,
      name: "University of California, Davis",
      location: "Davis, CA",
      score: 93.1,
    },
    {
      rank: 9,
      name: "Cornell University",
      location: "Ithaca, NY",
      score: 92.5,
    },
    {
      rank: 10,
      name: "University of Colorado Boulder",
      location: "Boulder, CO",
      score: 91.9,
    },
    {
      rank: 11,
      name: "University of Wisconsin-Madison",
      location: "Madison, WI",
      score: 91.3,
    },
    {
      rank: 12,
      name: "University of North Carolina",
      location: "Chapel Hill, NC",
      score: 90.7,
    },
    {
      rank: 13,
      name: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      score: 90.1,
    },
    {
      rank: 14,
      name: "University of Minnesota",
      location: "Minneapolis, MN",
      score: 89.5,
    },
    {
      rank: 15,
      name: "University of Maryland",
      location: "College Park, MD",
      score: 88.9,
    },
    {
      rank: 16,
      name: "University of Vermont",
      location: "Burlington, VT",
      score: 88.3,
    },
    {
      rank: 17,
      name: "University of California, San Diego",
      location: "San Diego, CA",
      score: 87.7,
    },
    {
      rank: 18,
      name: "University of Oregon",
      location: "Eugene, OR",
      score: 87.1,
    },
    {
      rank: 19,
      name: "University of California, Irvine",
      location: "Irvine, CA",
      score: 86.5,
    },
    {
      rank: 20,
      name: "University of Arizona",
      location: "Tucson, AZ",
      score: 85.9,
    },
  ],
  Nursing: [
    {
      rank: 1,
      name: "Johns Hopkins University",
      location: "Baltimore, MD",
      score: 98.3,
    },
    {
      rank: 2,
      name: "University of Pennsylvania",
      location: "Philadelphia, PA",
      score: 97.6,
    },
    {
      rank: 3,
      name: "Duke University",
      location: "Durham, NC",
      score: 96.9,
    },
    {
      rank: 4,
      name: "University of Washington",
      location: "Seattle, WA",
      score: 96.2,
    },
    {
      rank: 5,
      name: "University of North Carolina",
      location: "Chapel Hill, NC",
      score: 95.5,
    },
    {
      rank: 6,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 94.9,
    },
    {
      rank: 7,
      name: "Emory University",
      location: "Atlanta, GA",
      score: 94.3,
    },
    {
      rank: 8,
      name: "Vanderbilt University",
      location: "Nashville, TN",
      score: 93.7,
    },
    {
      rank: 9,
      name: "University of California, San Francisco",
      location: "San Francisco, CA",
      score: 93.1,
    },
    {
      rank: 10,
      name: "Case Western Reserve University",
      location: "Cleveland, OH",
      score: 92.5,
    },
    {
      rank: 11,
      name: "New York University",
      location: "New York, NY",
      score: 91.9,
    },
    {
      rank: 12,
      name: "University of Pittsburgh",
      location: "Pittsburgh, PA",
      score: 91.3,
    },
    {
      rank: 13,
      name: "University of Illinois Chicago",
      location: "Chicago, IL",
      score: 90.7,
    },
    {
      rank: 14,
      name: "Ohio State University",
      location: "Columbus, OH",
      score: 90.1,
    },
    {
      rank: 15,
      name: "University of Virginia",
      location: "Charlottesville, VA",
      score: 89.5,
    },
    {
      rank: 16,
      name: "University of Alabama",
      location: "Birmingham, AL",
      score: 88.9,
    },
    {
      rank: 17,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      score: 88.3,
    },
    {
      rank: 18,
      name: "University of Maryland",
      location: "Baltimore, MD",
      score: 87.7,
    },
    {
      rank: 19,
      name: "University of Florida",
      location: "Gainesville, FL",
      score: 87.1,
    },
    {
      rank: 20,
      name: "University of Minnesota",
      location: "Minneapolis, MN",
      score: 86.5,
    },
  ],
  Finance: [
    {
      rank: 1,
      name: "University of Pennsylvania (Wharton)",
      location: "Philadelphia, PA",
      score: 98.7,
    },
    {
      rank: 2,
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      score: 98.0,
    },
    {
      rank: 3,
      name: "University of Chicago",
      location: "Chicago, IL",
      score: 97.3,
    },
    {
      rank: 4,
      name: "New York University",
      location: "New York, NY",
      score: 96.6,
    },
    {
      rank: 5,
      name: "Stanford University",
      location: "Stanford, CA",
      score: 95.9,
    },
    {
      rank: 6,
      name: "Harvard University",
      location: "Cambridge, MA",
      score: 95.3,
    },
    {
      rank: 7,
      name: "Columbia University",
      location: "New York, NY",
      score: 94.7,
    },
    {
      rank: 8,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      score: 94.1,
    },
    {
      rank: 9,
      name: "Yale University",
      location: "New Haven, CT",
      score: 93.5,
    },
    {
      rank: 10,
      name: "Princeton University",
      location: "Princeton, NJ",
      score: 92.9,
    },
    {
      rank: 11,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      score: 92.3,
    },
    {
      rank: 12,
      name: "Duke University",
      location: "Durham, NC",
      score: 91.7,
    },
    {
      rank: 13,
      name: "Cornell University",
      location: "Ithaca, NY",
      score: 91.1,
    },
    {
      rank: 14,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      score: 90.5,
    },
    {
      rank: 15,
      name: "University of Virginia",
      location: "Charlottesville, VA",
      score: 89.9,
    },
    {
      rank: 16,
      name: "University of Southern California",
      location: "Los Angeles, CA",
      score: 89.3,
    },
    {
      rank: 17,
      name: "Indiana University",
      location: "Bloomington, IN",
      score: 88.7,
    },
    {
      rank: 18,
      name: "University of North Carolina",
      location: "Chapel Hill, NC",
      score: 88.1,
    },
    {
      rank: 19,
      name: "Boston College",
      location: "Chestnut Hill, MA",
      score: 87.5,
    },
    {
      rank: 20,
      name: "Georgetown University",
      location: "Washington, DC",
      score: 86.9,
    },
  ],
};

const SchoolRanking = () => {
  const [selectedMajor, setSelectedMajor] = useState(majors[0]);

  const currentRankings = schoolRankings[selectedMajor] || [];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-64 2xl:px-80 pb-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Top Schools by Major
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Explore top-ranked universities for different STEM majors to help
            you make informed decisions about your education.
          </p>
        </div>

        {/* Major Toggle */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {majors.map((major) => (
            <button
              key={major}
              onClick={() => setSelectedMajor(major)}
              className={`px-3 py-1.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm lg:text-base font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                selectedMajor === major
                  ? "bg-primary/10 border-2 border-primary shadow-md scale-105"
                  : "bg-white text-text border-2 border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5 hover:shadow-sm"
              }`}
              style={selectedMajor === major ? { color: "#4f46e5" } : {}}
            >
              {major}
            </button>
          ))}
        </div>

        {/* Rankings Table */}
        <div className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                    School Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {currentRankings.map((school) => (
                  <tr
                    key={school.rank}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            school.rank === 1
                              ? "bg-yellow-100 text-yellow-800"
                              : school.rank === 2
                              ? "bg-gray-100 text-gray-800"
                              : school.rank === 3
                              ? "bg-orange-100 text-orange-800"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {school.rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-text font-medium">
                          {school.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-text-muted">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{school.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end">
                        <TrendingUp className="w-4 h-4 text-primary mr-2" />
                        <span className="font-semibold text-text">
                          {school.score}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolRanking;
