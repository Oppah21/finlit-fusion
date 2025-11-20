import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, PiggyBank } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Financial growth visualization" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Smart Financial Management</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Master Your Money,
            <br />
            <span className="bg-gradient-to-r from-primary via-neon-blue to-secondary bg-clip-text text-transparent animate-glow">
              Build Your Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Take control of your finances with intelligent budgeting, real-time tracking, 
            and personalized financial education. Your journey to financial freedom starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon transition-smooth group text-lg px-8"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth text-lg px-8"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: PiggyBank, title: "Smart Budgeting", desc: "AI-powered budget recommendations" },
              { icon: TrendingUp, title: "Real-time Tracking", desc: "Monitor expenses as they happen" },
              { icon: Shield, title: "Secure & Private", desc: "Bank-level encryption" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
