import { NextApiRequest, NextApiResponse } from "next";
import sessionRepo from "./repo/sessionRepo";
import userRepo from "./repo/userRepo";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>,
){
	const user = req.body;
    console.log('Saving user');
    await userRepo().saveUser(user);
    console.log('user saved');
	res.send('saved');
}