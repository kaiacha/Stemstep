import React, { useState } from 'react';
import { Play, User, Briefcase } from 'lucide-react';

const VideoCard = ({ title, name, role, company, videoId, thumbnail }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="bg-surface rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-video bg-gray-900">
                {!isPlaying ? (
                    <>
                        {thumbnail ? (
                            <img 
                                src={thumbnail} 
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                        <Play className="w-8 h-8 text-white fill-white" />
                                    </div>
                                    <p className="text-white/80 text-sm">Video Preview</p>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={handlePlay}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                            aria-label={`Play video: ${title}`}
                        >
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </button>
                    </>
                ) : (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-text-muted">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-medium">{name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{role}</span>
                        {company && <span className="text-sm">at {company}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;

