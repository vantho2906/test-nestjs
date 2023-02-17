import { config } from 'dotenv';
config();

export default class ChatAppConfig {
  static readonly PORT = parseInt(process.env.PORT || '5002');
  static readonly DB_HOST = process.env.DB_HOST || 'localhost';
  static readonly DB_PORT = parseInt(process.env.DB_PORT || '3306');
  static readonly DB_USER = process.env.DB_USER || 'root';
  static readonly DB_PASSWORD = process.env.DB_PASSWORD || 'Tho2003@';
  static readonly DB_NAME = process.env.DB_NAME || 'chatapp';
}
