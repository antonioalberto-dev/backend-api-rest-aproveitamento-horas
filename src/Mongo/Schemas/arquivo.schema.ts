import * as mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  size: Number,
  path: String,
});

export interface File extends mongoose.Document {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
  path: string;
}
