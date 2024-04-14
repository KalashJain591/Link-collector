import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User, UserDocument } from 'src/user/user.schema';
import { userService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user.repository';
import { Failure, Success, AccessToken, success, failure } from 'src/helper';

@Injectable()
export class AuthService {
  constructor(
    private usersService: userService,
    private jwtService: JwtService,
    private userRepository: UserRepository
  ) {}

  async validateUser(email: string, password: string): Promise<AccessToken> {
    const result: Success<UserDocument> | Failure<string> = await this.userRepository.getUserByEmail(email);


    if (!result.ok) {
      throw new BadRequestException('User not found');
    }

    const user = result.value;

    const isMatch: boolean = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return this.login(user)
    
  }

  async login(user: UserDocument): Promise<AccessToken> {
    const payload = { email: user.email, id: user._id };
    return { access_token: this.jwtService.sign(payload) };
  }

    async register(user: CreateUserDto): Promise<Failure<string> | Success<UserDocument>> {
      try{
      const result = await this.userRepository.getUserByEmail(user.email);
      if (result.ok) {
        throw new BadRequestException('email already exists');
      }
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser: User = { ...user, password: hashedPassword };
      const userCreated =  await this.userRepository.createUser(newUser);
      return userCreated;
    }
    catch(err) {
    console.log('unable-to-create-user', err);
    }
  }
}
