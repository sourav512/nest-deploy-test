import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../schemas/cat.schema';
import { Time } from '../schemas/time-log.schema';
import { CreateCatDTO } from '../DTO/create-cat.dto';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>, @InjectModel(Time.name) private timeModel:Model<Time>) {}

  async create(createCatDto: CreateCatDTO): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    console.log(createCatDto);
    
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async logTime(): Promise<Time[]>{
    let date = new Date;
    const createdTime = new this.timeModel({date:date.toDateString(),time:date.toTimeString(),uat:Date.now()});
    createdTime.save();

    return this.timeModel.find().exec();
  }
}
