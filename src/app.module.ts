import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ModelsModule } from './common/models/Models.Module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
