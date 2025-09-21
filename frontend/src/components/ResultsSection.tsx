import { AlertTriangle, CheckCircle, ExternalLink, ThumbsUp, ThumbsDown, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface ResultsSectionProps {
  isVisible: boolean;
}

const ResultsSection = ({ isVisible }: ResultsSectionProps) => {
  if (!isVisible) return null;

  // Mock data for demonstration
  const credibilityScore = 25;
  const riskLevel = "High";
  const analysisResult = {
    prediction: "This content is likely misinformation",
    explanation: "Several red flags detected: emotional language, urgency tactics, lack of credible sources, and claims that contradict established facts.",
    riskFactors: [
      "Urgent call-to-action language",
      "Unverified statistics",
      "Lack of credible sources",
      "Emotional manipulation"
    ]
  };

  const sources = [
    { name: "Snopes", verdict: "False", credibility: "High", logo: "🔍" },
    { name: "FactCheck.org", verdict: "Misleading", credibility: "High", logo: "✓" },
    { name: "Reuters Fact Check", verdict: "False", credibility: "High", logo: "📰" },
    { name: "AP Fact Check", verdict: "Unsubstantiated", credibility: "High", logo: "📋" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-inter mb-4">
            Analysis Results
          </h2>
          <p className="text-xl text-muted-foreground">
            AI-powered fact-checking analysis complete
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credibility Gauge */}
          <Card className="lg:col-span-1 shadow-xl border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Credibility Score
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="stroke-muted"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="stroke-destructive transition-all duration-1000 ease-out"
                    strokeWidth="3"
                    strokeDasharray={`${credibilityScore}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-destructive">{credibilityScore}%</span>
                  <span className="text-sm text-muted-foreground">Credible</span>
                </div>
              </div>

              <div className="space-y-2">
                <Badge variant="destructive" className="text-sm px-3 py-1">
                  {riskLevel} Risk
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Based on AI analysis and source verification
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Insight */}
          <Card className="lg:col-span-2 shadow-xl border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                AI Analysis Insight
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="font-semibold text-destructive mb-2">
                  ⚠️ {analysisResult.prediction}
                </p>
                <p className="text-foreground/80">
                  {analysisResult.explanation}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Risk Factors Detected:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {analysisResult.riskFactors.map((factor, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                      <TrendingDown className="w-4 h-4 text-destructive" />
                      <span className="text-sm">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fact-Check Sources */}
          <Card className="lg:col-span-3 shadow-xl border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-6 h-6 text-primary" />
                Fact-Check Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sources.map((source, index) => (
                  <div key={index} className="p-4 rounded-xl border bg-card hover:shadow-lg transition-smooth">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{source.logo}</span>
                      <div>
                        <h5 className="font-semibold">{source.name}</h5>
                        <p className="text-sm text-muted-foreground">{source.credibility} Credibility</p>
                      </div>
                    </div>
                    <Badge 
                      variant={source.verdict === "False" ? "destructive" : "secondary"}
                      className="w-full justify-center"
                    >
                      {source.verdict}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback Section */}
        <Card className="shadow-xl border-0 bg-card/60 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold">Was this analysis helpful?</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" className="gap-2 rounded-xl">
                  <ThumbsUp className="w-5 h-5" />
                  Yes, helpful
                </Button>
                <Button variant="outline" size="lg" className="gap-2 rounded-xl">
                  <ThumbsDown className="w-5 h-5" />
                  Needs improvement
                </Button>
              </div>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Your feedback helps us improve our AI fact-checking accuracy and provide better results.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResultsSection;