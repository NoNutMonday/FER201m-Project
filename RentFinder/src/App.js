import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import UserLayout from './components/layouts/user/UserLayout';
import AdminLayout from './components/layouts/admin/AdminLayout';
import { useDispatch } from 'react-redux';
import { setMotels } from './core/redux/motel';
import { setAccounts } from './core/redux/auth';
import { useEffect } from 'react';

const Loading = () => {
    const dispatch = useDispatch()

    const motel = useQuery(
        ['motel']
        , () => fetch(`http://localhost:9999/motels`)
            .then(res => res.json())
            .then(data => {
                dispatch(setMotels({ motels: data }))
            })
    )

    const account = useQuery(
        ['accounts']
        , () => fetch(`http://localhost:9999/accounts`)
            .then(res => res.json())
            .then(data => {
                dispatch(setAccounts({ accounts: data }))
            })
    )

    return (
        <></>
    )
}

function App() {
    const location = window.location.pathname

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            < Loading />
            {
                location.includes('/admin') ? <AdminLayout /> : <UserLayout />
            }
        </QueryClientProvider>
    );
}

export default App;
