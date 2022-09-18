import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly loginService: UserService) {}

  @Get()
  async getHello(): Promise<any> {
    const res = await this.loginService.getLogin({
      name: '2',
      age: 2,
    });
    return res;
  }
}
