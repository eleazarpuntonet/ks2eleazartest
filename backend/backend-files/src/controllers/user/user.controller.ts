import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/user.module';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto.name, createUserDto.email);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.userService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() createUserDto: CreateUserDto) {
    return this.userService.update(id, createUserDto.name, createUserDto.email);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
