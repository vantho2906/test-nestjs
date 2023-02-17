import { CreateUserDto } from './dto/user-create.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(info: CreateUserDto) {
    const user = await this.userRepository.save({
      fname: info.fname,
      lname: info.lname,
      email: info.email,
    });
    return [user, null];
  }

  async getAllUsers() {
    const users = await this.userRepository.find();
    return [users, null];
  }
}
