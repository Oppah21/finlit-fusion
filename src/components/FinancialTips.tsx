import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, BookOpen, TrendingUp, Target, ArrowRight } from "lucide-react";

const FinancialTips = () => {
  const tips = [
    {
      icon: Target,
      title: "Set Clear Financial Goals",
      description: "Define short-term and long-term objectives to stay motivated and track your progress effectively.",
      category: "Planning"
    },
    {
      icon: TrendingUp,
      title: "Build an Emergency Fund",
      description: "Aim to save 3-6 months of expenses for unexpected situations. Start small and build consistently.",
      category: "Savings"
    },
    {
      icon: Lightbulb,
      title: "Follow the 50/30/20 Rule",
      description: "Allocate 50% to needs, 30% to wants, and 20% to savings. Adjust based on your situation.",
      category: "Budgeting"
    },
    {
      icon: BookOpen,
      title: "Track Every Expense",
      description: "Awareness is the first step to control. Monitor where your money goes to identify savings opportunities.",
      category: "Tracking"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card border border-secondary/20">
            <Lightbulb className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Financial Literacy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Smart Money <span className="text-secondary">Tips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn essential financial strategies to build wealth and secure your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tips.map((tip, index) => (
            <Card 
              key={index}
              className="glass-card p-8 hover:scale-105 hover:shadow-neon transition-smooth animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-smooth">
                  <tip.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {tip.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-smooth">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-scale-in">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Level Up Your Financial Knowledge?
            </h3>
            <p className="text-muted-foreground mb-6">
              Access our comprehensive library of financial courses, guides, and expert insights
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-neon group">
              Explore Learning Center
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinancialTips;
