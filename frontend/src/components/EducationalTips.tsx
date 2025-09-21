import React, { useState, useEffect } from "react";
import { Lightbulb, RefreshCw, Eye, Shield, Search, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EducationalTips = () => {
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    {
      icon: Eye,
      title: "Verify source URLs",
      description: "Check if the source website is reputable and has a history of accurate reporting. Look for established news organizations and fact-checking sites.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Look for multiple confirmations",
      description: "Cross-reference the information with multiple reliable sources. If only one source reports it, be skeptical until verified elsewhere.",
      color: "text-accent"
    },
    {
      icon: AlertCircle,
      title: "Beware of emotional headlines",
      description: "Misinformation often uses strong emotional language to bypass critical thinking. Be extra cautious with shocking or outrageous claims.",
      color: "text-destructive"
    },
    {
      icon: Shield,
      title: "Check publication dates",
      description: "Ensure the information is current and relevant. Old news can be misleading when shared without proper context about timing.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Question your bias",
      description: "We're more likely to believe information that confirms our existing beliefs. Actively seek out opposing viewpoints and evidence.",
      color: "text-accent"
    },
    {
      icon: RefreshCw,
      title: "Trace back to original sources",
      description: "Follow citation chains to find the original research, study, or official statement rather than relying on secondary reporting.",
      color: "text-primary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [tips.length]);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  return (
    <section className="py-16 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-inter mb-4">
            Fact-Checking Tips
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn how to identify misinformation and verify content yourself
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              {React.createElement(tips[currentTip].icon, {
                className: `w-16 h-16 ${tips[currentTip].color}`
              })}
            </div>
            <CardTitle className="text-2xl">
              {tips[currentTip].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {tips[currentTip].description}
            </p>

            <div className="flex justify-center gap-4 items-center">
              <Button
                variant="outline"
                size="lg"
                onClick={nextTip}
                className="gap-2 rounded-xl"
              >
                <RefreshCw className="w-4 h-4" />
                Next Tip
              </Button>
              
              <div className="flex gap-2">
                {tips.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTip(index)}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      index === currentTip 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Tip {currentTip + 1} of {tips.length}</span> • 
                Tips rotate automatically every 5 seconds
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationalTips;