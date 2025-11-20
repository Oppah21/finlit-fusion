import { useState } from "react";
import Navbar from "@/components/Navbar";
import MarketplaceHero from "@/components/marketplace/MarketplaceHero";
import CategoryGrid from "@/components/marketplace/CategoryGrid";
import ArtisanList from "@/components/marketplace/ArtisanList";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <MarketplaceHero />
        <CategoryGrid 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <ArtisanList selectedCategory={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
