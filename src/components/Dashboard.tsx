import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Wallet } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { 
      label: "Total Balance", 
      value: "$12,450.00", 
      change: "+12.5%", 
      trend: "up",
      icon: Wallet,
      color: "text-primary"
    },
    { 
      label: "Monthly Income", 
      value: "$5,200.00", 
      change: "+8.2%", 
      trend: "up",
      icon: TrendingUp,
      color: "text-success"
    },
    { 
      label: "Monthly Expenses", 
      value: "$3,840.00", 
      change: "-4.3%", 
      trend: "down",
      icon: CreditCard,
      color: "text-destructive"
    },
    { 
      label: "Savings", 
      value: "$1,360.00", 
      change: "+23.1%", 
      trend: "up",
      icon: DollarSign,
      color: "text-secondary"
    },
  ];

  const budgetCategories = [
    { name: "Housing", spent: 1200, budget: 1500, color: "bg-primary" },
    { name: "Food", spent: 450, budget: 600, color: "bg-secondary" },
    { name: "Transportation", spent: 280, budget: 400, color: "bg-neon-blue" },
    { name: "Entertainment", spent: 180, budget: 300, color: "bg-success" },
    { name: "Utilities", spent: 340, budget: 400, color: "bg-destructive" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Financial <span className="text-primary">Overview</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Track your financial health at a glance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-muted/50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Budget Breakdown */}
        <Card className="glass-card p-8 animate-scale-in">
          <h3 className="text-2xl font-semibold mb-6">Budget Breakdown</h3>
          <div className="space-y-6">
            {budgetCategories.map((category, index) => {
              const percentage = (category.spent / category.budget) * 100;
              const isOverBudget = percentage > 90;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <div className="text-right">
                      <span className="font-semibold">${category.spent}</span>
                      <span className="text-muted-foreground text-sm"> / ${category.budget}</span>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={percentage} 
                      className="h-2"
                    />
                    {isOverBudget && (
                      <span className="absolute -top-6 right-0 text-xs text-destructive">
                        Near limit!
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{percentage.toFixed(0)}% used</span>
                    <span>${category.budget - category.spent} remaining</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
