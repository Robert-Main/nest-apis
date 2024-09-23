import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-items.dto';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item | null> {
    return await this.itemModel.findById(id).exec();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async delete(id: string): Promise<Item | null> {
    return await this.itemModel.findByIdAndDelete(id).exec();
  }

  async update(
    id: string,
    itemData: Partial<CreateItemDto>,
  ): Promise<Item | null> {
    return await this.itemModel
      .findByIdAndUpdate(id, itemData, { new: true })
      .exec();
  }
}
