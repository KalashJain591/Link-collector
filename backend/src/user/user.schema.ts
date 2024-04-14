import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class User {
    @Prop({required:true})
    firstName: string;
    @Prop({required:true})
    lastName: string; 
    @Prop({required:true, unique:true})
    email : string; 
    @Prop({required:true})
    password:string;
    @Prop()
    contact?: string;
    @Prop()
    userResources?: string[];
    @Prop()
    accessToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & mongoose.Document;
