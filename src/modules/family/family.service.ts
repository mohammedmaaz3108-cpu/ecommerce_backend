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
      this.models.prjModels.Family,
      {},
    );
    return data;
  }

  async createFamily(body: any) {
    console.log(body);
    const { Name, father_name, Relation, Age, Gender, Address } = body;
    console.log(Name, father_name, Relation, Age, Gender, Address);
    const [family, created] = await this.models.prjModels.Family.findOrCreate({
      where: { Name },
      defaults: { father_name, Relation, Age, Gender, Address },
    });
    console.log(family, created);
    const message = created
      ? 'Family table created'
      : ' Family table already exists';
    return message;
  }
}
