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
    return (
        <></>
    )

}

export default App;
