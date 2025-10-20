import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Get() async getPlatforms() {
    return this.platformsService.getPlatforms();
  }

  @Get('lists')
  async getLists() {
    return this.platformsService.getLists();
  }

  @Post()
  async createPlatform(@Body() body: any) {
    return this.platformsService.createPlatform(body);
  }
}
