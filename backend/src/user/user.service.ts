import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRepository } from "./user.repository";
import { getUserDto } from "./dto/update-user.dto";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class userService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly authService: AuthService
    ) {}
    async getUser(userDto:getUserDto) {
        return await this.userRepository.getUser(userDto);
    }
    async createUser(userDto: CreateUserDto) {
        const result = await this.authService.register(userDto);
        if(result.ok) {
            const accessToken = await this.authService.login(result.value);
        }
        else {
            return result;
        }
    }
    async updateUser() {

    }
    async deleteUser() {

    }
}