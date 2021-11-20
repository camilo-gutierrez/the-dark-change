import { API_URL_ID } from "../utils/contants";

export async function getCardById(id) {
    try {
        const url = `${API_URL_ID}/${id}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}