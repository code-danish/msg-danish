const repo = ()=>{
	const save = async () =>{
		const client = await _mongoClientPromise;
		const db = client.db("testDB");
		const movies = await db
           .collection("movies")
           .insertOne({"test":"success"});
	}
	return {save}
}
export default repo;