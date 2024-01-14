// App.tsx
import { AuthProvider } from './context/AuthContext';
import Router from './routes/Router';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
