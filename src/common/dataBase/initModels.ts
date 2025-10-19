import { connectDatabase } from 'src/utils/databaseUtil';
import { Sample } from './models/samples.models';
import { List } from './models/list.models';
import { Platform } from './models/platform.model';
import { Family } from './models/family.models';

export default async function initModels(config: {
  dialect: string;
  host: string;
  port: string | number;
  database: string;
  username: string;
  password: string;
}) {
  const sequelize = connectDatabase({
    dialect: config.dialect,
    host: config.host,
    port: Number(config.port),
    database: config.database,
    username: config.username,
    password: config.password,
  });
  sequelize.addModels([Sample, List, Platform, Family]);
  const influencer: any = {};
  influencer.sequelize = sequelize;
  influencer.Sample = Sample;
  influencer.List = List;
  influencer.Platforms = Platform;
  influencer.Family = Family;
  return influencer;
}
