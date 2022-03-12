import { Document } from 'mongoose';

export interface Products extends Document {
    sku: string;
    title: string;
    shortDescription: string;
    description: string;
    price: number;
    stock: number;
}