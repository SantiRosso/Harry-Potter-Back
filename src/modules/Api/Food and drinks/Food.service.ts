import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/Food.entity';
import { Repository } from 'typeorm';
import { CreateFoodDto } from './dtos/CreateFood.dto';
import { UpdateFoodDto } from './dtos/UpdateFood.dto';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food) private foodRepository: Repository<Food>,
  ) {}

  async findAll() {
    return await this.foodRepository.find();
  }

  async findById(id: string) {
    const foodFound = await this.foodRepository.find({
      where: {
        id,
      },
    });

    if (!foodFound.length || foodFound instanceof HttpException) {
      return new HttpException('Food not found', HttpStatus.NOT_FOUND);
    }

    return foodFound;
  }

  async create(createFoodDto: CreateFoodDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }

    const newFood = this.foodRepository.create(createFoodDto);
    return await this.foodRepository.save(newFood);
  }

  async update(id: string, updateFoodFields: UpdateFoodDto) {
    const result = await this.foodRepository.update({ id }, updateFoodFields);

    if (result.affected === 0) {
      return new HttpException('Food not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.foodRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Food not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
