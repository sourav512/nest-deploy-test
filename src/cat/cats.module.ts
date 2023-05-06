import { Module } from '@nestjs/common';
import { CatController } from './controller/cat.controller';
import { CatService } from './service/cat.service';

@Module({
    controllers:[CatController],
    providers:[CatService]
})
export class CatsModule {}
