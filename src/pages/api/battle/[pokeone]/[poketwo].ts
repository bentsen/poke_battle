import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const apiurl = process.env.API_URL || "http://localhost:8000/"
    const apiurl = "https://pokebattleapi-production.up.railway.app"
    const {query: {pokeone, poketwo}} = req;
    const response = await axios.get(`${apiurl}/battle/${pokeone}/${poketwo}`);
    const data = await response.data;
    res.status(200).json(data)
}