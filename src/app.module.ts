import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cat/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [CatsModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DATABASE_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
