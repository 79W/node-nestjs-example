// Nest dependencies
import { BullModule } from '@nestjs/bull';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { configFile } from 'src/config/config.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

// Local files
@Module({
  imports: [LoginModule, UserModule],
  providers: [],
  controllers: [],
  exports: [LoginModule, UserModule],
})
export class ApiModule {}
