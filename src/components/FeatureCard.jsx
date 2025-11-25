import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, link, linkText }) => {
    return (
        <div className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 h-full flex flex-col">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
            <p className="text-text-muted mb-6 flex-grow">{description}</p>
            {link && (
                <Link to={link} className="inline-flex items-center text-primary font-medium hover:text-primary-hover mt-auto">
                    {linkText || 'Learn more'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            )}
        </div>
    );
};

export default FeatureCard;
