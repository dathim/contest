import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller("config")
export class ConfigController {
  constructor(private readonly appService: ConfigService) { }

  @Get()
  getHello(): JSON {
    return this.appService.getConfig();
  }



}
