import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { ItemModule } from './item/item.module';
import { ItemController } from './item/item.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ItemModule
  ],
  controllers: [AppController, ItemController],
  providers: [AppService],
})
export class AppModule { }