import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InputSection from "@/components/InputSection";
import ProcessingScreen from "@/components/ProcessingScreen";
import ResultsSection from "@/components/ResultsSection";
import EducationalTips from "@/components/EducationalTips";
import SplineDunesScene from "@/components/SplineDunesScene";

const Index = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = (data: { type: string; content: string }) => {
    console.log("Analyzing:", data);
    setIsProcessing(true);
    setShowResults(false);
  };

  const handleProcessingComplete = () => {
    setIsProcessing(false);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen relative">
      {/* Full screen Spline background */}
      <SplineDunesScene />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <InputSection onAnalyze={handleAnalyze} />
        {showResults && <ResultsSection isVisible={showResults} />}
        <EducationalTips />
      </div>
      
      <ProcessingScreen 
        isVisible={isProcessing} 
        onComplete={handleProcessingComplete}
      />
    </div>
  );
};

export default Index;
