import { NextApiRequest, NextApiResponse } from "next";
import repo from "./repo";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>,
){
    console.log('hit received, saving...');
    await repo().save();
    console.log('saved');
}