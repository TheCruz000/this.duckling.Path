import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: Partial<Item>): Item {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Item {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateItemDto: Partial<Item>): Item {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.itemsService.remove(id);
  }
}
