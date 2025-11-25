import React from 'react';
import { CheckCircle, Circle, ArrowDown } from 'lucide-react';

const RoadmapMap = ({ title, steps }) => {
    return (
        <div className="bg-surface rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-text mb-8">{title}</h3>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex items-start group">
                            <div className="flex-shrink-0 mr-4 relative z-10 bg-surface">
                                {step.completed ? (
                                    <CheckCircle className="w-8 h-8 text-secondary fill-white" />
                                ) : (
                                    <Circle className="w-8 h-8 text-primary fill-white" />
                                )}
                            </div>

                            <div className="flex-grow pt-1">
                                <h4 className="text-lg font-bold text-text mb-1">{step.title}</h4>
                                <p className="text-text-muted text-sm mb-2">{step.description}</p>
                                {step.duration && (
                                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                        {step.duration}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoadmapMap;

