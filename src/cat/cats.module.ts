import { Module } from '@nestjs/common';
import { CatController } from './controller/cat.controller';
import { CatService } from './service/cat.service';
import { Cat, CatSchema } from './schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    controllers:[CatController],
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    providers:[CatService]
})
export class CatsModule {}
