import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Model } from 'mongoose';
import { RedisCacheService } from 'src/cache/redis-cache.service';
import { TasksService } from 'src/common/tasks/tasks.service';
// import { Ceshi } from 'src/database/entities/ceshi.entity';
import { Ceshi, CeshiDocument } from 'src/database/schemas/ceshi.schema';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectQueue('queues') private readonly allQueue: Queue) {}
  async addArticle(info) {
    // const ceshi = await new Ceshi();
    // Object.assign(ceshi, info);
    // return await this.photoRepository.save(ceshi);
  }
  async getLogin(info: any): Promise<any> {
    // const createdCat = await this.ceshiModel.create({
    //   name: '2',
    // });
    // return await this.ceshiModel.find().exec();
    // const redisClient = this.redisCacheService.store.getClient();
    // this.redisCacheService.cacheSet('ceshi:3', 'ceshi001', 10);
    // this.tasksService.ceshi();
    await this.allQueue.add('ceshicode', {
      file: '我是user',
    });
    return 'createdCat';
  }
}
