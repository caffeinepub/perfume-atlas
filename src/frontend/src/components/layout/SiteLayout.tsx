import { Link, useRouterState } from '@tanstack/react-router';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/types', label: 'Types & Guide' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/top-picks', label: 'Top Picks' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-2xl font-light tracking-tight">Perfume Atlas</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={currentPath === link.path ? 'default' : 'ghost'}
                  size="sm"
                  className="font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <nav className="flex md:hidden items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={currentPath === link.path ? 'default' : 'ghost'}
                  size="sm"
                  className="text-xs px-2"
                >
                  {link.label.split(' ')[0]}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-muted/30 mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg">Perfume Atlas</span>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© {new Date().getFullYear()} Perfume Atlas. All rights reserved.</p>
              <p className="mt-1">
                Built with love using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
