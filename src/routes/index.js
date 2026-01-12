import HomePage from '~/components/pages/Home';
import FollowingPage from '~/components/pages/Following';
import ProfilePage from '~/components/pages/Profile';
import Upload from '~/components/pages/Upload';
import Search from '~/components/pages/Search';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/following',
    component: FollowingPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];

const privateRoutes = {};

export { privateRoutes, publicRoutes };
