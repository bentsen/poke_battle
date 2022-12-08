import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {query: {pokeone, poketwo}} = req;
    const response = await axios.get(`http://127.0.0.1:8000/battle/${pokeone}/${poketwo}`);
    const data = await response.data;
    res.status(200).json(data)
}