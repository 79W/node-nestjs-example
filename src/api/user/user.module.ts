import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { Ceshi, CeshiSchema } from 'src/database/schemas/ceshi.schema';
import { MongooseModule } from '@nestjs/mongoose';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Ceshi } from 'src/database/entities/ceshi.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ceshi.name, schema: CeshiSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
