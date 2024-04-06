import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { userService } from "./user.service";
import { Failure, Success } from "src/helper";
import { UserDocument } from "./user.schema";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(
        private userService: userService
    ){}
    
    @Get()
    async getUser(){
        const user  = await this.userService.getUser();
        return user ;
    }
    @Post()
    async createUser(
        @Body() userDto: CreateUserDto
    ) {
        const user:
        | Failure<string>
        | Success<UserDocument> = await this.userService.createUser(userDto);
        return user;
    }
    @Put()
    async updateUser(){

    }
    @Delete()
    async deleteUser() {

    }
}