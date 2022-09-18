import { Module } from '@nestjs/common';
import { LoginService } from './service/login.service';
import { LoginController } from './controller/login.controller';
import { Ceshi, CeshiSchema } from 'src/database/schemas/ceshi.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BullModule } from '@nestjs/bull';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Ceshi } from 'src/database/entities/ceshi.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ceshi.name, schema: CeshiSchema }])],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
