import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { PerfumeReview } from '@/pages/ReviewsPage';

interface ReviewCardProps {
  review: PerfumeReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-elegant transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-2xl font-serif">{review.name}</CardTitle>
            <CardDescription className="text-base mt-1">
              {review.brand} • {review.concentration}
            </CardDescription>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold text-primary">{review.rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-3">
          {review.season.map((s) => (
            <Badge key={s} variant="secondary" className="text-xs">
              {s}
            </Badge>
          ))}
          <Badge variant="outline" className="text-xs">
            {review.priceRange}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        {/* Overview */}
        <p className="text-sm leading-relaxed">{review.overview}</p>

        <Separator />

        {/* Scent Profile */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Scent Profile</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-muted-foreground">Top:</span>{' '}
              <span>{review.scentProfile.top}</span>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Heart:</span>{' '}
              <span>{review.scentProfile.heart}</span>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Base:</span>{' '}
              <span>{review.scentProfile.base}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Performance */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Performance</h4>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Longevity</span>
                <span className="font-medium">{review.longevity}/10</span>
              </div>
              <Progress value={review.longevity * 10} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sillage</span>
                <span className="font-medium">{review.sillage}/10</span>
              </div>
              <Progress value={review.sillage * 10} className="h-2" />
            </div>
          </div>
        </div>

        <Separator />

        {/* Occasions */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Best For</h4>
          <div className="flex flex-wrap gap-1.5">
            {review.occasion.map((occ) => (
              <Badge key={occ} variant="outline" className="text-xs">
                {occ}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-sm">Pros</h4>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {review.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ThumbsDown className="h-4 w-4 text-muted-foreground" />
              <h4 className="font-semibold text-sm">Cons</h4>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {review.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
