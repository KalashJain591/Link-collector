import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { userRepository } from "./user.repository";

@Injectable()
export class userService {
    constructor(
        private readonly userRepository: userRepository
    ) {}
    async getUser() {

    }
    async createUser(userDto: CreateUserDto) {
        
    }
    async updateUser() {

    }
    async deleteUser() {

    }
}