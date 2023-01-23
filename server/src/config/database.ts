export default function configureDatabase() {
  return {
    database: {
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT ?? 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      synchronize: process.env.DATABASE_SYNCHRONIZE,
      logging: process.env.DATABASE_LOGGING,
    },
  };
}
