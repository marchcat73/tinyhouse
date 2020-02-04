import { MongoClient } from 'mongodb';

const user = 'pirs';
const userPassword = 'ok69vw73';
const cluster = 'cluster0-geo63';
const url = `mongodb+srv://pirs:${userPassword}@${cluster}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });

  const db = client.db('main')

  return {
    listings: db.collection('test_listings')
  }
};
