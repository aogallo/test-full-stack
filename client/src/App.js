import AppRouter from './router/AppRouter';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
)

export default App;