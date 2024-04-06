import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { failure, success } from "src/helper";

@Injectable()
export class userRepository{
    constructor(
        @InjectModel(User.name)
        private userModel : Model<UserDocument>
    ){}
    async getUser() {

    }
    async createUser(user:CreateUserDto) {
        const createdUser = await this.userModel.create(user);
        if(!createdUser?._id)
            return failure('User not created')
        else 
            return success(createdUser);
    }   
    async updateUser() {

    }
    async deleteUser() {

    }
}