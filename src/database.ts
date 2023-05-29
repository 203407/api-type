import { Pool } from "pg";

const config = {
  host: "3.86.139.15",
  port: 5432,
  user: "postgres",
  database: "api",
  password: "carrera10",
};

export const pool = new Pool(config);
