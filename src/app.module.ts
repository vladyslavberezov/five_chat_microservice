import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database-module/database-module.module';
import { MongoController } from './mongo/mongo.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, MongoController],
  providers: [AppService],
})
export class AppModule {}
