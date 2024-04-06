import { Module } from '@nestjs/common';
import { User, UserSchema } from './user.schema';
import { UserController } from './user.controller';
import { userService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userRepository } from './user.repository';

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers:[UserController],
    providers:[userService,userRepository]
})
export class UserModule {}
