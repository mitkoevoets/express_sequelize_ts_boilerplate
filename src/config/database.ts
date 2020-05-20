export default {
  postgres: {
    database: String(process.env.DB_NAME),
    port: Number(process.env.DB_PORT),
    host: String(process.env.DB_HOST),
    user: String(process.env.DB_USER),
    password: String(process.env.POSTGRES_PASSWORD),
  },
};
