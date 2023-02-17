import { DataSource } from 'typeorm';
import * as path from 'path';
import ChatAppConfig from '../etc/config';

const ChatAppDataSource = new DataSource({
  type: 'mysql',
  host: ChatAppConfig.DB_HOST,
  port: ChatAppConfig.DB_PORT,
  username: ChatAppConfig.DB_USER,
  password: ChatAppConfig.DB_PASSWORD,
  database: ChatAppConfig.DB_NAME,
  entities: [path.resolve(__dirname + '/../**/*.entity{.js,.ts}')],
  migrations: [path.resolve(__dirname + '/../migrations', '*{.js,.ts}')],
  logger: 'advanced-console',
  logging: 'all',
});

console.log(ChatAppDataSource.options);

export default ChatAppDataSource;
