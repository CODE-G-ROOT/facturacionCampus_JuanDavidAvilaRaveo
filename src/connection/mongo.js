import { MongoClient } from 'mongodb';

let conn = undefined;

const data = JSON.parse(JSON.stringify(process.env));
const user = data.ATLAS_USER;
const pasword = data.ATLAS_PASSWORD;
const other = user.toLowerCase();

const connectString = `mongodb+srv://${user}:${pasword}@${other}.ikw3dq6.mongodb.net/`;
const cliente = new MongoClient(connectString);

try {
    conn = await cliente.connect();
} catch (error) {
    console.error(error);
}

let db = conn.db('db_campus_alquiler')

export default db;