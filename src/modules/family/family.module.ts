import { Module } from '@nestjs/common';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';
import { ModelsModule } from 'src/common/models/Models.Module';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService, ModelsModule],
})
export class FamilyModule {}
