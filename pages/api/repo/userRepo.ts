import dbUtils from "../utils/dbUtils"

const userRepo = () =>{
	const userCollectionName = "user";
	const saveUser = async (user:any) =>{
		console.log('Saving user', user);
		const db = await dbUtils().getDB();
		const sessionSaved = await db.collection(userCollectionName).insertOne(user);
		console.log('User saved; id : ',sessionSaved);
	}
	return {saveUser}
}
export default userRepo;