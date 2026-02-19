import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Sparkles, Heart, Briefcase } from 'lucide-react';

export default function TopPicksBrandsPage() {
  const seasonalPicks = {
    spring: [
      {
        name: 'Chanel Chance Eau Tendre',
        description: 'Delicate floral-fruity with grapefruit and jasmine',
        why: 'Light, fresh, and romantic—perfect for spring days',
      },
      {
        name: 'Jo Malone Wood Sage & Sea Salt',
        description: 'Mineral aquatic with sage and ambrette',
        why: 'Captures the essence of coastal spring breezes',
      },
      {
        name: 'Hermès Un Jardin Sur Le Toit',
        description: 'Green floral with apple and rose',
        why: 'Evokes a rooftop garden in full bloom',
      },
    ],
    summer: [
      {
        name: 'Versace Dylan Blue Pour Femme',
        description: 'Fruity floral with blackcurrant and peach',
        why: 'Refreshing and vibrant without being overwhelming',
      },
      {
        name: 'Acqua di Parma Colonia',
        description: 'Classic citrus cologne with lavender',
        why: 'Timeless Italian elegance for hot weather',
      },
      {
        name: 'Issey Miyake L\'Eau d\'Issey',
        description: 'Aquatic floral with lotus and freesia',
        why: 'Clean, watery freshness that lasts',
      },
    ],
    fall: [
      {
        name: 'Maison Margiela Replica By the Fireplace',
        description: 'Woody gourmand with chestnut and vanilla',
        why: 'Cozy warmth perfect for crisp autumn days',
      },
      {
        name: 'Prada L\'Homme',
        description: 'Powdery iris with amber and neroli',
        why: 'Sophisticated and versatile for fall transitions',
      },
      {
        name: 'Guerlain Mon Guerlain',
        description: 'Oriental floral with lavender and vanilla',
        why: 'Elegant warmth with a modern twist',
      },
    ],
    winter: [
      {
        name: 'Tom Ford Tobacco Vanille',
        description: 'Spicy oriental with tobacco and vanilla',
        why: 'Rich, warm, and luxurious for cold nights',
      },
      {
        name: 'Dior Hypnotic Poison',
        description: 'Oriental vanilla with almond and jasmine',
        why: 'Intoxicating warmth and mystery',
      },
      {
        name: 'Givenchy Gentleman Reserve Privée',
        description: 'Woody aromatic with whiskey and iris',
        why: 'Sophisticated depth for winter evenings',
      },
    ],
  };

  const beginnerPicks = [
    {
      name: 'Chanel Coco Mademoiselle',
      type: 'Women',
      description: 'Modern chypre floral that\'s elegant and versatile',
      price: '$$$',
    },
    {
      name: 'Dior Sauvage EDT',
      type: 'Men',
      description: 'Fresh spicy that works for any occasion',
      price: '$$$',
    },
    {
      name: 'Viktor & Rolf Flowerbomb',
      type: 'Women',
      description: 'Sweet floral that\'s universally loved',
      price: '$$$',
    },
    {
      name: 'Bleu de Chanel',
      type: 'Men',
      description: 'Woody aromatic that\'s safe and sophisticated',
      price: '$$$',
    },
  ];

  const notableHouses = [
    {
      name: 'Chanel',
      category: 'Designer',
      founded: '1910',
      signature: 'Timeless elegance and sophistication',
      iconic: 'Chanel No. 5, Coco Mademoiselle, Bleu de Chanel',
      description: 'The epitome of French luxury, Chanel creates fragrances that define elegance and have stood the test of time.',
    },
    {
      name: 'Creed',
      category: 'Niche',
      founded: '1760',
      signature: 'Artisanal luxury with royal heritage',
      iconic: 'Aventus, Green Irish Tweed, Silver Mountain Water',
      description: 'One of the oldest perfume houses, Creed has served royalty for centuries and maintains traditional craftsmanship.',
    },
    {
      name: 'Tom Ford',
      category: 'Designer/Niche',
      founded: '2006',
      signature: 'Bold, luxurious, and unapologetically sexy',
      iconic: 'Tobacco Vanille, Oud Wood, Black Orchid',
      description: 'Tom Ford revolutionized modern perfumery with daring compositions and premium ingredients.',
    },
    {
      name: 'Maison Francis Kurkdjian',
      category: 'Niche',
      founded: '2009',
      signature: 'Modern artistry and technical excellence',
      iconic: 'Baccarat Rouge 540, Aqua Universalis, Grand Soir',
      description: 'Founded by master perfumer Francis Kurkdjian, this house represents contemporary perfume artistry at its finest.',
    },
    {
      name: 'Dior',
      category: 'Designer',
      founded: '1947',
      signature: 'Haute couture translated to fragrance',
      iconic: 'J\'adore, Sauvage, Miss Dior',
      description: 'Dior brings the elegance of French fashion to perfumery with sophisticated and timeless creations.',
    },
    {
      name: 'Le Labo',
      category: 'Niche',
      founded: '2006',
      signature: 'Artisanal, hand-blended, minimalist',
      iconic: 'Santal 33, Another 13, Rose 31',
      description: 'Known for freshly blended fragrances and minimalist aesthetic, Le Labo has achieved cult status.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h1>Top Picks & Brands</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Curated recommendations and notable perfume houses to guide your fragrance journey
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 md:py-20">
        <Tabs defaultValue="seasonal" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="seasonal">Seasonal Picks</TabsTrigger>
            <TabsTrigger value="beginners">For Beginners</TabsTrigger>
            <TabsTrigger value="brands">Notable Houses</TabsTrigger>
          </TabsList>

          {/* Seasonal Picks Tab */}
          <TabsContent value="seasonal" className="space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h2>Seasonal Recommendations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The best fragrances for each season, chosen for their harmony with the weather and mood
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              {Object.entries(seasonalPicks).map(([season, picks]) => (
                <div key={season} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <h3 className="capitalize font-serif">{season}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {picks.map((pick, idx) => (
                      <Card key={idx} className="hover:shadow-elegant transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg">{pick.name}</CardTitle>
                          <CardDescription>{pick.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Separator />
                            <p className="text-sm text-muted-foreground">
                              <strong>Why:</strong> {pick.why}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Beginners Tab */}
          <TabsContent value="beginners" className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2>Perfect for Beginners</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Safe, versatile fragrances that are universally appreciated and easy to wear
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {beginnerPicks.map((pick, idx) => (
                  <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl">{pick.name}</CardTitle>
                          <CardDescription className="mt-2">{pick.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">{pick.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline">{pick.price}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-accent/10 border-accent/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <CardTitle>Tips for Beginners</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    <strong>Start with samples:</strong> Never blind buy a full bottle. Get samples or discovery sets 
                    to test fragrances on your skin over several days.
                  </p>
                  <p>
                    <strong>Test on skin:</strong> Fragrances smell different on paper strips than on your skin. 
                    Your body chemistry affects how a perfume develops.
                  </p>
                  <p>
                    <strong>Wait before deciding:</strong> Give a fragrance at least 30 minutes to develop before 
                    making a judgment. The dry-down is often very different from the opening.
                  </p>
                  <p>
                    <strong>Build slowly:</strong> Start with 2-3 versatile fragrances before expanding your collection. 
                    Quality over quantity always wins.
                  </p>
                  <p>
                    <strong>Consider the occasion:</strong> Have at least one fresh daytime scent and one richer 
                    evening scent to cover most situations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notable Houses Tab */}
          <TabsContent value="brands" className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2>Notable Perfume Houses</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From heritage houses to modern artisans, these brands define excellence in perfumery
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {notableHouses.map((house, idx) => (
                <Card key={idx} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl font-serif">{house.name}</CardTitle>
                          <Badge variant={house.category === 'Niche' ? 'default' : 'secondary'}>
                            {house.category}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          Founded {house.founded} • {house.signature}
                        </CardDescription>
                      </div>
                      <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{house.description}</p>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Iconic Fragrances</h4>
                      <p className="text-sm text-muted-foreground">{house.iconic}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="max-w-5xl mx-auto bg-muted/30 mt-12">
              <CardHeader>
                <CardTitle>Designer vs. Niche: What's the Difference?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Designer Fragrances</h4>
                  <p className="text-sm text-muted-foreground">
                    Created by fashion houses (Chanel, Dior, Gucci), designer fragrances are widely available, 
                    mass-produced, and designed to appeal to a broad audience. They offer excellent quality at 
                    accessible price points and are perfect for everyday wear.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Niche Fragrances</h4>
                  <p className="text-sm text-muted-foreground">
                    Produced by independent perfume houses (Creed, Le Labo, Maison Francis Kurkdjian), niche 
                    fragrances prioritize artistry and uniqueness over mass appeal. They often use higher-quality 
                    ingredients, more daring compositions, and are produced in smaller batches. Expect higher 
                    prices but also more distinctive scents.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
