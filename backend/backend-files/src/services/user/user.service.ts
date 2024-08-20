import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(name: string, email: string): Promise<User> {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  async findAll(page: number, limit: number): Promise<{ data: User[]; total: number; page: number; limit: number }> {
    const [result, total] = await this.userRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      data: result,
      total,
      page,
      limit,
    };
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, name: string, email: string): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    user.name = name;
    user.email = email;
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
