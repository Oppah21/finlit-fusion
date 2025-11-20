import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MarketplaceHero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Find Your Perfect
          <span className="block mt-2 bg-gradient-to-r from-neon-cyan via-neon-mint to-neon-blue bg-clip-text text-transparent">
            Artisan Match
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Connect with verified contractors, builders, and skilled artisans for your next home project
        </p>
        
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 animate-scale-in">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for plumbers, electricians, builders..."
              className="pl-10 h-12 bg-card/50 border-border"
            />
          </div>
          <Button size="lg" className="h-12 px-8 shadow-neon">
            Search
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <div className="glass-card px-4 py-2">
            <span className="text-neon-cyan font-semibold">500+</span> Verified Artisans
          </div>
          <div className="glass-card px-4 py-2">
            <span className="text-neon-mint font-semibold">10K+</span> Completed Projects
          </div>
          <div className="glass-card px-4 py-2">
            <span className="text-neon-blue font-semibold">4.8★</span> Average Rating
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceHero;
