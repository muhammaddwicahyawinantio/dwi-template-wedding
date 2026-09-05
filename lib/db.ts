import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  global.mongooseCache ||= { conn: null, promise: null };

  if (global.mongooseCache.conn) {
    return global.mongooseCache.conn;
  }

  try {
    global.mongooseCache.promise ||= mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB_NAME || undefined,
    });

    global.mongooseCache.conn = await global.mongooseCache.promise;
    return global.mongooseCache.conn;
  } catch (error) {
    global.mongooseCache.promise = null;
    throw error;
  }
};

export default connectToDatabase;
