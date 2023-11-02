import useSWR from 'swr'
import axios from 'axios';


const fetcher = (query) =>
   
 axios
 .post('https://us-central1-ss-devops.cloudfunctions.net/GraphQL',{query})
 .then((res) => res.data)

export const useQuery = query => {
    return useSWR(query, fetcher)

}