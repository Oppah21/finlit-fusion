import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import FinancialTips from "@/components/FinancialTips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <FinancialTips />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
