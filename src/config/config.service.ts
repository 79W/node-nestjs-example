import { ConfigService } from '@nestjs/config';
import developmentConfig from './config.development';
import productionConfig from './config.production';

const configs = {
  development: developmentConfig,
  production: productionConfig,
};

const env = process.env.NODE_ENV || 'development';

export const configFile = () => configs[env];

export { ConfigService };
