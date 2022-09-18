import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configFile } from 'src/config/config.service';
import { Ceshi } from '../entities/ceshi.entity';

@Module({
  imports: [TypeOrmModule.forRoot({ ...configFile().mysql_config, entities: [Ceshi] })],
  providers: [],
  exports: [],
})
export class MysqlModule {}
