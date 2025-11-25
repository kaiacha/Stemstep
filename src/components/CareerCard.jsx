import React from 'react';

const CareerCard = ({ title, description, salary, education, area, category }) => {
    const displayArea = area || category;
    
    return (
        <div className="bg-surface rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200 p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    {displayArea && (
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                            {displayArea}
                        </span>
                    )}
                    <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
                </div>
            </div>

            <p className="text-text-muted text-sm md:text-base mb-6 flex-grow leading-relaxed">{description}</p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                {salary && (
                    <span className="text-lg font-bold text-primary">{salary}</span>
                )}
                <span className="text-sm font-medium text-primary">
                    Learn More →
                </span>
            </div>
        </div>
    );
};

export default CareerCard;
