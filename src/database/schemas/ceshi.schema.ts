import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CeshiDocument = Ceshi & Document;

@Schema()
export class Ceshi extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CeshiSchema = SchemaFactory.createForClass(Ceshi);
