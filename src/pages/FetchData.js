import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function FetchData(searchQuery,page) {
    const KEY = 'qxwKxw2GYo-LRowxGvhp78gxglioLtkQ_2IWA8qYuJg'
    
    const apiUrl = searchQuery === '' ?
    `https://api.unsplash.com/photos/?client_id=${KEY}&per_page=20&order_by=popular&page=${page}` :
    `https://api.unsplash.com/search/photos?client_id=${KEY}&query=${searchQuery}&per_page=20&page=${page}`;


    const {data,isLoading} = useQuery({
        queryKey: [searchQuery,page],
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

    return {data,isLoading}
}

export default FetchData
