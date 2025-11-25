import React from 'react';
import { Trophy, MapPin, ExternalLink } from 'lucide-react';

const SchoolRankings = ({ category }) => {
    // Mock data for rankings
    const rankings = {
        'Technology': [
            { name: 'MIT', location: 'Cambridge, MA', program: 'Computer Science' },
            { name: 'Stanford University', location: 'Stanford, CA', program: 'Computer Science' },
            { name: 'Carnegie Mellon', location: 'Pittsburgh, PA', program: 'Software Engineering' },
            { name: 'UC Berkeley', location: 'Berkeley, CA', program: 'EECS' },
            { name: 'Georgia Tech', location: 'Atlanta, GA', program: 'Computing' },
        ],
        'Engineering': [
            { name: 'MIT', location: 'Cambridge, MA', program: 'Mechanical Engineering' },
            { name: 'Stanford University', location: 'Stanford, CA', program: 'Engineering' },
            { name: 'UC Berkeley', location: 'Berkeley, CA', program: 'Civil Engineering' },
            { name: 'Caltech', location: 'Pasadena, CA', program: 'Engineering' },
            { name: 'Georgia Tech', location: 'Atlanta, GA', program: 'Industrial Engineering' },
        ],
        'Science': [
            { name: 'Harvard University', location: 'Cambridge, MA', program: 'Biological Sciences' },
            { name: 'MIT', location: 'Cambridge, MA', program: 'Physics' },
            { name: 'Stanford University', location: 'Stanford, CA', program: 'Chemistry' },
            { name: 'Caltech', location: 'Pasadena, CA', program: 'Earth Sciences' },
            { name: 'UC Berkeley', location: 'Berkeley, CA', program: 'Environmental Science' },
        ],
        'Data Science': [
            { name: 'UC Berkeley', location: 'Berkeley, CA', program: 'Data Science' },
            { name: 'MIT', location: 'Cambridge, MA', program: 'Business Analytics' },
            { name: 'Carnegie Mellon', location: 'Pittsburgh, PA', program: 'Statistics & DS' },
            { name: 'Stanford University', location: 'Stanford, CA', program: 'Statistics' },
            { name: 'University of Washington', location: 'Seattle, WA', program: 'Data Science' },
        ],
        'All': [
            { name: 'MIT', location: 'Cambridge, MA', program: 'STEM Overall' },
            { name: 'Stanford University', location: 'Stanford, CA', program: 'STEM Overall' },
            { name: 'Caltech', location: 'Pasadena, CA', program: 'STEM Overall' },
            { name: 'Harvard University', location: 'Cambridge, MA', program: 'STEM Overall' },
            { name: 'UC Berkeley', location: 'Berkeley, CA', program: 'STEM Overall' },
        ]
    };

    const currentRankings = rankings[category] || rankings['All'];

    return (
        <div className="bg-surface rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-100 rounded-lg">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-text">Top Schools for {category === 'All' ? 'STEM' : category}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="py-3 px-4 text-sm font-semibold text-text-muted">Rank</th>
                            <th className="py-3 px-4 text-sm font-semibold text-text-muted">School</th>
                            <th className="py-3 px-4 text-sm font-semibold text-text-muted">Location</th>
                            <th className="py-3 px-4 text-sm font-semibold text-text-muted">Top Program</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRankings.map((school, index) => (
                            <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-4">
                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${index === 0 ? 'bg-yellow-100 text-yellow-700' :
                                            index === 1 ? 'bg-gray-100 text-gray-700' :
                                                index === 2 ? 'bg-orange-100 text-orange-800' :
                                                    'text-text-muted'
                                        }`}>
                                        {index + 1}
                                    </span>
                                </td>
                                <td className="py-4 px-4 font-medium text-text">{school.name}</td>
                                <td className="py-4 px-4 text-text-muted text-sm">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {school.location}
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-primary text-sm font-medium">{school.program}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 text-center">
                <p className="text-sm text-text-muted">
                    * Rankings based on various factors including program reputation, research output, and student success.
                </p>
            </div>
        </div>
    );
};

export default SchoolRankings;
