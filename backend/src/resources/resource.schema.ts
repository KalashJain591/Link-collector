import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Item } from "src/helper";

@Schema()
export class Resource {
@Prop({type: String, required: true})
userId: string;

@Prop({type: Array<Item>, default: []})
resources: Item[];

@Prop({type: Number, default: 4})
rating: number; 

}
export const ResourceSchema = SchemaFactory.createForClass(Resource);
export type ResourceDocument = Resource & mongoose.Document;
