import React from 'react';
import { Clock, BarChart, Play } from 'lucide-react';

const ActivityModule = ({ title, description, duration, difficulty, image }) => {
    return (
        <div className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Play className="w-12 h-12 text-primary opacity-50" />
                    </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    Interactive
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
                <p className="text-text-muted text-sm mb-6 line-clamp-2">{description}</p>

                <div className="flex items-center justify-between text-sm text-text-muted mb-6">
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center">
                        <BarChart className="w-4 h-4 mr-1" />
                        <span>{difficulty}</span>
                    </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    Start Activity
                </button>
            </div>
        </div>
    );
};

export default ActivityModule;
