import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/theme';
import router from '@/router';
import { AuthProvider } from '@/contexts/auth';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
