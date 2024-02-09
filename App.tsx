import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';
import {App as ScreenApp} from './src/app'

export const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <ScreenApp/>
      </PaperProvider>
    </QueryClientProvider>
  ) 
};
