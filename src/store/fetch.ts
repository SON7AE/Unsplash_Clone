import { atom, selector } from "recoil"
import axios from "axios"

export const searchValue = atom({
    key: "searchValue",
    default: "",
})
export const images = atom({
    key: "images",
    default: [],
})

// ----------------------------------------------------------------------------------------------------

const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "mXSaXElt5u9C4xAlm4bVyaiywj9ZRoElzokF0a9_HAU"
const getData = (img: string): Promise<Response> => axios.get(`${API_URL}&query=${img}&client_id=${API_KEY}&page=1&per_page=20`)

export const fetchApi = selector({
    key: "fetchApi",
    get: async ({ get }) => {
        const img = get(searchValue)
        const res = await getData(img)

        console.log(res)

        return res
    },
})
