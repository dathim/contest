import { Injectable } from '@nestjs/common';
import { defaultConfig } from "@utility/config/dist"

@Injectable()
export class ConfigService {
  getConfig(): JSON {
    return defaultConfig;
  }
}
