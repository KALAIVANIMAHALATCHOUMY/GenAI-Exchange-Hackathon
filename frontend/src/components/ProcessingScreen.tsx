import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, Search, Brain } from "lucide-react";

interface ProcessingScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

const ProcessingScreen = ({ isVisible, onComplete }: ProcessingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "Extracting text...",
      description: "Analyzing content structure and extracting key information"
    },
    {
      icon: Brain,
      title: "Checking facts...",
      description: "Cross-referencing with trusted sources and databases"
    },
    {
      icon: CheckCircle,
      title: "Generating insights...",
      description: "Compiling results and credibility assessment"
    }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Progress Circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="stroke-muted"
              strokeWidth="2"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="stroke-primary transition-all duration-300 ease-out"
              strokeWidth="2"
              strokeDasharray={`${progress}, 100`}
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Progress percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Current step */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            {React.createElement(steps[currentStep].icon, {
              className: "w-12 h-12 text-primary animate-pulse"
            })}
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            {steps[currentStep].title}
          </h2>
          <p className="text-muted-foreground">
            {steps[currentStep].description}
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center space-x-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 ${
                index <= currentStep ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {index <= currentStep ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Clock className="w-5 h-5" />
              )}
              <span className="text-sm font-medium hidden sm:inline">
                {step.title.replace('...', '')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessingScreen;