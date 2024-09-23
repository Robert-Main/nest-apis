import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Item {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  qty: number;
}

export type ItemDocument = Item & Document;
export const ItemSchema = SchemaFactory.createForClass(Item);
