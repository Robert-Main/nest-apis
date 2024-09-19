/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { Item } from "./interfaces/item.interface";
import { ItemsService } from "./items.service";

@Controller('items')
export class ItemsController {
	constructor(private readonly itemsService: ItemsService){}
  @Get()
  findAll():Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Price: ${createItemDto.price}, Description: ${createItemDto.description}, Qty: ${createItemDto.qty}`;
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id')id: string,@Body() updateItemDto: CreateItemDto): string {
    return `Name: ${updateItemDto.name}, Price: ${updateItemDto.price}, Description: ${updateItemDto.description}, Qty: ${updateItemDto.qty}`;
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
