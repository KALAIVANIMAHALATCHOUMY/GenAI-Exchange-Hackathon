import { useState } from "react";
import { FileText, Image, Mic, Send, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface InputSectionProps {
  onAnalyze: (data: { type: string; content: string }) => void;
}

const InputSection = ({ onAnalyze }: InputSectionProps) => {
  const [textInput, setTextInput] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log("File dropped:", e.dataTransfer.files[0]);
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-inter mb-4 text-foreground">
            Verify Your Content
          </h2>
          <p className="text-xl text-muted-foreground">
            Upload text, images, or audio files to get instant fact-checking results
          </p>
        </div>

        <Card className="shadow-lg border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Choose Input Type
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-lg p-1 bg-secondary">
                <TabsTrigger value="text" className="flex items-center gap-2 rounded-md transition-smooth">
                  <FileText className="w-4 h-4" />
                  Text
                </TabsTrigger>
                <TabsTrigger value="image" className="flex items-center gap-2 rounded-md transition-smooth">
                  <Image className="w-4 h-4" />
                  Image
                </TabsTrigger>
                <TabsTrigger value="audio" className="flex items-center gap-2 rounded-md transition-smooth">
                  <Mic className="w-4 h-4" />
                  Audio
                </TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="mt-8">
                <div className="space-y-6">
                  <Textarea
                    placeholder="Paste the text content you want to fact-check here. Include headlines, social media posts, news articles, or any text-based content..."
                    className="min-h-[200px] resize-none border-2 rounded-lg transition-smooth focus:border-primary text-base"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                  />
                  <Button 
                    onClick={() => onAnalyze({ type: "text", content: textInput })}
                    disabled={!textInput.trim()}
                    className="w-full gradient-primary text-white py-4 rounded-lg text-lg font-medium ripple transition-smooth hover:shadow-glow group"
                  >
                    <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    Analyze Text
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="image" className="mt-8">
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-smooth ${
                    dragActive 
                      ? "border-primary bg-primary/10" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Drop images here or click to upload
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Upload screenshots, social media posts, memes, or any image with text content
                  </p>
                  <Button variant="outline" className="rounded-lg border-2 hover:border-primary">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Files
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="audio" className="mt-8">
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-smooth ${
                    dragActive 
                      ? "border-primary bg-primary/10" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Mic className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Upload audio files for transcription
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Upload voice messages, podcasts, or audio clips to extract and verify speech content
                  </p>
                  <Button variant="outline" className="rounded-lg border-2 hover:border-primary">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Audio Files
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InputSection;