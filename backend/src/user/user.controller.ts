import { Body, Controller, Delete, Get, Post, Put, Res, UseGuards } from "@nestjs/common";
import { userService } from "./user.service";
import { Failure, Success } from "src/helper";
import { UserDocument } from "./user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { getUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "src/customDecorators/JWT-guard";
import { Response } from "express";

@Controller('user')
export class UserController {
    constructor(
        private userService: userService
    ){}
    
    @Get()
    @UseGuards(JwtAuthGuard)
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
        @Body() userDto: CreateUserDto, 
        @Res({ passthrough: true }) res: Response,
    ) {
        const createdUser:
        | Failure<string>
        | Success<UserDocument> = await this.userService.createUser(userDto);
        if (!createdUser.ok) {
            return createdUser;
        }
        
        const token = createdUser.value.accessToken
        res.cookie('access_token', token, { httpOnly: true });
        createdUser.value.accessToken = undefined;
        return createdUser;
    }

    @Put()
    @UseGuards(JwtAuthGuard)
    async updateUser(){

    }
    
    @Delete()
    @UseGuards(JwtAuthGuard)
    async deleteUser() {

    }
}