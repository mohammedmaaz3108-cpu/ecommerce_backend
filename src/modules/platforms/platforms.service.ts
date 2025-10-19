import { Inject, Injectable } from '@nestjs/common';
import { Default } from 'sequelize-typescript';
import { ModelsService } from 'src/common/models/models.service';

@Injectable()
export class PlatformsService {
  constructor(
    @Inject('MODELS') private readonly models,
    private readonly modelsService: ModelsService,
  ) {}

  async getPlatforms() {
    const data = await this.modelsService.getAllDataService(
      this.models.prjModels.Platforms,
      {
        // attributes: ['id', 'name', 'short_name'],
        // where: { is_active: false },
      },
    );
    return data;
  }

  async createPlatform(body: any) {
    console.log(body);
    const { name, short_name, is_active } = body;
    console.log(name, short_name, is_active);
    const [platforms, created] =
      await this.models.prjModels.Platforms.findOrCreate({
        where: { name },
        defaults: { short_name, is_active },
      });
    console.log(platforms, created);
    const message = created
      ? 'Platform added successfully'
      : 'Platform already exists';
    return message;
    return 'test';
    // const data = await this.modelsService.createDataService
  }

  async getLists() {
    const samples = await this.modelsService.getAllDataService(
      this.models.prjModels.List,
      {},
    );
    return samples;
  }

  async getFamily() {
    const family = await this.modelsService.getAllDataService(
      this.models.prjModels.Family,
      {},
    );
    return family;
  }
}
