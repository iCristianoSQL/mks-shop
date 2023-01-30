import axios from "axios"

interface IProducts {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: string;
    updatedAt: string;
}

interface IMarketResponse {
    count?: number;
    products?: IProducts[]
}

export const getMakertInfos = async (page = 1, rows = 8, sortBy = 'price', orderBy = 'ASC') => {
    try {
        const response = await axios.get<IMarketResponse>(`https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}