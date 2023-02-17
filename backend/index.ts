import express from 'express'
import {MongoClient} from 'mongodb'
const app = express()
const port = 3001

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const uri = 'mongodb+srv://paulaamigx:6UNHMaTQxNc3CZIA@cluster0.zhb4g7i.mongodb.net/?retryWrites=true&w=majority'
async function main(){
	const client = new MongoClient(uri);

	try {
		await client.connect();
		await  listDatabases(client);

	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}
async function listDatabases(client:any){
	const databasesList = await client.db().admin().listDatabases();
 
	console.log("Databases:");
	databasesList.databases.forEach((db: any) => console.log(` - ${db.name}`));
};
 

main().catch(console.error);
