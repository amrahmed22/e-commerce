import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import UserContextProvider from './Context/UserContext';
import CartContextProvider from './Context/CartContext';
import NavbarContextProvider from './Context/NavbarContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
let queryClient = new QueryClient()
root.render(
    <QueryClientProvider client={queryClient}>
        
    <NavbarContextProvider>

    <CartContextProvider>
    

    <UserContextProvider>
         <App />
    </UserContextProvider>
    

    </CartContextProvider>

    </NavbarContextProvider>


    </QueryClientProvider>
   
);

