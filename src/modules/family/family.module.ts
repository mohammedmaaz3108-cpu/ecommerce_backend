import { Module } from '@nestjs/common';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';
import { ModelsService } from 'src/common/models/models.service';
import { Models } from 'src/common/models/models';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService, ModelsService],
})
export class FamilyModule {}
