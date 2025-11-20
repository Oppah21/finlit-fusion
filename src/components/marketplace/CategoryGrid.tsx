import { categories } from "@/data/artisans";
import { Card } from "@/components/ui/card";

interface CategoryGridProps {
  onCategorySelect: (categoryId: string | null) => void;
  selectedCategory: string | null;
}

const CategoryGrid = ({ onCategorySelect, selectedCategory }: CategoryGridProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              onClick={() => onCategorySelect(selectedCategory === category.id ? null : category.id)}
              className={`glass-card p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-neon ${
                selectedCategory === category.id ? 'ring-2 ring-primary shadow-neon' : ''
              }`}
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-foreground">{category.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
