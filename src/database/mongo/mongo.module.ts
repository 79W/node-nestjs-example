import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configFile } from 'src/config/config.service';

@Module({
  imports: [MongooseModule.forRoot(configFile().mongodb_config['uri'])],
  providers: [],
  exports: [],
})
export class MongoModule {}
