import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductsSchema = Products & Document;

@Schema()
export class Products {
    @Prop()
    sku: string;

    @Prop()
    title: string;

    @Prop()
    shortDescription: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    stock: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
