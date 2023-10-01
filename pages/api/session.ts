import { NextApiRequest, NextApiResponse } from "next";
import sessionRepo from "./repo/sessionRepo";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>,
){
	const session = req.body;
    console.log('Saving Session');
    await sessionRepo().saveSession(session);
    console.log('Session saved');
	res.send('saved');
}