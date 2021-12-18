module.exports = {
  type: "postgres",
  url: process.env.TYPEORM_DB_URL,
  migrationsTableName: "migrations",
  entities: ["dist/entities/*{.js, .ts}"],
  migrations: ["dist/migrations/*.js"],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: "dist/entities/*.js"
  }
};