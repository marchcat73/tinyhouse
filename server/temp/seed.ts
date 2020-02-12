require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { Listing, ListingType, User } from '../src/lib/types';

const listings: Listing[] = [];

const users: User[] = [];

const seed = async () => {
  try {
    console.log('[seed] : running...');

    const db = await connectDatabase();

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log('[seed] : success');
  } catch {
    throw new Error('failed to seed database');
  }
};

seed();
