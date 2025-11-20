import { artisans } from "@/data/artisans";
import ArtisanCard from "./ArtisanCard";

interface ArtisanListProps {
  selectedCategory: string | null;
}

const ArtisanList = ({ selectedCategory }: ArtisanListProps) => {
  const filteredArtisans = selectedCategory
    ? artisans.filter(a => a.category === selectedCategory)
    : artisans;

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {selectedCategory ? 'Filtered' : 'Featured'} Artisans
          </h2>
          <p className="text-muted-foreground">
            {filteredArtisans.length} professionals available
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisanList;
