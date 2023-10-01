import dbUtils from "../utils/dbUtils"

const sessionRepo = () =>{
	const sessionCollectionName = "session";
	const saveSession = async (session:any) =>{
		console.log('Saving session', session);
		const db = await dbUtils().getDB();
		const sessionSaved = await db.collection(sessionCollectionName).insertOne(session);
		console.log('Session saved; id : ',sessionSaved);

	}
	return {saveSession}
}
export default sessionRepo;