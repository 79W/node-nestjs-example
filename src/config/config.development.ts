export default {
  // 端口
  port: 3000,
  // Mysql 数据库配置
  mysql_config: {
    type: 'mysql',
    host: '',
    port: 3306,
    username: '',
    password: '',
    database: '',
    timezone: 'Z',
    charset: 'utf8mb4',
    entities: [],
    synchronize: false,
    logging: true,
    logger: 'advanced-console',
  },
  // Mongodb 数据库配置
  mongodb_config: {
    type: '',
    host: '',
    port: 27017,
    username: '',
    password: '',
    database: '',
    uri: ':',
  },
  redis_cache_config: {
    type: '',
    host: '',
    port: 6379,
    auth_pass: '',
    isGlobal: true,
    db: 3,
  },
  redis_queue_config: {
    type: '',
    host: '',
    port: 6379,
    password: '',
    db: 4,
  },
};
