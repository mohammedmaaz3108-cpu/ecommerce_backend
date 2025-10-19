import { Body, Controller, Get, Post } from '@nestjs/common';
import { FamilyService } from './family.service';

@Controller('family')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Get() async getFamily() {
    return this.familyService.getFamily();
  }

  @Post()
  async createFamily(@Body() body: any) {
    return this.familyService.createFamily(body);
    // console.log(body);
    // return 'test';
  }
}
