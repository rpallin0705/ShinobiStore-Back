import { Module } from '@nestjs/common';
import { MygamesService } from './mygames.service';
import { MygamesController } from './mygames.controller';

@Module({
  controllers: [MygamesController],
  providers: [MygamesService]
})
export class MygamesModule {}
