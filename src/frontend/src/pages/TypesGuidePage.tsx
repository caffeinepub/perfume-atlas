import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TypesGuidePage() {
  const fragranceFamilies = [
    {
      name: 'Floral',
      description: 'The most popular and diverse family, featuring flowers as the dominant notes.',
      characteristics: 'Romantic, feminine, elegant, and timeless',
      notes: 'Rose, jasmine, lily, violet, tuberose, gardenia',
      examples: 'Chanel No. 5, Dior J\'adore, Marc Jacobs Daisy',
      seasons: ['Spring', 'Summer'],
    },
    {
      name: 'Woody',
      description: 'Warm, sophisticated scents derived from woods, mosses, and earthy materials.',
      characteristics: 'Grounding, mysterious, sophisticated, and long-lasting',
      notes: 'Sandalwood, cedar, vetiver, patchouli, oud',
      examples: 'Tom Ford Oud Wood, Dior Sauvage, Terre d\'Hermès',
      seasons: ['Fall', 'Winter'],
    },
    {
      name: 'Oriental/Amber',
      description: 'Rich, exotic, and sensual fragrances with warm spices and resins.',
      characteristics: 'Opulent, sensual, warm, and exotic',
      notes: 'Vanilla, amber, musk, cinnamon, incense, benzoin',
      examples: 'Yves Saint Laurent Opium, Thierry Mugler Angel, Guerlain Shalimar',
      seasons: ['Fall', 'Winter', 'Evening'],
    },
    {
      name: 'Fresh/Citrus',
      description: 'Light, clean, and invigorating scents perfect for everyday wear.',
      characteristics: 'Energizing, clean, uplifting, and versatile',
      notes: 'Lemon, bergamot, orange, grapefruit, mint, aquatic notes',
      examples: 'Dolce & Gabbana Light Blue, Acqua di Gio, CK One',
      seasons: ['Spring', 'Summer', 'Daytime'],
    },
    {
      name: 'Gourmand',
      description: 'Edible, dessert-like fragrances that evoke sweet treats and comfort.',
      characteristics: 'Sweet, comforting, playful, and indulgent',
      notes: 'Vanilla, caramel, chocolate, coffee, honey, almond',
      examples: 'Viktor & Rolf Flowerbomb, Prada Candy, Lancôme La Vie Est Belle',
      seasons: ['Fall', 'Winter', 'Evening'],
    },
    {
      name: 'Chypre',
      description: 'Complex, sophisticated blends with citrus top notes and mossy base.',
      characteristics: 'Elegant, complex, sophisticated, and timeless',
      notes: 'Bergamot, oakmoss, patchouli, labdanum, rose',
      examples: 'Chanel Coco Mademoiselle, Miss Dior, Mitsouko',
      seasons: ['Fall', 'Spring'],
    },
  ];

  const concentrations = [
    {
      type: 'Eau de Cologne (EDC)',
      concentration: '2-5%',
      longevity: '1-2 hours',
      description: 'Light and refreshing, perfect for a quick refresh throughout the day.',
      bestFor: 'Hot weather, gym, casual daytime wear',
    },
    {
      type: 'Eau de Toilette (EDT)',
      concentration: '5-15%',
      longevity: '3-5 hours',
      description: 'The most common concentration, offering good balance between strength and subtlety.',
      bestFor: 'Daily wear, office, daytime events',
    },
    {
      type: 'Eau de Parfum (EDP)',
      concentration: '15-20%',
      longevity: '5-8 hours',
      description: 'Rich and long-lasting, the most popular choice for serious fragrance lovers.',
      bestFor: 'Evening events, special occasions, cooler weather',
    },
    {
      type: 'Parfum/Extrait',
      concentration: '20-30%',
      longevity: '8-12+ hours',
      description: 'The most concentrated and luxurious form, with exceptional depth and longevity.',
      bestFor: 'Special occasions, intimate settings, luxury experience',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/note-icons.dim_512x512.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1>Perfume Types & Guide</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Master the fundamentals of perfumery—from fragrance families to concentration levels
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 md:py-20">
        <Tabs defaultValue="families" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="families">Fragrance Families</TabsTrigger>
            <TabsTrigger value="notes">Note Pyramid</TabsTrigger>
            <TabsTrigger value="concentration">Concentration</TabsTrigger>
          </TabsList>

          {/* Fragrance Families Tab */}
          <TabsContent value="families" className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2>Fragrance Families</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding fragrance families helps you identify scents that match your preferences and personality
              </p>
            </div>

            <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
              {fragranceFamilies.map((family, index) => (
                <AccordionItem key={index} value={`family-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-xl">{family.name}</span>
                      <div className="flex gap-1">
                        {family.seasons.map((season) => (
                          <Badge key={season} variant="secondary" className="text-xs">
                            {season}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-base">{family.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Characteristics</h4>
                        <p className="text-sm text-muted-foreground">{family.characteristics}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Common Notes</h4>
                        <p className="text-sm text-muted-foreground">{family.notes}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Popular Examples</h4>
                      <p className="text-sm text-muted-foreground">{family.examples}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* Note Pyramid Tab */}
          <TabsContent value="notes" className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2>The Note Pyramid</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Perfumes evolve over time through three distinct layers of notes
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>Top Notes</CardTitle>
                    <Badge>First Impression</Badge>
                  </div>
                  <CardDescription>Lasts 5-15 minutes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    The initial scent you smell immediately after application. These are typically light, 
                    fresh, and volatile notes that evaporate quickly.
                  </p>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Common Top Notes</h4>
                    <p className="text-sm text-muted-foreground">
                      Citrus (lemon, bergamot, orange), light fruits, herbs (basil, mint), aldehydes
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>Heart Notes</CardTitle>
                    <Badge variant="default">Core Character</Badge>
                  </div>
                  <CardDescription>Lasts 2-4 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    The heart of the fragrance that emerges as top notes fade. These notes define 
                    the perfume's character and personality.
                  </p>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Common Heart Notes</h4>
                    <p className="text-sm text-muted-foreground">
                      Florals (rose, jasmine, lily), spices (cinnamon, cardamom), fruits, green notes
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>Base Notes</CardTitle>
                    <Badge>Lasting Foundation</Badge>
                  </div>
                  <CardDescription>Lasts 4-8+ hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    The foundation that gives depth and longevity. These rich, heavy notes linger 
                    on the skin long after the other notes have faded.
                  </p>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Common Base Notes</h4>
                    <p className="text-sm text-muted-foreground">
                      Woods (sandalwood, cedar), musks, vanilla, amber, patchouli, resins
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-4xl mx-auto bg-muted/30">
              <CardHeader>
                <CardTitle>Understanding the Evolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  A well-composed perfume tells a story as it evolves on your skin. The top notes create 
                  the first impression and draw you in. As they fade, the heart notes reveal the perfume's 
                  true character—this is what you'll smell for most of the day. Finally, the base notes 
                  provide a lasting foundation that can linger for hours or even days on clothing.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pro tip:</strong> When testing a new perfume, wait at least 30 minutes to experience 
                  the heart notes before making a decision. The scent you smell in the bottle or on the initial 
                  spray is just the beginning of the story.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Concentration Tab */}
          <TabsContent value="concentration" className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2>Concentration Levels</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The concentration of perfume oils determines strength, longevity, and price
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Type</TableHead>
                    <TableHead>Concentration</TableHead>
                    <TableHead>Longevity</TableHead>
                    <TableHead>Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {concentrations.map((conc, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{conc.type}</TableCell>
                      <TableCell>{conc.concentration}</TableCell>
                      <TableCell>{conc.longevity}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{conc.bestFor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {concentrations.map((conc, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{conc.type}</CardTitle>
                      <div className="flex gap-2 pt-2">
                        <Badge variant="outline">{conc.concentration}</Badge>
                        <Badge variant="secondary">{conc.longevity}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{conc.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-accent/10 border-accent/50">
                <CardHeader>
                  <CardTitle>Choosing the Right Concentration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    <strong>For beginners:</strong> Start with Eau de Toilette—it's versatile, affordable, 
                    and appropriate for most situations.
                  </p>
                  <p>
                    <strong>For daily wear:</strong> EDT or EDP work well for office and casual settings 
                    without being overwhelming.
                  </p>
                  <p>
                    <strong>For special occasions:</strong> EDP or Parfum provide the richness and longevity 
                    worthy of memorable events.
                  </p>
                  <p>
                    <strong>For hot weather:</strong> Lighter concentrations (EDC or EDT) feel more comfortable 
                    and won't become cloying in heat.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
