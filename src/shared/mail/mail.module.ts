import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.163.com',
        port: 25,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: 'noticecode@163.com ',
          pass: 'DQXHGOZAZLZCIUCZ',
        },
      },
      defaults: {
        from: '"MassCode" <noticecode@163.com>',
      },
      preview: false,
      template: {
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
