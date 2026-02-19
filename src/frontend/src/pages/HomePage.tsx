import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Star, Award } from 'lucide-react';

export default function HomePage() {
  const sections = [
    {
      icon: BookOpen,
      title: 'Types & Guide',
      description: 'Explore fragrance families, note structures, and concentration levels',
      path: '/types',
      badge: 'Educational',
    },
    {
      icon: Star,
      title: 'Reviews',
      description: 'Detailed reviews of popular and niche perfumes',
      path: '/reviews',
      badge: 'Expert Insights',
    },
    {
      icon: Award,
      title: 'Top Picks',
      description: 'Curated recommendations and notable perfume houses',
      path: '/top-picks',
      badge: 'Curated',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/generated/perfume-hero.dim_1600x600.png"
            alt="Perfume collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-balance">
              Discover the Art of Perfumery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Your comprehensive guide to understanding fragrances, from classic compositions to modern masterpieces. 
              Explore fragrance families, read expert reviews, and find your signature scent.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Link to="/types">
                <Button size="lg" className="font-medium">
                  Explore Fragrance Types
                </Button>
              </Link>
              <Link to="/reviews">
                <Button size="lg" variant="outline" className="font-medium">
                  Read Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2>Understanding Perfumes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Perfume is more than just a pleasant scent—it's an art form that combines chemistry, creativity, 
              and emotion. Each fragrance tells a story through carefully selected notes that evolve over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Fragrance Families</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From floral and woody to oriental and fresh, each family has distinct characteristics 
                  that define its personality and appeal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Note Pyramid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Perfumes unfold in three stages: top notes create the first impression, heart notes 
                  form the character, and base notes provide lasting depth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Concentration Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From light Eau de Cologne to intense Parfum, concentration determines a fragrance's 
                  strength, longevity, and price point.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="container py-16 md:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2>Explore Our Guides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate through our comprehensive resources to deepen your understanding of perfumery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.path} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary">{section.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription className="text-base">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={section.path}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Background Accent Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/assets/generated/fragrance-mist-bg.dim_1920x1080.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl">Begin Your Fragrance Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a perfume enthusiast or just beginning to explore the world of fragrances, 
            our guides will help you discover scents that resonate with your personality and style.
          </p>
          <Link to="/types">
            <Button size="lg" className="mt-4">
              Start Exploring
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
