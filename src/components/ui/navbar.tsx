import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-glow">
              <Pizza className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Bella Pizza</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  isActive ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
                }`
              }
            >
              Hjem
            </NavLink>
            <Button variant="hero" size="sm" asChild>
              <NavLink to="/bestil">
                Bestil Nu
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}