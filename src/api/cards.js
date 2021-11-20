import {API_URL} from '../utils/contants'

export async function getCards(search = 'ac'){
    try {
        const url = `${API_URL}/${search}?_limit=32`
        const response = await fetch(url)
        const {results} = await response.json()
        return results
    } catch (error) {
        console.log(error);
        return null
    }
}

async function getRequest(){

}