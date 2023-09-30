import { MongoClient } from 'mongodb'
const repo = ()=>{
	const save = async () =>{
		const url = process.env.MONGODB_URI||'';
		
		const client = new MongoClient(url);
		const db = client.db("testDB");
		const movies = await db
           .collection("movies")
           .insertOne({"test":"success"});
	}
	return {save}
}
export default repo;