import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRepository } from "./user.repository";
import { getUserDto } from "./dto/update-user.dto";

@Injectable()
export class userService {
    constructor(
        private readonly UserRepository: UserRepository
    ) {}
    async getUser(userDto:getUserDto) {
        return await this.UserRepository.getUser(userDto);
    }
    async createUser(userDto: CreateUserDto) {
        return this.UserRepository.createUser(userDto);
    }
    async updateUser() {

    }
    async deleteUser() {

    }
}