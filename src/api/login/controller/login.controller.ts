import { Controller, Get } from '@nestjs/common';
import { LoginService } from '../service/login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async getHello(): Promise<any> {
    const res = await this.loginService.getLogin({
      name: '2',
      age: 2,
    });
    return res;
  }
}
