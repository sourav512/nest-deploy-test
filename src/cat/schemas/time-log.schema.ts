import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TimeDocument = HydratedDocument<Time>;

@Schema()
export class Time {
  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  uat: string;
}

export const TimeSchema = SchemaFactory.createForClass(Time);