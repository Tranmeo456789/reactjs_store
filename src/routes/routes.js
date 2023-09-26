import config from '~/config';
// Layouts

// Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Search from '~/pages/Search';
import Product from '~/pages/Product';
import New from '~/pages/New';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart, layout: 'NoIsSidebarLayout' },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.product, component: Product },
    { path: config.routes.new, component: New },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
