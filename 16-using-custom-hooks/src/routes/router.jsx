import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/components/RootLayout';

import SyncDocumentTitle from './sync-document-title';
import SyncWebStorage from './sync-web-storage';
import ScrollTriggerEffect from './scroll-trigger-effect';
import EffectSyncAndCleanup from './effect-sync-and-cleanup';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SyncDocumentTitle />,
      },
      {
        path: 'sync-web-storage',
        element: <SyncWebStorage />,
      },
      {
        path: 'effect-sync-and-cleanup',
        element: <EffectSyncAndCleanup />,
      },
      {
        path: 'scroll-trigger-effect',
        element: <ScrollTriggerEffect />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
