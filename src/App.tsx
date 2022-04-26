import { QueryClient, QueryClientProvider } from 'react-query'
import { Navigate } from 'react-router-dom'
import './styles'
import AppRoutes from './pages/AppRoutes'
import AppLayout from './layout'
import { useAuthStore } from './store'
import './App.css'

const queryClient = new QueryClient()

const App = () => {
  const { user } = useAuthStore()

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </QueryClientProvider>
  )
}

export default App
