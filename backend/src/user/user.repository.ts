import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { Failure, Success, failure, success } from "src/helper";
import { getUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserRepository{
    constructor(
        @InjectModel(User.name)
        private userModel : Model<UserDocument>
    ){}
    async getUser(data : getUserDto):Promise<Failure<string> | Success<UserDocument>> {
        const {email, password} = data;
        const user = await this.userModel.findOne({email, password});
        if(!user?._id)
            return failure('User not found');
        else 
            return success(user);
    }

    async getUserById(id:string):Promise<Failure<string> | Success<UserDocument>> {
        const user = await this.userModel.findById(id);
        if(!user?._id)
            return failure('User not found');
        else 
            return success(user);
    }

    async getUserByEmail(email:string):Promise<Failure<string> | Success<UserDocument>> {
        const user = await this.userModel.findOne({
            email
        });
        if(!user?._id)
            return failure('User not found');
        else 
            return success(user);
    }

    async createUser(user:CreateUserDto) :Promise<Failure<string> | Success<UserDocument>> {
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