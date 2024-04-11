import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { ResourceSchema } from "./resource.schema";
import { ResourceController } from "./resource.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Resource', schema: ResourceSchema}])],
    controllers: [ResourceController],
    providers: []
})
