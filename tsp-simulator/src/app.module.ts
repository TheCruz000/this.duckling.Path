import { Module } from '@nestjs/common';
import { TspModule } from './tsp/tsp.module';

@Module({
  imports: [TspModule],
})
export class AppModule {}
