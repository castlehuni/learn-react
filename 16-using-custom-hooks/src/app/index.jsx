import HomePage from '@/pages/Home';
import NewNotePage from '@/pages/NewNote';
import NoteDetailPage from '@/pages/NoteDetail';
import NoteListPage from '@/pages/NoteList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/notes',
    element: <NoteListPage />,
  },
  { path: '/notes/new', element: <NewNotePage /> },
  { path: '/notes/detail', element: <NoteDetailPage /> },
];

const router = createBrowserRouter(routes);

console.log(router);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
