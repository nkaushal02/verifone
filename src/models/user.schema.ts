import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserSchema = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
