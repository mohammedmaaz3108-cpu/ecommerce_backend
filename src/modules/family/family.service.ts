import { Inject, Injectable } from '@nestjs/common';
import { ModelsService } from 'src/common/models/models.service';

@Injectable()
export class FamilyService {
  constructor(
    @Inject('MODELS') private readonly models,
    private readonly modelsService: ModelsService,
  ) {}

  async getFamily() {
    const data = await this.modelsService.getAllDataService(
      this.models.prjModels.family,
      {
        // where:
      },
    );
  }
}
