import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { User } from '../types/user';
import { LoginDTO } from '../auth/login.dto';
import { RegisterDTO } from './register.dto';
import { Payload } from '../types/payload';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
        return this.userModel.findOne(userFilterQuery);
    }
    
    async findByLogin(UserDTO: LoginDTO) {
        const { email, password } = UserDTO;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
        }
        if (await bcrypt.compare(password, user.password)) {
            return this.sanitizeUser(user)
        } else {
            throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
        }
    }

    sanitizeUser(user: User) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
    }
    
    // the new methods
    async findByPayload(payload: Payload) {
        const { email } = payload;
        return await this.userModel.findOne({ email });
    }

    async create(RegisterDTO: RegisterDTO) {
        const { email } = RegisterDTO;
        const user = await this.findOne({ email });
        if (user) {
            throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }
        const hashed = await bcrypt.hash(RegisterDTO['password'], 10);
        RegisterDTO['password'] = hashed;
        const createdUser = new this.userModel(RegisterDTO);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }
    
}