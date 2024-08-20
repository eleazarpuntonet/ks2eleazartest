import { Module } from '@nestjs/common';

@Module({})
export class UserModule {}

export class CreateUserDto {
    name: string;
    email: string;
}
  