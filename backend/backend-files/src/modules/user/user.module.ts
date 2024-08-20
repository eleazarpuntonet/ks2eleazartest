import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../../services/user/user.service';
import { UserController } from '../../controllers/user/user.controller';
import { User } from 'src/entities/User';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registra la entidad User con TypeORM
  providers: [UserService], // Declara el servicio UserService
  controllers: [UserController], // Declara el controlador UserController
})
export class UserModule {}

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
}
