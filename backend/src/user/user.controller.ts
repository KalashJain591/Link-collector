import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { userService } from "./user.service";
import { Failure, Success } from "src/helper";
import { UserDocument } from "./user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { getUserDto } from "./dto/update-user.dto";

@Controller('user')
export class UserController {
    constructor(
        private userService: userService
    ){}
    
    @Get()
    async getUser(
        @Body() userDto: getUserDto
    ){
        console.log('Get user');
        const user:
        | Failure<string>
        | Success<UserDocument> = await this.userService.getUser(userDto);
        return user;
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