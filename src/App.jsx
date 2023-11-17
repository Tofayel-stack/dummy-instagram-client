import { Toaster } from 'react-hot-toast'
import './App.css'
import AllRoutes from './routes/AllRoutes'
// use react query 
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 

// Create a client
const queryClient = new QueryClient()


function App() {

  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 1500,
      easing: 'ease-in-out',
    }); 
  }, []);

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <AllRoutes></AllRoutes>
    <Toaster/>
    </QueryClientProvider>
   
    </>
  )
}

export default App
