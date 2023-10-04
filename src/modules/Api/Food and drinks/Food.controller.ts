import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { FoodService } from './Food.service';
import { UpdateFoodDto } from './dtos/UpdateFood.dto';
import { CreateFoodDto } from './dtos/CreateFood.dto';

@Controller()
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  async findAll() {
    return await this.foodService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.foodService.findById(id);
  }

  @Post()
  async create(@Body() createDto: CreateFoodDto) {
    return await this.foodService.create(createDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateFoodDto) {
    return await this.foodService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.foodService.delete(id);
  }
}
