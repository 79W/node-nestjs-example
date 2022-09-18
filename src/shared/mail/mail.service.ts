import { Injectable } from '@nestjs/common';
import { MailerService, ISendMailOptions } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public send(options: ISendMailOptions): Promise<MailerService> {
    return this.mailerService.sendMail({
      ...options,
    });
  }
}
