import { CreateUserDto } from './dto/user-create.dto';
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import ResponseObject from 'src/etc/response-object';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('create')
  async createUser(@Body() info: CreateUserDto) {
    const [user, err] = await this.UsersService.createUser(info);
    if (!user)
      return new ResponseObject(
        HttpStatus.BAD_REQUEST,
        'Create User failed',
        null,
        err,
      );
    return new ResponseObject(
      HttpStatus.CREATED,
      'Create User successfully',
      user,
      null,
    );
  }

  @Get('get-all')
  async getAllUsers() {
    const [users, err] = await this.UsersService.getAllUsers();
    if (users.length == 0)
      return new ResponseObject(
        HttpStatus.BAD_REQUEST,
        'Get Users failed',
        null,
        err,
      );
    return new ResponseObject(
      HttpStatus.OK,
      'Get Users successfully',
      users,
      null,
    );
  }
}
