import { ArrowRight, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplineDunesScene from "@/components/SplineDunesScene";
import factCheckIcon from "@/assets/fact-check-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main content - no background since Spline is global */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={factCheckIcon} 
              alt="TruthLens" 
              className="w-20 h-20 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Main heading - positioned to complement 3D TruthLens text */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-medium text-foreground/90 mb-4">
            AI for Fact-Checking
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Verify before you trust. Powered by AI + Google Cloud technology to detect misinformation and validate content authenticity.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="gradient-primary text-white px-8 py-4 text-lg font-medium rounded-lg transition-smooth hover:shadow-glow group"
          >
            Start Verifying
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-medium rounded-lg border-2 transition-smooth hover:border-primary hover:text-primary"
          >
            Learn More
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border transition-smooth hover:shadow-lg">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Detection</h3>
            <p className="text-muted-foreground text-center">Advanced algorithms analyze content for misinformation patterns</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg bg-card border transition-smooth hover:shadow-lg">
            <Zap className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant Verification</h3>
            <p className="text-muted-foreground text-center">Get real-time fact-checking results in seconds</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg bg-card border transition-smooth hover:shadow-lg">
            <Target className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Multi-Source Check</h3>
            <p className="text-muted-foreground text-center">Cross-reference with trusted fact-checking sources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;