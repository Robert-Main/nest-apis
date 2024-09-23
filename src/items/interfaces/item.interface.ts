import { Document } from 'mongoose';

export interface Item extends Document {
  name: string;
  price: number;
  description: string;
  qty: number;
  createdDate: Date;
}
