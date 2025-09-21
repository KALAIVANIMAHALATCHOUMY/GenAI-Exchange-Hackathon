import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TruthLens
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              How it Works
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          {/* User Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-lg">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                How it Works
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                Contact
              </a>
              <div className="border-t pt-3">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;