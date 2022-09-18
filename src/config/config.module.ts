import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configFile } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 作用于全局
      load: [configFile], // 加载自定义配置项
    }),
  ],
  providers: [],
  exports: [],
})
export class AllConfigModule {}
