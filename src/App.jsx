import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CookiesProvider } from 'react-cookie';
import { Provider } from "react-redux";
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ResultPage from './pages/ResultPage';
import Feedback from './pages/Feedback';
import Reserve from './pages/Reserve';

import Index from './pages/Index';

// import Indoor from './pages/Indoor';
// import Blockage from './pages/Blockage';
// import Bugs from './pages/Bugs';
// import DoorWindowFix from './pages/DoorWindowFix';
// import Storage from './pages/Storage';

const queryClient = new QueryClient()

function App() {
  return (
    <CookiesProvider>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Index" element={<Index />} />
        <Route path="products/category/:categoryName" element={<Index />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Reserve/:productId" element={<Reserve />} />
      </Routes>    
    </BrowserRouter>
    </Provider>
    </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
