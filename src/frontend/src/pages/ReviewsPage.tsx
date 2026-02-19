import ReviewCard from '@/components/reviews/ReviewCard';
import { Badge } from '@/components/ui/badge';

export interface PerfumeReview {
  name: string;
  brand: string;
  concentration: string;
  overview: string;
  scentProfile: {
    top: string;
    heart: string;
    base: string;
  };
  longevity: number;
  sillage: number;
  season: string[];
  occasion: string[];
  pros: string[];
  cons: string[];
  rating: number;
  priceRange: string;
}

export default function ReviewsPage() {
  const reviews: PerfumeReview[] = [
    {
      name: 'Sauvage',
      brand: 'Dior',
      concentration: 'Eau de Parfum',
      overview: 'A modern classic that redefined fresh, spicy fragrances for men. Sauvage opens with a burst of Calabrian bergamot and pepper, creating an instantly recognizable signature. The composition is bold yet refined, making it suitable for any occasion.',
      scentProfile: {
        top: 'Calabrian bergamot, pepper',
        heart: 'Sichuan pepper, lavender, pink pepper, vetiver, patchouli, geranium',
        base: 'Ambroxan, cedar, labdanum',
      },
      longevity: 8,
      sillage: 8,
      season: ['Spring', 'Summer', 'Fall'],
      occasion: ['Daily', 'Office', 'Evening', 'Date'],
      pros: [
        'Excellent longevity and projection',
        'Versatile for any occasion',
        'Compliment magnet',
        'Unique ambroxan base',
      ],
      cons: [
        'Very popular—you may smell it on others',
        'Can be overwhelming if over-applied',
        'Premium price point',
      ],
      rating: 9,
      priceRange: '$$$',
    },
    {
      name: 'Black Opium',
      brand: 'Yves Saint Laurent',
      concentration: 'Eau de Parfum',
      overview: 'A modern gourmand fragrance that combines coffee and vanilla with white florals. Black Opium is bold, addictive, and perfect for evening wear. The coffee note gives it an edge that sets it apart from typical sweet fragrances.',
      scentProfile: {
        top: 'Pink pepper, orange blossom, pear',
        heart: 'Coffee, jasmine, bitter almond, licorice',
        base: 'Vanilla, patchouli, cedar, cashmere wood',
      },
      longevity: 9,
      sillage: 9,
      season: ['Fall', 'Winter'],
      occasion: ['Evening', 'Date', 'Party', 'Special Events'],
      pros: [
        'Incredible longevity—lasts all night',
        'Unique coffee note',
        'Strong projection',
        'Sexy and sophisticated',
      ],
      cons: [
        'Very sweet—not for everyone',
        'Can be cloying in hot weather',
        'Strong sillage may be too much for some settings',
      ],
      rating: 8.5,
      priceRange: '$$$',
    },
    {
      name: 'Light Blue',
      brand: 'Dolce & Gabbana',
      concentration: 'Eau de Toilette',
      overview: 'The quintessential summer fragrance that captures the essence of the Mediterranean. Light Blue is fresh, fruity, and effortlessly elegant. Perfect for daytime wear and warm weather, it evokes images of Italian coastlines and sunny days.',
      scentProfile: {
        top: 'Sicilian lemon, apple, cedar, bellflower',
        heart: 'Bamboo, jasmine, white rose',
        base: 'Cedar, amber, musk',
      },
      longevity: 5,
      sillage: 6,
      season: ['Spring', 'Summer'],
      occasion: ['Daily', 'Casual', 'Beach', 'Daytime'],
      pros: [
        'Perfect for hot weather',
        'Fresh and clean scent',
        'Widely loved and safe choice',
        'Affordable',
      ],
      cons: [
        'Moderate longevity',
        'Very common',
        'May be too simple for some',
      ],
      rating: 8,
      priceRange: '$$',
    },
    {
      name: 'Oud Wood',
      brand: 'Tom Ford',
      concentration: 'Eau de Parfum',
      overview: 'A sophisticated introduction to oud for Western audiences. Tom Ford\'s Oud Wood is smoky, woody, and exotic without being overwhelming. It balances rare oud with rosewood and cardamom, creating a wearable luxury fragrance.',
      scentProfile: {
        top: 'Rosewood, cardamom, Chinese pepper',
        heart: 'Oud, sandalwood, vetiver',
        base: 'Tonka bean, vanilla, amber',
      },
      longevity: 8,
      sillage: 7,
      season: ['Fall', 'Winter'],
      occasion: ['Evening', 'Special Events', 'Formal', 'Date'],
      pros: [
        'Luxurious and sophisticated',
        'Wearable oud for beginners',
        'Excellent quality ingredients',
        'Unisex appeal',
      ],
      cons: [
        'Very expensive',
        'May be too subtle for some',
        'Oud note may not appeal to everyone',
      ],
      rating: 9,
      priceRange: '$$$$',
    },
    {
      name: 'La Vie Est Belle',
      brand: 'Lancôme',
      concentration: 'Eau de Parfum',
      overview: 'A modern gourmand floral that celebrates happiness and freedom. La Vie Est Belle combines iris, patchouli, and praline to create a sweet yet sophisticated fragrance. It\'s feminine, joyful, and perfect for those who love sweet scents with depth.',
      scentProfile: {
        top: 'Black currant, pear',
        heart: 'Iris, jasmine, orange blossom',
        base: 'Praline, vanilla, patchouli, tonka bean',
      },
      longevity: 8,
      sillage: 8,
      season: ['Fall', 'Winter', 'Spring'],
      occasion: ['Daily', 'Office', 'Date', 'Special Events'],
      pros: [
        'Beautiful sweet-floral balance',
        'Long-lasting',
        'Compliment getter',
        'Elegant bottle design',
      ],
      cons: [
        'Very popular',
        'Sweet notes may be too much for some',
        'Can be heavy in summer',
      ],
      rating: 8.5,
      priceRange: '$$$',
    },
    {
      name: 'Aventus',
      brand: 'Creed',
      concentration: 'Eau de Parfum',
      overview: 'The legendary fruity-woody fragrance that sparked countless clones. Aventus opens with a distinctive pineapple note combined with birch and musk. It\'s bold, confident, and has achieved cult status among fragrance enthusiasts.',
      scentProfile: {
        top: 'Pineapple, bergamot, black currant, apple',
        heart: 'Birch, patchouli, Moroccan jasmine, rose',
        base: 'Musk, oakmoss, ambergris, vanilla',
      },
      longevity: 9,
      sillage: 9,
      season: ['Spring', 'Summer', 'Fall'],
      occasion: ['Office', 'Evening', 'Special Events', 'Formal'],
      pros: [
        'Exceptional performance',
        'Unique pineapple-smoke combination',
        'Prestigious brand',
        'Batch variation adds exclusivity',
      ],
      cons: [
        'Extremely expensive',
        'Batch variation can be frustrating',
        'Overhyped by some',
        'Many cheaper alternatives exist',
      ],
      rating: 9,
      priceRange: '$$$$$',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1>Perfume Reviews</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert reviews of popular and niche fragrances to help you find your perfect scent
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="secondary">Detailed Analysis</Badge>
              <Badge variant="secondary">Honest Opinions</Badge>
              <Badge variant="secondary">Performance Ratings</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-12">
            <h2>Featured Reviews</h2>
            <p className="text-muted-foreground">
              In-depth analysis of {reviews.length} popular fragrances across different categories
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Rating Guide */}
      <section className="container py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-center">Understanding Our Ratings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Longevity (Hours)</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>1-3:</strong> Poor - Fades within a few hours</li>
                <li><strong>4-6:</strong> Moderate - Lasts half a day</li>
                <li><strong>7-8:</strong> Good - Full workday performance</li>
                <li><strong>9-10:</strong> Excellent - All-day to next-day longevity</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Sillage (Projection)</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>1-3:</strong> Intimate - Only you can smell it</li>
                <li><strong>4-6:</strong> Moderate - Arm's length projection</li>
                <li><strong>7-8:</strong> Strong - Fills a room</li>
                <li><strong>9-10:</strong> Beast mode - Announces your presence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
