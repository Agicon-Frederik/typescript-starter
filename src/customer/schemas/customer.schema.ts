import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// This interface defines the structure of a customer document.
export type CustomerDocument = Customer & Document;

@Schema({ timestamps: true }) // Automatically adds createdAt and updatedAt
export class Customer {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ trim: true })
  phone?: string;

  @Prop({
    type: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zipCode: { type: String, trim: true },
      country: { type: String, trim: true },
    },
  })
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };

  @Prop({ default: true })
  isActive: boolean;
}

// Create the Mongoose schema
export const CustomerSchema = SchemaFactory.createForClass(Customer);
