import { Artisan } from "@/data/artisans";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Briefcase, CheckCircle } from "lucide-react";

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard = ({ artisan }: ArtisanCardProps) => {
  return (
    <Card className="glass-card hover:shadow-neon transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{artisan.avatar}</div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{artisan.name}</h3>
                {artisan.verified && (
                  <CheckCircle className="h-4 w-4 text-neon-mint" />
                )}
              </div>
              <p className="text-sm text-muted-foreground capitalize">{artisan.category}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">{artisan.rating}</span>
            <span className="text-muted-foreground">({artisan.reviewCount})</span>
          </div>
          <div className="font-semibold text-neon-cyan">
            ${artisan.hourlyRate}/hr
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{artisan.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            <span>{artisan.yearsExperience}y exp</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {artisan.bio}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {artisan.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button variant="outline" className="flex-1">
            View Profile
          </Button>
          <Button className="flex-1">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtisanCard;
