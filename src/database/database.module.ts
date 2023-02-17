import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ChatAppDatasource from './datasource';

@Module({
  imports: [TypeOrmModule.forRoot(ChatAppDatasource.options)],
  providers: [DatabaseService],
})
export class DatabaseModule {}
