import Header from './components/layouts/user/commons/Header';
import Footer from './components/layouts/user/commons/Footer';
import Router from './router';

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { createContext, useState } from 'react';

const queryClient = new QueryClient()

export const AppContext = createContext();

const getToken = () => {
    const account = localStorage.getItem('account')
    return account ? JSON.parse(account) : null;
}

const setToken = (token) => {
    localStorage.setItem('account', JSON.stringify(token))
}

const removeToken = () => {
    localStorage.removeItem('account')
}

function App() {

    const [token, setTokenState] = useState(getToken()) 

    return (
        <QueryClientProvider client={queryClient}>
            <AppContext.Provider value={{ getToken, setToken, removeToken, token, setTokenState  }}>
                <div className="page-wrapper">

                    <div className="preloader"></div>
                    <Header />

                    <Router />

                    <Footer />
                    

                </div>

            </AppContext.Provider>

        </QueryClientProvider>

    );
}

export default App;
