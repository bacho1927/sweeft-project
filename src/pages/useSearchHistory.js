import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function useSearchHistory(searchQuery) {
    const KEY = 'qxwKxw2GYo-LRowxGvhp78gxglioLtkQ_2IWA8qYuJg'
    
    const apiUrl = searchQuery === '' ?
    `https://api.unsplash.com/photos/?client_id=${KEY}&per_page=20&order_by=popular` :
    `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${KEY}&per_page=20`;


    const {data} = useQuery({
        queryKey: [searchQuery],
        queryFn: async() => {
            try {   
                const response = await axios.get(apiUrl);
                if (searchQuery) {

                    return response.data.results;
                } else {
                    
                    return response.data;
                }
            } catch (error) {
                throw new Error(`Error fetching data: ${error.message}`);
            }
        }
        
    });

    return {data}
}

export default useSearchHistory
