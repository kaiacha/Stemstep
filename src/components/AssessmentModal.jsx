import React, { useState } from 'react';
import { X, Check, ArrowRight, Award } from 'lucide-react';

const AssessmentModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const questions = [
        {
            text: "I enjoy solving puzzles and logic games.",
            category: "Technology"
        },
        {
            text: "I like building things with my hands or understanding how things work.",
            category: "Engineering"
        },
        {
            text: "I am curious about nature, animals, or how the human body works.",
            category: "Science"
        },
        {
            text: "I like analyzing numbers, patterns, and charts.",
            category: "Data Science"
        },
        {
            text: "I enjoy designing creative solutions to problems.",
            category: "Engineering"
        }
    ];

    const handleAnswer = (value) => {
        const newAnswers = [...answers, { ...questions[step], value }];
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers) => {
        // Simple logic to find the most frequent category
        const counts = {};
        finalAnswers.forEach(a => {
            if (a.value) {
                counts[a.category] = (counts[a.category] || 0) + 1;
            }
        });

        const topCategory = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, 'General STEM');
        setResult(topCategory);
    };

    const resetQuiz = () => {
        setStep(0);
        setAnswers([]);
        setResult(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-surface rounded-2xl shadow-xl w-full max-w-lg overflow-hidden relative animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-text-muted" />
                </button>

                <div className="p-8">
                    {!result ? (
                        <>
                            <div className="mb-8">
                                <div className="flex justify-between text-sm font-medium text-text-muted mb-2">
                                    <span>Question {step + 1} of {questions.length}</span>
                                    <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-text mb-8 text-center">
                                {questions[step].text}
                            </h2>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleAnswer(false)}
                                    className="py-4 px-6 rounded-xl border border-gray-200 text-text font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
                                >
                                    Not really
                                </button>
                                <button
                                    onClick={() => handleAnswer(true)}
                                    className="py-4 px-6 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
                                >
                                    Yes, that's me!
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-text mb-4">You might enjoy...</h2>
                            <p className="text-xl text-primary font-bold mb-6">{result} Careers!</p>
                            <p className="text-text-muted mb-8">
                                Based on your answers, you seem to have a natural inclination towards {result}.
                                Check out our Explore page to see careers in this field!
                            </p>

                            <div className="flex flex-col gap-3">
                                <a
                                    href="/explore"
                                    className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-all flex items-center justify-center"
                                >
                                    Explore {result} Careers
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                                <button
                                    onClick={resetQuiz}
                                    className="w-full py-3 rounded-xl border border-gray-200 text-text font-medium hover:bg-gray-50 transition-all"
                                >
                                    Retake Quiz
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AssessmentModal;
