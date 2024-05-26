import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idCounter = 1;

  create(item: Partial<Item>): Item {
    const newItem = { id: this.idCounter++, ...item } as Item;
    this.items.push(newItem);
    return newItem;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    return this.items.find(item => item.id === id);
  }

  update(id: number, updatedItem: Partial<Item>): Item {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      this.items[itemIndex] = { ...this.items[itemIndex], ...updatedItem };
      return this.items[itemIndex];
    }
    return null;
  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
