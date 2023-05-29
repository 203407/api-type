import { Pool } from "pg";

const config = {
  host: "18.233.8.164",
  port: 5432,
  user: "postgres",
  database: "api",
  password: "carrera10",
};

export const pool = new Pool(config);
