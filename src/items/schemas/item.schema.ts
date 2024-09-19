import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  qty: Number,
});
