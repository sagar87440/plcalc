import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepo.create(createUserDto);
    return this.userRepo.save(newUser);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id } });;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepo.update(id, updateUserDto);
    return this.userRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.userRepo.delete(id);
  }
}
