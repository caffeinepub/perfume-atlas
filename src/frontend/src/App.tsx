import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import TypesGuidePage from './pages/TypesGuidePage';
import ReviewsPage from './pages/ReviewsPage';
import TopPicksBrandsPage from './pages/TopPicksBrandsPage';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const typesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/types',
  component: TypesGuidePage,
});

const reviewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reviews',
  component: ReviewsPage,
});

const topPicksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/top-picks',
  component: TopPicksBrandsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, typesRoute, reviewsRoute, topPicksRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
