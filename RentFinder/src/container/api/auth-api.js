
import {
    useQuery
} from 'react-query'

const API_URL = 'http://localhost:9999';

export const getAccounts = () => {
    const api = `${API_URL}/accounts`;
    console.log(`Call API: ${api}`)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useQuery('accounts', () => fetch(api).then(res => res.json()),{
                cacheTime: 1000 * 60 * 60, // 1 hou
                staleTime: 1000 * 60 * 60, // 1 hou
                refetchOnWindowFocus: false,
                refetchInterval: false
            }
    )
    return query;
}




