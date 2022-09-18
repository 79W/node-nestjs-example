import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { MysqlModule } from './mysql/mysql.module';

@Module({
  imports: [MysqlModule, MongoModule],
  providers: [],
  exports: [],
})
export class DataBaseModule {}
